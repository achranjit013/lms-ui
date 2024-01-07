import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { CustomInputs } from "../../components/custom-inputs/CustomInputs";

const AdminSignup = () => {
  const { user } = useSelector((state) => state.userInfo);
  console.log(user);

  const [form, setForm] = useState({});

  const inputs = [
    {
      label: "First name",
      name: "fname",
      placeholder: "Enter first name",
      type: "text",
      required: true,
    },
    {
      label: "Last name",
      name: "lname",
      placeholder: "Enter last name",
      type: "text",
      required: true,
    },
    {
      label: "Phone No",
      name: "phone",
      placeholder: "Enter phone number",
      type: "number",
    },
    {
      label: "Email",
      name: "email",
      placeholder: "Enter email",
      type: "email",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      placeholder: "Enter password",
      type: "password",
      required: true,
    },
    {
      label: "Confirm password",
      name: "confirmPassword",
      placeholder: "Re-enter password",
      type: "password",
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

  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log("first");
    console.log(form);

    const { confirmPassword, ...rest } = form;
    console.log(confirmPassword);
    console.log(rest.password);

    // check password
    // if password do not match, alert user.
    if (confirmPassword !== rest.password) {
      return alert(
        "Oops! Passwords do not match. Please double-check and try again. Your security is our priority!"
      );
    }

    // if password match
    // create user (admin) in db
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
        <Row className="d-flex justify-content-center align-items-center gap-3 custom-row">
          <Col md={true}>
            <p className="rounded shadow-lg p-3 text-center">
              Welcome to our Library Management System!
              <br />
              Empowering you to seamlessly organize, access, and explore a world
              of knowledge. Happy reading and managing!
            </p>
          </Col>
          <Col md={true}>
            <Form className="rounded shadow-lg p-3" onSubmit={handleOnSubmit}>
              <h2>Create new admin!</h2>
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
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminSignup;
