import React from "react";
import "./App.css";
import "flowbite/dist/flowbite";
import Nav from "./components/nav";
import Feature from "./components/feature";
import Process from "./components/process";
import Brands from "./components/brands";
import Start from "./components/start";
import Footer from "./components/footer";
import Hero from "./components/hero";

function App() {
  React.useEffect(() => {
    const WOW = require("wowjs");
    const wow = new WOW.WOW({
      resetAnimation: true, // Reset animation on each view
    });
    wow.init();
  }, []);
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Feature />
      <Process />
      <Brands />
      <Start />
      <Footer />
    </div>
  );
}

export default App;
