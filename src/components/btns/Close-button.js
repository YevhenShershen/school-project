import Button from "react-bootstrap/Button";
const CloseButton = (props) => {
  return (
    <Button variant="danger" className="close-btn" onClick={() => {
      props.func(!props.item);
    }}>
      X
    </Button>
  );
};
export default CloseButton;
