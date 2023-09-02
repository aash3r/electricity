import Badge from 'react-bootstrap/Badge'; 
import { NOW_TIMESTAMP } from '../constants'
import { LOW_ELE_PRICE } from '../constants'; 
function PriceInfo({ electricityPrice }) { 
 
    const currentPrice = electricityPrice?.ee.find(item => item.timestamp === NOW_TIMESTAMP); 
     
    return ( 
        <> 
            <h3>Price is: </h3> 
            {currentPrice?.price <= LOW_ELE_PRICE ? 
                <Badge bg="success">Low</Badge> : 
                <Badge bg="danger">High</Badge>} 
        </> 
    ); 
} 
 
export default PriceInfo;
