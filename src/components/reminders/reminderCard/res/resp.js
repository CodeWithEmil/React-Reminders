import React, { Component } from "react";
import "./reminder.css";


class Reminder extends Component {
    render() {
        return(

            <div className = "reminderCard">

                <div className = "reminderInput" title = "Name: ...">
                    <input type = "text" value = "Name" disabled />
                </div>

                <div className = "reminderPrior" title = "Priority: 1/5">
                    <i className = "fas fa-star"></i>
                    <i className = "fas fa-star"></i>
                    <i className = "fas fa-star"></i>
                    <i className = "fas fa-star"></i>
                    <i className = "fas fa-star"></i>
                </div>

                <div className = "reminderButton" title = "Done?">
                    <button onclick = "erase">Done</button>
                </div>

            </div>

        )
    }
}


export default Reminder;