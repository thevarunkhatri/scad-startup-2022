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
            img=" https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            fname="Lara"
            lname="Federspiel"
            role="Co-Director"
            major="User Experience"
            />

            <Card
            img=" https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            fname="Amadeus"
            lname="Cameron"
            role="Co-Director"
            major="User Experience"
            />

            <Card
            img=" https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            fname="Savannah"
            lname="Wilkinson"
            role="Event Coordinator"
            major="User Experience"
            />

            <Card
            img=" https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            fname="Andrew"
            lname="Goodridge"
            role="Logistics Coordinator"
            major="User Experience"
            />

            <Card
            img=" https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            fname="Quint"
            lname="Bailey"
            role="Sessions Coordinator"
            major="User Experience"
            />

            <Card
            img=" https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            fname="Aparna"
            lname="Somvanshi"
            role="Outreach Coordinator"
            major="User Experience"
            />

            <Card
            img=" https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            fname="Varn"
            lname="Khatri"
            role="Web Developer"
            major="User Experience"
            />

            <Card
            img=" https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            fname="Matt"
            lname="Ahrens"
            role="Web Developer"
            major="User Experience"
            />

            <Card
            img=" https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            fname="Seth"
            lname="Stomberger"
            role="Visual Designer"
            major="User Experience"
            />

            <Card
            img=" https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            fname="Amanda"
            lname="Kong"
            role="Visal Designer"
            major="User Experience"
            />            

            <Card
            img=" https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            fname="Ella"
            lname="Reisinger"
            role="Social Media Coordinator"
            major="Graphic Design"
            />

            <Card
            img=" https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            fname="Arjun"
            lname="Gupta"
            role="Visal Designer"
            major="User Experience"
            />

            <Card
            img=" https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            fname="Pranshu"
            lname="Agarwal"
            role="Outreach Coordinator"
            major="User Experience"
            />

            <Card
            img=" https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            fname="Banks"
            lname="Maynard"
            role="Motion Media Designer"
            major="Motion Media"
            />

            <Card
            img=" https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            fname="Shivani"
            lname="Varandani"
            role="Motion Media Designer"
            major="Motion Media"
            />

            <FacultyCard
            img=" https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            fname="Brianna"
            lname="Hayes"
            role="SCADpro Project Coordinator"
            />

            <FacultyCard
            img=" https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            fname="Josh"
            lname="Lind"
            role="Executive Director of &nbsp; Stragetic Enterprises"
            />

            <FacultyCard
            img=" https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            fname="Jeanne"
            lname="McPhillips"
            role="Event Advisor"
            />

            <div className="centerBC"></div>

            <FacultyCard 
            img=" https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            fname="BC"
            lname="Hwang"
            role="Chair of UX"
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
          <img src={props.img} />
        </div>

        <div className = "cardContent" >
          <h2 className="cardFirstName">{props.fname}</h2>
          <h2 className="cardLastName">{props.lname}</h2>
          <p className="cardRole">{props.role}</p>
          <p className="cardMajor">{props.major}</p>
          <div class="buttonWrapper">
            {/* <a href={www.linkedin.com/feed} className="externalButton">LinkedIn &nbsp; {String.fromCharCode(10230)}</a>  */}
            <button className="externalButton">Portfolio &nbsp; {String.fromCharCode(10230)}</button>
          </div>
        </div>
      </div>
  );
}

function FacultyCard (props) {
  return(

      <div className="entireWrapperCards">
        <div className="profileHalf">
          <img src={props.img} />
        </div>

        <div className = "facultyCard" >
          <h2 className="cardFirstName">{props.fname}</h2>
          <h2 className="cardLastName">{props.lname}</h2>
          <p className="cardRole">{props.role}</p>
          <p className="cardMajor">{props.major}</p>
          <div class="buttonWrapper">
            <button className="externalButtonFaculty">LinkedIn &nbsp; {String.fromCharCode(10230)}</button>
            {/* <button className="externalButton">Portfolio &nbsp; {String.fromCharCode(10230)}</button> */}
          </div>
        </div>
      </div>
  );
}

export default PeoplePage;