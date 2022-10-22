import Table from "react-bootstrap/Table";
import "./reserve-information.scss";
import CloseButton from "../btns/Close-button";
const ReserveInformation = (props) => {
  const columns = props.personalsInformation.map((el, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{el.name}</td>
      <td>{el.surname}</td>
      <td>{el.personId}</td>
      <td>{el.workplace}</td>
    </tr>
  ));
  return (
    <div className="reserve-information table-border">
      <div className="panel">
        <h1>Reserve Information</h1>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Person ID</th>
            <th>Workplace</th>
          </tr>
        </thead>
        <tbody>{columns}</tbody>
      </Table>
    </div>
  );
};
export default ReserveInformation;
