import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { PERIODS } from '../constants';

function Periods({
  setShowSideBar,
  selectedPeriod,
  setSelectedPeriod,
  activeEnergy,
}) {
  return (
    <Container className='text-center my-2'>
      {PERIODS.map(({ label, value }) => (
        <Button
          className='mx-2'
          key={value}
          variant='primary'
          active={selectedPeriod === value}
          onClick={() => setSelectedPeriod(value)}
        >
          {label[activeEnergy]}
        </Button>
      ))}
      <Button
        className='mx-2'
        variant='primary'
        onClick={() => setShowSideBar(true)}
      >
        Custom
      </Button>
    </Container>
  );
}

export default Periods;