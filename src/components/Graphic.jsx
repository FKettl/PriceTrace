import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const data = [{date: '06/22', avgPrice: 400},
              {date: '07/22', avgPrice: 390.5},
              {date: '08/22', avgPrice: 410.3},
              {date: '09/22', avgPrice: 420},
              {date: '10/22', avgPrice: 370},
              {date: '11/22', avgPrice: 365},
              {date: '12/22', avgPrice: 380}];

function Graphic() {

  const timestampToDateString = (timeStamp) => {
    const date= new Date(timeStamp);
    let dateFormat = (date.getMonth()+1).toString()+"/"+date.getFullYear().toString().slice(0,2);
    return dateFormat
    
  }
  return (
    <LineChart style={{marginTop:"1.5rem"}} width={600} height={300} data={data}>
      <Line type="monotone" dataKey="avgPrice" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="date" />
      <YAxis />
    </LineChart>
  )
}

export default Graphic;