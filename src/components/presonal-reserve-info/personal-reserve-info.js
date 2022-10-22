import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import "./personal-reserve-info.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PersonalReserveInfo = ({
  workspaceToUpdate,
  updateWorkplaces,
  loginPersonInfo,
}) => {
  const clickHandler = () => {
    if (!Object.keys(workspaceToUpdate)) {
      return;
    }
    updateWorkplaces((prev) =>
      prev.map((workspace) =>
        workspace.element === workspaceToUpdate.element
          ? {
              ...workspace,
              isReserved: true,
            }
          : workspace
      )
    );
  };
  return (
    <div className="personal-reservation">
      <ListGroup as="ul" className="mt-4 mb-4">
        <ListGroup.Item as="li" active>
          Personal reservation
        </ListGroup.Item>
        <ListGroup.Item as="li">
          Person name: {loginPersonInfo[0].name}
        </ListGroup.Item>
        <ListGroup.Item as="li">
          Person ID: {loginPersonInfo[0].personId}
        </ListGroup.Item>
        <ListGroup.Item as="li">
          Person workplaces: {loginPersonInfo[0].workplace}
        </ListGroup.Item>
      </ListGroup>
      <Row>
        <Col>
          <Button
            onClick={clickHandler}
            variant="success"
            className="personal-reservation__button text-uppercase"
          >
            Accept
          </Button>
        </Col>
        <Col>
          <Button
            variant="danger"
            className="personal-reservation__button text-uppercase"
          >
            Сancel
          </Button>
        </Col>
      </Row>
    </div>
  );
};
export default PersonalReserveInfo;
