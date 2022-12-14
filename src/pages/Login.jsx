
import React from "react";


class StoreAccount extends React.Component {
  constructor(props) {

      super(props);
      this.states={
        "url":"",
        "name":""
      }
      this.createStore = this.createStore.bind(this);
  }

  createStore = async () => {
    let a = await this.props.data.priceInstance.methods.createStore(this.state.name, this.state.url, this.props.data.account[0]).send({from : this.props.data.account[0]});
    console.log(a);
};


  render (){ return (
    <div style={{marginTop: '5rem'}}>
    <div className="container">
    <div style={{justifyContent: 'center', alignItems:'center', display:'flex', marginBottom: '4rem'}}>
      <h1>Create a store for your account</h1>
    </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-4">
          <form id="loginform">
            <div className="form-group">
              <label>Online store URL</label>
              <input
                type="url"
                className="form-control"
                style={{marginTop:'0.5rem'}}
                id="url"
                name="url"
                aria-describedby="url"
                placeholder="Enter url"
                onChange={(event) => this.setState({url:event.target.value})}
              />
            </div>
            <div className="form-group">
              <label
               style={{marginTop:'2rem'}}
              >Name</label>
              <input
                type="name"
                style={{marginTop:'0.5rem'}}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Store name"
                onChange={(event) => this.setState({name:event.target.value})}
              />
            </div>
            </form>
            <div  style={{textAlign: 'center'}}>
            <button className="btn btn-primary"
             style={{marginTop:'2rem', background:'#5971c6'}}
             onClick={this.createStore}>
              Submit
            </button>
            </div>
        </div>
      </div>
    </div>
  </div>
)}
}
export default StoreAccount;



