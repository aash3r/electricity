import moment from "moment";

const apiUrl = 'https://dashboard.elering.ee/api';

export async function getElectricityPrice({ to, selectedPeriod, from }) {
    const momentStart = selectedPeriod ? moment().subtract(selectedPeriod, 'month') : moment(from).startOf('day');
    const momentEnd = selectedPeriod ? moment().add(selectedPeriod, 'days') : moment(to).endOf('day');

    const start = momentStart.toISOString(true);
    const end = momentEnd.toISOString(true);

    const params = new URLSearchParams({
        start,
        end,
    });


    const responce = await fetch(`${apiUrl}/nps/price?${params}`);

    return await responce.json();
}


export async function getGasPrice({ to, selectedPeriod, from }) {
    const momentStart = selectedPeriod ? moment().subtract(selectedPeriod, 'month') : moment(from).startOf('day');
    const momentEnd = selectedPeriod ? moment() : moment(to).endOf('day');

    const start = momentStart.toISOString(true);
    const end = momentEnd.toISOString(true);

    const params = new URLSearchParams({
        start,
        end,
    });

    const response = await fetch(`${apiUrl}/gas-trade?${params}`);

    return await response.json();
}

export async function getCurrentGasPrice() {
    const country = 'EE';

    const response = await fetch(`${apiUrl}/gas-trade/${country}/latest`);


    return await response.json();
}