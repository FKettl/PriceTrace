import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badget from "../components/Badget";
import React from "react";
import FormProfile from "../components/FormProfile";


class Profile extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
            badgets:[],
            slevel:0,
            sid:0
      }
      this.setState = this.setState.bind(this);
     
  }
  
  render (){ return (
    <><div  style={{flex:1}}>
        <div style={{justifyContent: 'center', alignItems:'center', display:'flex', marginLeft:'10rem'}}>
        <FormProfile datap={this.props.data} data={this.state} setData={this.setState}/>
        </div>
        <div style={{width:'auto', height:'1rem'}}></div>
        <div style={{justifyContent: 'center', alignItems:'center', display:'flex'}}>
            <div style={{display: "flex",  width: "9rem", height: "9rem", borderRadius: "50%", borderColor: "black", borderWidth: '0.1rem' }}>
            <FontAwesomeIcon  style={{ margin: "auto", widht:'4rem', height:'4rem'}} icon={faUser}/>
            </div>
        </div>
        <div style={{justifyContent: 'center', alignItems:'center', display:'flex', marginTop: '1.5rem'}}>
        <h1 style={{color:'#5971c6'}}>Search for store profile </h1>
        </div>
        <div style={{justifyContent: 'center', alignItems:'center', display:'flex'}}>
            <a>Level: {this.state.slevel}</a>
        </div>{
            this.props.data.existsStore == true ?
            <div style={{justifyContent: 'center', alignItems:'center', display:'flex', marginBottom: '4rem'}}>
            <a>Store ID: {this.state.sid}</a>
        </div>
          : 
          <></>}
        <div style={{justifyContent: 'center', alignItems:'center', display:'flex', marginTop: '2rem'}}>
        <div style={{display: "flex", flexDirection:'column',  width: "50rem", height: "auto", marginBottom:'5rem',
        borderColor: "black", borderWidth: '0.1rem' }}>
            <a style={{marginLeft: '1rem', marginTop:'0.5rem', fontWeight:'bold'}}>Badgets</a>
            <div style={{display: "flex", flexDirection:'row', flexWrap:'wrap', alignItems:'flex-start'}}>
            {this.state.badgets.map(item => {return (
            <Badget name={item[0]} imageURL={item[5]}/>
            )})}
            </div>
        </div>
        </div>
     </div>
    </>
    )}
}
export default Profile;



