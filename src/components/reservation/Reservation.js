import { useState } from "react";
import "./reservation.scss";
import PersonalReserveInfo from "../presonal-reserve-info/personal-reserve-info";
import Line from "../Line";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Reservation = (props) => {
  const [workplaces] = useState(props.workplaces);
  const setWorkplaces = [...Array(workplaces).keys()].map((it) => it + 1);
  return (
    <div className="reservation table-border">
      <h1>Reservation panel</h1>
      <Line/>
         <Row className="px-2">
        <Col>
          <Row className="mb-4">
            {setWorkplaces.map((el, idx) => (
              <Col xs={3}>
                <Button
                  variant="primary"
                  className="mt-4 reservation__button"
                  key={idx}
                >
                  workplaces {el}
                </Button>
              </Col>
            ))}
          </Row>
        </Col>
        <Col>
          <PersonalReserveInfo />
        </Col>
      </Row>
    </div>
  );
};
export default Reservation;
