import React from "react";
import './generalstyle.css'
import Header from "./components/header/Header";
import Apresentation from "./components/apresentation/Apresentation";
import Benefits from "./components/benefits/Benefits";
import Productive from "./components/productive/Productive";
import Depositions from "./components/depositions/Depositions";
import Form from "./components/form/Form";

function App() {
  return (
    <>
      <Header />
      <Apresentation />
      <Benefits />
      <Productive />
      <Depositions />
      <Form />
    </>
  );
}

export default App;
