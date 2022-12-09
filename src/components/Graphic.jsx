function Graphic () {
    const data = [
        {x: 0, y: 2},
        {x: 5, y: 22},
        {x: 10, y: 32},
        {x: 15, y: 36},
      ];
      return (<XYPlot width={400} height={300}>
        <XAxis showGrid={false} title="Days since Zombiepocalypse" />
        <YAxis title="Zombie Attacks"/>
        <LineChart
          data={data}
          x={d => d.x}
          y={d => d.y}
        />
      </XYPlot>
      )
};
