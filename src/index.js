import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ThemeProvider } from 'react-jss';
import theme from './theme.json';

ReactDOM.render(<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>, document.getElementById('app'));