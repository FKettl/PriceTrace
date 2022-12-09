import { useState } from "react";
import ItemModal from './ItemModal';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemCard (props) {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);
    const showModal = () => setIsOpen(true);

    return (
        /*<Card className="w-10">
            <button onClick={() => setIsOpen(true)} className='border border-radiu w-80 h-40 mt-10 ml-10'>
                <strong className='font-bold text-black block'>{props.name}</strong>
                <span className='mt-auto ml-2 w-10 text-black text-sm block'>{props.price}</span>
            </button>
        </Card>*/
        <Card className='cardContainer'>
            
            <Card.Body>
                <Card.Img className='cardImg' src={props.image} />
                <div style={{textAlign: 'center', marginTop: '1rem'}}>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.price}</Card.Subtitle>
                <Button style={{marginTop: '0.5rem', marginBottom: '0.5rem', backgroundColor: '#1f97c2'}} onClick={showModal}>Veja mais</Button>
                </div>
            </Card.Body>
            {isOpen && <ItemModal name={props.name} price={props.price} closeModal={closeModal} isOpen={isOpen} />}
        </Card>
    )
}

export default ItemCard;