import React, { useContext } from 'react';
import AppContext from '../../../../Context/Context';
import classes from './Record.module.css';

const Record = ({ title, amount, id }) => {
    const context = useContext(AppContext);

    const addTransHandler = (e) => {
        e.preventDefault();
        context.deleteTrans(id);
    }

    return (
        <>
            <li className={classes.Card}>
                <div className={classes.Left}>
                    <span className={classes.LeftSpan}>{title}</span>
                    <span className={classes.RightSpan}>${amount}</span>
                </div>
                <div className={classes.Right}>
                    <button className={classes.EditBtn} onClick={(e) => addTransHandler(e)}>X</button >
                </div>
            </li>

        </>
    )
}

export default Record;