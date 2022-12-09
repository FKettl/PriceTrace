import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ItemModal (props) {
  return (
    <Modal show={props.isOpen} onHide={props.closeModal}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
        <Modal.Header closeButton>
            <Modal.Title>{props.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={props.closeModal}>
                Close
            </Button>
            <Button variant="primary" onClick={props.closeModal}>
                Save Changes
            </Button>
            </Modal.Footer>
     </Modal>
  );
};

export default ItemModal;