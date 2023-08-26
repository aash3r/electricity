import { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const ele = 'electricity';
const gas = 'gas';

function Switcher() {
  const [activeButton, setActiveButton] = useState("ele");
  return (
    <ButtonGroup>
      <Button
        variant="secondary"
        onClick={() => setActiveButton("ele")}
        active={activeButton === "ele"}
      >
        Electricity
      </Button>
      <Button
        variant="secondary"
        onClick={() => setActiveButton("gas")}
        active={activeButton === "gas"}
      >
        Gas
      </Button>
    </ButtonGroup>
  );
}

export default Switcher;
