import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby"

const SessionsSchedule = () => {
    const sessionsData = useStaticQuery(graphql`
        query sessionsQuery {
            allSanitySessions {
                edges {
                  node {
                    demoFiles {
                      _key
                      _type
                      fileTitle
                      fileLink
                    }
                    difficulty
                    duration
                    excerpt
                    location {
                      _key
                      _type
                      lat
                      lng
                      alt
                    }
                    locationName
                    name
                    registrationURL
                    resources {
                      _key
                      _type
                      resourceTitle
                      resourceLink
                    }
                    sessionDateTime
                    slug {
                      _key
                      _type
                      current
                    }
                    videoURL
                    zoomURL
                    host {
                      id
                    }
                    heroImage {
                      _key
                      _type
                      _rawAsset
                      _rawHotspot
                      _rawCrop
                    }
                    prerequisites {
                      id
                    }
                    relatedSession {
                      id
                    }
                  }
                }
            }
        }       
    `)

    const sessionsArray = sessionsData.allSanitySessions.edges;
    console.log(sessionsArray)

    return (
        <div>
            <h1>Sessions</h1>
        </div>
    );
};

export default SessionsSchedule;
