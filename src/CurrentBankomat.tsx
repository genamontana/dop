import React from 'react';
import {MoneyType} from './App';
import styled from 'styled-components';

type CurrentATMPropsType = {
    money: MoneyType
}
export const CurrentATM = (props: CurrentATMPropsType) => {

    return (
       /* <div>
            {props.money.banknotes === 'Dollars'
                ?
                <BanknoteGreen>
                    <Name>{props.money.banknotes}</Name>
                    <Nominal>{props.money.value}</Nominal>
                </BanknoteGreen>
                :
                <BanknoteBlue>
                    <Name>{props.money.banknotes}</Name>
                    <Nominal>{props.money.value}</Nominal>
                </BanknoteBlue>
            }
        </div>
    );*/
    <BanknoteUniversal color={props.money.banknotes==='Dollars' ? 'darkgreen' : 'darkblue'}>
        <Name>{props.money.banknotes}</Name>
        <Nominal>{props.money.value}</Nominal>
    </BanknoteUniversal>
    )
};

const BanknoteUniversal=styled.div`
  background-color: ${props => {
    if (props.color === 'darkgreen') {
      return 'darkgreen'
    } else {
      return 'darkblue'
    }
  }};
  width: 400px;
  height: 200px;
  margin: 10px;
`
/*const BanknoteGreen = styled.div`
  background-color: darkgreen;
  width: 400px;
  height: 200px;
  margin: 10px;
`
const BanknoteBlue = styled.div`
  background-color: darkblue;
  width: 400px;
  height: 200px;
  margin: 10px;
`*/
const Name = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
`
const Nominal = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
  margin-top: 30px;
`