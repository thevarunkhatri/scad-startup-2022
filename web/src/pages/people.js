import React from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";


import PeopleBackgroundSVG from "../assets/svg/people/peopleBG.svg";

import amadeusProfile2 from '../assets/img/people/amadeusHeadshot.png';
import amadeusProfile from '../assets/img/people/amadeusHeadshot.jpg';

import amandaProfile from '../assets/img/people/amandaHeadshot.png';
import andrewProfile from '../assets/img/people/andrewHeadshot.png';
import aparnaProfile from '../assets/img/people/aparnaHeadshot.jpeg';
import arjunProfile from '../assets/img/people/arjunHeadshot.jpeg';
import banksProfile from '../assets/img/people/banksHeadshot.jpg';
import desmondProfile from '../assets/img/people/desmondHeadshot.jpg';
import ellaProfile from '../assets/img/people/ellaHeadshot.jpg';
import laraProfile from '../assets/img/people/laraHeadshot.jpg';
import mattProfile from '../assets/img/people/mattHeadshot.jpeg';
import pranshuProfile from '../assets/img/people/pranshuHeadshot.jpg';
import quintProfile from '../assets/img/people/quintHeadshot.png';
import savannahProfile from '../assets/img/people/savannahHeadshot.jpg';
import sethProfile from '../assets/img/people/sethHeadshot.jpeg';
import shivaniProfile from '../assets/img/people/shivaniHeadshot.jpg';
import varunProfile from '../assets/img/people/varunHeadshot.jpg';

import briannaProfile from '../assets/img/people/briannaHeadshot.jpeg';
import joshProfile from '../assets/img/people/joshHeadshot.jpeg';
import jeanneProfile from '../assets/img/people/jeanneHeadshot.jpeg';
import bcProfile from '../assets/img/people/bcHeadshot.jpeg';

import '../styles/people.scss';


export const query = graphql`
  query PeoplePageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`;

const PeoplePage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <main id="peoplePageBG">
        {/* <PeopleBackgroundSVG /> */}
        <Container>

          <div class="peopleHeader">
            <h3>The people that brought Startup to life, the</h3>
            <h1>Startup 2022 Core Team</h1>
          </div>


          <div class="peopleContainer">

          <Card
            img={laraProfile}
            fname="Lara"
            lname="Federspiel"
            role="Co-Director"
            major="User Experience"
            linkedin="https://www.linkedin.com/in/larafederspiel"
            portfolio="http://larafederspiel.com/"
            />

            <Card
            img={amadeusProfile}
            fname="Amadeus"
            lname="Cameron"
            role="Co-Director"
            major="User Experience"
            linkedin="https://www.linkedin.com/in/amadeuscameron/"
            portfolio="http://evanamadeus.com/"
            />

            <Card
            img={savannahProfile}
            fname="Savannah"
            lname="Wilkinson"
            role="Event Coordinator"
            major="User Experience"
            linkedin="https://www.linkedin.com/in/savannahwilkinson"
            portfolio="https://www.savannahwilkinson.com/"
            />

            <Card
            img={andrewProfile}
            fname="Andrew"
            lname="Goodridge"
            role="Logistics Coordinator"
            major="User Experience"
            linkedin="https://www.linkedin.com/in/ndrewgood"
            portfolio="http://ndrewgood.com/"
            />

            <Card
            img={quintProfile}
            fname="Quint"
            lname="Bailey"
            role="Sessions Coordinator"
            major="User Experience"
            linkedin=""
            portfolio=""
            />

            <Card
            img={aparnaProfile}
            fname="Aparna"
            lname="Somvanshi"
            role="Outreach Coordinator"
            major="User Experience"
            linkedin="http://www.linkedin.com/in/haloaparna"
            portfolio="https://www.aparnasomvanshi.com/"
            />

            <Card
            img={varunProfile}
            fname="Varun"
            lname="Khatri"
            role="Web Developer"
            major="User Experience"
            linkedin="https://www.linkedin.com/in/varunmk/"
            portfolio="https://www.thevarunkhatri.com/"
            />

            <Card
            img={mattProfile}
            fname="Matt"
            lname="Ahrens"
            role="Web Developer"
            major="User Experience"
            linkedin="https://www.linkedin.com/in/matt-ahrens-/"
            portfolio="https://www.mattahrens.design/"
            />

            <Card
            img={sethProfile}
            fname="Seth"
            lname="Stomberger"
            role="Visual Designer"
            major="User Experience"
            linkedin=""
            portfolio=""
            />

            <Card
            img={amandaProfile}
            fname="Amanda"
            lname="Kong"
            role="Visal Designer"
            major="User Experience"
            linkedin=""
            portfolio=""
            />            

            <Card
            img={ellaProfile}
            fname="Ella"
            lname="Reisinger"
            role="Social Media Coordinator"
            major="Graphic Design"
            linkedin=""
            portfolio=""
            />

            <Card
            img={arjunProfile}
            fname="Arjun"
            lname="Gupta"
            role="Visal Designer"
            major="User Experience"
            linkedin=""
            portfolio=""
            />

            <Card
            img={pranshuProfile}
            fname="Pranshu"
            lname="Agarwal"
            role="Outreach Coordinator"
            major="User Experience"
            linkedin=""
            portfolio=""
            />

            <Card
            img={banksProfile}
            fname="Banks"
            lname="Maynard"
            role="Motion Media Designer"
            major="Motion Media"
            linkedin=""
            portfolio=""
            />

            <Card
            img={shivaniProfile}
            fname="Shivani"
            lname="Varandani"
            role="Motion Media Designer"
            major="Motion Media"
            linkedin=""
            portfolio=""
            />

            <FacultyCard
            img={briannaProfile}
            fname="Brianna"
            lname="Hayes"
            role="SCADpro Project Coordinator"
            linkedin="https://www.linkedin.com/in/brianna-hayes/"
            />

            <FacultyCard
            img={joshProfile}
            fname="Josh"
            lname="Lind"
            role="Executive Director of &nbsp; Stragetic Enterprises"
            linkedin="https://www.linkedin.com/in/joshlind/"
            />

            <FacultyCard
            img={jeanneProfile}
            fname="Jeanne"
            lname="McPhillips"
            role="Event Advisor"
            linkedin="https://www.linkedin.com/in/jeanne-mcphillips/"
            />

            <div className="centerBC"></div>

            <FacultyCard 
            img={bcProfile}
            fname="BC"
            lname="Hwang"
            role="Chair of UX"
            linkedin="https://www.linkedin.com/in/uxking/"
            />

          </div>
        </Container>
      </main>
    </Layout>
  );
};


function Card (props) {
  return(

      <div className="entireWrapperCards">
        <div className="profileHalf">
          <img className="profilePic" src={props.img} />
        </div>

        <div className = "cardContent" >
          <h2 className="cardFirstName">{props.fname}</h2>
          <h2 className="cardLastName">{props.lname}</h2>
          <p className="cardRole">{props.role}</p>
          <p className="cardMajor">{props.major}</p>
          <div class="buttonWrapper">
            <form action={props.linkedin} target="_blank">
              <button className="externalButton">LinkedIn &nbsp; {String.fromCharCode(10230)}</button>
            </form>
            <form action={props.portfolio} target="_blank">
              <button className="externalButton">Portfolio &nbsp; {String.fromCharCode(10230)}</button>
            </form>
          </div>
        </div>
      </div>
  );
}

function FacultyCard (props) {
  return(

      <div className="entireWrapperCards">
        <div className="profileHalf">
          <img className="profilePic" src={props.img} />
        </div>

        <div className = "facultyCard" >
          <h2 className="cardFirstName">{props.fname}</h2>
          <h2 className="cardLastName">{props.lname}</h2>
          <p className="cardRole">{props.role}</p>
          <p className="cardMajor">{props.major}</p>
          <div class="buttonWrapper">
            <form action={props.linkedin} target="_blank">
              <button className="externalButtonFaculty">LinkedIn &nbsp; {String.fromCharCode(10230)}</button>
            </form>
          </div>
        </div>
      </div>
  );
}

export default PeoplePage;