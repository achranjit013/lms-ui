import React from "react";
import { Form } from "react-bootstrap";

export const CustomInputs = ({ label, passRef, ...rest }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control {...rest} ref={passRef} />
    </Form.Group>
  );
};
