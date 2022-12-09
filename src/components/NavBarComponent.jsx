import './styles.css'
import { Navbar, Nav } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

function NavBarComponent(props) {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="light"
      variant="light"
      className="px-4 py-8"
    >
      <Navbar.Brand>PriceTrace</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-na" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="align-items-end px-3">
          <Nav.Link href={`/home`}>Home</Nav.Link>
        </Nav>
        <Nav className="mr-auto align-items-end px-3">
        </Nav>
        <Nav className="ml-auto align-items-end px-3">
          <Link onClick={props.homeNeeded} to={`login`} className="pl-4">Login</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBarComponent;
