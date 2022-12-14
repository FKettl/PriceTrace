import { useState } from "react";
import ItemModal from './ItemModal';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ItemCard (props) {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);
    const showModal = () => setIsOpen(true);
    //const storeNameandUrl = getUserStoreById(props.storeId);
    
    
    
    return (
        <Card className='cardContainer'>
            <Card.Body>
            <div style={{width:"4rem", height:"4rem",marginTop: "3rem", marginBottom: "auto", marginRight:"auto",
                marginLeft:'7rem'}}>
            <img src={new URL(props.imageURL)}/>
            </div>
                <div style={{textAlign: 'center', marginTop: '1rem'}}>
                <Card.Title style={{marginTop:'2rem'}}>{props.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.price}</Card.Subtitle>
                <Button style={{marginTop: '1rem', marginBottom: '0.5rem', backgroundColor: '#5971c6'}} onClick={showModal}>
                    See more</Button>
                </div>
            </Card.Body>
            {isOpen && <ItemModal state={props.state} storeid={props.storeid} setState={props.setState} name={props.name} price={props.price} closeModal={closeModal}
             isOpen={isOpen} link={props.link} storeName={props.storeName} storeLevel={props.storeLevel}
              description={props.description}/>}
        </Card>
    )
}

export default ItemCard;