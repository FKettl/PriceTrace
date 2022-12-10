
import { useState } from "react";


function Login(props) {
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");

    const handleValidation = () => {
        if (user === 'user' && password === '1234') {
          props.setUserName(user);
          props.setLogado(true);
        }
      };
  
    return (
        <div style={{marginTop: '10rem'}}>
        <div className="container">
        <div style={{justifyContent: 'center', alignItems:'center', display:'flex', marginBottom: '4rem'}}>
          <h1>Login</h1>
        </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-4">
              <form id="loginform">
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="Username"
                    className="form-control"
                    style={{marginTop:'1rem'}}
                    id="Username"
                    name="Username"
                    aria-describedby="Username"
                    placeholder="Enter username"
                    onChange={(event) => setUser(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label
                   style={{marginTop:'1rem'}}
                  >Password</label>
                  <input
                    type="password"
                    style={{marginTop:'1rem'}}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                </form>
                <div  style={{textAlign: 'center'}}>
                <button className="btn btn-primary"
                 style={{marginTop:'2rem'}}
                 onClick={handleValidation}>
                  Submit
                </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Login