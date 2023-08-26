import Badge from "react-bootstrap/Badge";

const price = 'low';

function PriceInfo() {

  return (
    <>
      <h3>Price is:</h3>
      {price === 'low'? <Badge bg="success">Low</Badge> : <Badge bg="danger">High</Badge>}
      
    </>
  );
}

export default PriceInfo;
