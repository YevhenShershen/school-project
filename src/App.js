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
import { Context } from "./components/context";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../src/styles/main.scss";
function App() {
  const [loginPersonInfo, setLoginPersonInfo] = useState("");
  const findpersonInfo = (el) => {
    setLoginPersonInfo(el);
  };
  const [workplaces] = useState(20);
  const [generatedWorkplaces, setGeneratedWorkplaces] = useState(
    [...Array(workplaces).keys()].map((it) => ({
      element: it + 1,
      isReserved: false,
    }))
  );
  const [personRegister, setPersonRegister] = useState(false);
  const [personLogin, setPersonLogin] = useState(false);
  const [staffInfoPanel, setstaffInfoPanel] = useState(false);
  const [reserveInfoPanel, setReserveInfoPanel] = useState(false);
  const [adminPanel, setAdminPanel] = useState(false);
  const [personInfo, setPersonInfo] = useState({
    name: "",
    surname: "",
    personId: "",
    workplace: null,
  });

  const [personalsInformation, setPersonalInformation] = useState([
    { name: "Admin", surname: "Admin", personId: 123, workplace: 5 },
    { name: "Admin2", surname: "Admin", personId: 1234, workplace: 11 },
  ]);
  const addPerson = (el) => {
    setPersonalInformation((prev) => [...prev, el]);
  };
  const logout = () => {
    setPersonLogin(false);
    setAdminPanel(false);
    setstaffInfoPanel(false);
    setReserveInfoPanel(false);
    setPersonRegister(false);
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
              findpersonInfo={findpersonInfo}
              loginPersonInfo={loginPersonInfo}
              setLoginPersonInfo={setLoginPersonInfo}
              personalsInformation={personalsInformation}
              personLogin={personLogin}
              setPersonLogin={(personLogin) => setPersonLogin(personLogin)}
              setAdminPanel={(adminPanel) => setAdminPanel(adminPanel)}
            />
          </Col>
        </Row>
        <Row>
          <Button
            variant="warning"
            className="text-uppercase mb-2"
            style={{ color: "red" }}
            onClick={logout}
          >
            Logout
          </Button>
        </Row>
        <Context.Provider value={{ personInfo, setPersonInfo }}>
          {personRegister ? (
            <PersonalInformation personRegister={personRegister} />
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
          {personLogin && (
            <Reservation
              setPersonalInformation={setPersonalInformation}
              setLoginPersonInfo={setLoginPersonInfo}
              loginPersonInfo={loginPersonInfo}
              workplaces={generatedWorkplaces}
              updateWorkplaces={setGeneratedWorkplaces}
              personalsInformation={personalsInformation}
            />
          )}
          {staffInfoPanel && (
            <StaffInformation
              workplaces={workplaces}
              personalsInformation={personalsInformation}
            />
          )}
          {reserveInfoPanel && (
            <ReserveInformation
              workplaces={workplaces}
              personalsInformation={personalsInformation}
            />
          )}
        </Context.Provider>
      </Container>
    </div>
  );
}

export default App;
