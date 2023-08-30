import Table from 'react-bootstrap/Table';
import moment from 'moment';
import {useEffect, useState} from 'react'

function DataTable ({ electricityPrice, setCurrentElectricityPrice}) {

  const [nearestRowIndex, setNearestRowIndex] = useState(null);


  const data = electricityPrice?.ee.map((priceEE, index) => {
    return {
      ee:priceEE,
      lv: electricityPrice?.lv[index],
      fi: electricityPrice?.fi[index],
      lt: electricityPrice?.lt[index],
    }
  })

  useEffect(() => {

    const findNearestRow = () => {
      if (!electricityPrice || !electricityPrice.ee) return;
    
      const now = moment();
      let nearestTimeDiff = Infinity;
      let nearestIndex = null;
    
      electricityPrice.ee.forEach((entry, index) => {
        const entryTime = moment.unix(entry.timestamp);
        const diff = now.diff(entryTime);
    
        if (diff >= 0 && diff < nearestTimeDiff) {
          nearestTimeDiff = diff;
          nearestIndex = index;
        }
      });
    
      setNearestRowIndex(nearestIndex);
      setCurrentElectricityPrice(data[nearestIndex].ee.price)
    };
    

    findNearestRow();
  }, []);
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Date</th>
        <th>Estonia</th>
        <th>Finland</th>
        <th>Latvia</th>
        <th>Lituania</th>
      </tr>
    </thead>
    <tbody>
      {data.map(({ee, lt, lv ,fi}, index) => (
          <tr key={index}>
          <td className={index === nearestRowIndex ?  ('bg-info') : ('')}>{index}</td>
          <td className={index === nearestRowIndex ?  ('bg-info') : ('')}>{moment.unix(ee.timestamp).format('DD.MM.YYYY.HH:mm:ss')}</td>
          <td className={index === nearestRowIndex ?  ('bg-info') : ('')}>{ee.price}</td>
          <td className={index === nearestRowIndex ?  ('bg-info') : ('')}>{fi.price}</td>
          <td className={index === nearestRowIndex ?  ('bg-info') : ('')}>{lv.price}</td>
          <td className={index === nearestRowIndex ?  ('bg-info') : ('')}>{lt.price}</td>
        </tr>

      ))}
  
    </tbody>
  </Table>
  )
}

export default DataTable;