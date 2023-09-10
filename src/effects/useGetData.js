import { useEffect } from "react";
import { getElectricityPrice , getGasPrice , getCurrentGasPrice } from "../services/apiService";
import { useDispatch, useSelector } from "react-redux";
import { setElectricityPrice, setGasPrice , setGasCurrentPrice, setErrorMessage } from "../services/stateService";
const useGetData = () => {
    const dispatch = useDispatch();
    const selectedPeriod = useSelector(state => state.selectedPeriod);

  useEffect(() => {
    getElectricityPrice({ selectedPeriod })
      .then((data) => {
        console.log("ele", data);
        if (!data.success) {
          throw data.messages[0];
        }
        dispatch(setElectricityPrice(data.data));
      })
      .catch((error) => dispatch(setErrorMessage(error)));

    getGasPrice({ selectedPeriod })
      .then((data) => {
        console.log("gas", data);
        if (!data.success) {
          throw data.messages[0];
        }
        dispatch(setGasPrice(data.data));
      })
      .catch((error) => dispatch(setErrorMessage(error)));
  }, [dispatch, selectedPeriod]);

  useEffect(() => {
    getCurrentGasPrice()
      .then((data) => {
        if (!data.success) {
          throw data.messages[0];
        }
        dispatch(setGasCurrentPrice(data.data[0].price));
      })
      .catch((error) => dispatch(setErrorMessage(error)));
  }, [dispatch]);
};

export default useGetData;
