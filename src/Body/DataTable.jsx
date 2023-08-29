import Table from 'react-bootstrap/Table';

function DataTable({electricityPrice})

  const data = electricityPrice?.ee.map((priceEE , index) => {

    return {
      ee: priceEE,
      lv: electricityPrice?.lv[index],
      fi: electricityPrice?.fi[index],
      lt: electricityPrice?.lt[index],
  };
});
  
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
        {data.map(({ee, lt , lv ,fi},) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{moment.unix(ee.timestamp).format('DD.MM.YYYY HH:mm:ss')}</td>
            <td>{ee.price}</td>
            <td>{fi.price}</td>
            <td>{lv.price}</td>
            <td>{lt.price}</td>
          </tr>
        ))}
      </tbody>
    </Table>

export default DataTable;