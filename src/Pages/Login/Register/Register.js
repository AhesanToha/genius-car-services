import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const Register = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(email, password);

    console.log(name, email, password);
  };

  if (user) {
    navigate("/home");
  }
  return (
    <div className="container w-50 mx-auto">
      <PageTitle title={'Register'}></PageTitle>
      <h2 className="text-center">Please Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Enter Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <h6 className="text-center">
        Already have an account?{" "}
        <Link
          to={"/login"}
          style={{ cursor: "pointer" }}
          className="text-danger text-decoration-none"
        >
          Please Login
        </Link>
      </h6>
    </div>
  );
};

export default Register;
