import React from 'react';
import classes from './Balance.module.css';


const IncomeExpence = (props) => {
    return (
        <div className={classes.Card}>
            <div className={classes.Income}>
                <p>INCOME</p>
                <h3>{props.income}</h3>
            </div>
            <div className={classes.vl}></div>
            <div className={classes.Expence}>
                <p>EXPENCE</p>
                <h3>{props.expence}</h3>
            </div>
        </div>
    )
}

export default IncomeExpence;