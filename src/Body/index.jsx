import Header from "./Header"; 
import Chart from "./Chart"; 
import "./Body.scss"; 
import { useState, useEffect } from "react"; 
import { CHART } from "../constants"; 
import DataTable from "./DataTable"; 
import ErrorModal from "./ErrorModal"; 
import { setElectricityPrice,  setGasPrice , setGasCurrentPrice, setActiveEnergy } from "../services/stateService"; 
import { useDispatch, useSelector } from "react-redux"; 
import {getElectricityPrice,getGasPrice,getCurrentGasPrice,} from "../services/apiService"; 
 
 
function Body() { 
  const gasPrice = useSelector ((state) => state.gasPrice); 
  const activeEnergy = useSelector ((state) => state.activeEnergy); 
  const gasCurrentPrice = useSelector ((state) => state.gasCurrentPrice); 
  const dispatch = useDispatch(); 
  const dataType = useSelector((state) => state.dataType); 
  const selectedPeriod = useSelector((state) => state.selectedPeriod); 
  const [errorMessage, setErrorMessage] = useState(null); 
 
 
  useEffect(() => { 
  getElectricityPrice({ selectedPeriod }) 
      .then((data) => { 
        console.log("ele", data); 
        if (!data.success) { 
          throw data.messages[0]; 
        } 
        dispatch(setElectricityPrice(data.data)); 
      }).catch(setErrorMessage); 
      
 
    getGasPrice({ selectedPeriod }) 
      .then((data) => { 
        console.log("gas", data); 
        if (!data.success) { 
          throw data.messages[0]; 
        } 
        dispatch(setGasPrice(data.data)); 
      }) 
      .catch(setErrorMessage); 
  }, [dispatch , selectedPeriod]); 
 
  useEffect(() => { 
  getCurrentGasPrice().then((data) => { 
        // console.log("gas", data); 
        if (!data.success) { 
          throw data.messages[0]; 
        } 
        dispatch(setGasCurrentPrice(data.data[0].price)); 
      }).catch(setErrorMessage); 
  }, [dispatch]); 
 
  return ( 
    <> 
      <Header 
      activeEnergy={activeEnergy} 
      setActiveEnergy={setActiveEnergy} 
      gasCurrentPrice={gasCurrentPrice} /> 
      {dataType === CHART ? ( 
        <Chart/> 
      ) : ( 
        <DataTable 
        activeEnergy={activeEnergy} 
        gasPrice={gasPrice} 
        setGasPrice={setGasPrice} /> 
      )} 
      <ErrorModal 
        errorMessage={errorMessage} 
        handleClose={() => setErrorMessage(null)} 
      /> 
    </> 
  ); 
} 
 
export default Body;