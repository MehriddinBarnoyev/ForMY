import Chart01 from "./Components/Chart01";
import Barchart from "./Components/BarChart";
import PolarChart from "./Components/Polar";

function App() {
  return (
    <div className="App container">
      <div className="row d-flex">
        <div className="col">
          <Chart01 />
        </div>
        <div className="col">
          <Barchart />
        </div>
        <div className="col">
          <PolarChart />
        </div>
        
      </div>
    </div>
  );
}

export default App;
