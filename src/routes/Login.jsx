import { useNavigate } from 'react-router-dom'
import { useState } from "react";


function Login() {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");

    const handleValidation = () => {
        if (user === 'felipe' && password === '1234') {
            console.log(user)
            navigate('/home')
        }
      };
  
    return (
        <div style={{marginTop: '15rem'}}>
        <div className="container">
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
                <div  style={{textAlign: 'center'}}>
                <button type="submit" className="btn btn-primary"
                 style={{marginTop:'2rem'}}
                 onClick={handleValidation}>
                  Submit
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Login