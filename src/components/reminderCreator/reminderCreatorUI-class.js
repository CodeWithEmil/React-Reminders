/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from "react";
import "./reminderCreator.css";

/*import Reminder from "./components/reminders/reminderCard/reminder";*/


export let valuesArray = [];

class remindderCreator extends Component {
    constructor(props) {
        super(props);

        this.usernameInput = React.createRef();
        this.titleInput = React.createRef();
        this.priorityInput = React.createRef();

        this.array = [];

        this.state = {
            user:  this.props.user,
            title: this.props.title,
            priority: this.props.priority
        }
    }

    usernameInputAction = e => {
        e.preventDefault();

        this.state.user = this.usernameInput.current.value;
        return this.state.user;
    }
    titleInputAction = e => {
        e.preventDefault();

        this.state.title = this.titleInput.current.value;
        return this.state.title;
    }
    priorityInputAction = e => {
        e.preventDefault();

        this.state.priority = this.priorityInput.current.value;
        return this.state.priority;
    }

    submitAction = e => {
        e.preventDefault();

        valuesArray.push(this.usernameInputAction(e));
        valuesArray.push(this.titleInputAction(e));
        valuesArray.push(this.priorityInputAction(e));
        

        console.log(valuesArray);

        this.usernameInput.current.placeholder = valuesArray;

        return valuesArray;
    }
    

    render() {
        return(

            <div className = "creatorCard">

                <div className = "creatorTitle">
                    <h2>Create New Reminder</h2>
                </div>

                <div className = "creatorBody">
                    <div className = "creatorInputs">
                        <input ref = {this.usernameInput} className = "creatorInput beforeInput" placeholder = "Who? (Person)" required />
                        <input ref = {this.titleInput} className = "creatorInput beforeInput" placeholder = "What? (Action to do)" required />
                        <input ref = {this.priorityInput} className = "creatorInput beforeInput" placeholder = "Priority? (Number 1-5)" type = "number" min = "1" max = "5" required />
                    </div>
                    <div className = "creatorSubmit">
                        <button onClick = {this.submitAction} className = "creatorButton">Done</button>
                    </div>
                </div>

            </div>

        )
    }
}

export default remindderCreator;