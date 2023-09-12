import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { mainUrl} from '../constants'

function Navigation() {
  return (
    <Navbar bg='dark' data-bs-theme='light' className='bg-body-tertiary'>
      <Container>
        <Link to='/' className='navbar-brand'>
          <img
            alt=''
            src={`${mainUrl}/logo.svg`}
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{' '}
          React Bootstrap
        </Link>
        <Link className='nav-link' to='/contact'>
          Contact
        </Link>
        <Link className='nav-link' to='/gas'>
          Gas
        </Link>
        <Link className='nav-link' to='/current-price'>
          Current Price
        </Link>
      </Container>
    </Navbar>
  );
}

export default Navigation;
