import { useState } from "react";
import Header from "./Header";
import Chart from "./Chart";
import {ELE} from './constants';
import "./body.scss";

function Body() {

  const [activeEnergy, setActiveEnergy] = useState(ELE);
  
  return (
    <>
      <Header 
       activeEnergy={activeEnergy}
       setActiveEnergy={setActiveEnergy} />

      <Chart activeEnergy={activeEnergy}/>
    </>
  );
}

export default Body;
