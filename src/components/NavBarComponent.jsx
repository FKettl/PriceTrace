import './styles.css'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useState } from 'react';

function NavBarComponent(props) {
  const [conectado, setConectado] = useState(false);

  const conectar = () => setConectado(true);
  const desconectar = () => setConectado(false);

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="light"
      variant="light"
      className="px-4 py-8"
    >
      <Navbar.Brand> <a style={{color: '#1f97c2'}}>PriceTrace</a> </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-na" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="align-items-end px-3">
          <Link to={`/home`}>Home</Link>
          {conectado ?
          <Link to={`/profile`}>Profile</Link>
          : 
          <></>}
        </Nav>
        <Nav className="mr-auto align-items-end px-3">
        </Nav>
        {conectado ?
        <Nav className="ml-auto align-items-end px-3">
          <Link onClick={desconectar} className="pl-4">Desconectar</Link>
        </Nav>
        :
        <Nav className="ml-auto align-items-end px-3">
          <Link onClick={props.homeNeeded} to={`/login`}
          className="pl-4" 
          >Login</Link>
        </Nav>
        }
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBarComponent;
