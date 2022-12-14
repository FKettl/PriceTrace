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
      newprodPage:false,
      nftPage:false
    }));
  }
  const returnProduct = () => {
    props.setStatus(state => ({
      logadoHeader: props.getState.logadoHeader,
      profilePage: false,
      loginPage:false,
      pricePage:true,
      newprodPage:false,
      nftPage:false
    }));
  }
  const returnLoginPage = () => {
    props.setStatus(state => ({
      logadoHeader: props.getState.logadoHeader,
      profilePage: false,
      loginPage:true,
      pricePage:false,
      newprodPage:false,
      nftPage:false
    }));
  }
  const returnNewprodPage = () => {
    props.setStatus(state => ({
      logadoHeader: props.getState.logadoHeader,
      profilePage: false,
      loginPage:false,
      pricePage:false,
      newprodPage:true,
      nftPage:false
    }));
  }
  const returnProfilePage = () => {
    props.setStatus(state => ({
      logadoHeader: props.getState.logadoHeader,
      profilePage: true,
      loginPage:false,
      pricePage:false,
      newprodPage:false,
      nftPage:false
    }));
  }
  const returnNFTPage = () => {
    props.setStatus(state => ({
      logadoHeader: props.getState.logadoHeader,
      profilePage: false,
      loginPage:false,
      pricePage:false,
      newprodPage:false,
      nftPage:true
    }));
  }
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      style={{backgroundColor: '#e5e5e5'}}
      className="px-4 py-8"
    >
      <Navbar.Brand> <img style={{width:'auto', height: '5rem'}} src="src\assets\Logo.PNG"></img> </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-na" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="align-items-end px-3">
          <Nav.Link style={{fontSize: '1.5rem'}} onClick={() => {returnHome()}}>Home</Nav.Link>
          <Nav.Link style={{fontSize: '1.5rem', marginLeft:'1rem'}} onClick={() => {returnProduct()}}>Send price history</Nav.Link>
          {props.getState.existsStore == false?
          <Nav.Link style={{fontSize: '1.5rem' , marginLeft:'1rem'}} onClick={() => {returnLoginPage()}}>Create store account</Nav.Link>
          :
          <Nav.Link style={{fontSize: '1.5rem', marginLeft:'1rem'}} onClick={() => {returnNewprodPage()}}>Add product</Nav.Link>
         
          }
          
          <Nav.Link  style={{fontSize: '1.5rem', marginLeft:'1rem'}} onClick={() => {returnProfilePage()}}>Profile</Nav.Link>
          <Nav.Link  style={{fontSize: '1.5rem', marginLeft:'1rem'}} onClick={() => {returnNFTPage()}}>add NFT test</Nav.Link>
         
        </Nav>
        <Nav className="mr-auto align-items-end px-3">
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBarComponent;
