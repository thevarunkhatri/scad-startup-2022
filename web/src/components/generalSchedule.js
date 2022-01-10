import React from "react";
import { Link } from "gatsby"

import TopL from "../assets/img/schedule/TopL.png"
import TopR from "../assets/img/schedule/TopR.png"
import MiddleL from "../assets/img/schedule/MiddleL.png"
import MiddleR from "../assets/img/schedule/MiddleR.png"
import BottomL from "../assets/img/schedule/BottomL.png"
import BottomR from "../assets/img/schedule/BottomR.png"
import SessionsImg from "../assets/img/schedule/Sessions.png"

const ScheduleCard = (props) => {

    let backgroundStyle = {}

    if(props.backgroundImg) {
        backgroundStyle = {
            background: "url(" + props.backgroundImg + "), #141414",
            backgroundSize: "cover",
            backgroundRepeat: "none"
        }
    }

    return (
        <div className={props.bigSize ? "scheduleCard big" : "scheduleCard"} style={backgroundStyle}>
            {
                props.bigSize ? (
                    <>
                        <div className="content">
                            <div>
                                <h3>{props.title}</h3>
                                {props.day == 0 ? <h4>Every day</h4> : <h4>Day {props.day}, February {props.day + 3}</h4>}
                                <p>{props.description}</p>
                            </div>
                            <div className="dateButton">
                                {props.time} -->
                            </div>
                        </div>
                        <div className="graphic">
                            
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <h3>{props.title}</h3>
                            <h4>Day {props.day}, February {props.day + 3}</h4>
                            <p>{props.description}</p>
                            {props.midpoint ? <p className="midpoint">Your team will be assigned to a Midpoint day after Kickoff.</p> : null}
                        </div>
                        <div className="dateButton">
                            {props.time} -->
                        </div>
                    </>
                )
            }
        </div>
    );
}

const GeneralSchedule = () => {

    return (
        <div className="scheduleGrid">
            <ScheduleCard
                title="Kickoff" 
                day={1}
                description="Kickoff energizes more than 300 students and includes our theme reveal, workshop training sessions, and lightning talks by subject matter experts. We’ll also explain more about the track system, and how StartUp is going to run."
                time="10:00 AM - 11:30 PM EST"
                bigSize={true}/>
            <ScheduleCard
                title="Midpoint 1" 
                day={4}
                description="Come meet with mentors, practice your pitches and get the feedback needed to enhance your overall solution."
                time="10:00 AM - 11:30 PM EST"
                midpoint={true}
                backgroundImg={TopL}/>
            <ScheduleCard
                title="Midpoint 2" 
                day={5}
                description="Come meet with mentors, practice your pitches and get the feedback needed to enhance your overall solution."
                time="10:00 AM - 11:30 PM EST"
                midpoint={true}
                backgroundImg={TopR}/>
            <ScheduleCard
                title="Semi-Final" 
                day={6}
                description="The day has come! Pitch your final solution to industry-professional mentors and judges."
                time="10:00 AM - 11:30 PM EST"
                backgroundImg={MiddleL}/>
            <ScheduleCard
                title="Showcase" 
                day={6}
                description="Check out the StartUp Showcase, open to all students at SCAD! See what teams come up with and vote your favorite!"
                time="10:00 AM - 11:30 PM EST"
                backgroundImg={MiddleR}/>
            <ScheduleCard
                title="Final Presentation" 
                day={7}
                description="Kickoff energizes more than 300 students and includes our theme reveal, workshop training sessions, and lightning talks by subject matter experts. We’ll also explain more about the track system, and how StartUp is going to run."
                time="10:00 AM - 11:30 PM EST"
                backgroundImg={BottomL}/>
            <ScheduleCard
                title="Celebration" 
                day={7}
                description="Kickoff energizes more than 300 students and includes our theme reveal, workshop training sessions, and lightning talks by subject matter experts. We’ll also explain more about the track system, and how StartUp is going to run."
                time="10:00 AM - 11:30 PM EST"
                backgroundImg={BottomR}/>
            <ScheduleCard
                title="Startup Sessions" 
                day={0}
                description="Come join us for sessions covering a wide range of topics! Whether it's your first StartUp or you want to hone a new skill, we’ve got you covered. With experts from 7 different SCAD majors and a few of our friends at Adobe, there's a session for everyone."
                time="10:00 AM - 11:30 PM EST"
                bigSize={true}
                backgroundImg={SessionsImg}/>
        </div>
    );
};

export default GeneralSchedule;
