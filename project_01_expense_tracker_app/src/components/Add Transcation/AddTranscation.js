import React from 'react';
import TransactionForm from './TranscationForm/TranscationForm';
import classes from './AddTransaction.module.css';

const AddTranscation = () => {
    return (
        <div>
            <h2 className={classes.AddTranscHeading}>Add Transaction</h2>
            <TransactionForm />
        </div>
    )
}
export default AddTranscation;