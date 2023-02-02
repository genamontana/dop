import React from 'react';
import {City} from './City';
import {BanknotesType, MoneyType} from './App';

type CountryPropsType = {
    data: MoneyType[]
    setFilterValue: (filterValue: BanknotesType) => void // давайте подумаем, setFilter -это гоузчик, у которого всегда в руках товар
}

export const Country = (props: CountryPropsType) => {
    const setAll = () => {
        return props.setFilterValue('ALL')
    }

    const setDollars = () => {
        return props.setFilterValue('Dollars')
    }

    const setRUBLES = () => {
        return props.setFilterValue('RUBLES')
    }

    return (
        <div>
            <button onClick={setAll}>All</button>
            <button onClick={setDollars}>Dollars</button>
            <button onClick={setRUBLES}>RUBLES</button>
            <City data={props.data}/>
        </div>
    );
};

