import NavBarComponent from '../components/NavBarComponent';
import ItemCard from '../components/ItemCard';
import Search from '../components/Search';
import React from "react";
import StoreAccount from './Login';
import Profile from './Profile';
import SendPrice from './SendPrices';
import Web3 from "web3";
import PriceTraceV1 from "../../truffle/client/src/contracts/PriceTraceV1.json";
import AddProduct from './AddProduct';
import regeneratorRuntime from "regenerator-runtime";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      priceInstance: null,
      web3: null,
      account: null,
      level: 0,
      logadoHeader: false,
      profilePage: false,
      loginPage: false,
      pricePage: false,
      existsStore:false,
      newprodPage:false,
      storename: "",
      storeid:-1,
      produtos: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.setState = this.setState.bind(this);
    //instance.methods.getUserStoreById ??
  }
  async componentDidMount() {

    if (!window.location.hash) {
      window.location = window.location + '#loaded';
      window.location.reload();
    }
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545", null, { transactionConfirmationBlocks: 1 });
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = PriceTraceV1.networks[networkId];
    const instance = new web3.eth.Contract(
      PriceTraceV1.abi,
      deployedNetwork.address
    );

    
    var l = -1
    l = await instance.methods.getUser(accounts[0]).call({from: web3.eth.accounts[0], gas:3000000});
    
    if(parseInt(l[0]) == 0){
      let a = await instance.methods.createUser(accounts[0]).send({from: accounts[0]});
      console.log("criando novamente", a);
      l = 1;
    }
    var store = await instance.methods.getUserStore(accounts[0]).call({from: web3.eth.accounts[0], gas:3000000});
    //console.log("AQUI");
    //console.log(instance.methods.getUserStoreById(0).call({from: web3.eth.accounts[0], gas:3000000}));
    //console.log("AQUI");
    console.log(store);
    if(store[1] !== ""){
      this.setState({storeid:store[0], storename:store[1], existsStore:true});
    }
    var p = await instance.methods.getProducts().call({from: accounts[0], gas:3000000});
    this.setState({
      priceInstance: instance,
      web3: web3,
      account: accounts,
      level: l,
      produtos:p
    });
    console.log(p);
    window.addEventListener('load', this.handleLoad);
    
  }

  

  render() {
    return (
      <>
      {console.log(this.state)}
        <NavBarComponent setStatus={this.setState} getState={this.state}
        />
        <div className='flex flex-col'>
          {this.state.loginPage ?
            <StoreAccount data={this.state} ></StoreAccount>
            :
            this.state.profilePage ?
              <><Profile data={this.state} />
              </>
              :
              this.state.pricePage ?
                <><SendPrice data={this.state} />
                </>
                :
                this.state.newprodPage ?
                <><AddProduct data={this.state} />
                </>
                :
                <>
                  <div className='text-7xl pt-4 pb-4' style={{marginTop:'3rem', marginLeft:'auto',
                  fontSize:'4rem', marginRight:'auto'}}> Search for the best offers </div>
                  <Search />
                  <div className='grid grid-cols-4'>
                    {this.state.produtos.map(item => {
                      return (
                        <ItemCard name={item[1]} price={item[2]} storeId={item['store_id']} 
                        user={this.state.account[0]}
                        getUserStoreById = {this.state.priceInstance.methods.getUserStoreById}
                          link={item[6]} image={null} description={item[5]} />
                      )
                    })}
                  </div>
                </>
          }
        </div>
      </>
    );
  }

}
export default Home;