import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
const Reservation = () => {
  const [workplaces] = useState(12);
  const [items, setItems] = useState([]);
  useEffect(() => {
    onWorkplaces();
  }, items);
  const onWorkplaces = () => {
    for (let i = 1; i <= workplaces; i++) {
      items.push(<Button variant="primary" key={i}>{i}</Button>);
    }
  };
  return (
    <div>
      <h1>{items}</h1>
      {workplaces}
    </div>
  );
};
export default Reservation;
