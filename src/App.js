import React from "react";
import './generalstyle.css'
import Header from "./components/header/Header";
import Apresentation from "./components/apresentation/Apresentation";
import Benefits from "./components/benefits/Benefits";

function App() {
  return (
    <>
      <Header />
      <Apresentation />
      <Benefits />
    </>
  );
}

export default App;
