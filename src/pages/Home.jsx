import NavBarComponent from '../components/NavBarComponent';
import ItemCard from '../components/ItemCard';
import Search from '../components/Search';
import { useState, useEffect } from "react";
import Login from './Login';


function Home() {
  const [logado, setLogado] = useState(false);
  const [logadoHeader, setLogadoHeader] = useState(false);
  const [loginPage, setLoginPage] = useState(false);;
  const chamarLoginPage = () => setLoginPage(true);
  const tirarLoginPage = () => setLoginPage(false);

  useEffect(() => {
    setLoginPage(false);
    if (logado == true){
      setLogadoHeader(true);
    }
  }, [logado]);

  const produtos = [{
    "key": 1,
    "name": "Air pod",
    "price": 144.99,
    'image': './assets/airpod' 
  }, {
    "key": 2,
    "name": "Yellow Phone",
    "price": 75.00,
    'image': './assets/phone.jpg'
  }, {
    "key": 3,
    "name": "Camera",
    "price": 749.99,
    'image': './assets/photo'
  }, {
    "key": 4,
    "name": "Devpulse",
    "price": 4.99,
    'image': './assets/airpod'
  }, {
    "key": 5,
    "name": "Linklinks",
    "price": 14.99,
    'image': '../assets/phone'
  }, {
    "key": 6,
    "name": "Linklinks",
    "price": 14.99,
    'image': '../assets/photo'
  }, {
    "key": 7,
    "name": "Devpulse",
    "price": 4.99,
    'image': './assets/photo'
  }, {
    "key": 8,
    "name": "Linklinks",
    "price": 14.99,
    'image': '../assets/photo'
  }, {
    "key": 9,
    "name": "Linklinks",
    "price": 14.99,
    'image': '../assets/photo'
  },
    
  ] 

  return (
    <>
    <NavBarComponent logadoHeader={logadoHeader} chamarLoginPage={chamarLoginPage} tirarLoginPage={tirarLoginPage} 
    setLogado={setLogado} setLogadoHeader={setLogadoHeader}/>
      <div className='flex flex-col'>
        
        
      {loginPage ?
      <Login setLogado={setLogado}
      setLoginPage={setLoginPage} ></Login>
      :
      <>
      <div className='text-7xl m-auto pt-4 pb-4'> Procure as melhores ofertas </div>
      <Search />
      <div className='grid grid-cols-4'>
        {produtos.map(item => {return (
          <ItemCard name={item.name} price={item.price} image={item.image}/>
        )})}
      </div>
        </>
      }
      </div>
    </>
  )
}

export default Home