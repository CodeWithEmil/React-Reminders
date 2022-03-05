import React, { Component } from "react";
import "./reminderContainer.css";

import Reminder from "./reminderCard/reminder-func";

class ReminderContainer extends Component {

    constructor(props) {
        super(props);

        this.container = React.createRef();

        this.state = {
            title: this.props.title,
            name: this.props.name,
            priority: this.props.priority
        }
    }

    loggingArray = () => <Reminder name = {this.state.title} username = {this.state.name} priority = {this.state.priority} /> ;


    render() {
        return(
            <div id = "reminderContainer" ref = {this.container}>  

                {this.loggingArray()}
                {this.loggingArray()}
                {this.loggingArray()}
                {this.loggingArray()}
            
            </div>
        )
    }
}

/*

                <Reminder name = "Learn Japanese" username = "JM" priority = "1" />
                <Reminder name = "Listen to Great Music" username = "Engineer in youth, Pao" priority = "2" />
                <Reminder name = "Design Post" username = "Emilio" priority = "3" />
                <Reminder name = "Draw beautifully" username = "Alexia" priority = "4" />
                <Reminder name = "Feed Blue and Kiwi" username = "Matt" priority = "5" />
                <Reminder name = "Be nice to everyone" username = "Ana Sofi" priority = "3" />
                <Reminder name = "Make us laugh" username = "Max" priority = "4" />
                <Reminder name = "Say weird things :/" username = "Jero" priority = "1" />
                <Reminder name = "Play the guitar" username = "Santi" priority = "2" /> 


<Reminder name = {this.state.title} username = {this.state.name} priority = {this.state.priority} />

*/

export default ReminderContainer