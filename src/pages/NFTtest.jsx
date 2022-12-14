import React from "react";


class NFTtest extends React.Component {
  constructor(props) {

      super(props);
      this.states={
        "url":"",
        "name":"",
        "description":"",
      }
      this.createProduct = this.createProduct.bind(this);
  }

  createProduct = async () => {
    var unix = Math.round(+new Date()/1000);
    const cost = this.props.data.web3.utils.toWei('0.01', 'ether')
    let a = await this.props.data.prizeInstance.methods.createPrize(this.state.name, this.state.description, unix, this.props.data.account[0], this.state.url).send({from : this.props.data.account[0], value:cost});
    console.log(a);
};


  render (){ return (
    <div style={{marginTop: '5rem'}}>
    <div className="container">
    <div style={{justifyContent: 'center', alignItems:'center', display:'flex'}}>
      <h1>Add new NFT to test</h1>
    </div>
    <div style={{justifyContent: 'center', alignItems:'center', display:'flex'}}>

    </div>
      <div style={{marginTop:'2.5rem'}} className="row d-flex justify-content-center">
        <div className="col-md-4">
          <form id="loginform">
            <div className="form-group">
              <label>Name</label>
              <input
                type="name"
                className="form-control"
                style={{marginTop:'0.5rem'}}
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
              >Description</label>
              <input
                type="description"
                style={{marginTop:'0.5rem'}}
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
                style={{marginTop:'0.5rem'}}
                className="form-control"
                id="url"
                placeholder="url"
                onChange={(event) => this.setState({url:event.target.value})}
              />
            </div>
            </form>
            <div  style={{textAlign: 'center'}}>
            <button className="btn btn-primary"
             style={{marginTop:'2rem',  background:'#5971c6'}}
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
export default NFTtest;
