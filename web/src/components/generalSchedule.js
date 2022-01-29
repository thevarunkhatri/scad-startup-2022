import React from "react";
import { Link } from "gatsby"

import TopL from "../assets/img/schedule/TopL.png"
import TopR from "../assets/img/schedule/TopR.png"
import MiddleL from "../assets/img/schedule/MiddleL.png"
import MiddleR from "../assets/img/schedule/MiddleR.png"
import BottomL from "../assets/img/schedule/BottomL.png"
import BottomR from "../assets/img/schedule/BottomR.png"
import SessionsImg from "../assets/img/schedule/Sessions.png"

import SessionsSvg from "../assets/svg/schedule/sessions.svg"
import KickoffSvg from "../assets/svg/schedule/kickoff.svg"

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
                                {props.day == 0 ? <h4>Every Day</h4> : <h4>Day {props.day}, February {props.day + 3}</h4>}
                                <p>{props.description}</p>
                            </div>
                            <div className="dateButton">
                                {props.time}
                            </div>
                        </div>
                        <div className="graphic">
                            {props.graphic}
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <h3>{props.title}</h3>
                            <h4>Day {props.day}, February {props.day + 3}</h4>
                            <p>{props.description}</p>
                            {props.midpoint ? <p className="midpoint">Your team will be assigned to Midpoint 1 or Midpoint 2 after Kickoff.</p> : null}
                        </div>
                        <div className="dateButton">
                            {props.time}
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
                description="Come join us for our theme reveal, sessions announcements, and lightning talks by subject matter experts and industry professionals. We’ll also walk through the schedule and explain how StartUp is going to run."
                time="10:00 AM - 11:30 AM EST"
                bigSize={true}
                graphic={<KickoffSvg/>}/>
            <ScheduleCard
                title="Midpoint 1" 
                day={5}
                description="Meet with mentors, practice your pitches, and get crucial feedback to hone your solution."
                time="4:30 PM - 8:00 PM EST"
                midpoint={true}
                backgroundImg={TopL}/>
            <ScheduleCard
                title="Midpoint 2" 
<<<<<<< HEAD
                day={8}
=======
                day={6}
>>>>>>> 2e7860a46583ef236f13b27364810836b190e168
                description="Meet with mentors, practice your pitches, and get crucial feedback to hone your solution."
                time="4:30 PM - 8:00 PM EST"
                midpoint={true}
                backgroundImg={TopR}/>
            <ScheduleCard
                title="Semi-Final" 
                day={8}
                description="The day has come! Pitch your project to industry-professional judges and convince them to advance you to the next round: Finals."
                time="11:00 AM - 1:30 PM EST"
                backgroundImg={MiddleL}/>
            <ScheduleCard
                title="Showcase" 
                day={8}
                description="Check out StartUp Showcase on our instagram, @scadstartup! All of the projects will be posted to reels so your classmates, friends and family can see."
                time="All Day"
                backgroundImg={MiddleR}/>
            <ScheduleCard
                title="Final Presentation" 
                day={8}
                description="This is your moment. The finalists pitch their presentation to all the judges and the winners are determined. Do you have what it takes to make it to finals?"
                time="3:30 PM - 5:00 PM EST"
                backgroundImg={BottomL}/>
            <ScheduleCard
                title="Celebration" 
                day={8}
                description="You’ve made it so far. Come join us as we announce the StartUp 2022 winners and celebrate a hard, rewarding week of design and innovation."
                time="5:00 PM - 6:30 PM EST"
                backgroundImg={BottomR}/>
            <ScheduleCard
                title="Startup Sessions" 
                day={0}
                description="Come join us for sessions covering a wide range of topics! Whether it's your first StartUp or you want to hone a new skill, we’ve got you covered. With experts from 7 different SCAD majors and a few of our friends at Adobe, there's a session for everyone."
                time="Available Every Day"
                bigSize={true}
                backgroundImg={SessionsImg}
                graphic={<SessionsSvg/>}/>
        </div>
    );
};

export default GeneralSchedule;
