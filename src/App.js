import React from "react";
import './generalstyle.css'
import Header from "./components/header/Header";
import Apresentation from "./components/apresentation/Apresentation";
import Benefits from "./components/benefits/Benefits";
import Productive from "./components/productive/Productive";
import Depositions from "./components/depositions/Depositions";

function App() {
  return (
    <>
      <Header />
      <Apresentation />
      <Benefits />
      <Productive />
      <Depositions />
    </>
  );
}

export default App;
