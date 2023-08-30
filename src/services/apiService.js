import moment from 'moment';

const apiUrl = 'https://dashboard.elering.ee/api';



export async function getElectricityPrice(selectedPeriod) {
    const start = moment().subtract('10' , 'hours').toISOString();
    const end = moment().add(selectedPeriod, 'days').toISOString();

    const params = new URLSearchParams({
        start,
        end,
    });

    const response = await fetch(`${apiUrl}/nps/price?${params}`);

    return await response.json();
}

export async function getGasPrice(selectedPeriod) {
    const start = moment().subtract('10' , 'hours').toISOString();
    const end = moment().add(selectedPeriod, 'days').toISOString();

    const params = new URLSearchParams({
        start,
        end,
    });

    const response = await fetch(`${apiUrl}/gas-trade?${params}`)


    return await response.json();
}