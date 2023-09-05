import Header from "./Header";
import Chart from "./Chart";
import "./Body.scss";
import { useState, useEffect } from "react";
import { CHART } from "../constants";
import DataTable from "./DataTable";
import ErrorModal from "./ErrorModal";
import {
  getElectricityPrice,
  getGasPrice,
  getCurrentGasPrice,
} from "../services/apiService";

function Body({
  dataType,
  selectedPeriod,
  activeEnergy,
  setActiveEnergy,
  electricityPrice,
  setElectricityPrice,
  gasPrice,
  setGasPrice,
  gasCurrentPrice,
  setGasCurrentPrice,
}) {
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    getElectricityPrice({selectedPeriod})
      .then((data) => {
        console.log("ele", data);
        if (!data.success) {
          throw data.messages[0];
        }
        setElectricityPrice(data.data);
      })

      .catch(setErrorMessage);

    getGasPrice({selectedPeriod})
      .then((data) => {
        console.log("gas", data);
        if (!data.success) {
          throw data.messages[0];
        }
        setGasPrice(data.data);
      })
      .catch(setErrorMessage);
  }, [selectedPeriod, setGasPrice, setElectricityPrice]);

  useEffect(() => {
    getCurrentGasPrice()
      .then((data) => {
        console.log("gas", data);
        if (!data.success) {
          throw data.messages[0];
        }
        setGasCurrentPrice(data.data[0].price);
      })
      .catch(setErrorMessage);
  }, [setGasCurrentPrice]);

  return (
    <>
      <Header
        activeEnergy={activeEnergy}
        setActiveEnergy={setActiveEnergy}
        electricityPrice={electricityPrice}
        gasCurrentPrice={gasCurrentPrice}
      />
      {dataType === CHART ? (
        <Chart
          activeEnergy={activeEnergy}
          electricityPrice={electricityPrice}
          gasPrice={gasPrice}
          
        />
      ) : (
        <DataTable
          electricityPrice={electricityPrice}
          gasPrice={gasPrice}
          activeEnergy={activeEnergy}
        />
      )}
      <ErrorModal
        errorMessage={errorMessage}
        handleClose={() => setErrorMessage(null)}
      />
    </>
  );
}

export default Body;
