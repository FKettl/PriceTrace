import { useState } from "react";
import ItemModal from './ItemModal';
import Image from 'react-bootstrap/Image'

function ItemCard (props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <button onClick={() => setIsOpen(true)} className='border border-radiu w-80 h-40 mt-10 ml-10'>
            <strong className='font-bold text-black block'>{props.name}</strong>
            <span className='mt-auto ml-2 w-10 text-black text-sm block'>{props.price}</span>
        </button>
        {isOpen && <ItemModal name={props.name} price={props.price} setIsOpen={setIsOpen} />}
        </>
    )
}

export default ItemCard;