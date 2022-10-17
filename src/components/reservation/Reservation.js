import {useState} from "react";
import "./reservation.scss";
import PersonalReserveInfo from "../presonal-reserve-info/personal-reserve-info";
import Line from "../Line";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Reservation = ({workplaces, updateWorkplaces, personalsInformation}) => {
    const [workplaceToUpdate, setWorkplaceToUpdate] = useState({})
    return (
        <div className="reservation table-border">
            <div className="panel">
                <h1>Reservation panel</h1>
                {/*<CloseButton*/}
                {/*  func={props.setReserveInfoPanel}*/}
                {/*  item={props.reserveInfoPanel}*/}
                {/*/>*/}
            </div>
            <Line/>
            <Row className="px-2">
                <Col>
                    <Row className="mb-4">
                        {workplaces && workplaces.map((workplace, idx) => (
                            <Col xs={3} key={idx}>
                                <Button onClick={() => setWorkplaceToUpdate(workplace)} variant="primary"
                                        className="mt-4 reservation__button"
                                        disabled={personalsInformation.find(personals => personals.workplace === workplace.element) || workplaceToUpdate.element === workplace.element || workplace.isReserved}>
                                    {workplace.isReserved || personalsInformation.find(personals => personals.workplace === workplace.element) ? 'workplace reserved' : 'workplace'} #{workplace.element}
                                </Button>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col>
                    <PersonalReserveInfo updateWorkplaces={updateWorkplaces} workspaceToUpdate={workplaceToUpdate}/>
                </Col>
            </Row>
        </div>
    );
};
export default Reservation;
