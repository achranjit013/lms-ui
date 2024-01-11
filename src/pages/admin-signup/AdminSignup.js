import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { CustomInputs } from "../../components/custom-inputs/CustomInputs";
import { postNewAdmin } from "../../helper/axiosHelper";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const initialFormState = {
  fname: "",
  lname: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const AdminSignup = () => {
  const { user } = useSelector((state) => state.userInfo);
  const [form, setForm] = useState(initialFormState);

  const inputs = [
    {
      label: "First name",
      name: "fname",
      placeholder: "Enter first name",
      type: "text",
      value: form.fname,
      required: true,
    },
    {
      label: "Last name",
      name: "lname",
      placeholder: "Enter last name",
      type: "text",
      value: form.lname,
      required: true,
    },
    {
      label: "Phone No",
      name: "phone",
      placeholder: "Enter phone number",
      type: "number",
      value: form.phone,
    },
    {
      label: "Email",
      name: "email",
      placeholder: "Enter email",
      type: "email",
      value: form.email,
      required: true,
    },
    {
      label: "Password",
      name: "password",
      placeholder: "Enter password",
      type: "password",
      value: form.password,
      required: true,
    },
    {
      label: "Confirm password",
      name: "confirmPassword",
      placeholder: "Re-enter password",
      type: "password",
      value: form.confirmPassword,
      required: true,
    },
  ];

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;

    // check password
    // if password do not match, alert user.
    if (confirmPassword !== rest.password) {
      return alert(
        "Oops! Passwords do not match. Please double-check and try again. Your security is our priority!"
      );
    }

    // if password match, create user (admin) in db
    const pending = postNewAdmin(rest);

    toast.promise(pending, {
      pending: "Please wait...",
    });

    const { status, message } = await pending;

    toast[status](message, {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    if (status === "success") {
      setForm(initialFormState);
    }
  };

  // if the user is not admin
  // if (user?.role !== "admin") {
  //   return <h2>Unauthoprized</h2>;
  // }

  // if the user is admin
  return (
    <>
      <div className="bg-image"></div>

      <Container fluid className="main-container">
        <Row className="d-flex justify-content-center custom-row">
          <Col md={true}>
            <p className="rounded shadow-lg p-3 text-center text-dark custom-signup-heading">
              Welcome to our Library Management System!
              <br />
              Empowering you to seamlessly organize, access, and explore a world
              of knowledge. Happy reading and managing!
            </p>
          </Col>
          <Col md={true}>
            <Form
              className="rounded shadow-lg p-3 text-dark custom-signup-form"
              onSubmit={handleOnSubmit}
            >
              <h2>New here? Please create your new admin account!</h2>
              <hr />

              {inputs.map((item, i) => (
                <CustomInputs key={i} {...item} onChange={handleOnChange} />
              ))}

              <div className="d-grid">
                <Button variant="primary" type="submit">
                  Create new admin
                </Button>
              </div>
            </Form>

            <div className="rounded shadow-lg p-2 text-end text-dark custom-login-btn">
              Already a member? Please login{" "}
              <Link to="/login">
                <Button variant="warning" type="submit">
                  Login
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminSignup;
