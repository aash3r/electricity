
import  Container  from 'react-bootstrap/Container';
import Navigation from './Navigation/Navigation';
import Body from './Body/Body';
import './App.scss';
import Periods from './Footer/Periods';


function App() {
  return (
    <Container>
      <Navigation />
      <Body />
      <Periods />
    </Container>
  );
}
export default App;
