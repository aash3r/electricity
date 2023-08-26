import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          React Bootstrap
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Navigation;
