import  Offcanvas  from 'react-bootstrap/Offcanvas'
import DateForm from './DateForm';


function Sidebar({ show, handleClose, ...props}) {
return (
<Offcanvas show={show} onHide={handleClose}>
<Offcanvas.Header closeButton>
  <Offcanvas.Title>Date Search</Offcanvas.Title>
</Offcanvas.Header>
<Offcanvas.Body>
    <DateForm {...props} hideSideBar={handleClose} />
</Offcanvas.Body>
</Offcanvas>
)
}

export default Sidebar;