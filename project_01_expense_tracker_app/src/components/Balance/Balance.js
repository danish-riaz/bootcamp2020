import React from 'react';
import IncomeExpence from './IncomeExpence';
import classes from './Balance.module.css';

const Balance = (props) => {
    return (
        <div className={classes.balance}>
            <p className={classes.title}>OVERALL BALANCE</p>
            <h1 className={classes.amount}>${props.balance}</h1>
            <br />
            <IncomeExpence income={props.income} expence={props.expence} />
        </div>
    )
}

export default Balance;