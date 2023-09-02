import moment from "moment"; 
 
const apiUrl = 'https://dashboard.elering.ee/api'; 
 
export async function getElectricityPrice(selectedPeriod) { 
    const start = moment().subtract('10', 'hours').toISOString(); 
    const end = moment().add(selectedPeriod, 'days').toISOString(); 
 
    const params = new URLSearchParams({ 
        start, 
        end, 
    }); 
 
    //await для ожидания ответа с сервера. fetch делает запрос (перед фетч всегда авейт, потом генерируем ссылку) 
    const responce = await fetch(`${apiUrl}/nps/price?${params}`); 
 
    return await responce.json(); 
} 
 
 
export async function getGasPrice(selectedPeriod) { 
    const start = moment().subtract(selectedPeriod, 'month').toISOString(); 
    const end = moment().toISOString(); 
 
    const params = new URLSearchParams({ 
        start, 
        end, 
    }); 
    const responce = await fetch(`${apiUrl}/gas-trade?${params}`); 
    return await responce.json(); 
}