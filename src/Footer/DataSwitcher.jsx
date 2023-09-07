import Form from "react-bootstrap/Form"; 
import  Container  from "react-bootstrap/Container"; 
import {CHART , TABLE} from '../constants' 
import { useSelector, useDispatch} from "react-redux"; 
import { setDataType } from "../services/stateService"; 
 
function DataSwithcer() { 
  const dispatch = useDispatch(); 
  const dataType = useSelector((state) => state.dataType) 
  return ( 
 
    <Container className='text-center my-2'> 
      <Form.Check 
        inline 
        label="Chart" 
        name="group1" 
        type="radio" 
        id={`inline-1`} 
        onClick={() => dispatch(setDataType(CHART))} 
        defaultChecked={dataType === CHART} 
      /> 
      <Form.Check 
        inline 
        label="Table" 
        name="group1" 
        type="radio" 
        id={`inline-2`} 
        onClick={() => dispatch(setDataType(TABLE))} 
      /> 
    </Container> 
  ); 
} 
 
export default DataSwithcer;