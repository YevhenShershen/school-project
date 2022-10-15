import "./App.css";
import Registration from "./components/registration/Registration";
import Login from "./components/login/Login";
import AdminPanel from "./components/admin-panel/Admin-panel";
import StaffInformation from "./components/staff-information/Staff-information";
import ReserveInformation from "./components/reserve-information/Reserve-information";
import Reservation from "./components/reservation/Reservation";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import '../src/styles/main.scss'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function App() {
  const [workplaces] = useState(20);
  return (
    <div className="App">
      <h1>Project</h1>
      <Container>
        <Row>
          <Col>
            <Registration />
          </Col>
          <Col>
            <Login />
          </Col>
        </Row>
        {/* тут будет появлятся админ панель после лог как админ */}
        <AdminPanel />
        <Reservation workplaces={workplaces} />
        <StaffInformation />
        <ReserveInformation />
      </Container>
    </div>
  );
}

export default App;
