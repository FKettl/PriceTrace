import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PerfilCard from './PerfilCard';
import Graphic from './Graphic';

function ItemModal (props) {
  return (
    <Modal show={props.isOpen} onHide={props.closeModal}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
        <Modal.Header closeButton >
            <Modal.Title style={{fontSize: '2.5rem'}}>{props.name} -  {props.price}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 style={{fontWeight:'500'}}>Description</h5>
          <h6 style={{marginTop:"1.5rem"}}>{props.description}</h6>
          <h5 style={{marginTop:'1.5rem', fontWeight:'500'}}>Price History</h5>
          <Graphic data={props.state} store={props.storeid}/>
        </Modal.Body>
        <Modal.Footer>
            <PerfilCard setState={props.setState} storeUrl={props.storeLevel} storeName={props.storeName}></PerfilCard>
            <div style={{width: 'auto', minWidth:'20rem'}}></div>
            <Button variant="secondary" onClick={props.closeModal}>
                Close
            </Button>
            <Button variant="primary"  style={{backgroundColor: '#5971c6'}} target="_blank" href={props.link}>
                Go To
          </Button>
            </Modal.Footer>
     </Modal>
  );
};

export default ItemModal;