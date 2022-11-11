import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Egzamin = () => {
  const data = [
    "Programowanie w #C",
    "Angular dla początkujących",
    "Kurs Django",
  ];
  const [user, setUser] = useState("");
  const [num, setNum] = useState("");
  const dataList = data.map((el, id) => (
    <li style={{ listStyleType: "none" }} key={id}>
      {id + 1}.{el}
    </li>
  ));
  const callInformation = () => {
    console.log(user);
    if (data[num - 1]) {
      console.log(data[num - 1]);
    } else {
      console.log(`Proszę wpisać numer kursu od 1 do ${data.length}`);
    }
  };
  return (
    <div>
      <h2 style={{ textAlign: "start" }}>Liczba kursów: {data.length}</h2>
      <ul style={{ textAlign: "start" }}>{dataList}</ul>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Imię i nazwisko:</Form.Label>
          <Form.Control
            type="text"

            placeholder="Imię i nazwisko"
            onChange={(e) => setUser(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Numer kursu:</Form.Label>
          <Form.Control
            type="text"
            name="num"
            placeholder="Numer kursu"
            onChange={(e) => setNum(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={callInformation}>
          Zapisz do kursu
        </Button>
      </Form>
    </div>
  );
};
export default Egzamin;
