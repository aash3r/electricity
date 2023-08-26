import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import  Container  from 'react-bootstrap/Container';

const periods = [
    {
        label: '1d' ,
    },
    {
        label: '2d',
    },
    {
        label: '3d',
    },
    {
        label: '4d',
    },
    {
        label: '6d',
    },
    {
        label: '8d',
    }
];

function Periods () {
    
    const [selected, setSelected] = useState(periods[0].label);
    
    return (
        <Container className='text-center my-2'>
            {periods.map(({label}) => 
            <Button
            className='mx-2'
             key={label} 
            variant='primary'
            active={selected === label}
            onClick={()=> setSelected(label)}
            >
            {label}
            </Button>
            )}
        </Container>
    )
}

export default Periods