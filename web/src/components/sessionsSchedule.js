import React, {useState, useEffect, useRef} from "react";
import { Link, useStaticQuery, graphql } from "gatsby"
import {GatsbyImage} from 'gatsby-plugin-image'

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

const DifficultySessions = ({data, activeFilters}) => {
  const difficulty1 = data.filter(data => data.difficulty == 1);
  const difficulty2 = data.filter(data => data.difficulty == 2);
  const difficulty3 = data.filter(data => data.difficulty == 3);
  const difficulty4 = data.filter(data => data.difficulty == 4);
  const difficulty5 = data.filter(data => data.difficulty == 5);

  if(activeFilters.length == 0) {
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
  } else {
    return(
      <>
        {
          activeFilters.includes("Beginner") ? (
            <SessionsGroup 
              icon={<Beginner/>} 
              title="Beginner" 
              sessions={difficulty1}/>
          ) : null
        }
        {
          activeFilters.includes("Novice") ? (
            <SessionsGroup 
              icon={<Novice/>} 
              title="Novice" 
              sessions={difficulty2}/>
          ) : null
        }
        {
          activeFilters.includes("Intermediate") ? (
            <SessionsGroup 
              icon={<Intermediate/>} 
              title="Intermediate" 
              sessions={difficulty3}/>
          ) : null
        }
        {
          activeFilters.includes("Advanced") ? (
            <SessionsGroup 
              icon={<Advanced/>} 
              title="Advanced" 
              sessions={difficulty4}/>
          ) : null
        }
        {
          activeFilters.includes("Expert") ? (
            <SessionsGroup 
              icon={<Expert/>} 
              title="Expert" 
              sessions={difficulty5}/> 
          ) : null
        }
      </>
    )
  }

  
}

const DaySessions = ({data, activeFilters}) => {

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

  if(activeFilters.length == 0) {
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
  } else {
    return(
      <>
        {
          activeFilters.includes("Friday") ? (
            <SessionsGroup 
              icon={<Feb4/>} 
              title="Friday" 
              sessions={day1}/>
          ) : null
        }
        {
          activeFilters.includes("Saturday") ? (
            <SessionsGroup 
              icon={<Feb5/>} 
              title="Saturday" 
              sessions={day2}/>
          ) : null
        }
        {
          activeFilters.includes("Sunday") ? (
            <SessionsGroup 
              icon={<Feb6/>} 
              title="Sunday" 
              sessions={day3}/>
          ) : null
        }
        {
          activeFilters.includes("Monday") ? (
            <SessionsGroup 
              icon={<Feb7/>} 
              title="Monday" 
              sessions={day4}/>
          ) : null
        }
        {
          activeFilters.includes("Tuesday") ? (
            <SessionsGroup 
              icon={<Feb8/>} 
              title="Tuesday" 
              sessions={day5}/>
          ) : null
        }
        {
          activeFilters.includes("Wednesday") ? (
            <SessionsGroup 
              icon={<Feb9/>} 
              title="Wednesday" 
              sessions={day6}/>
          ) : null
        }
        {
          activeFilters.includes("Thursday") ? (
            <SessionsGroup 
              icon={<Feb10/>} 
              title="Thursday" 
              sessions={day7}/>
          ) : null
        }
      </>
    )
  }
}

const SubjectSessions = ({data, activeFilters}) => {
  const basics = data.filter(data => data.categories == "basics");
  const visuals = data.filter(data => data.categories == "visual");
  const coding = data.filter(data => data.categories == "coding");
  const physical = data.filter(data => data.categories == "physical");
  const storytelling = data.filter(data => data.categories == "storytelling");
  const oneShot = data.filter(data => data.categories == "one-shot");
  if(activeFilters.length == 0) {
    return(
      <>
        <SessionsGroup 
          icon={<Basics/>} 
          title="Basics" 
          sessions={basics}/>
        <SessionsGroup 
          icon={<Visuals/>} 
          title="Visuals" 
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
  } else {
    return(
      <>
        {
          activeFilters.includes("Basics") ? (
            <SessionsGroup 
              icon={<Basics/>} 
              title="Basics" 
              sessions={basics}/>
          ) : null
        }
        {
          activeFilters.includes("Visuals") ? (
            <SessionsGroup 
              icon={<Visuals/>} 
              title="Visuals" 
              sessions={visuals}/>
          ) : null
        }
        {
          activeFilters.includes("Coding") ? (
            <SessionsGroup 
              icon={<Coding/>} 
              title="Coding" 
              sessions={coding}/>
          ) : null
        }
        {
          activeFilters.includes("Physical") ? (
            <SessionsGroup 
              icon={<Physical/>} 
              title="Physical" 
              sessions={physical}/>
          ) : null
        }
        {
          activeFilters.includes("Storytelling") ? (
            <SessionsGroup 
              icon={<Storytelling/>} 
              title="Storytelling" 
              sessions={storytelling}/>
          ) : null
        }
        {
          activeFilters.includes("One-Shot") ? (
            <SessionsGroup 
              icon={<OneShot/>} 
              title="One-Shot" 
              sessions={oneShot}/>
          ) : null
        }
      </>
    )
  }
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
                      <SessionsCard 
                        name={edge.name} 
                        slug={edge.slug} 
                        difficulty={edge.difficulty}
                        location={edge.locationName}
                        datetime={edge.sessionDateTime}
                        duration={edge.duration}
                        excerpt={edge.excerpt}
                        registrationLink={edge.registrationURL}
                        zoomLink={edge.zoomURL}
                        videoLink={edge.videoURL}/>
                    )
                  }
                  return(
                    <SessionsCard 
                      name={edge.name}
                      imageData={edge.heroImage.asset.gatsbyImageData} 
                      imageUrl={edge.heroImage.asset.url} 
                      difficulty={edge.difficulty} 
                      slug={edge.slug}
                      location={edge.locationName}
                      datetime={edge.sessionDateTime}
                      duration={edge.duration}
                      excerpt={edge.excerpt}
                      registrationLink={edge.registrationURL}
                      zoomLink={edge.zoomURL}
                      videoLink={edge.videoURL}/>
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

  const date = new Date(props.datetime)
  var dayOption = { weekday: 'long'}
  const day = new Intl.DateTimeFormat('en-US', dayOption).format(date)
  var timeOption =  {hour: 'numeric', minute: 'numeric'}
  const time = new Intl.DateTimeFormat('en-US', timeOption).format(date)

  console.log()

  return (
      // <Link to={"/sessions/" + props.slug.current} className="sessionsCard">
      <div className="sessionsCard">
        {/* <Link className="sessionsHero"> */}
        <Link className="sessionsHero" to={"/sessions/" + props.slug.current}>
          {/* <div className="heroImage" style={imageStyle}></div> */}
          <div className="imageHover">
            <div className="imageButton">
              Learn More
            </div>
          </div>
          <GatsbyImage className="heroImage" image={props.imageData} />
        </Link>
        <div className="cardContent">
          {/* <Link className="mainContent" to={"/sessions/" + props.slug.current}> */}
          <Link className="mainContent">
            <h4>{props.name}</h4>
            <div className="timeLocation">
              <span>{day + ", " + time}</span>
              <span>{props.duration}m</span>
              <span>{props.location ? props.location : "Location here"}</span>
            </div>
            <div className="difficulty">
              <span>Difficulty: </span>
              <div className="difficultyCircles">         
                <span className={props.difficulty > 0 ? "active" : null}></span>
                <span className={props.difficulty > 1 ? "active" : null}></span>
                <span className={props.difficulty > 2 ? "active" : null}></span>
                <span className={props.difficulty > 3 ? "active" : null}></span>
                <span className={props.difficulty > 4 ? "active" : null}></span>
              </div>
              <span className="difficultyText">
                {props.difficulty == 1 ? "Beginner" : null}
                {props.difficulty == 2 ? "Novice" : null}
                {props.difficulty == 3 ? "Intermediate" : null}
                {props.difficulty == 4 ? "Advanced" : null}
                {props.difficulty == 5 ? "Expert" : null}
              </span>
            </div>
            <p className="description">{props.excerpt}</p>
          </Link>
          {
            props.videoLink ? (
              <Link className="watchRecordingButton" to={"/sessions/" + props.slug.current}>
                Watch Recording
              </Link>
            ) : (
              <div className="cardButtons">
                <a href={props.registrationLink} target="_blank">Register</a>
                <a href={Date.now() > date.getTime() - 600000 ? props.zoomLink : null} target="_blank">Zoom</a>
              </div>
            )
          }
          {/* <Link className="watchRecordingButton" to={"/sessions/" + props.slug.current}>
            Watch Recording
          </Link> */}
          {/* <div className="cardButtons">
            <a href={props.registrationLink} target="_blank">Register</a>
            <a href={props.zoomLink} target="_blank">Zoom</a>
          </div> */}
        </div>
      </div>
  );
};

const FilterTab = props => {
  return (
      <div className="filterTab">
        <p>{props.label}</p>
      </div>
  );
};

const SessionsSchedule = props => {
    const filterRef = useRef(null);
    const [filterType, setFilterType] = useState("day");
    const [activeFilters, setActiveFilters] = useState([])

    useEffect(() => {
      window.localStorage.setItem('filterType', filterType);
    }, [filterType]);

    useEffect(() => {
      setFilterType(window.localStorage.getItem('filterType'));
    }, []);

    useEffect(() => {
      filterRef.current.value = window.localStorage.getItem('filterType')
    }, []);
  
    const toggleFilter = (filterToToggle) => {
      console.log("hello")
      // check if in array already     
      if(activeFilters.includes(filterToToggle)){
        // if in array, remove
        let newActiveFilters = activeFilters.filter(e => e !== filterToToggle)
        setActiveFilters(newActiveFilters)
      } else {
        // if not, add to array
        let newActiveFilters = [...activeFilters, filterToToggle];
        setActiveFilters(newActiveFilters);
      }
      console.log(activeFilters)
    }

    const sessionsArray = props.sanityData;
    //console.log(sessionsArray) 

    const dayOptions = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"]
    const difficultyOptions = ["Beginner", "Novice", "Intermediate", "Advanced", "Expert"]
    const subjectOptions = ["Basics", "Visuals", "Coding", "Physical", "Storytelling", "One-Shot"]

    return (
        <div className="sessionsSchedule">
            <div>
              <h1 className="sessionsTitle">Sessions by {filterType[0].toUpperCase() + filterType.substring(1)}</h1>
              <div className="filterHolder">
                <div className="select">
                  <select name="filterType" id="filterType" ref={filterRef}
                    onChange={(e) => {
                      setActiveFilters([]) 
                      setFilterType(e.target.value)
                    }}>
                    <option value="day">Day</option>
                    <option value="difficulty">Difficulty</option>
                    <option value="subject">Subject</option>
                  </select>
                </div>

                {
                  filterType == "day" ? dayOptions.map((day) => {
                    return(
                      <div className={activeFilters.includes(day) ? "filterTab active": "filterTab"} onClick={() => toggleFilter(day)}>
                        <p>{day}</p>
                      </div>
                    )
                  }): null
                }
                {
                  filterType == "difficulty" ? difficultyOptions.map((difficulty) => {
                    return(
                      <div className={activeFilters.includes(difficulty) ? "filterTab active": "filterTab"} onClick={() => toggleFilter(difficulty)}>
                        <p>{difficulty}</p>
                      </div>
                    )
                  }): null
                }
                {
                  filterType == "subject" ? subjectOptions.map((subject) => {
                    return(
                      <div className={activeFilters.includes(subject) ? "filterTab active": "filterTab"} onClick={() => toggleFilter(subject)}>
                        <p>{subject}</p>
                      </div>
                    )
                  }): null
                }
                
              </div>
            </div>
            {/* <div>
              {activeFilters.map((e) => {
                return(
                  <span>
                    {e}
                  </span>
                )
              })}
            </div> */}
            {filterType == "difficulty" ? <DifficultySessions data={sessionsArray} activeFilters={activeFilters}/> : null}
            {filterType == "day" ? <DaySessions data={sessionsArray} activeFilters={activeFilters}/> : null}
            {filterType == "subject" ? <SubjectSessions data={sessionsArray} activeFilters={activeFilters}/> : null}
        </div>
    );
};

export default SessionsSchedule;
