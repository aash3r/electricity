import Button from 'react-bootstrap/Button'; 
import { Container } from 'react-bootstrap'; 
import { PERIODS } from '../constants'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { setSelectedPeriod } from '../services/stateService'; 
 
function Periods({ 
  setShowSideBar 
}) { 
  const dispatch = useDispatch(); 
  const selectedPeriod = useSelector((state)=> state.selectedPeriod); 
  const activeEnergy = useSelector((state) => state.activeEnergy) 
  return ( 
    <Container className='text-center my-2'> 
      {PERIODS.map(({ label, value }) => ( 
        <Button 
          className='mx-2' 
          key={value} 
          variant='primary' 
          active={selectedPeriod === value} 
          onClick={() => dispatch(setSelectedPeriod(value))} 
        > 
          {value} 
          {label[activeEnergy]} 
        </Button> 
      ))} 
      <Button 
        className='mx-2' 
        variant='primary' 
        onClick={() => dispatch(setShowSideBar(true))} 
      > 
        Custom 
      </Button> 
    </Container> 
  ); 
} 
 
export default Periods;