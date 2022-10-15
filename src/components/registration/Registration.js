import Line from "../Line";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./registration.scss";
const Registration = () => {
  return (
    <div className="h100 registration table-border px-2">
      <h1>Registration</h1>
      <Line />
      <Form className="h100">
        <Form.Group className="mb-1" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicPassword">
          <Form.Label>Surname</Form.Label>
          <Form.Control type="text" placeholder="Surname" />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept registration" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="btn-header text-uppercase"
        >
          Registration
        </Button>
      </Form>
    </div>
  );
};
export default Registration;
