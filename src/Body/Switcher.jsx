import Button from "react-bootstrap/Button"; 
import ButtonGroup from "react-bootstrap/ButtonGroup"; 
import {ELE , GAS} from '../constants' 
import { setActiveEnergy } from "../services/stateService"; 
import { useDispatch, useSelector } from "react-redux"; 
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
 
function Switcher() { 
const activeEnergy = useSelector((state) => state.activeEnergy); 
const dispatch = useDispatch();
const { pathname } = useLocation();
const navigate = useNavigate();

    useEffect (() => {
      if(pathname.includes('gas'))  {
        dispatch(setActiveEnergy(GAS))
    }else{
       dispatch(setActiveEnergy(ELE))
    }
    }, [pathname , dispatch]);

  return ( 
    <ButtonGroup> 
      <Button 
      className="text-capitalize" 
        variant="secondary" 
        onClick={() => navigate('/ele')} 
        active={activeEnergy === ELE} 
      >{ELE} 
        </Button> 
      <Button 
      className="text-capitalize" 
        variant="secondary" 
        onClick={() => navigate('/gas')}
        active={activeEnergy === GAS} 
      >{GAS} 
      </Button> 
    </ButtonGroup> 
  ); 
} 
 
export default Switcher;