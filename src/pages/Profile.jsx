import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badget from "../components/badget";


function Profile (props) {

    const dummyLIst =[
    { 
        "key": 1,
        "name": "badget 1",
        'image': '' 
    }, {
        "key": 2,
        "name": "badget 2",
        'image': '' 
    }, {
        "key": 3,
        "name": "badget 3",
        'image': '' 
    }, {
        "key": 4,
        "name": "badget 4",
        'image': '' 
    }, {
        "key": 4,
        "name": "badget 4",
        'image': '' 
    }, {
        "key": 4,
        "name": "badget 4",
        'image': '' 
    }, {
        "key": 4,
        "name": "badget 4",
        'image': '' 
    }, {
        "key": 4,
        "name": "badget 4",
        'image': '' 
    }, {
        "key": 4,
        "name": "badget 4",
        'image': '' 
    }, {
        "key": 4,
        "name": "badget 4",
        'image': '' 
    }, {
        "key": 4,
        "name": "badget 4",
        'image': '' 
    }, {
        "key": 4,
        "name": "badget 4",
        'image': '' 
    }, {
        "key": 4,
        "name": "badget 4",
        'image': '' 
    }]

    let capitalizeUserName = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <><div  style={{flex:1}}>
            <div style={{width:'auto', height:'10rem'}}></div>
            <div style={{justifyContent: 'center', alignItems:'center', display:'flex'}}>
                <div style={{display: "flex",  width: "9rem", height: "9rem", borderRadius: "50%", borderColor: "black", borderWidth: '0.1rem' }}>
                <FontAwesomeIcon  style={{ margin: "auto"}} icon={faUser}/>
                </div>
            </div>
            <div style={{justifyContent: 'center', alignItems:'center', display:'flex', marginTop: '2rem'}}>
            <h1 style={{color:'#1f97c2'}}>{capitalizeUserName(props.userName)}</h1>
                </div>
            <div style={{justifyContent: 'center', alignItems:'center', display:'flex', marginBottom: '4rem'}}>
                <a>Level: 12</a>
            </div>
            <div style={{justifyContent: 'center', alignItems:'center', display:'flex', marginTop: '2rem'}}>
            <div style={{display: "flex", flexDirection:'column',  width: "50rem", height: "auto", marginBottom:'5rem',
            borderColor: "black", borderWidth: '0.1rem' }}>
                <a style={{marginLeft: '1rem', marginTop:'0.5rem', fontWeight:'bold'}}>Badgets</a>
                <div style={{display: "flex", flexDirection:'row', flexWrap:'wrap', alignItems:'flex-start'}}>
                {dummyLIst.map(item => {return (
                <Badget name={item.name}/>
                )})}
                </div>
            </div>
            </div>
         </div>
        </>
    )

}

export default Profile