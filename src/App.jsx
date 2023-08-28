
import { useState } from 'react';
import  Container  from 'react-bootstrap/Container';
import Navigation from './Navigation/Navigation';
import Body from './Body';
import './App.scss';
import Footer from './Footer';
import { CHART } from './constants'


function App() {
  const [dataType, setDataType] = useState('chart');

  return (
    <Container>
      <Navigation />
      <Body dataType={dataType}/>
      <Footer dataType={dataType} setDataType={setDataType}/>
    </Container>
  );
}
export default App;
