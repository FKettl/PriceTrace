import React from "react";
import Login from './Login';
import SendPrice from './SendPrices';
import Web3 from "web3";
import PriceTraceV1 from "../../truffle/client/src/contracts/PriceTraceV1.json";


class AddProduct extends React.Component {
  constructor(props) {

      super(props);
      this.states={
        "url":"",
        "name":"",
        "description":"",
        "price":""
      }
      this.createProduct = this.createProduct.bind(this);
  }

  createProduct = async () => {
    var unix = Math.round(+new Date()/1000);
    let a = await this.props.data.priceInstance.methods.createProduct(this.state.name, this.state.price, unix, this.state.description, this.state.url, this.props.data.account[0]).send({from : this.props.data.account[0]});
    console.log(a);
};


  render (){ return (
    <div style={{marginTop: '10rem'}}>
    <div className="container">
    <h1>Add new product to your store</h1>
    <div style={{justifyContent: 'center', alignItems:'center', display:'flex', marginBottom: '4rem'}}>
      <h1>Add new product to your store</h1>
      <p>Remember to put the affiliated link to our platform as the URL</p>
    </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-4">
          <form id="loginform">
            <div className="form-group">
              <label>Name</label>
              <input
                type="name"
                className="form-control"
                style={{marginTop:'1rem'}}
                id="name"
                name="name"
                aria-describedby="name"
                placeholder="name"
                onChange={(event) => this.setState({name:event.target.value})}
              />
            </div>
            <div className="form-group">
              <label
               style={{marginTop:'1rem'}}
              >Price</label>
              <input
                type="price"
                style={{marginTop:'1rem'}}
                className="form-control"
                id="price"
                placeholder="price"
                onChange={(event) => this.setState({price:event.target.value})}
              />
            </div>
            <div className="form-group">
              <label
               style={{marginTop:'1rem'}}
              >Description</label>
              <input
                type="description"
                style={{marginTop:'1rem'}}
                className="form-control"
                id="description"
                placeholder="description"
                onChange={(event) => this.setState({description:event.target.value})}
              />
            </div>
            <div className="form-group">
              <label
               style={{marginTop:'1rem'}}
              >URL</label>
              <input
                type="url"
                style={{marginTop:'1rem'}}
                className="form-control"
                id="url"
                placeholder="url"
                onChange={(event) => this.setState({url:event.target.value})}
              />
            </div>
            </form>
            <div  style={{textAlign: 'center'}}>
            <button className="btn btn-primary"
             style={{marginTop:'2rem'}}
             onClick={this.createProduct}>
              Submit
            </button>
            </div>
        </div>
      </div>
    </div>
  </div>
)}
}
export default AddProduct;



