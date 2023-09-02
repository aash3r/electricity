
import './App.scss';
import { useState } from 'react';
import  Container  from 'react-bootstrap/Container';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/index';
import Body from './Body/index';
import {CHART, PERIODS, ELE} from './constants';

function App () {
  const[dataType, setDataType] = useState(CHART);
  const [selectedPeriod, setSelectedPeriod] = useState(PERIODS[0].value)
  const [activeEnergy, setActiveEnergy] = useState(ELE);
  return (
    <Container>
      <Navigation />
      <Body dataType={dataType}
      selectedPeriod={selectedPeriod}
      setActiveEnergy={setActiveEnergy}
      activeEnergy={activeEnergy}/>
      
      <Footer dataType={dataType} 
      setDataType={setDataType}
      selectedPeriod={selectedPeriod}
      setSelectedPeriod={setSelectedPeriod}
      activeEnergy={activeEnergy}/>
    </Container>
  );
}
export default App;