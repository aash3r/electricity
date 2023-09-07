import { useState } from 'react';  
import Button from 'react-bootstrap/Button';  
import PriceTable from './DataTable';  
import Chart from './Chart';  
import { ButtonGroup } from 'react-bootstrap';  
  
// {activeEnergy, electricityPrice,setElectricityPrice,gasPrice,setGasPrice}  
function ShowTable(props) {  
    const table = <PriceTable {...props} />;  
    const chart = <Chart {...props} />;  
  
    const [tableOrChart, setTableOrChart] = useState(false);  
  
    return (  
        <>  
            <ButtonGroup className='my-5'>  
                <Button onClick={() => setTableOrChart(true)}>  
                    Table  
                </Button>  
                <Button onClick={() => setTableOrChart(false)}>  
                    Chart  
                </Button>  
            </ButtonGroup>  
            {tableOrChart ? table : chart}  
        </>  
    );  
}  
export default ShowTable;