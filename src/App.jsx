import './styles.css'
import NavBarComponent from './components/NavBarComponent';
import ItemCard from './components/ItemCard';
import Search from './components/Search';

function App() {

  let produtos = [{
    "id": 1,
    "name": "Air pod",
    "price": 144.99,
    'image': './assets/airpod' 
  }, {
    "id": 2,
    "name": "Yellow Phone",
    "price": 75.00,
    'image': './assets/phone.jpg'
  }, {
    "id": 3,
    "name": "Camera",
    "price": 749.99,
    'image': './assets/photo'
  }, {
    "id": 4,
    "name": "Devpulse",
    "price": 4.99,
    'image': './assets/airpod'
  }, {
    "id": 5,
    "name": "Linklinks",
    "price": 14.99,
    'image': '../assets/phone'
  }, {
    "id": 6,
    "name": "Linklinks",
    "price": 14.99,
    'image': '../assets/photo'
  }, {
    "id": 7,
    "name": "Devpulse",
    "price": 4.99,
    'image': './assets/photo'
  }, {
    "id": 8,
    "name": "Linklinks",
    "price": 14.99,
    'image': '../assets/photo'
  }, {
    "id": 9,
    "name": "Linklinks",
    "price": 14.99,
    'image': '../assets/photo'
  },
    
  ] 

  return (
    <div className='flex flex-col'>
      <NavBarComponent />
      <div className='text-7xl m-auto pt-4 pb-4'> Procure as melhores ofertas </div>
      <Search />
      <div className='grid grid-cols-4'>
        {produtos.map(item => {return (
          <ItemCard name={item.name} price={item.price} image={item.image}/>
        )})}
      </div>
    </div>
  )
}

export default App
