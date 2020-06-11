import React, { useContext, useReducer, useState } from 'react';
import Header from './components/Header';
import Balance from './components/Balance/Balance';
import History from './components/History/History';
import AddTranscation from './components/Add Transcation/AddTranscation';
import Container from '@material-ui/core/Container';
import AppContext from './Context/Context';

import './App.css';

const balanceReducer = (state, action) => {
  switch (action.type) {
    case 'CALC':
      const result = (state.balance + action.amount);
      if (action.amount >= 0) {
        return {
          ...state,
          balance: result,
          income: state.income + action.amount
        }
      }
      else {
        return {
          ...state,
          balance: result,
          expence: state.expence + action.amount
        }
      }
    case 'REMOVE':
      if (action.value >= 0) {
        return {
          ...state,
          income: state.income - action.value,
          balance: state.balance - action.value
        }
      } else {
        return {
          ...state,
          expence: state.expence - action.value,
          balance: state.balance - action.value
        }
      }
    default:
      throw new Error();
  }
}

function App() {
  const [transcation, dispatchBalance] = useReducer(balanceReducer, {
    balance: 0,
    income: 0,
    expence: 0
  });
  const appContextObj = useContext(AppContext);

  const historyArray = [];
  const [history, setHistory] = useState(historyArray);

  appContextObj.history = history;

  appContextObj.submitHandler = (title, amount) => {
    dispatchBalance({ type: 'CALC', amount: +amount });
    setHistory([...history, { title: title, amount: amount }]);
  }

  appContextObj.deleteTrans = (id) => {
    const updatedHistory = history.filter((item, idx) => idx !== id);
    dispatchBalance({ type: 'REMOVE', value: +history[id].amount });
    setHistory(updatedHistory);
  }

  return (
    <Container fixed maxWidth="sm" className="App">
      <div className="center">
        <Header />
        <Balance balance={transcation.balance} income={transcation.income} expence={transcation.expence} />
        <br />
        <History />
        <br />
        <AddTranscation />
      </div>
    </Container>
  );
}

export default App;
