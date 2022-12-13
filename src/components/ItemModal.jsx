import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PerfilCard from './perfilCard';

function ItemModal (props) {
  return (
    <Modal show={props.isOpen} onHide={props.closeModal}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
        <Modal.Header closeButton >
            <Modal.Title>{props.name} -  {props.price}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Description</h5>
          <h8>{props.description}</h8>
          <h5 style={{marginTop:'1rem'}}>Price History</h5>
        </Modal.Body>
        <Modal.Footer>
          <div style={{ display: 'flex',  justifyContent: 'space-between'}} ></div>
            <PerfilCard  storeUrl={props.storeUrl} storeName={props.storeName}></PerfilCard>
            <div style={{width: 'auto', minWidth:'18rem'}}></div>
            <Button variant="secondary" onClick={props.closeModal}>
                Close
            </Button>
            <Button variant="primary" target="_blank" href={props.link}>
                Go To
          </Button>
            </Modal.Footer>
     </Modal>
  );
};

export default ItemModal;