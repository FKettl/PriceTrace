import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Badget (props) {
    return (
    <div style={{display: "flex", flexDirection:'column', marginLeft: '1rem',
     marginTop:'1rem', marginBottom:'1rem', marginRight:'1rem'}}>
    <div style={{ 
     width: "4rem",
     height: "4rem", borderColor: "black", borderWidth: '0.1rem' }}>
        <FontAwesomeIcon  style={{ margin: "auto"}} icon={faImage}/>
    </div>
    <a style={{marginTop:'0.3rem'}}>{props.name}</a>
    </div>
    )
}

export default Badget