import ListGroup from "react-bootstrap/ListGroup";
import CloseButton from "../btns/Close-button";
import Line from "../Line";
const PersonalInformation = (props) => {
  return (
    <div className="personal-info table-border px-2">
      <div className="panel">
        <h2>Personal information</h2>
      </div>
      <Line />
      <ListGroup variant="flush">
        <ListGroup.Item>Name: {props.personInfo.name}</ListGroup.Item>
        <ListGroup.Item>Surname: {props.personInfo.surname}</ListGroup.Item>
        <ListGroup.Item>
          Personal ID: {props.personInfo.personId}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};
export default PersonalInformation;
