import "./App.css";
import "flowbite/dist/flowbite";
import Nav from "./components/nav";
import Feature from "./components/feature";
import Process from "./components/process";
import Brands from "./components/brands";
import Start from "./components/start";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Feature />
      <Process />
      <Brands />
      <Start />
      <Footer />
    </div>
  );
}

export default App;
