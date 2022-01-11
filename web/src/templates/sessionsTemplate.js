import React from 'react'
import {graphql, Link} from 'gatsby';
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Container from "../components/container";
import Map from '../components/map';

import "../styles/sessions.scss"

export const query = graphql`
  query projectTemplateQuery($slug: String!){
    session: sanitySessions(slug: {current: {eq: $slug}}) {
      name
    }
  }
`

const sessionsPage = props => {
  const { data } = props;
  console.log(data);

  return (
    <Layout>
        <SEO title={data.session.name + " | Startup 2022"}/>
        <main className='sessions'>
            <Container>
                <div className='recording'>

                </div>
                <div className='sessionInfo'>
                    <div className='mainInfo'>
                        <div>
                            <h1>{data.session.name}</h1>
                            <h2>Learn the fundamental tools of Visual Design and Aesthetics to apply to your work.</h2>
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
                        <p className='description'>The Gestalt Principles of Design have been around since the 1920’s. In this session, Quint Bailey (FLUX Officer) takes us through the fundamental drivers behind these principles and how to apply them to your work for better visual fidelity.</p>
                        <div className='transcription'>
                            <h3>Transcription</h3>
                            <p>An auto-generated transcription will be available for this session.</p>
                        </div>
                        <div className='relatedSessions'>
                            <h3>Related Sessions</h3>
                            <ul>
                                <Link to="/"><li>Prototype in Figma</li></Link>
                                <Link to="/"><li>After Effects: First Launch</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div className='secondaryInfo'> 
                        <div className='dateTime secondaryItem'>
                            <span>Saturday</span>
                            <span>3:00PM EST</span>
                            <span>60m</span>
                        </div>
                        <div className='location secondaryItem'>
                            <Map/>
                            <div className='locationLabel'>
                                Alder Hall
                            </div>
                        </div>
                        <div className='resources secondaryItem'>
                            <div>
                                <h3>Resources</h3>
                                <ul>
                                    <Link><li>Gestalt Examples ↗</li></Link>
                                    <Link><li>Gestalt Examples ↗</li></Link>
                                </ul>
                            </div>
                            <div>
                                <h3>Demo Files</h3>
                                <ul>
                                    <Link><li>Gestalt Examples ↗</li></Link>
                                    <Link><li>Gestalt Examples ↗</li></Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    </Layout>
  )
}

export default sessionsPage