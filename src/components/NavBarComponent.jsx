import './styles.css'
import { Navbar, Nav} from 'react-bootstrap';
import { useEffect } from 'react';

function NavBarComponent(props) {

  useEffect(() => {
    }, [props.logadoHeader]);

  const deslogar = () => {
    props.setLogado(false)
    props.setLogadoHeader(false)
  }

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
          <Nav.Link onClick={props.tirarLoginPage}>Home</Nav.Link>
          {props.logadoHeader == true ?
          <Nav.Link>Profile</Nav.Link>
          : 
          <></>}
        </Nav>
        <Nav className="mr-auto align-items-end px-3">
        </Nav>
        {props.logadoHeader == true ?
        <Nav className="ml-auto align-items-end px-3">
          <Nav.Link onClick={deslogar} className="pl-4">Desconectar</Nav.Link>
        </Nav>
        :
        <Nav className="ml-auto align-items-end px-3">
          <Nav.Link
          onClick={props.chamarLoginPage}
          className="pl-4" 
          >Login</Nav.Link>
        </Nav>
        }
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBarComponent;
