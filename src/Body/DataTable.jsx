import Table from 'react-bootstrap/Table';
import moment from 'moment';
import { NOW_TIMESTAMP, ELE, GAS } from '../constants';
import {useState,useEffect} from 'react';

function DataTable({electricityPrice,gasPrice,activeEnergy}) {
  
  const [chartData, setChartData] = useState([]);

  useEffect(()=>{
    if(!electricityPrice || !gasPrice) return;

    const energy = {
      [ELE]: {
        data:electricityPrice,
        format:'HH',
        main:'ee',
      },
      [GAS]: {
      data:gasPrice,
      format:'DD',
      main:'common',
      }
    }

    const mainData= energy[activeEnergy].data;
    const main = energy[activeEnergy].main;

    const data = mainData[main]
    .map( (_,index) => {
      return{
        ee: mainData.ee[index],
        lv: mainData.lv[index],
        fi: mainData.fi[index],
        lt: mainData.lt[index],
        date: mainData[main][index],
      }
    })
    
    setChartData(data);
  },[electricityPrice,gasPrice,activeEnergy]);

  
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Estonia</th>
          <th>Finland</th>
          <th>Lituania</th>
          <th>Latvia</th>
        </tr>
      </thead>
      <tbody>
       {chartData.map(({ee, lt, lv, fi,date},index) => (
        <tr className={ ee?.timestamp === NOW_TIMESTAMP ?  "activeline" :null}  key={index} >
          <td>{index}</td>
          <td>{moment.unix(date.timestamp).format('DD.MM.YYYY HH:mm:ss')}</td>
          <td>{ee?.price}</td>
          <td>{fi?.price}</td>
          <td>{lt?.price}</td>
          <td>{lv?.price}</td>
        </tr>
       ))}
      </tbody>
    </Table>
  );
}

export default DataTable;