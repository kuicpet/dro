import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthProvider from "./Context";
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <App/>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

