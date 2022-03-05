/* eslint-disable default-case */
/* eslint-disable eqeqeq */
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import {
    forwardRef,
    useRef,
    useState,
    useEffect,
    useImperativeHandle
} from "react";
import "./reminder.css";

const Reminder = forwardRef((props, ref) => {

    //References: Declaring stars
    let firstStar = useRef(null);
    let secondStar = useRef(null);
    let thirdStar = useRef(null);
    let fourthStar = useRef(null);
    let fifthStar = useRef(null);

    //References: Declaring changing values
    let header = useRef(null);
    let btn = useRef(null);

    //State & Props
    let name = props.name;
    let username = props.username;
    let priority = props.priority;


    //The notification using https://react-hot-toast.com/
    let notif = () =>
        toast.promise(`Default '${name}'`, {
            //Custom icon
            icon: "🚀",

            //Colors and styling
            iconTheme: {
                primary: "#24292f",
                secondary: "#f9fafb",
            },
            style: {
                "box-shadow": "rgba(17, 12, 46, 0.041) 0 48px 100px 0",
            },

            //Data
            id: "notif",
            className: "lighterShadow",

            //Aria
            ariaProps: {
                role: "status",
                "aria-live": "polite",
            },
        });

    //Calculates the number of stars that will be appear in yellow
    let calcPrior = () => {
        if (priority <= 1) {
            firstStar.current.classList.replace("gray", "yellow");
        } else if (priority == 2) {
            firstStar.current.classList.replace("gray", "yellow");
            secondStar.current.classList.replace("gray", "yellow");
        } else if (priority == 3) {
            firstStar.current.classList.replace("gray", "yellow");
            secondStar.current.classList.replace("gray", "yellow");
            thirdStar.current.classList.replace("gray", "yellow");
        } else if (priority == 4) {
            firstStar.current.classList.replace("gray", "yellow");
            secondStar.current.classList.replace("gray", "yellow");
            thirdStar.current.classList.replace("gray", "yellow");
            fourthStar.current.classList.replace("gray", "yellow");
        } else {
            firstStar.current.classList.replace("gray", "yellow");
            secondStar.current.classList.replace("gray", "yellow");
            thirdStar.current.classList.replace("gray", "yellow");
            fourthStar.current.classList.replace("gray", "yellow");
            fifthStar.current.classList.replace("gray", "yellow");
        }
    }

    //Calculates Color
    let calcColor = () => {
        if (priority <= 1) {
            header.current.classList.add("priorOneHeader");
            btn.current.classList.add("priorOneButton");
        } else if (priority == 2) {
            header.current.classList.add("priorTwoHeader");
            btn.current.classList.add("priorTwoButton");
        } else if (priority == 3) {
            header.current.classList.add("priorThreeHeader");
            btn.current.classList.add("priorThreeButton");
        } else if (priority == 4) {
            header.current.classList.add("priorFourHeader");
            btn.current.classList.add("priorFourButton");
        } else {
            header.current.classList.add("priorFiveHeader");
            btn.current.classList.add("priorFiveButton");
        }
    };

    //Master Function
    let calcMax = (e) => {
        e.preventDefault();

        calcPrior(e);
        calcColor(e);
    };



    //Use methods
    useImperativeHandle(ref, () => ({}));

    useEffect(() => {
        //audioElement.current.volume = volume;
    });

    return (
        <div className="reminderCard gridItem">
            <div className="reminderName" ref={header}>
                <h3>{name}</h3>
            </div>

            <div className="reminderInfo">
                <div
                    className="reminderInput"
                    title={"Name: " + username}
                >
                    <input value={username} type="text" disabled />
                </div>

                <div
                    className="reminderPrior"
                    title={"Priority: " + priority + "/5"}
                >
                    <i
                        ref={firstStar}
                        className="fas fa-star gray"
                        id="starOne"
                    ></i>
                    <i
                        ref={secondStar}
                        className="fas fa-star gray"
                        id="starTwo"
                    ></i>
                    <i
                        ref={thirdStar}
                        className="fas fa-star gray"
                        id="starThree"
                    ></i>
                    <i
                        ref={fourthStar}
                        className="fas fa-star gray"
                        id="starFour"
                    ></i>
                    <i
                        ref={fifthStar}
                        className="fas fa-star gray"
                        id="starFive"
                    ></i>
                </div>

                <div className="reminderButton" title="Done?">
                    <button ref={btn} onClick={calcMax}>
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
});

const ReminderMemo = React.memo(Reminder);
export default ReminderMemo;