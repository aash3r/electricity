import { useEffect, useState } from 'react';
import { NOW_TIMESTAMP } from '../constants';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

function PricePage() {
  const electricityPrice = useSelector((state) => state.electricityPrice);
  const gasCurrentPrice = useSelector((state) => state.gasCurrentPrice);
  const [currentElePrice, setCurrentElePrice] = useState(0);
  const [currentGasPrice, setCurrentGasPrice] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!electricityPrice) return;

    const current = electricityPrice.ee.find(
      (item) => item.timestamp === NOW_TIMESTAMP
    );
    if (pathname.includes('km')) {
      setCurrentElePrice(current?.price * 1.2 || 0);
      setCurrentGasPrice(parseFloat(gasCurrentPrice * 1.2).toFixed(2));
    } else {
      setCurrentElePrice(current?.price || 0);
      setCurrentGasPrice(parseFloat(gasCurrentPrice).toFixed(2));
    }
  }, [electricityPrice, pathname, gasCurrentPrice]);

  return (
    <div className='d-flex justify-content-between mt-5'>
      <div className='d-flex flex-column align-items-center'>
        <p>Electricity Current Hour Price</p>
        <h2>{currentElePrice}</h2>
        <h2>€/MWh</h2>
      </div>
      <div className='d-flex flex-column align-items-center'>
        <p>Gas Current Hour Price</p>
        <h2>{currentGasPrice}</h2>
        <h2>€/MWh</h2>
      </div>
    </div>
  );
}

export default PricePage;
