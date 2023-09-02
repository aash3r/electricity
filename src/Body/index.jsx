import { useState, useEffect } from 'react'; 
import Header from './Header'; 
import './Body.scss' 
import { getElectricityPrice, getGasPrice } from '../services/apiService'; 
import ErrorModal from './ErrorModal'; 
import ShowTable from './ShowTable';
// import Chart from './Chart'; 
// import PriceTable from './PriceTable'; 
 
function Body({ selectedPeriod,activeEnergy,setActiveEnergy }) { 
 
    const [electricityPrice, setElectricityPrice] = useState(null); 
    const [gasPrice, setGasPrice] = useState(null); 
    const [errorMessage, setErrorMessage] = useState(null); 

    useEffect(() => { 
 
        getElectricityPrice(selectedPeriod).then(data => { 
            console.log('ele', data); 
            if (!data.success) { 
                throw data.messages[0]; 
            } 
            setElectricityPrice(data.data); 
 
        }) 
            .catch(setErrorMessage); 
        getGasPrice(selectedPeriod).then(data => { 
            console.log('gas', data); 
            if (!data.success) { 
                throw data.messages[0]; 
            } 
            setGasPrice(data.data); 
        }) 
            .catch(setErrorMessage); 
 
    }, [selectedPeriod]); 
 
    return ( 
        <> 
            <Header activeEnergy={activeEnergy} 
                setActiveEnergy={setActiveEnergy} 
                electricityPrice={electricityPrice} /> 
 
            <ShowTable activeEnergy={activeEnergy} 
                electricityPrice={electricityPrice} 
                setElectricityPrice={setElectricityPrice} 
                gasPrice={gasPrice} 
                setGasPrice={setGasPrice} /> 
 
            <ErrorModal errorMessage={errorMessage} handleClose={() => setErrorMessage(null)} /> 
 
            {/* {dataType==='chart' ? <Chart activeEnergy={activeEnergy}/> : <PriceTable/>} */} 
        </> 
    ); 
} 
export default Body;