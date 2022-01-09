import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby"

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

const SessionsSchedule = props => {

    const sessionsArray = props.sanityData;
    console.log(sessionsArray) 

    return (
        <div>
            <h1>Sessions</h1>
            <div className="sessionsGrid">
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
              <h3>Hello</h3>
              <h3>Hello</h3>
            </div>
        </div>
    );
};

export default SessionsSchedule;
