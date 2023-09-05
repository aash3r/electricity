import moment from "moment"; 
 
const apiUrl = 'https://dashboard.elering.ee/api'; 
 
export async function getElectricityPrice({to , selectedPeriod , from}) { 
    const momentStart = selectedPeriod ? moment().subtract('10', 'hours') : moment (from);
    const momentEnd = selectedPeriod ? moment().add (selectedPeriod): moment (to);

    const start = momentStart.toISOString(); 
    const end = momentEnd.toISOString(); 
 
    const params = new URLSearchParams({ 
        start, 
        end, 
    }); 
 
    //await для ожидания ответа с сервера. fetch делает запрос (перед фетч всегда авейт, потом генерируем ссылку) 
    const responce = await fetch(`${apiUrl}/nps/price?${params}`); 
 
    return await responce.json(); 
} 
 
 
export async function getGasPrice(to ,selectedPeriod, from){
    const momentStart = selectedPeriod ? moment().subtract(selectedPeriod, 'month') : moment(from);
    const momentEnd = selectedPeriod ? moment() : moment(to);

    const start = momentStart.toISOString();
    const end = momentEnd.toISOString();
    
    const params = new URLSearchParams({
        start,
        end,
    });

    const response = await fetch(`${apiUrl}/gas-trade?${params}`);

    return await response.json();
}

export async  function getCurrentGasPrice (){
    const country = 'EE';

    const response = await fetch(`${apiUrl}/gas-trade/${country}/latest`);


    return await response.json();
}