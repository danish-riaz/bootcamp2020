import React from 'react'
import Records from './Records/Records';
import classes from './History.module.css';

const History = () => {
    return (
        <div className={classes.History}>
            <h2 className={classes.HistoryHeading}>History</h2>
            <Records />
        </div>
    )
}

export default History;