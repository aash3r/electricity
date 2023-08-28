import { useState, useEffect } from "react";
import Header from "./Header";
import Chart from "./Chart";
import DataTable from "./DataTable";
import {ELE , CHART} from '../constants';
import "./Body.scss";
import { getElectricityPrice, getGasPrice } from "../services/apiService";

function Body({dataType, selectedPeriod}) {

  const [activeEnergy, setActiveEnergy] = useState(ELE);
  const [electricityPrice, setElectricityPrice] = useState(null);
  const [gasPrice , setGasPrice] = useState(null);

  useEffect(() => {
    getElectricityPrice(selectedPeriod).then(data => {
      console.log(data);
      setElectricityPrice(data.data);
    })
    getGasPrice(selectedPeriod).then(data => {
      console.log('gas', data);
      setGasPrice(data.data)
    })
  }, [selectedPeriod])
  
  return (
    <>
      <Header 
       activeEnergy={activeEnergy}
       setActiveEnergy={setActiveEnergy} />
      
      {dataType === CHART ? 
      <Chart
       activeEnergy={activeEnergy}
       electricityPrice={electricityPrice}
       gasPrice={gasPrice}
        />
         : <DataTable electricityPrice={electricityPrice}
         gasPrice={gasPrice}
         /> }
       
    </>
  );
}

export default Body;
