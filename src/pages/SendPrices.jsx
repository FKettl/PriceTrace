import PriceTraceV1 from "../../truffle/client/src/contracts/PriceTraceV1.json";
import React from 'react';
import Web3 from "web3";

class SendPrice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  avgprice: "", 
                        report: "", 
                        category: "", 
                        store: ""
                    };
        this.sendBlockchain = this.sendBlockchain.bind(this);
        this.setAvgPrice = this.setAvgPrice.bind(this);
        this.setReport = this.setReport.bind(this);
        this.setCategory = this.setCategory.bind(this);
        this.setStore = this.setStore.bind(this);
    }
    
    sendBlockchain = async () => {
        var timenow = Math.floor(Date.now() / 1000);
        await this.props.data.priceInstance.methods.createPriceStatus(this.state.report, timenow, this.state.avgprice, this.state.category, this.state.store).send({from : this.props.data.account[0]})
        alert("Sucesso");
    };

    setAvgPrice = (e) => {
        this.setState(state => ({
            avgprice:e
          }))
    }
    setReport= (e) => {
        this.setState(state => ({
            report:e
          }))
    }
    setStore= (e) => {
        this.setState(state => ({
            store:e
          }))
    }
    setCategory= (e) => {
        this.setState(state => ({
            category:e
          }))
    }

    render() {
        return (
            <div style={{ marginTop: '5rem' }}>
                <div className="container">
                    <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginBottom: '2rem' }}>
                        <h1>Send Price To Blockchain</h1>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-4">
                            <form id="loginform">
                                <div className="form-group">
                                    <label>Report description</label>
                                    <input
                                        type="Report"
                                        className="form-control"
                                        style={{ marginTop: '1rem' }}
                                        id="Report"
                                        name="Report"
                                        aria-describedby="Report"
                                        placeholder="Report"
                                        onChange={(event) => this.setReport(event.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label
                                        style={{ marginTop: '1rem' }}
                                    >Avarage price of the category</label>
                                    <input
                                        type="avgprice"
                                        style={{ marginTop: '1rem' }}
                                        className="form-control"
                                        id="avgprice"
                                        placeholder="avgprice"
                                        onChange={(event) => this.setAvgPrice(event.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label
                                        style={{ marginTop: '1rem' }}
                                    >Category id</label>
                                    <input
                                        type="idcategory"
                                        style={{ marginTop: '1rem' }}
                                        className="form-control"
                                        id="idcategory"
                                        placeholder="idcategory"
                                        onChange={(event) => this.setCategory(event.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label
                                        style={{ marginTop: '1rem' }}
                                    >Story id</label>
                                    <input
                                        type="idstore"
                                        style={{ marginTop: '1rem' }}
                                        className="form-control"
                                        id="idstore"
                                        placeholder="idstore"
                                        onChange={(event) => this.setStore(event.target.value)}
                                    />
                                </div>
                            </form>
                            <div style={{ textAlign: 'center' }}>
                                <button className="btn btn-primary"
                                    style={{ marginTop: '2rem', background:'#5971c6' }}
                                    onClick={this.sendBlockchain}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SendPrice;

