import Line from "../Line";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import "./login.scss";
const Login = (props) => {
  const [loginPersonInfo, setLoginPersonInfo] = useState({
    name: "",
    personId: "",
  });
  const [registrationInfo, setRegistrationInfo] = useState("");
  const [styleRegistration, setStyleRegistration] = useState(true);
  const [stylelogin, setStylelogin] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    const personInfo = props.personalsInformation.filter(
      (el) => el.personId == loginPersonInfo.personId
    );
    console.log(personInfo[0]);
    if (loginPersonInfo.name == "Admin" && personInfo[0]?.name == "Admin") {
      e.target.reset();
      setRegistrationInfo("Hello Admin!");
      props.setAdminPanel(!props.adminPanel);
      setStyleRegistration(true);
      setStylelogin(true);
    } else if (
      personInfo != [] &&
      loginPersonInfo.name == personInfo[0]?.name &&
      loginPersonInfo.personId == personInfo[0].personId
    ) {
      e.target.reset();
      props.setPersonLogin(!props.personLogin);
      setRegistrationInfo("Thank you for logging");
      setStylelogin(true);
      setStyleRegistration(true);
    } else {
      setRegistrationInfo("All fields must be filled or incorrect login or id");
      setStylelogin(false);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginPersonInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div className="h100 registration table-border px-2 ">
      <h1>Login</h1>
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
          <Form.Label>Person ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Person ID"
            name="personId"
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="btn-header text-uppercase"
          disabled={!styleRegistration}
        >
          Login
        </Button>
        <p style={{ color: stylelogin ? "green" : "red" }}>
          {registrationInfo}
        </p>
      </Form>
    </div>
  );
};
export default Login;
