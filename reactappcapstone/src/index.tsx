import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Application from './application'
// Modern theme
import 'survey-react/modern.min.css';
// Default theme
// import 'survey-react/survey.min.css';
import { StylesManager } from 'survey-react';

StylesManager.applyTheme("modern");

ReactDOM.render(
  <React.StrictMode>
    <Application/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
