import NavBarComponent from '../components/NavBarComponent';
import ItemCard from '../components/ItemCard';
import Search from '../components/Search';
import { useState, useEffect } from "react";
import Login from './Login';
import Profile from './Profile';


function Home() {
  const [logado, setLogado] = useState(false);
  const [logadoHeader, setLogadoHeader] = useState(false);
  const [loginPage, setLoginPage] = useState(false);
  const [profilePage, setprofilePage] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    setLoginPage(false);
    if (logado == true){
      setLogadoHeader(true);
    }
  }, [logado]);
  const loremIpsum = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
  const produtos = [{
    "key": 1,
    "name": "Air pod",
    "price": 144.99,
    'image': './assets/airpod',
    'link': '//youtube.com',
    'description': loremIpsum
  }, {
    "key": 2,
    "name": "Yellow Phone",
    "price": 75.00,
    'image': './assets/phone.jpg',
    'link': '//youtube.com',
    'description': loremIpsum
  }, {
    "key": 3,
    "name": "Camera",
    "price": 749.99,
    'image': './assets/photo',
    'link': '//youtube.com',
    'description': loremIpsum
  }, {
    "key": 4,
    "name": "Devpulse",
    "price": 4.99,
    'image': './assets/airpod',
    'link': '//youtube.com',
    'description': loremIpsum
  }, {
    "key": 5,
    "name": "Linklinks",
    "price": 14.99,
    'image': '../assets/phone',
    'link': '//youtube.com',
    'description': loremIpsum
  }, {
    "key": 6,
    "name": "Linklinks",
    "price": 14.99,
    'image': '../assets/photo',
    'link': '//youtube.com',
    'description': loremIpsum
  }, {
    "key": 7,
    "name": "Devpulse",
    "price": 4.99,
    'image': './assets/photo',
    'link': '//youtube.com',
    'description': loremIpsum
  }, {
    "key": 8,
    "name": "Linklinks",
    "price": 14.99,
    'image': '../assets/photo',
    'link': '//youtube.com',
    'description': loremIpsum
  }, {
    "key": 9,
    "name": "Linklinks",
    "price": 14.99,
    'image': '../asse<>ts/photo',
    'link': '//youtube.com',
    'description': loremIpsum
  },

    
  ] 
  return (
    <>
    <NavBarComponent logadoHeader={logadoHeader} setLoginPage={setLoginPage} 
    setLogado={setLogado} setProfilePage={setprofilePage} setLogadoHeader={setLogadoHeader}
    />
      <div className='flex flex-col'>
      {loginPage ?
      <Login setLogado={setLogado}
      setLoginPage={setLoginPage}
      setUserName={setUserName} ></Login>
      :
      profilePage ? 
      <><Profile userName={userName}/>
      </>
      :
      <>
      <div className='text-7xl m-auto pt-4 pb-4'> Procure as melhores ofertas </div>
      <Search />
      <div className='grid grid-cols-4'>
        {produtos.map(item => {return (
          <ItemCard name={item.name} price={item.price}
          link={item.link} image={item.image} description={item.description}/>
        )})}
      </div>
      </>
      }
      </div>
    </>
  )
}

export default Home
