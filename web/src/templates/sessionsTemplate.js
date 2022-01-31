import React from 'react'
import {graphql, Link} from 'gatsby';
import {GatsbyImage} from 'gatsby-plugin-image'

import SEO from '../components/seo'
import Layout from '../containers/layout'
import Container from "../components/container";
import Map from '../components/map';

import "../styles/sessions.scss"

export const query = graphql`
  query projectTemplateQuery($slug: String!){
    session: sanitySessions(slug: {current: {eq: $slug}}) {
        zoomURL
        videoURL
        slug {
          _key
          _type
          current
        }
        sessionDateTime
        relatedSession {
          slug {
            _key
            _type
            current
          }
          name
        }
        resources {
          _key
          _type
          resourceTitle
          resourceLink
          resourceType
        }
        registrationURL
        prerequisites {
          name
          slug {
            _key
            _type
            current
          }
        }
        name
        locationName
        location {
          _key
          _type
          lat
          lng
          alt
        }
        id
        host {
          name
          headshot {
            asset {
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
            }
          }
          linkedIn
        }
        heroImage {
          asset {
            url
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
        excerpt
        duration
        difficulty
        detailedDescription {
          _key
          _type
          style
          list
          _rawChildren
        }
        demoFiles {
          fileLink
          fileTitle
        }
        clubPartner {
          partnerIcon {
            asset {
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
            }
          }
          partnerName
          partnerLink
        }
        categories
    }
  }
`

const sessionsPage = props => {
  const { data } = props;
  console.log(data);

  let imageStyle ={}
  
  if(data.session.heroImage) {
    imageStyle = {
      background: "url(" + data.session.heroImage.asset.url + ")",
      backgroundSize: "cover"
    }
  }

  const date = new Date(data.session.sessionDateTime)
  var dayOption = { weekday: 'long'}
  const day = new Intl.DateTimeFormat('en-US', dayOption).format(date)
  var timeOption =  {hour: 'numeric', minute: 'numeric'}
  const time = new Intl.DateTimeFormat('en-US', timeOption).format(date)

  // console.log(data.session.clubPartner.partnerLink)

  return (
    <Layout>
        <SEO title={data.session.name + " | Startup 2022"}/>
        <main className='sessions'>
            <Container>
                {/* <div className='recording' style={imageStyle}> */}
                <div className='recording'>
                  {
                    !data.session.videoURL ? (
                      <GatsbyImage className="heroImage" image={data.session.heroImage.asset.gatsbyImageData} />
                    ):(
                      <iframe
                        className="video" 
                        src='https://www.youtube.com/embed/1UDHI2veFyc' 
                        title="Session Video Player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                    )
                  }
                </div>
                <div className='sessionInfo'>
                  <div className='mainInfo'>
                      <div>
                          <h1>{data.session.name}</h1>
                          <h2>{data.session.excerpt}</h2>
                      </div>
                      <div className="difficulty">
                          <span>Difficulty: </span>
                          <div className="difficultyCircles">
                              
                              <span className={data.session.difficulty > 0 ? "active" : null}></span>
                              <span className={data.session.difficulty > 1 ? "active" : null}></span>
                              <span className={data.session.difficulty > 2 ? "active" : null}></span>
                              <span className={data.session.difficulty > 3 ? "active" : null}></span>
                              <span className={data.session.difficulty > 4 ? "active" : null}></span>
                          </div>
                          <span className="difficultyText">
                              {data.session.difficulty == 1 ? "Beginner" : null}
                              {data.session.difficulty == 2 ? "Novice" : null}
                              {data.session.difficulty == 3 ? "Intermediate" : null}
                              {data.session.difficulty == 4 ? "Advanced" : null}
                              {data.session.difficulty == 5 ? "Expert" : null}
                          </span>
                      </div>
                      <p className='description'>The Gestalt Principles of Design have been around since the 1920’s. In this session, Quint Bailey (FLUX Officer) takes us through the fundamental drivers behind these principles and how to apply them to your work for better visual fidelity.</p>
                      <div className='people'>
                        {
                          data.session.clubPartner ? ( 
                            <div className='partner'>
                              <h3>Partner</h3>
                              <a href={data.session.clubPartner.partnerLink} className='host'>
                                {data.session.clubPartner.partnerIcon ? <GatsbyImage image={data.session.clubPartner.partnerIcon.asset.gatsbyImageData}/>: null}
                                <p>{data.session.clubPartner.partnerName}</p>
                              </a>
                            </div>
                          ): null
                        }
                        
                        <div className='hosts'>
                          <h3>Host</h3>
                          <div className='hostGrid'>
                            {
                              data.session.host.map((host) => {
                                return(
                                  <a href={host.linkedIn} className='host'>
                                    {host.headshot ? <GatsbyImage image={host.headshot.asset.gatsbyImageData}/>: null}
                                    <p>{host.name}</p>
                                  </a>
                                )
                              })
                            }
                          </div>
                        </div>
                      </div>
                      <div className='transcription'>
                          <h3>Transcription</h3>
                          <p>An auto-generated transcription will be available for this session.</p>
                      </div>
                      <div className='relatedSessions'>
                          <h3>Related Sessions</h3>
                          <ul>
                              {
                                data.session.relatedSession.map((session) => {
                                  return(
                                    <a href={"/sessions/" + session.slug.current}><li>{session.name}</li></a>
                                  )
                                })
                              }
                          </ul>
                      </div>
                  </div>
                  <div className='secondaryInfo'> 
                      <div className='dateTime secondaryItem'>
                        <span>{day}</span>
                        <span>{time} EST</span>
                        <span>{data.session.duration}m</span>
                      </div>
                      <div className={data.session.locationName != "Online" ? 'location secondaryItem' : 'location online secondaryItem'}>
                        {data.session.locationName != "Online" ? <Map location={data.session.location}/> : null}
                        {/* <Map location={data.session.location}/> */}
                        <div className='locationLabel'>
                            {data.session.locationName} |&nbsp;
                            <a href={data.session.zoomURL}>
                              Zoom Link
                            </a>
                        </div>
                      </div>
                      <div className='resources secondaryItem'>
                          <div>
                              <h3>Resources</h3>
                              {
                                data.session.resources.length > 0 ? null : <p>None available</p>
                              }
                              <ul>
                                  {
                                    data.session.resources.map((resource) => {
                                      return(
                                        <a href={resource.resourceLink}><li>{resource.resourceTitle} ↗</li></a>
                                      )
                                    })
                                  }
                              </ul>
                          </div>
                          <div>
                              <h3>Demo Files</h3>
                              {
                                data.session.demoFiles.length > 0 ? null : <p>None available</p>
                              }
                              <ul>
                                  {
                                    data.session.demoFiles.map((file) => {
                                      return(
                                        <a href={file.fileLink}><li>{file.fileTitle} ↗</li></a>
                                      )
                                    })
                                  }
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className='mobileVersion'>
                    <div>
                      <h1>{data.session.name}</h1>
                      <h2>{data.session.excerpt}</h2>
                    </div>
                    <div className='dateTime secondaryItem'>
                      <span>{day}</span>
                      <span>{time} EST</span>
                      <span>{data.session.duration}m</span>
                    </div>
                    <div className="difficulty">
                        <span>Difficulty: </span>
                        <div className="difficultyCircles">
                            <span className={data.session.difficulty > 0 ? "active" : null}></span>
                            <span className={data.session.difficulty > 1 ? "active" : null}></span>
                            <span className={data.session.difficulty > 2 ? "active" : null}></span>
                            <span className={data.session.difficulty > 3 ? "active" : null}></span>
                            <span className={data.session.difficulty > 4 ? "active" : null}></span>
                        </div>
                        <span className="difficultyText">
                            {data.session.difficulty == 1 ? "Beginner" : null}
                            {data.session.difficulty == 2 ? "Novice" : null}
                            {data.session.difficulty == 3 ? "Intermediate" : null}
                            {data.session.difficulty == 4 ? "Advanced" : null}
                            {data.session.difficulty == 5 ? "Expert" : null}
                        </span>
                    </div>
                    <p className='description'>The Gestalt Principles of Design have been around since the 1920’s. In this session, Quint Bailey (FLUX Officer) takes us through the fundamental drivers behind these principles and how to apply them to your work for better visual fidelity.</p>
                    <div className='people'>
                      {
                        data.session.clubPartner ? ( 
                          <div className='partner'>
                            <h3>Partner</h3>
                            <a href={data.session.clubPartner.partnerLink} className='host'>
                              {data.session.clubPartner.partnerIcon ? <GatsbyImage image={data.session.clubPartner.partnerIcon.asset.gatsbyImageData}/>: null}
                              <p>{data.session.clubPartner.partnerName}</p>
                            </a>
                          </div>
                        ): null
                      }
                      
                      <div className='hosts'>
                        <h3>Host</h3>
                        <div className='hostGrid'>
                          {
                            data.session.host.map((host) => {
                              return(
                                <a href={host.linkedIn} className='host'>
                                  {host.headshot ? <GatsbyImage image={host.headshot.asset.gatsbyImageData}/>: null}
                                  <p>{host.name}</p>
                                </a>
                              )
                            })
                          }
                        </div>
                      </div>
                    </div>
                    <div className='transcription'>
                        <h3>Transcription</h3>
                        <p>An auto-generated transcription will be available for this session.</p>
                    </div>
                    <div className={data.session.locationName != "Online" ? 'location secondaryItem' : 'location online secondaryItem'}>
                      {data.session.locationName != "Online" ? <Map location={data.session.location}/> : null}
                      {/* <Map location={data.session.location}/> */}
                      <div className='locationLabel'>
                          {data.session.locationName} |&nbsp;
                          <a href={data.session.zoomURL}>
                            Zoom Link
                          </a>
                      </div>
                    </div>
                    <div className='resources secondaryItem'>
                      <div>
                          <h3>Resources</h3>
                          {
                            data.session.resources.length > 0 ? null : <p>None available</p>
                          }
                          <ul>
                              {
                                data.session.resources.map((resource) => {
                                  return(
                                    <a href={resource.resourceLink}><li>{resource.resourceTitle} ↗</li></a>
                                  )
                                })
                              }
                          </ul>
                      </div>
                      <div>
                          <h3>Demo Files</h3>
                          {
                            data.session.demoFiles.length > 0 ? null : <p>None available</p>
                          }
                          <ul>
                              {
                                data.session.demoFiles.map((file) => {
                                  return(
                                    <a href={file.fileLink}><li>{file.fileTitle} ↗</li></a>
                                  )
                                })
                              }
                          </ul>
                      </div>
                    </div>
                    <div className='relatedSessions'>
                        <h3>Related Sessions</h3>
                        <ul>
                            {
                              data.session.relatedSession.map((session) => {
                                return(
                                  <a href={"/sessions/" + session.slug.current}><li>{session.name}</li></a>
                                )
                              })
                            }
                        </ul>
                    </div>
                  </div>
                </div>
            </Container>
        </main>
    </Layout>
  )
}

export default sessionsPage