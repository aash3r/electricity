import Form from "react-bootstrap/Form";
import  Container  from "react-bootstrap/Container";
import {CHART , TABLE} from '../constants'

function DataSwithcer({ dataType , setDataType}) {
  return (

    <Container className='text-center my-2'>
      <Form.Check
        inline
        label="Chart"
        name="group1"
        type="radio"
        id={`inline-1`}
        onClick={() => setDataType(CHART)}
        defaultChecked={dataType === CHART}
      />
      <Form.Check
        inline
        label="Table"
        name="group1"
        type="radio"
        id={`inline-2`}
        onClick={() => setDataType(TABLE)}
      />
    </Container>
  );
}

export default DataSwithcer;
