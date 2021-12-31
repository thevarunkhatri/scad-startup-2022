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
      <main>
        <Container>

          <div class="peopleHeader">
            <h3>The people that brought Startup to life</h3>
            <h1>Startup 2022 Core Team</h1>
          </div>


          <div class="cardContainer">

          <Card
            img=" https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            name="Mike Buzzard"
            role="Organization and Outreach"
            major="User Experience"
            />

          <Card
            img=" https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            name="Mike Buzzard"
            role="Organization and Outreach"
            major="User Experience"
            />

            <Card
            img=" https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            name="Mike Buzzard"
            role="Organization and Outreach"
            major="User Experience"
            />

            <Card
            img=" https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            name="Mike Buzzard"
            role="Organization and Outreach"
            major="User Experience"
            />

            <Card
            img=" https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            name="Mike Buzzard"
            role="Organization and Outreach"
            major="User Experience"
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
          <h2 className="cardName">{props.name}</h2>
          <p className="cardRole">{props.role}</p>
          <p className="cardMajor">{props.major}</p>
          <div class="buttonWrapper">
          <button className="externalButton">LinkedIn &nbsp; {String.fromCharCode(10230)}</button>
          <button className="externalButton">Portfolio &nbsp; {String.fromCharCode(10230)}</button>
          </div>
        </div>
      </div>
  );
}

export default PeoplePage;

// OG PEOPLE CARD - KINDA WORKS return (
//   <Layout>
//     <SEO title={site.title} description={site.description} keywords={site.keywords} />
//     <main>
//       <Container>

//         <div class="peopleHeader">
//           <h3>The people that brought Startup to life</h3>
//           <h1>Startup 2022 Core Team</h1>
//         </div>

//         <div class="cardContainer">

//           <div class="entireWrapperCards">
//             <div class="profileHalf">
//               <img
//                 src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
//                 alt="new"
//                 />
//             </div>

//             <div class="cardContent" id="content1">
//               <h2>Mike Buzzard</h2>
//               <p> Organization and Outreach </p>
//               <p> User Experience </p>
//               <div class="buttonWrapper">
//                 <button class="externalButton">Linkedin &nbsp; {String.fromCharCode(10230)}</button>
//                 <button class="externalButton">Portfolio &nbsp; {String.fromCharCode(10230)}</button>
//               </div>
//             </div>
//           </div>


//         </div>
//       </Container>
//     </main>
//   </Layout>
// );
