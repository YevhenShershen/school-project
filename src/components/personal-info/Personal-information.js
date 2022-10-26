import ListGroup from "react-bootstrap/ListGroup";
import Line from "../Line";
import { Context } from "../context";
import { useContext } from "react";
const PersonalInformation = (props) => {
  const { personInfo } = useContext(Context);
  console.log(personInfo);
  return (
    <div className="personal-info table-border px-2">
      <div className="panel">
        <h2>Personal information</h2>
      </div>
      <Line />
      <ListGroup variant="flush">
        <ListGroup.Item>Name: {personInfo.name}</ListGroup.Item>
        <ListGroup.Item>Surname: {personInfo.surname}</ListGroup.Item>
        <ListGroup.Item>Personal ID: {personInfo.personId}</ListGroup.Item>
      </ListGroup>
    </div>
  );
};
export default PersonalInformation;
