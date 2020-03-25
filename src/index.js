import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { ContextProvider } from "./Context"

import './style.css';
import App from './App';

ReactDOM.render(
  <ContextProvider>
    <Router basename="/">
      <App />
    </Router>
  </ContextProvider>,
  document.getElementById("root")
)
