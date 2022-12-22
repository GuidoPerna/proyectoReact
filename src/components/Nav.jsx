import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

function NavBarReact() {
  return (
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">CompuTienda</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                  <Link to="/Category/teclados">Teclados</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                  <Link to="/Category/mouse">Mouses</Link>
              </NavDropdown.Item>
          </NavDropdown>
            <Nav.Link href="/cart"><CartWidget/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      );
}

export default NavBarReact;