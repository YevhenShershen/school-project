import Line from "../Line";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const AdminPanel = () => {
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
          >
            Reserve Information
          </Button>
        </Col>
      </Row>
    </div>
  );
};
export default AdminPanel;
