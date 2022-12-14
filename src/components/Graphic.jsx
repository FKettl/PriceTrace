import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useState, useEffect } from "react";
const data1 = [{date: '06/22', avgPrice: 400},
              {date: '07/22', avgPrice: 390.5},
              {date: '08/22', avgPrice: 410.3},
              {date: '09/22', avgPrice: 420},
              {date: '10/22', avgPrice: 370},
              {date: '11/22', avgPrice: 365},
              {date: '12/22', avgPrice: 380}];

function Graphic(props) {

  const [data, setData] = useState(data1);

  
  const getData = async () => {
    let a = await props.data.priceInstance.methods.getAveragePriceByStore(1, 16709).call({from :props.data.account[0]});
    console.log(a);
    var resposta = []
    a[3].forEach(element => 
      resposta.push({status:a[1][a[3].indexOf(element)], avg:parseInt(element)})
    );
    console.log(resposta);
    setData(resposta);
    
  }

  useEffect(() => {
    getData();
    console.log('jjj')
  }, []);
  
  return (
    
    <LineChart style={{marginTop:"1.5rem"}} width={600} height={300} data={data}>
      <Line type="monotone" dataKey="avg" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="status" />
      <YAxis />
    </LineChart>
  )
}

export default Graphic;