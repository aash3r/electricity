import { useState, useEffect } from "react";
import Header from "./Header";
import Chart from "./Chart";
import DataTable from "./DataTable";
import ErrorModal from "./ErrorModal";
import {ELE , CHART} from '../constants';
import "./Body.scss";
import { getElectricityPrice, getGasPrice } from "../services/apiService";



function Body({dataType, selectedPeriod}) {

  const [activeEnergy, setActiveEnergy] = useState(ELE);
  const [electricityPrice, setElectricityPrice] = useState(null);
  const [gasPrice , setGasPrice] = useState(null);
  const [errorMessage , setErrorMessage] = useState(null);




  useEffect(() => {
      getElectricityPrice(selectedPeriod).then(data => {
        console.log('ele' , data);
        if(!data.success) {
            throw data.messages[0];
        }
        setElectricityPrice(data.data);
      })
        .catch(setErrorMessage);



      getGasPrice(selectedPeriod).then(data => {
        console.log('gas', data);
        if(!data.success) {
          throw data.messages[0];
        }
        setGasPrice(data.data)
      })
      .catch(setErrorMessage);
  
      ;

      
    
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
        <ErrorModal errorMessage={errorMessage} handleClose={() => setErrorMessage(null)}/>
    </>
  );
}

export default Body;
