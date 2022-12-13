import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badget from "../components/Badget";
import React from "react";


class Profile extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
            badgets:[]
      }
     
  }
  
  render (){ return (
    <><div  style={{flex:1}}>
        <div style={{width:'auto', height:'10rem'}}></div>
        <div style={{justifyContent: 'center', alignItems:'center', display:'flex'}}>
            <div style={{display: "flex",  width: "9rem", height: "9rem", borderRadius: "50%", borderColor: "black", borderWidth: '0.1rem' }}>
            <FontAwesomeIcon  style={{ margin: "auto"}} icon={faUser}/>
            </div>
        </div>
        <div style={{justifyContent: 'center', alignItems:'center', display:'flex', marginTop: '2rem'}}>
        <h1 style={{color:'#1f97c2'}}>Conta {this.props.data.account[0]}</h1>
        
            </div>
        <div style={{justifyContent: 'center', alignItems:'center', display:'flex', marginBottom: '4rem'}}>
            <a>Level: {this.props.data.level}</a>
        </div>{
            this.props.data.existsStore == true ?
            <div style={{justifyContent: 'center', alignItems:'center', display:'flex', marginBottom: '4rem'}}>
            <a>Nome da sua loja: {this.props.data.storename}</a>
        </div>
          : 
          <></>}
        <div style={{justifyContent: 'center', alignItems:'center', display:'flex', marginTop: '2rem'}}>
        <div style={{display: "flex", flexDirection:'column',  width: "50rem", height: "auto", marginBottom:'5rem',
        borderColor: "black", borderWidth: '0.1rem' }}>
            <a style={{marginLeft: '1rem', marginTop:'0.5rem', fontWeight:'bold'}}>Badgets</a>
            <div style={{display: "flex", flexDirection:'row', flexWrap:'wrap', alignItems:'flex-start'}}>
            {this.state.badgets.map(item => {return (
            <Badget name={item.name}/>
            )})}
            </div>
        </div>
        </div>
     </div>
    </>
    )}
}
export default Profile;



