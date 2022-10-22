import Line from "../Line";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import "./registration.scss";
const Registration = (props) => {
  const [registrationInfo, setRegistrationInfo] = useState("");
  const [styleRegistration, setStyleRegistration] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    props.setPersonInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.personInfo.name !== "" && props.personInfo.surname !== "") {
      props.setPersonRegister(!props.personRegister);
      props.addPerson(props.personInfo);
      setRegistrationInfo("Thank you for registretion");
      setStyleRegistration(true);
    } else {
      setRegistrationInfo("All fields must be filled");
      setStyleRegistration(false);
    }
    e.target.reset();
  };
  return (
    <div className="h100 registration table-border px-2">
      <h1>Registration</h1>
      <Line />
      <Form className="h100" onSubmit={handleSubmit}>
        <Form.Group className="mb-1" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicPassword">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Surname"
            name="surname"
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="btn-header text-uppercase"
          disabled={props.personRegister}
        >
          Registration
        </Button>
        <p style={{ color: styleRegistration ? "green" : "red" }}>
          {registrationInfo}
        </p>
      </Form>
    </div>
  );
};
export default Registration;
