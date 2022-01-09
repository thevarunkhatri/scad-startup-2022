import React, {useState, useEffect} from "react";
import { Link, useStaticQuery, graphql } from "gatsby"
import Feb4 from "../assets/svg/schedule/feb4.svg"

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
    const [filterType, setFilterType] = useState("day");


    const sessionsArray = props.sanityData;
    console.log(sessionsArray) 

    const dayOptions = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"]
    const difficultyOptions = ["Beginner", "Novice", "Intermediate", "Advanced", "Expert"]
    const subjectOptions = ["Design", "Research"]

    return (
        <div className="sessionsSchedule">
            <div>
              <h1 className="sessionsTitle">Sessions by Day</h1>
              <div className="filterHolder">
                <div className="select">
                  <select name="filterType" id="filterType"
                    onChange={(e) => {
                      setFilterType(e.target.value) 
                    }}>
                    <option selected value="day">Day</option>
                    <option value="difficulty">Difficulty</option>
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
            <SessionsGroup 
              icon={<Feb4/>} 
              title="Friday" 
               sessions={sessionsArray}/>
            {/* <div className="sessionsGrid">
              {
                sessionsArray.map(edge => 
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
            </div> */}
        </div>
    );
};

export default SessionsSchedule;
