
import { useState } from 'react';
import  Container  from 'react-bootstrap/Container';
import Navigation from './Navigation/Navigation';
import Body from './Body';
import Footer from './Footer';
import './App.scss';
import { PERIODS } from './constants';
import { ELE } from './constants'


function App() {
  const [dataType, setDataType] = useState('chart');
  const [selectedPeriod, setSelectedPeriod] = useState(PERIODS[0].value);
  const [activeEnergy, setActiveEnergy] = useState(ELE);

  return (
    <Container>
      <Navigation />
      <Body dataType={dataType}
      selectedPeriod={selectedPeriod}/>
      <Footer 
       dataType={dataType}
       setDataType={setDataType}
       selectedPeriod={selectedPeriod}
       setSelectedPeriod={setSelectedPeriod}/>
    </Container>
  );
}
export default App;
