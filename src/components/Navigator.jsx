import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigator() {
  return (
    <Navbar bg="danger" expand="md" data-bs-theme="dark">
      <Container className="ts">
        <Navbar.Brand>
          <Link to="/" className="text-white text-decoration-none">Happy Cake 🍰</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link to="/" className="text-white text-decoration-none me-3">🏠 Home</Link>
            <Link to="/contact" className="text-white text-decoration-none">📔Contacto</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigator
