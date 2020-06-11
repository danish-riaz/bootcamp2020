import React from 'react'

const AppContext = React.createContext({
    history: [{
        title: '',
        amount: 0,
    }],
    submitHandler: () => { },
    deleteTrans: () => { },
    balance: 0
});

export default AppContext;
