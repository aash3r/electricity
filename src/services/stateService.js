import { configureStore, createAction, createReducer } from "@reduxjs/toolkit"; 
import { ELE, CHART, PERIODS } from '../constants'; 
 
const initialState = { 
    electricityPrice: null, 
    activeEnergy: ELE, 
    dataType : CHART , 
    selectedPeriod : PERIODS[0].value, 
    gasPrice : null , 
    gasCurrentPrice : 0, 
}; 
 
export const setElectricityPrice = createAction('setElectricityPrice'); 
export const setActiveEnergy = createAction('setActiveEnergy'); 
export const setDataType = createAction ('setDataType'); 
export const setSelectedPeriod = createAction ('setSelectedPeriod'); 
export const setGasPrice = createAction ('setGasPrice'); 
export const setGasCurrentPrice = createAction ('setGasCurrentPrice'); 
 
const reducer = createReducer(initialState, (builder) => { 
    builder 
 
    .addCase(setElectricityPrice, (state, action) => { 
        state.electricityPrice = action.payload; 
    }) 
    .addCase(setActiveEnergy, (state, action) => { 
        state.activeEnergy = action.payload; 
    }) 
    .addCase(setDataType ,  (state,action) => { 
        state.dataType = action.payload; })
 
    .addCase(setSelectedPeriod, (state, action) => { 
        state.selectedPeriod = action.payload; 
    }) 
    .addCase(setGasPrice, (state, action) => { 
        state.gasPrice = action.payload; 
    }) 
    .addCase(setGasCurrentPrice, (state, action) => { 
        state.gasCurrentPrice = action.payload; 
    }) 
     
}); 
 
export const store = configureStore({ reducer });