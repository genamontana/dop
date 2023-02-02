import React from 'react';
import {CurrentATM} from './CurrentBankomat';
import {MoneyType} from './App';
import styled from 'styled-components';

type CityPropsType = {
    data: MoneyType[]
}

export const City = (props: CityPropsType) => {

    const mappedMoney = props.data.map((el: MoneyType, index) => (
        <CurrentATM
            key={index}
            money={el}
        />
    ))

    /*const mappedMoney = props.data.map(el => {
        return (
            <div>
                <span>{el.value}</span>
                <span>{el.banknotes}</span>
                <span>{el.number}</span>
            </div>
        )
    })*/

    return (
        <Wrapper>
            {mappedMoney}
        </Wrapper>
    )
};


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 30px;
`
