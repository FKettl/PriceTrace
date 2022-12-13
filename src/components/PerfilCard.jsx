import { useState } from "react";
import ItemModal from './ItemModal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PerfilCard (props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <a style={{ color: 'inherit', textDecoration:'none'}} href={props.storeUrl} target="_blank">
        <Card>
            <Card.Body style={{flex: '1', flexDirection:'row', display: 'flex', width:'auto', height:'4rem'}}>
               <FontAwesomeIcon  style={{ marginTop: "auto", marginBottom: "auto", marginRight:"auto",
                marginLeft:'0.5rem'}} icon={faUser}/>
                <div style={{width:'1rem'}}></div>
                {/* <Card.Img className='cardImg' src={props.image} /> */}
                <div style={{flex: '1', flexDirection:'row', alignItems:'center', justifyContent: "center"}}> </div>
                <Card.Title style={{ marginTop: "auto", marginBottom: "auto", marginRight:"auto",
                marginLeft:'1rem'}}>{props.storeName}</Card.Title>
                <a style={{marginTop: "auto", marginBottom: "auto", marginRight:"0.5rem",
                marginLeft:'0.5rem'}}>-</a>
                <Card.Subtitle style={{marginTop: "auto", marginBottom: "auto", marginRight:"auto",
                marginLeft:'0.5rem'}} className="text-muted">Level 14</Card.Subtitle>
            </Card.Body>
        </Card>
        </a>
    )
}

export default PerfilCard;