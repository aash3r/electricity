import Button from "react-bootstrap/Button"; 
import Form from "react-bootstrap/Form"; 
import { getElectricityPrice, getGasPrice, } from '../services/apiService' 
import { setElectricityPrice, setGasPrice, setErrorMessage } from "../services/stateService"; 
import { useDispatch } from "react-redux"; 
 
 
function DateForm({  
    hideSideBar, 
  }) {  
    const  dispatch = useDispatch(); 
 
 
  const handleSubmit = async (event) => { 
    event.preventDefault(); 
 
    const from = event.target.from.value; 
    const to = event.target.to.value; 
 
    try { 
      const [dataEle , dataGas] = await Promise.all([ 
        getElectricityPrice({to , from}), 
        getGasPrice({to, from}), 
 
      ]); 
 
      if(![dataEle, dataGas].find(data => data.success)) { 
        throw dataEle.messages[0] 
      } 
      dispatch (setElectricityPrice(dataEle.data)); 
      dispatch (setGasPrice(dataGas.data)); 
    } catch(error) { 
      dispatch(setErrorMessage(error)); 
    }  finally {
      hideSideBar();
    }
 
 
    console.log(from, to); 
 
  }; 
 
  return ( 
    <> 
     
    <Form onSubmit={handleSubmit}> 
      <Form.Group className="mb-3"> 
        <Form.Label>From</Form.Label> 
        <Form.Control type="date" name="from"  required/> 
      </Form.Group> 
 
      <Form.Group className="mb-3"> 
        <Form.Label>To</Form.Label> 
        <Form.Control type="date" name="to" required /> 
      </Form.Group> 
 
      <Button variant="primary" type="submit"> 
        Search 
      </Button> 
    </Form> 
    </> 
  ); 
} 
   
 
export default DateForm;