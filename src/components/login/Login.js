import Line from "../Line";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login.scss";
const Login = () => {
  return (
    <div className="h100 registration table-border px-2 ">
      <h1>Login</h1>
      <Line />
      <Form className="h100">
        <Form.Group className="mb-1" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicPassword">
          <Form.Label>Person ID</Form.Label>
          <Form.Control type="text" placeholder="Person ID" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="btn-header text-uppercase"
        >
          Login
        </Button>
      </Form>
    </div>
  );
};
export default Login;
