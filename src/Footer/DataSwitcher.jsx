import Form from "react-bootstrap/Form"; 
import  Container  from "react-bootstrap/Container"; 
import {CHART , TABLE} from '../constants' 
import { useSelector, useDispatch} from "react-redux"; 
import { setDataType } from "../services/stateService"; 
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
function DataSwithcer() { 
  const dispatch = useDispatch(); 
  const dataType = useSelector((state) => state.dataType) 
  const { dataType: dataTypeParam } = useParams();
  const navigate = useNavigate()
  const { pathname } = useLocation();

  useEffect(() => {
      if(dataTypeParam === 'table') {
        dispatch(setDataType(TABLE));
      } else {
        dispatch(setDataType(CHART));
      }
  }, [dataTypeParam , dispatch]);

  const handleChart = () => {
      navigate((pathname.includes('/gas') ? '/gas' : '/ele') + '/chart' )
  }

  const hanldeTable = () => {
    navigate((pathname.includes('/gas') ? '/gas' : '/ele') + '/table' )
}
  return ( 
 
    <Container className='text-center my-2'> 
      <Form.Check 
        inline 
        label="Chart" 
        name="group1" 
        type="radio" 
        id={`inline-1`} 
        onChange={handleChart}
        checked={dataType === CHART} 
      /> 
      <Form.Check 
        inline 
        label="Table" 
        name="group1" 
        type="radio" 
        id={`inline-2`} 
        onChange={hanldeTable}
        checked={dataType === TABLE} 
      /> 
    </Container> 
  ); 
} 
 
export default DataSwithcer;