
import './App.scss';
import { useState } from 'react';
import  Container  from 'react-bootstrap/Container';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/index';
import Body from './Body/index';
import {CHART, PERIODS, ELE} from './constants';

function App () {
  const [activeEnergy, setActiveEnergy] = useState(ELE);
  const [dataType, setDataType] = useState(CHART);
  const [selectedPeriod, setSelectedPeriod] = useState(PERIODS[0].value)
  const [electricityPrice, setElectricityPrice] = useState(null);
  const [gasPrice, setGasPrice] = useState(null);
  const [gasCurrentPrice, setGasCurrentPrice] = useState(0);
  return (
    <Container>
      <Navigation />
      <Body 
      dataType={dataType}
      selectedPeriod={selectedPeriod}
      activeEnergy={activeEnergy}
      setActiveEnergy={setActiveEnergy}
      electricityPrice={electricityPrice}
      setElectricityPrice={setElectricityPrice}
      gasPrice={gasPrice}
      setGasPrice={setGasPrice}
      gasCurrentPrice={gasCurrentPrice}
      setGasCurrentPrice={setGasCurrentPrice}
      />
      
      <Footer 
      dataType={dataType} 
      setDataType={setDataType}
      selectedPeriod={selectedPeriod}
      setSelectedPeriod={setSelectedPeriod}
      activeEnergy={activeEnergy}
      setElectricityPrice={setElectricityPrice}
      setGasPrice={setGasPrice}
      setGasCurrentPrice={setGasCurrentPrice}/>
    </Container>
  );
}
export default App;