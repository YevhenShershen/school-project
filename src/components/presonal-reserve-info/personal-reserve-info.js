import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import "./personal-reserve-info.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PersonalReserveInfo = ({workspaceToUpdate, updateWorkplaces}) => {
    const clickHandler = () => {
        if (!Object.keys(workspaceToUpdate)) {
            return;
        }
        updateWorkplaces(prev => prev.map(workspace => workspace.element === workspaceToUpdate.element ? {
            ...workspace,
            isReserved: true
        } : workspace));
    }
    return (
        <div className="personal-reservation">
            <ListGroup as="ul" className="mt-4 mb-4">
                <ListGroup.Item as="li" active>
                    Personal reservation
                </ListGroup.Item>
                <ListGroup.Item as="li">Person ID:1</ListGroup.Item>
                <ListGroup.Item as="li" disabled>
                    Person Information:
                </ListGroup.Item>
                <ListGroup.Item as="li">Person workplaces: None</ListGroup.Item>
            </ListGroup>
            <Row>
                <Col>
                    <Button onClick={clickHandler} variant="success"
                            className="personal-reservation__button text-uppercase">
                        Accept
                    </Button>
                </Col>
                <Col>
                    <Button variant="danger" className="personal-reservation__button text-uppercase">
                        Сancel
                    </Button>
                </Col>
            </Row>
        </div>
    );
};
export default PersonalReserveInfo;
