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
    var storeNameandUrl = ['Name', 'https://www.youtube.com'];
    {console.log("AQUI")
        //console.log(props.getUserStoreById(1).call({from: props.user, gas:3000000}))
        console.log("AQUI")
    }
    return (
        <Card className='cardContainer'>
            <Card.Body>
            <FontAwesomeIcon style={{width:"4rem", height:"4rem",marginTop: "3rem", marginBottom: "auto", marginRight:"auto",
                marginLeft:'7rem'}} icon={faBook}/>
                <div style={{textAlign: 'center', marginTop: '1rem'}}>
                <Card.Title style={{marginTop:'2rem'}}>{props.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.price}</Card.Subtitle>
                <Button style={{marginTop: '1rem', marginBottom: '0.5rem', backgroundColor: '#5971c6'}} onClick={showModal}>
                    See more</Button>
                </div>
            </Card.Body>
            {isOpen && <ItemModal name={props.name} price={props.price} closeModal={closeModal}
             isOpen={isOpen} link={props.link} storeName={storeNameandUrl[0]} storeUrl={storeNameandUrl[1]}
              description={props.description}/>}
        </Card>
    )
}

export default ItemCard;