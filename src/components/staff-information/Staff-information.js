import Table from "react-bootstrap/Table";
const StaffInformation = (props) => {
  const columns = props.personalsInformation.map((el, index) => (
    <tr  key={index}>
      <td>{index + 1}</td>
      <td>{el.name}</td>
      <td>{el.surname}</td>
      <td>{el.personId}</td>
    </tr>
  ));
  return (
    <div className="table-border ">
      <div className="panel">
        <h1>Staff Information</h1>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Person ID</th>
          </tr>
        </thead>
        <tbody>{columns}</tbody>
      </Table>
    </div>
  );
};
export default StaffInformation;
