import { useEffect, useState } from "react"; 
import { NOW_TIMESTAMP } from "../constants"; 
 
function Price({ electricityPrice }) { 
    const [currentPrice, setCurrentPrice] = useState(0); 
 
    useEffect(() => { 
        if (!electricityPrice) return; 
         
 
        const { price } = electricityPrice?.ee.find(item => item.timestamp === NOW_TIMESTAMP); 
        setCurrentPrice(price); 
    }, [electricityPrice]); 
    return ( 
        <> 
            <h2>{currentPrice}</h2> 
            <div>sents/kw</div> 
        </> 
    ) 
} 
 
export default Price;