import React, { useEffect, useState } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { CustomInputs } from "../../components/custom-inputs/CustomInputs";
import { toast } from "react-toastify";
import { loginUser } from "../../helper/axiosHelper";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "./userAction";

const UserLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.userInfo);
  console.log(user);

  const [form, setForm] = useState({});

  const inputs = [
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
  ];

  useEffect(() => {
    console.log(user?._id);
    console.log("i am in use effect");
    user?._id && navigate("/dashboard");
  }, [user?._id, navigate]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    // get email & password and check if both are present
    const { email, password } = form;
    if (!email || !password) {
      return toast.error(
        "Oops! It seems like something is missing. Please make sure to enter both your email and password before attempting to log in."
      );
    }

    // login user
    const { status, message, jwts } = await loginUser({ email, password });

    console.log("helooooooo");
    console.log(status, message, jwts);

    // if login successfull
    if (status === "success") {
      const { accessJWT, refreshJWT } = jwts;

      // store jwts
      sessionStorage.setItem("accessJWT", accessJWT);
      localStorage.setItem("refreshJWT", refreshJWT);

      //fetch user info and redirect to dashboard
      dispatch(getUserAction());
      return;
    }

    // if login failed, display error message
    toast[status](message);
  };

  return (
    <MainLayout>
      <Row className="d-flex justify-content-center align-items-center custom-main">
        <Col md={true}>
          <p className="rounded shadow-lg p-3 text-center text-dark custom-signup-heading">
            Welcome to our Library Management System!
            <br />
            We're delighted to have you here. Please enter your credentials to
            access & manage your account, explore the vast collection of books,
            and discover new literary adventures.
          </p>
        </Col>
        <Col md={true}>
          <Form
            className="rounded shadow-lg p-3 text-dark custom-signup-form"
            onSubmit={handleOnSubmit}
          >
            <h2>Please login!</h2>
            <hr />

            {inputs.map((item, i) => (
              <CustomInputs key={i} {...item} onChange={handleOnChange} />
            ))}

            <div className="d-grid">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>

          <div className="rounded shadow-lg p-2 text-end text-dark custom-login-btn">
            Not a member? Please signup{" "}
            <Link to="/signup">
              <Button variant="warning" type="submit">
                Signup
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </MainLayout>
  );
};

export default UserLogin;
