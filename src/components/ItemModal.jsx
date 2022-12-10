import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ItemModal (props) {
  return (
    <Modal show={props.isOpen} onHide={props.closeModal}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
        <Modal.Header closeButton>
            <Modal.Title>{props.name} -  {props.price}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Description</h5>
          <h8>{props.description}</h8>
          <h5 style={{marginTop:'1rem'}}>Price History</h5>
        </Modal.Body>
        <Modal.Footer>
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