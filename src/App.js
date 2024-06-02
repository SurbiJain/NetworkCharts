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
        <div className="flex flex-col md:flex-row lg:flex-row">
          <div className="w-full md:w-50 lg:w-50">
            <Barchart1 />
          </div>
          <div className="w-full md:w-50 lg:w-50">
            <Barchart3 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
