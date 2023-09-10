import Header from "./Header";
import Chart from "./Chart";
import "./Body.scss";
import { CHART } from "../constants";
import DataTable from "./DataTable";
import { useSelector } from "react-redux";

function Body() {
  const dataType = useSelector((state) => state.dataType);


  return (
    <>
      <Header />
      {dataType === CHART ? <Chart /> : <DataTable />}
    </>
  );
}

export default Body;
