import Line from "../Line";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const AdminPanel = (props) => {
  return (
    <div className="table-border">
      <h1>Admin Panel</h1>
      <Line />
      <Row>
        <Col>
          {" "}
          <Button
            variant="success"
            type="submit"
            className="btn-header text-uppercase"
            onClick={() => {
              props.setPersonLogin(!props.personLogin);
            }}
          >
            Reservation panel
          </Button>
        </Col>

        <Col>
          {" "}
          <Button
            variant="success"
            type="submit"
            className="btn-header text-uppercase"
            onClick={() => {
              props.setstaffInfoPanel(!props.staffInfoPanel);
            }}
          >
            Staff Information
          </Button>
        </Col>
        <Col>
          {" "}
          <Button
            variant="success"
            type="submit"
            className="btn-header text-uppercase"
            onClick={() => {
              props.setReserveInfoPanel(!props.reserveInfoPanel);
            }}
          >
            Reserve Information
          </Button>
        </Col>
      </Row>
    </div>
  );
};
export default AdminPanel;
