/* eslint-disable default-case */
/* eslint-disable eqeqeq */
import React, { Component } from "react";
import "./reminder.css";


class Reminder extends Component {
    constructor(props) {
        super(props);

        //Declaring Stars
            this.firstStar = React.createRef();
            this.secondStar = React.createRef();
            this.thirdStar = React.createRef();
            this.fourthStar = React.createRef();
            this.fifthStar = React.createRef();

        //Declaring Changing Values
            this.header = React.createRef();
            this.btn = React.createRef();

        this.state = {
            name: this.props.name,
            username: this.props.username,
            priority: this.props.priority
        }
    }

    //Calculates the number of stars that will be appear in yellow
    calcPrior = e => {

        e.preventDefault();


        if(this.state.priority <= 1) {
            this.firstStar.current.classList.replace("gray", "yellow");
        } else if (this.state.priority == 2) {
            this.firstStar.current.classList.replace("gray", "yellow");
            this.secondStar.current.classList.replace("gray", "yellow");
        } else if(this.state.priority == 3) {
            this.firstStar.current.classList.replace("gray", "yellow");
            this.secondStar.current.classList.replace("gray", "yellow");
            this.thirdStar.current.classList.replace("gray", "yellow");
        } else if(this.state.priority == 4) {
            this.firstStar.current.classList.replace("gray", "yellow");
            this.secondStar.current.classList.replace("gray", "yellow");
            this.thirdStar.current.classList.replace("gray", "yellow");
            this.fourthStar.current.classList.replace("gray", "yellow");
        } else {
            this.firstStar.current.classList.replace("gray", "yellow");
            this.secondStar.current.classList.replace("gray", "yellow");
            this.thirdStar.current.classList.replace("gray", "yellow");
            this.fourthStar.current.classList.replace("gray", "yellow");
            this.fifthStar.current.classList.replace("gray", "yellow");
        }

        /*this.firstStar.current.classList.add("yellow");
        this.firstStar.current.classList.remove("gray");

        this.secondStar.current.classList.add("yellow");
        this.secondStar.current.classList.remove("gray");

        this.thirdStar.current.classList.add("yellow");
        this.thirdStar.current.classList.remove("gray");

        this.fourthStar.current.classList.add("yellow");
        this.fourthStar.current.classList.remove("gray");

        this.fifthStar.current.classList.add("yellow");
        this.fifthStar.current.classList.remove("gray");*/

        console.log(this.state.priority);
    }

    calcColor = e => {

        e.preventDefault();

        if(this.state.priority <= 1) {
            this.header.current.classList.add("priorOneHeader");
            this.btn.current.classList.add("priorOneButton");
        } else if (this.state.priority == 2) {
            this.header.current.classList.add("priorTwoHeader");
            this.btn.current.classList.add("priorTwoButton");
        } else if(this.state.priority == 3) {
            this.header.current.classList.add("priorThreeHeader");
            this.btn.current.classList.add("priorThreeButton");
        } else if(this.state.priority == 4) {
            this.header.current.classList.add("priorFourHeader");
            this.btn.current.classList.add("priorFourButton");
        } else {
            this.header.current.classList.add("priorFiveHeader");
            this.btn.current.classList.add("priorFiveButton");
        }
    }

    calcMax = e => {
        e.preventDefault();

        this.calcPrior(e);
        this.calcColor(e);
    }

    render() {
        return(

            <div className = "reminderCard gridItem">

                <div className = "reminderName" ref = {this.header}>
                    <h3>{ this.state.name }</h3>
                </div>

                <div className = "reminderInfo">
                    <div className = "reminderInput" title = { "Name: " + this.state.username }>
                        <input value = { this.state.username } type = "text" disabled />
                    </div>
    
                    <div className = "reminderPrior" title = { "Priority: " + this.state.priority + "/5"} >
                        <i ref = {this.firstStar} className = "fas fa-star gray" id = "starOne"></i>
                        <i ref = {this.secondStar} className = "fas fa-star gray" id = "starTwo"></i>
                        <i ref = {this.thirdStar} className = "fas fa-star gray" id = "starThree"></i>
                        <i ref = {this.fourthStar} className = "fas fa-star gray" id = "starFour"></i>
                        <i ref = {this.fifthStar} className = "fas fa-star gray" id = "starFive"></i>
                    </div>
    
                    <div className = "reminderButton" title = "Done?">
                        <button ref = {this.btn} onClick = {this.calcMax}>Done</button>
                    </div>
                </div>

            </div>

        )
    }
}


export default Reminder;