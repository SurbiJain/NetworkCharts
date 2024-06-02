import "./App.css";
import Barchart1 from "./barchart/Barchart1";
import Barchart2 from "./barchart/Barchart2";
import Barchart3 from "./barchart/Barchart3";
import Header from "./header";

function App() {
  return (
    <div className="App text-white">
      <Header />

      <div className="container mx-auto">
        <Barchart2 />
        <div className="flex flex-row">
          <div className="basis-1/2">
          <Barchart1 />
          </div>
          <div className="basis-1/2">
        <Barchart3 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
