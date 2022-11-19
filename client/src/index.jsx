import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import { TransactionsProvider } from './context/TransactionContext';

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(
  <TransactionsProvider>
    <App />,
     </TransactionsProvider>,
      document.getElementById('app')
)
