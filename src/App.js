import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Registration from "./components/registration/Registration";
import PersonalInformation from "./components/personal-info/Personal-information";
import Login from "./components/login/Login";
import AdminPanel from "./components/admin-panel/Admin-panel";
import StaffInformation from "./components/staff-information/Staff-information";
import ReserveInformation from "./components/reserve-information/Reserve-information";
import Reservation from "./components/reservation/Reservation";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../src/styles/main.scss";
function App() {
  const [workplaces] = useState(20);
  const [personRegister, setPersonRegister] = useState(false);
  const [personLogin, setPersonLogin] = useState(false);
  const [staffInfoPanel, setstaffInfoPanel] = useState(false);
  const [reserveInfoPanel, setReserveInfoPanel] = useState(false);
  const [adminPanel, setAdminPanel] = useState(false);
  const [personInfo, setPersonInfo] = useState({
    name: "",
    surname: "",
    personId: uuidv4(),
    workplace: null,
  });
  const [personalsInformation] = useState([
    { name: "Admin", surname: "Admin", personId: 123, workplace: 5 },
    { name: "Admin2", surname: "Admin", personId: 1234, workplace: 11 },
  ]);
  const addPerson = (el) => {
    personalsInformation.push(el);
  };
  return (
    <div className="App">
      <Container>
        <Row className="mb-2">
          <Col>
            <Registration
              addPerson={addPerson}
              personRegister={personRegister}
              personInfo={personInfo}
              setPersonInfo={setPersonInfo}
              setPersonRegister={(personRegister) =>
                setPersonRegister(personRegister)
              }
            />
          </Col>
          <Col>
            <Login
              personalsInformation={personalsInformation}
              personLogin={personLogin}
              setPersonLogin={(personLogin) => setPersonLogin(personLogin)}
              setAdminPanel={(adminPanel) => setAdminPanel(adminPanel)}
            />
          </Col>
        </Row>
        {personRegister ? (
          <PersonalInformation
            personInfo={personInfo}
            personRegister={personRegister}
          />
        ) : null}
        {adminPanel ? (
          <AdminPanel
            personLogin={personLogin}
            staffInfoPanel={staffInfoPanel}
            reserveInfoPanel={reserveInfoPanel}
            setPersonLogin={(personLogin) => setPersonLogin(personLogin)}
            setstaffInfoPanel={(staffInfoPanel) =>
              setstaffInfoPanel(staffInfoPanel)
            }
            setReserveInfoPanel={(reserveInfoPanel) =>
              setReserveInfoPanel(reserveInfoPanel)
            }
          />
        ) : null}
        {personLogin ? (
          <Reservation
            workplaces={workplaces}
            setReserveInfoPanel={(reserveInfoPanel) =>
              setReserveInfoPanel(reserveInfoPanel)
            }
            reserveInfoPanel={reserveInfoPanel}
          />
        ) : null}
        {staffInfoPanel ? null : (
          <StaffInformation
            workplaces={workplaces}
            personalsInformation={personalsInformation}
          />
        )}
        {reserveInfoPanel ? (
          <ReserveInformation
            workplaces={workplaces}
            personalsInformation={personalsInformation}
          />
        ) : null}
      </Container>
    </div>
  );
}

export default App;
