import React, { useContext } from 'react';
import AppContext from '../../../Context/Context';
import classes from './TranscationForm.module.css';


const TranscationForm = () => {
    const context = useContext(AppContext);

    let title = '';
    let amount = 0;

    const titleHandler = (e) => {
        title = e.target.value;
    }

    const amountHandler = (e) => {
        amount = e.target.value;
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (title.trim() === '' || amount === 0 || amount === '') {
            // amount === '' is for stoping using expression in number field 
            return;
        }
        document.getElementById("title").value = '';
        document.getElementById("amount").value = '';
        context.submitHandler(title, amount);
    }

    return (
        <div>
            <form method="POST">
                <label className={classes.label} >Title</label>
                <input type="text" id="title" name="title" onChange={titleHandler} className={classes.input} required />
                <label className={classes.label}>Amount (add negative - value for expence)</label>
                <input type="number" id="amount" name="amont" onChange={amountHandler} className={classes.input} required />
                <button type="submit" className={classes.button} onClick={(e) => submitHandler(e)}>ADD</button>
            </form>
        </div>
    )
}

export default TranscationForm;
