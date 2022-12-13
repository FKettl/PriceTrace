import './styles.css'
import { Navbar, Nav} from 'react-bootstrap';
import { useEffect } from 'react';

function NavBarComponent(props) {

  useEffect(() => {
    }, [props.getState.logadoHeader]);


  const returnHome = () => {
    props.setStatus(state => ({
      logadoHeader: true,
      profilePage: false,
      loginPage:false,
      pricePage:false,
      newprodPage:false
    }));
  }
  const returnProduct = () => {
    props.setStatus(state => ({
      logadoHeader: props.getState.logadoHeader,
      profilePage: false,
      loginPage:false,
      pricePage:true,
      newprodPage:false
    }));
  }
  const returnLoginPage = () => {
    props.setStatus(state => ({
      logadoHeader: props.getState.logadoHeader,
      profilePage: false,
      loginPage:true,
      pricePage:false,
      newprodPage:false
    }));
  }
  const returnNewprodPage = () => {
    props.setStatus(state => ({
      logadoHeader: props.getState.logadoHeader,
      profilePage: false,
      loginPage:false,
      pricePage:false,
      newprodPage:true
    }));
  }
  const returnProfilePage = () => {
    props.setStatus(state => ({
      logadoHeader: props.getState.logadoHeader,
      profilePage: true,
      loginPage:false,
      pricePage:false,
      newprodPage:false
    }));
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
          <Nav.Link onClick={() => {returnHome()}}>Home</Nav.Link>
          <Nav.Link onClick={() => {returnProduct()}}>Send price history</Nav.Link>
          {props.getState.existsStore == false?
          <Nav.Link onClick={() => {returnLoginPage()}}>Create store account</Nav.Link>
          :
          <Nav.Link onClick={() => {returnNewprodPage()}}>Add product</Nav.Link>
         
          }
          {props.getState.logadoHeader == true ?
          <Nav.Link onClick={() => {returnProfilePage()}}>Profile</Nav.Link>
          : 
          <></>}
        </Nav>
        <Nav className="mr-auto align-items-end px-3">
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBarComponent;
