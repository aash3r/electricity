import { useState } from "react";
import Header from "./Header";
import Chart from "./Chart";
import DataTable from "./DataTable";
import {ELE , CHART} from '../constants';
import "./Body.scss";

function Body({dataType}) {

  const [activeEnergy, setActiveEnergy] = useState(ELE);
  
  return (
    <>
      <Header 
       activeEnergy={activeEnergy}
       setActiveEnergy={setActiveEnergy} />
      
      {dataType === 'CHART' ? <Chart activeEnergy={activeEnergy}/> : <DataTable/> }
       
    </>
  );
}

export default Body;
