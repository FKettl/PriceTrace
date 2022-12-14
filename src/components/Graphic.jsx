import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
              {name: 'Page B', uv: 100, pv: 2400, amt: 2400},
              {name: 'Page C', uv: 300, pv: 2400, amt: 2400},
              {name: 'Page D', uv: 50, pv: 2400, amt: 2400},
              {name: 'Page E', uv: 0, pv: 2400, amt: 2400},
              {name: 'Page F', uv: 600, pv: 2400, amt: 2400},
              {name: 'Page G', uv: 150, pv: 2400, amt: 2400}];

function Graphic() {
  return (
    <LineChart style={{marginTop:"1.5rem"}} width={600} height={300} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  )
}

export default Graphic;