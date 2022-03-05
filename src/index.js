import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import "./general.css";

/*import Reminder from "./components/reminders/reminderCard/reminder";
import "./components/reminders/reminderCard/reminder.css";*/

import ReminderCreator from "./components/reminderCreator/reminderCreatorUI-func";
import "./components/reminderCreator/reminderCreator.css";

import ReminderContainer from "./components/reminders/reminderContainer";
import "../src/components/reminders/reminderContainer.css";

import {valuesArray} from "./components/reminderCreator/reminderCreatorUI-func";

ReactDOM.render(
  <React.StrictMode>
    
    <ReminderCreator />
    <ReminderContainer name = {valuesArray[1]} title = {valuesArray[0]} priority = {valuesArray[2]}/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
