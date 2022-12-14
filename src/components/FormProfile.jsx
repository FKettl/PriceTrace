import React from "react";


class FormProfile extends React.Component {
  constructor(props) {

      super(props);
      this.state={
        "name":""
      }
      this.searchStore = this.searchStore.bind(this);
  }

  searchStore = async () => {
    let b = await this.props.datap.priceInstance.methods.getStoreById(this.state.name).call({from : this.props.datap.account[0]});
    let a = await this.props.datap.prizeInstance.methods.getUserNFTS(this.props.datap.account[0]).call({from : this.props.datap.account[0]});
    console.log(a);
    console.log(b);
    this.props.setData({
      badgets:a,
      slevel:b[2],
      sid:b[4]
    });
};


  render (){ return (
   
      <div className="row d-flex justify-content-center">
        <div className="col-md-4">
          <form id="loginform">
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
             onClick={this.searchStore}>
              Search
            </button>
            </div>
        </div>
      </div>
   
)}
}
export default FormProfile;



