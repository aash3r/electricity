import Button from 'react-bootstrap/Button';
import  Container  from 'react-bootstrap/Container';
import {PERIODS} from '../constants'


function Periods({setShowSideBar, selectedPeriod, setSelectedPeriod}) {
    
    return (
        <Container className='text-center my-2'>
            {PERIODS.map(({label ,value}) => 
            <Button
            className='mx-2'
             key={label} 
            variant='primary'
            active={selectedPeriod === value}
            onClick={()=> setSelectedPeriod(value)}
            >
            {label}
            </Button>
            )}
            <Button
                className="mx-2"
                variant="primary"
                onClick={() => setShowSideBar(true)}
                >Custom</Button>
        </Container>
    )
}

export default Periods