import React, { useContext } from 'react';
import Record from './Record/Record';
import AppContext from '../../../Context/Context';
import classes from './Records.module.css';

const Records = () => {
    const context = useContext(AppContext);
    return (
        <div className={classes.main}>
            <ul className={classes.ul}>
                {
                    context.history.map((item, indx) => {
                        return <Record title={item.title} amount={item.amount} key={indx} id={indx} />
                    })
                }
                {/* <Record title="Book" amount={50} /> */}
            </ul>
        </div>
    )
}

export default Records;