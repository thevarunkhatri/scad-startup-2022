import React, {useState, useEffect} from "react";
import { Link, useStaticQuery, graphql } from "gatsby"

import Beginner from "../assets/svg/schedule/difficulty/Beginner.svg"
import Novice from "../assets/svg/schedule/difficulty/Novice.svg"
import Intermediate from "../assets/svg/schedule/difficulty/Intermediate.svg"
import Advanced from "../assets/svg/schedule/difficulty/Advanced.svg"
import Expert from "../assets/svg/schedule/difficulty/Expert.svg"

import Basics from "../assets/svg/schedule/basics.svg"
import Visuals from "../assets/svg/schedule/visuals.svg"
import Coding from "../assets/svg/schedule/coding.svg"
import Physical from "../assets/svg/schedule/physical.svg"
import OneShot from "../assets/svg/schedule/oneshot.svg"
import Storytelling from "../assets/svg/schedule/storytelling.svg"

import Feb4 from "../assets/svg/schedule/feb4.svg"
import Feb5 from "../assets/svg/schedule/feb5.svg"
import Feb6 from "../assets/svg/schedule/feb6.svg"
import Feb7 from "../assets/svg/schedule/feb7.svg"
import Feb8 from "../assets/svg/schedule/feb8.svg"
import Feb9 from "../assets/svg/schedule/feb9.svg"
import Feb10 from "../assets/svg/schedule/feb10.svg"

const DifficultySessions = ({data}) => {
  const difficulty1 = data.filter(data => data.difficulty == 1);
  const difficulty2 = data.filter(data => data.difficulty == 2);
  const difficulty3 = data.filter(data => data.difficulty == 3);
  const difficulty4 = data.filter(data => data.difficulty == 4);
  const difficulty5 = data.filter(data => data.difficulty == 5);

  return(
    <>
      <SessionsGroup 
        icon={<Beginner/>} 
        title="Beginner" 
        sessions={difficulty1}/>
      <SessionsGroup 
        icon={<Novice/>} 
        title="Novice" 
        sessions={difficulty2}/>
      <SessionsGroup 
        icon={<Intermediate/>} 
        title="Intermediate" 
        sessions={difficulty3}/>
      <SessionsGroup 
        icon={<Advanced/>} 
        title="Advanced" 
        sessions={difficulty4}/>
      <SessionsGroup 
        icon={<Expert/>} 
        title="Expert" 
        sessions={difficulty5}/>
    </>
  )
}

const DaySessions = ({data}) => {

  // const withDates = data.filter(data => data.sessionDateTime);

  const day1 = data.filter(data => {
    const date = new Date(data.sessionDateTime)
    return date.getDate() == 4
  });

  const day2 = data.filter(data => {
    const date = new Date(data.sessionDateTime)
    return date.getDate() == 5
  });

  const day3 = data.filter(data => {
    const date = new Date(data.sessionDateTime)
    return date.getDate() == 6
  });

  const day4 = data.filter(data => {
    const date = new Date(data.sessionDateTime)
    return date.getDate() == 7
  });

  const day5 = data.filter(data => {
    const date = new Date(data.sessionDateTime)
    return date.getDate() == 8
  });

  const day6 = data.filter(data => {
    const date = new Date(data.sessionDateTime)
    return date.getDate() == 9
  });

  const day7 = data.filter(data => {
    const date = new Date(data.sessionDateTime)
    return date.getDate() == 10
  });

  return(
    <>
      <SessionsGroup 
        icon={<Feb4/>} 
        title="Friday" 
        sessions={day1}/>
      <SessionsGroup 
        icon={<Feb5/>} 
        title="Saturday" 
        sessions={day2}/>
      <SessionsGroup 
        icon={<Feb6/>} 
        title="Sunday" 
        sessions={day3}/>
      <SessionsGroup 
        icon={<Feb7/>} 
        title="Monday" 
        sessions={day4}/>
      <SessionsGroup 
        icon={<Feb8/>} 
        title="Tuesday" 
        sessions={day5}/>
      <SessionsGroup 
        icon={<Feb9/>} 
        title="Wednesday" 
        sessions={day6}/>
      <SessionsGroup 
        icon={<Feb10/>} 
        title="Thursday" 
        sessions={day7}/>
    </>
  )
}

const SubjectSessions = ({data}) => {
  const basics = data.filter(data => data.categories == "basics");
  const visuals = data.filter(data => data.categories == "visuals");
  const coding = data.filter(data => data.categories == "coding");
  const physical = data.filter(data => data.categories == "physical");
  const storytelling = data.filter(data => data.categories == "storytelling");
  const oneShot = data.filter(data => data.categories == "one-shot");
  
  return(
    <>
      <SessionsGroup 
        icon={<Basics/>} 
        title="Basics" 
        sessions={basics}/>
      <SessionsGroup 
        icon={<Visuals/>} 
        title="Visual" 
        sessions={visuals}/>
      <SessionsGroup 
        icon={<Coding/>} 
        title="Coding" 
        sessions={coding}/>
      <SessionsGroup 
        icon={<Physical/>} 
        title="Physical" 
        sessions={physical}/>
      <SessionsGroup 
        icon={<Storytelling/>} 
        title="Storytelling" 
        sessions={storytelling}/>
      <SessionsGroup 
        icon={<OneShot/>} 
        title="One-Shot" 
        sessions={oneShot}/>
    </>
  )
}

const SessionsGroup = props => {
  return (
    <div className="sessionsGroup">
        <div className="groupLabel">
          {props.icon}
          <h3>{props.title}</h3>
          <div className="line"/>
        </div>
        <div className="sessionsGrid">
          {
            props.sessions.map(edge => 
                {
                  //console.log(edge)
                  if(edge.heroImage == null || edge.heroImage.asset == null) {
                    return (
                      <SessionsCard name={edge.name}/>
                    )
                  }
                  return(
                    <SessionsCard name={edge.name} imageUrl={edge.heroImage.asset.url}/>
                    //
                  )       
                }
            )
          }
        </div>
    </div>
  );
}

const SessionsCard = props => {

  const imageStyle = {
    background: 'url(' + props.imageUrl + ')',
    backgroundSize: 'cover'
  };

  return (
      <div className="sessionsCard">
          <div className="heroImage" style={imageStyle}></div>
          <div className="cardContent">
            <h4>{props.name}</h4>
            <div className="timeLocation">
              <span>5PM</span>
              <span>60m</span>
              <a href=""><span>The Shed</span></a>
            </div>
            <div className="difficulty">
              <span>Difficulty: </span>
              <div className="difficultyCircles">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="difficultyText">Beginner</span>
            </div>
            <p className="description">Placeholder content for the description of the session! Integer vel enim viverra nulla arcu. Velit enim cras turpis aliquam ullamcorper. Felis, convallis mattis elit commodo.</p>
            <div className="cardButtons">
              <button>Register</button>
              <button>Zoom</button>
            </div>
          </div>
      </div>
  );
};

const FilterTab = props => {
  return (
      <div className="filterTab">
        {props.label}
      </div>
  );
};

const SessionsSchedule = props => {
    const [filterType, setFilterType] = useState("difficulty");


    const sessionsArray = props.sanityData;
    console.log(sessionsArray) 

    const dayOptions = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"]
    const difficultyOptions = ["Beginner", "Novice", "Intermediate", "Advanced", "Expert"]
    const subjectOptions = ["Basics", "Visuals", "Coding", "Physical", "Storytelling", "One-Shot"]

    return (
        <div className="sessionsSchedule">
            <div>
              <h1 className="sessionsTitle">Sessions by {filterType[0].toUpperCase() + filterType.substring(1)}</h1>
              <div className="filterHolder">
                <div className="select">
                  <select name="filterType" id="filterType"
                    onChange={(e) => {
                      setFilterType(e.target.value) 
                    }}>
                    <option value="difficulty">Difficulty</option>
                    <option value="day">Day</option>
                    <option value="subject">Subject</option>
                  </select>
                </div>

                {
                  filterType == "day" ? dayOptions.map((day) => {
                    return(
                      <FilterTab label={day}/>
                    )
                  }): null
                }
                {
                  filterType == "difficulty" ? difficultyOptions.map((difficulty) => {
                    return(
                      <FilterTab label={difficulty}/>
                    )
                  }): null
                }
                {
                  filterType == "subject" ? subjectOptions.map((subject) => {
                    return(
                      <FilterTab label={subject}/>
                    )
                  }): null
                }
                
              </div>
            </div>
            {filterType == "difficulty" ? <DifficultySessions data={sessionsArray}/> : null}
            {filterType == "day" ? <DaySessions data={sessionsArray}/> : null}
            {filterType == "subject" ? <SubjectSessions data={sessionsArray}/> : null}
        </div>
    );
};

export default SessionsSchedule;
