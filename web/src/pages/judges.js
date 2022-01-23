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

import Checkmark from "../assets/svg/judges/checkmark.svg"
import Mentors from "../assets/svg/judges/mentors.svg"

import briannaProfile from '../assets/img/people/briannaHeadshot.jpeg';
import joshProfile from '../assets/img/people/joshHeadshot.jpeg';
import jeanneProfile from '../assets/img/people/jeanneHeadshot.jpeg';
import bcProfile from '../assets/img/people/bcHeadshot.jpeg';

import '../styles/people.scss';
import '../styles/judges.scss';


export const query = graphql`
  query JudgesPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`;

const JudgesPage = props => {
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
      <main id="judgesPageBG">
        {/* <PeopleBackgroundSVG /> */}
        <Container>

          <div class="peopleHeader">
            <h3>A big thank you to our</h3>
            <h1>Judges & Mentors</h1>
          </div>

          <div className="judgesSectionHeader">
            <Checkmark />
            <h2>Our Fabulous Judges</h2>
          </div>

          <div class="peopleContainer">

          <JudgeCard
            img={jeanneProfile}
            fname="first"
            lname="last"
            role="role"
            company="company"
            linkedin="https://www.linkedin.com"
            />


          <JudgeCard
            img={jeanneProfile}
            fname="first"
            lname="last"
            role="role"
            company="company"
            linkedin="https://www.linkedin.com"
            />
          </div>

          <div className="judgesSectionHeader">
            <Mentors />
            <h2>Our Enthusiastic Mentors</h2>
          </div>

          <div class="peopleContainer">
          <JudgeCard
            img={briannaProfile}
            fname="Aditi"
            lname="Vyas"
            role="Industrial Designerr"
            company="Clear"
            linkedin="https://www.linkedin.com/in/brianna-hayes/"
            />

            <JudgeCard
            img={joshProfile}
            fname="Akshay"
            lname="Khandelwal"
            role="Sr. Product Designer"
            company="BIC"
            linkedin="https://www.linkedin.com/in/joshlind/"
            />

            <JudgeCard
            img={jeanneProfile}
            fname="Alan"
            lname="Gorinstein"
            role="UX Designer"
            company="Ancestry"
            linkedin="https://www.linkedin.com/in/jeanne-mcphillips/"
            />

            <JudgeCard
            img={jeanneProfile}
            fname="Andrés"
            lname="Sepúlveda"
            role="UX Researcher"
            company="Lowe's"
            linkedin="https://www.linkedin.com"
            />

            <JudgeCard
            img={jeanneProfile}
            fname="Anna"
            lname="Jones"
            role="Sr. UX Designer"
            company="Calendly"
            linkedin="https://www.linkedin.com"
            />

<JudgeCard
            img={jeanneProfile}
            fname="Brian"
            lname="Ollison"
            role="Sr. Product Designer"
            company="Intuit"
            linkedin="https://www.linkedin.com"
            />

<JudgeCard
            img={jeanneProfile}
            fname="Casey"
            lname="Harper"
            role="Product Designer"
            company="Mailchimp"
            linkedin="https://www.linkedin.com"
            />

<JudgeCard
            img={jeanneProfile}
            fname="Dipali"
            lname="Bajaj"
            role="Experience Designer"
            company="Adobe"
            linkedin="https://www.linkedin.com"
            />

<JudgeCard
            img={jeanneProfile}
            fname="Goldie"
            lname="Chan"
            role="Speaker & Founder"
            company="Warm Robots"
            linkedin="https://www.linkedin.com"
            />

<JudgeCard
            img={jeanneProfile}
            fname="Jai"
            lname="Tudor"
            role="Product Designer"
            company="Zillow"
            linkedin="https://www.linkedin.com"
            />

<JudgeCard
            img={jeanneProfile}
            fname="James"
            lname="Spence"
            role="Principal Design Program Manager"
            company="Zillow"
            linkedin="https://www.linkedin.com"
            />

<JudgeCard
            img={jeanneProfile}
            fname="Josh"
            lname="Inch"
            role="Sr. Product Designer"
            company="Meta"
            linkedin="https://www.linkedin.com"
            />

<JudgeCard
            img={jeanneProfile}
            fname="Justin"
            lname="Keoninh"
            role="Product Designer"
            company="Kalshi"
            linkedin="https://www.linkedin.com"
            />

<JudgeCard
            img={jeanneProfile}
            fname="Leon"
            lname="Zhang"
            role="UX Designer"
            company="Expedia"
            linkedin="https://www.linkedin.com"
            />

<JudgeCard
            img={jeanneProfile}
            fname="Marcela"
            lname="Villalobos"
            role="Graphic Designer"
            company="Axiom Space"
            linkedin="https://www.linkedin.com"
            />

<JudgeCard
            img={jeanneProfile}
            fname="Matt"
            lname="Ashwood"
            role="Principal Product Designer"
            company="Intuit"
            linkedin="https://www.linkedin.com"
            />

<JudgeCard
            img={jeanneProfile}
            fname="Mitzi"
            lname="Okou"
            role="Associate Product Designer"
            company="Spotify"
            linkedin="https://www.linkedin.com"
            />

            <JudgeCard
            img={jeanneProfile}
            fname="Nadia"
            lname="Le"
            role="Product Designer"
            company="Corus Entertainment"
            linkedin="https://www.linkedin.com"
            />

            <JudgeCard
            img={jeanneProfile}
            fname="Nick"
            lname="Braver"
            role="Product Designer"
            company="Indeed"
            linkedin="https://www.linkedin.com"
            />

            <JudgeCard
            img={jeanneProfile}
            fname="Nick"
            lname="Cuda"
            role="Sr. Product Designer"
            company="Mailchimp"
            linkedin="https://www.linkedin.com"
            />

          <JudgeCard
            img={jeanneProfile}
            fname="Nick"
            lname="Dine"
            role="SCADpro Professor"
            company="SCAD"
            linkedin="https://www.linkedin.com"
            />


          <JudgeCard
            img={jeanneProfile}
            fname="Sarah"
            lname="Lashinsky"
            role="Product Designer"
            company="Mailchimp"
            linkedin="https://www.linkedin.com"
            />


          <JudgeCard
            img={jeanneProfile}
            fname="Travis"
            lname="Neilson"
            role="Interaction Designer"
            company="Google"
            linkedin="https://www.linkedin.com"
            />
          </div>

        </Container>
      </main>
    </Layout>
  );
};



function JudgeCard (props) {
  return(

      <div className="entireWrapperCards">
        <div className="profileHalf">
          <img className="profilePic" src={props.img} />
        </div>

        <div className = "judgesCardContent" >
          <h2 className="judgesFirstName">{props.fname}</h2>
          <h2 className="judgesLastName">{props.lname}</h2>
          <p className="judgesRole">{props.role} @ <strong>{props.company}</strong></p>
          <div class="buttonWrapper">
            <form action={props.linkedin} target="_blank">
              <button className="externalButtonFaculty">LinkedIn &nbsp; {String.fromCharCode(10230)}</button>
            </form>
          </div>
        </div>
      </div>
  );
}

// function JudgeCard (props) {
//   return(

//       <div className="judgesCardsWrapper">
//         <div className="profileHalfJudges">
//           <img className="profilePic" src={props.img} />
//         </div>

//         <div className = "cardContent" >
//           <h2 className="cardFirstName">{props.fname}</h2>
//           <h2 className="cardLastName">{props.lname}</h2>
//           <p className="cardRole">{props.role} @ {props.company}</p>
//           <div class="buttonWrapper">
//             <form action={props.linkedin} target="_blank">
//               <button className="externalButtonFaculty">LinkedIn &nbsp; {String.fromCharCode(10230)}</button>
//             </form>
//           </div>
//         </div>
//       </div>
//   );
// }



export default JudgesPage;