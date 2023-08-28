import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {ELE , GAS} from '../constants'

function Switcher({activeEnergy, setActiveEnergy}) {
  
  return (
    <ButtonGroup>
      <Button
      className="text-capitalize"
        variant="secondary"
        onClick={() => setActiveEnergy(ELE)}
        active={activeEnergy === ELE}
      >{ELE}
        </Button>
      <Button
      className="text-capitalize"
        variant="secondary"
        onClick={() => setActiveEnergy(GAS)}
        active={activeEnergy === GAS}
      >{GAS}
      </Button>
    </ButtonGroup>
  );
}

export default Switcher;
