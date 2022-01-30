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
import CTA from "../components/cta";


import '../styles/faq.scss';

export const query = graphql`
  query FaqPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`;

const FaqPage = props => {
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
        <main id="faqPageBG">
          <Container>
            <div class="faqHeader">
              <h3>Have any questions?</h3>
              <h1 className="pageName">Frequently Asked Questions</h1>
            </div>

            <div class="faqContainer">
              <div className="column">
                <div class="faqCard">
                  <h2>Eligibility</h2>
                  <h4>Can I participate?</h4>
                  <p>To participate in StartUp, all you need to be is a current SCAD student. That’s right: Atlanta and E-learning students can join this year. All undergraduate and graduate students are eligible to join.</p>
                  <h4>Is this event for me?</h4>
                  <p>Yes it is! Any SCAD student in any major can participate! Leave your resume at home — we know you've got skill.</p>
                  <h4>How much does it cost to enter?</h4>
                  <p>StartUp is free — and always will be — for students to participate.</p>
                  <h4>I am not from the Savannah Campus, can I still participate?</h4>
                  <p>Yes… but there are some rules. All presenters must be on ground. If you are from the Atlanta, Lacoste, or E-learning campuses, you have two options:</p>
                  <ol>
                    <li>Travel to Savannah to present in person (and participate in some awesome activities)!</li>
                    <li>Have a student from the Savannah campus on your team so they can present the project. You will still be recognized for your participation and potential winnings.</li>
                  </ol>
                </div>

                <div class="faqCard">
                  <h2>Specific To StartUp 2022</h2>
                  <h4>Is StartUp fully on ground?</h4>
                  <p>Semi-final and final presentations will be on-ground. All presenters must be on-ground in order to present. Due to the ongoing pandemic, some of our judges are unable to travel to Savannah, so you may be presenting to hybrid judges. Midpoint checks will be done virtually. Your team will receive an email with your unique zoom link and time to join your zoom meeting after Kickoff.</p>
                  <h4>Do I need to follow COVID guidelines?</h4>
                  <p>For any event held on SCAD property, you must follow the university COVID guidelines. Failure to follow these guidelines will result in immediate elimination.</p>
                </div>
              </div>
              
              <div className="column">
                <div class="faqCard">
                  <h2>Registration</h2>
                  <h4>How are teams set up?</h4>
                  <p>We encourage you to build your own team of 2-5 people. Your team must represent a minimum of 2 different majors. Your team cannot be more than 5 people.</p>
                  <h4>What if I don’t have a team?</h4>
                  <p>That is totally ok! Sign up as an individual and we will match you with an incredible team! You will get an email with your team assignment before Kickoff, so keep an eye on your email. If you want to form a team soon, feel free to join our StartUp Discord [https://discord.gg/ceD8eDcCG4] and we will work with you there to find a group.</p>
                  <h4>Does my whole team have to sign up?</h4>
                  <p>Yes. Everyone on your team must submit an application. You will be asked to list your other team members during sign-up. If you are signing up as an individual, we will match you before Kickoff!</p>
                </div>

                <div class="faqCard">
                  <h2>During The Week</h2>
                  <h4>What if I forgot to sign up before Kickoff? </h4>
                  <p>Oh no! We still want you to participate. DM @scadstartup on Instagram [https://www.instagram.com/scadstartup], or email Lara Federspiel [mailto:lfeder21@student.scad.edu] with you and your team members’ names, year, major and SCAD emails.</p>
                  <h4>What do I need before Kickoff? </h4>
                  <p>All you need is your team, your mentor, and an attitude for success. We recommend following us on Instagram [https://www.instagram.com/scadstartup] and joining the SCAD StartUp Discord [https://discord.gg/ceD8eDcCG4] server to stay up to date throughout the week.</p>
                  <h4>Who are the Mentors?</h4>
                  <p>Every team is assigned an industry-professional mentor to guide them throughout StartUp week. These mentors are here to help you succeed, and give you the opportunity to make a connection in the design industry. Please reach out and connect with your mentors!</p>
                  <h4>What can I participate in throughout the week?</h4>
                  <p>StartUp has 20+ workshops throughout the week so you and your team can learn new skills! From basic design and prototyping to advanced effects and modeling, there is something for everyone to learn. At the end of the week, we also invite you all to the StartUp Celebration! Talk with the judges, take some pictures, hang out with the core team and have some incredible food!</p>
                  <h4>What if I  am crowned champion?</h4>
                  <p>Finalist teams will win cash prizes (amounts will be announced at Kickoff). Most importantly, you’ll walk out with something badass to put on your resume and portfolio.</p>
                </div>
              </div>
              

            </div>
            <CTA/>
          </Container>
        </main>
    </Layout>
  );
};

export default FaqPage;
