import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import "./personal-reserve-info.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PersonalReserveInfo = ({
  workspaceToUpdate,
  updateWorkplaces,
  loginPersonInfo,
  setLoginPersonInfo,
  setPersonalInformation,
  personalsInformation,
  workplaceToUpdate,
}) => {
  const clickHandler = () => {
    if (!Object.keys(workspaceToUpdate)) {
      return;
    }
    console.log(personalsInformation);
    setPersonalInformation(
      personalsInformation.map((person) =>
        person.personId === loginPersonInfo.personId
          ? { ...person, workplace: workplaceToUpdate.element }
          : person
      )
    );
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

    setLoginPersonInfo({
      ...loginPersonInfo,
      workplace: workplaceToUpdate.element,
    });
  };
  const cancelReservation = () => {
    setPersonalInformation(
      personalsInformation.map((person) =>
        person.personId === loginPersonInfo.personId
          ? { ...person, workplace: null }
          : person
      )
    );
    setLoginPersonInfo({ ...loginPersonInfo, workplace: null });
  };
  return (
    <div className="personal-reservation">
      <ListGroup as="ul" className="mt-4 mb-4">
        <ListGroup.Item as="li" active>
          Personal reservation
        </ListGroup.Item>
        <ListGroup.Item as="li">
          Person name: {loginPersonInfo.name}
        </ListGroup.Item>
        <ListGroup.Item as="li">
          Person ID: {loginPersonInfo.personId}
        </ListGroup.Item>
        <ListGroup.Item as="li">
          Person workplaces: {loginPersonInfo.workplace}
        </ListGroup.Item>
      </ListGroup>
      <Row>
        <Col>
          <Button
            onClick={clickHandler}
            variant="success"
            className="personal-reservation__button text-uppercase"
            disabled={loginPersonInfo.workplace ? true : false}
          >
            Accept
          </Button>
        </Col>
        <Col>
          <Button
            disabled={loginPersonInfo.workplace ? false : true}
            variant="danger"
            className="personal-reservation__button text-uppercase"
            onClick={() => cancelReservation()}
          >
            Сancel
          </Button>
        </Col>
      </Row>
    </div>
  );
};
export default PersonalReserveInfo;
