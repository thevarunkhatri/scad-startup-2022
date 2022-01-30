import React from "react";
import { StaticQuery, graphql } from "gatsby"

import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { GatsbyImage } from "gatsby-plugin-image"

import PeopleBackgroundSVG from "../assets/svg/people/peopleBG.svg";

import '../styles/people.scss';

let amadeusProfile2  = 'people/amadeusHeadshot.png';
let amadeusProfile   = 'people/amadeusHeadshot.jpg'
let amandaProfile    = 'people/amandaHeadshot.png';
let andrewProfile    = 'people/andrewHeadshot.png';
let aparnaProfile    = 'people/aparnaHeadshot.jpeg';
let arjunProfile     = 'people/arjunHeadshot.jpeg';
let banksProfile     = 'people/banksHeadshot.jpg';
let desmondProfile   = 'people/desmondHeadshot.jpg';
let ellaProfile      = 'people/ellaHeadshot.jpg';
let laraProfile      = 'people/laraHeadshot.jpg';
let mattProfile      = 'people/mattHeadshot.jpeg';
let pranshuProfile   = 'people/pranshuHeadshot.jpg';
let quintProfile     = 'people/quintHeadshot.png';
let savannahProfile  = 'people/savannahHeadshot.jpg';
let sethProfile      = 'people/sethHeadshot.jpeg';
let shivaniProfile   = 'people/shivaniHeadshot.jpg';
let varunProfile     = 'people/varunHeadshot.jpg'

let briannaProfile   = 'people/briannaHeadshot.jpeg';
let joshProfile      = 'people/joshHeadshot.jpeg';
let jeanneProfile    = 'people/jeanneHeadshot.jpeg';
let bcProfile        = 'people/bcHeadshot.jpeg';


export const query = graphql`
  query PeoplePageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    photos: allFile(filter: {relativePath: {regex: "/^people/"}}) {
      edges {
        node {
          id
          relativePath
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              quality: 80
              formats: [WEBP]
              height: 250
            )
          }
        }
      }
    }
  }
`;

const TeamPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  let photosObject = data.photos;
  let photosArray = Object.values(photosObject)[0];
  // console.log(photosArray)
  let laraPhoto = photosArray.find(element => element.node.relativePath == laraProfile)
  let amadeusPhoto = photosArray.find(element => element.node.relativePath == amadeusProfile)
  let amandaPhoto = photosArray.find(element => element.node.relativePath == amandaProfile)
  let andrewPhoto = photosArray.find(element => element.node.relativePath == andrewProfile)
  let aparnaPhoto = photosArray.find(element => element.node.relativePath == aparnaProfile)
  let arjunPhoto = photosArray.find(element => element.node.relativePath == arjunProfile)
  let banksPhoto = photosArray.find(element => element.node.relativePath == banksProfile)
  let desmondPhoto = photosArray.find(element => element.node.relativePath == desmondProfile)
  let ellaPhoto = photosArray.find(element => element.node.relativePath == ellaProfile)
  let mattPhoto = photosArray.find(element => element.node.relativePath == mattProfile)
  let pranshuPhoto = photosArray.find(element => element.node.relativePath == pranshuProfile)
  let quintPhoto = photosArray.find(element => element.node.relativePath == quintProfile)
  let savannahPhoto = photosArray.find(element => element.node.relativePath == savannahProfile)
  let sethPhoto = photosArray.find(element => element.node.relativePath == sethProfile)
  let shivaniPhoto = photosArray.find(element => element.node.relativePath == shivaniProfile)
  let varunPhoto = photosArray.find(element => element.node.relativePath == varunProfile)

  let briannaPhoto = photosArray.find(element => element.node.relativePath == briannaProfile)
  let joshPhoto = photosArray.find(element => element.node.relativePath == joshProfile)
  let bcPhoto = photosArray.find(element => element.node.relativePath == bcProfile)
  let jeannePhoto = photosArray.find(element => element.node.relativePath == jeanneProfile)

  // console.log(laraPhoto)

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
            <h3>The People That Brought StartUp to Life</h3>
            <h1>StartUp 2022 Core Team</h1>
          </div>


          <div class="peopleContainer">

          <Card
            imgData={laraPhoto}
            img={laraProfile}
            fname="Lara"
            lname="Federspiel"
            role="Co-Director"
            major="User Experience"
            linkedin="https://www.linkedin.com/in/larafederspiel"
            portfolio="http://larafederspiel.com/"
            />

            <Card
            imgData={amadeusPhoto}
            img={amadeusProfile}
            fname="Amadeus"
            lname="Cameron"
            role="Co-Director"
            major="User Experience"
            linkedin="https://www.linkedin.com/in/amadeuscameron/"
            portfolio="https://evanamadeus.com/"
            />

            <Card
            imgData={savannahPhoto}
            img={savannahProfile}
            fname="Savannah"
            lname="Wilkinson"
            role="Event Coordinator"
            major="User Experience"
            linkedin="https://www.linkedin.com/in/savannahwilkinson"
            portfolio="https://www.savannahwilkinson.com/"
            />

            <Card
            imgData={andrewPhoto}
            img={andrewProfile}
            fname="Andrew"
            lname="Goodridge"
            role="Logistics Coordinator"
            major="User Experience"
            linkedin="https://www.linkedin.com/in/ndrewgood"
            portfolio="https://ndrewgood.com/"
            />

            <Card
            imgData={quintPhoto}
            img={quintProfile}
            fname="Quint"
            lname="Bailey"
            role="Sessions Coordinator"
            major="User Experience"
            linkedin="https://www.linkedin.com/in/quintbailey/"
            portfolio="https://www.quint.design/"
            />

            <Card
            imgData={aparnaPhoto}
            img={aparnaProfile}
            fname="Aparna"
            lname="Somvanshi"
            role="Outreach Coordinator"
            major="User Experience"
            linkedin="https://www.linkedin.com/in/haloaparna"
            portfolio="https://www.aparnasomvanshi.com/"
            />

            <Card
            imgData={varunPhoto}
            img={varunProfile}
            fname="Varun"
            lname="Khatri"
            role="Lead Web Developer"
            major="User Experience"
            linkedin="https://www.linkedin.com/in/varunmk/"
            portfolio="https://www.thevarunkhatri.com/"
            />

            <Card
            imgData={mattPhoto}
            img={mattProfile}
            fname="Matt"
            lname="Ahrens"
            role="Web Developer"
            major="User Experience"
            linkedin="https://www.linkedin.com/in/matt-ahrens-/"
            portfolio="https://www.mattahrens.design/"
            />

            <Card
            imgData={sethPhoto}
            img={sethProfile}
            fname="Seth"
            lname="Stomberger"
            role="Visual Designer"
            major="User Experience"
            linkedin="http://www.linkedin.com/in/seth-stomberger-56a6601a9"
            portfolio="https://sethstomberger.com/"
            />

            <Card
            imgData={amandaPhoto}
            img={amandaProfile}
            fname="Amanda"
            lname="Kong"
            role="Visual Designer"
            major="User Experience"
            linkedin="https://www.linkedin.com/in/amandakkong/"
            portfolio="https://amandakongakk.wixsite.com/amandakong"
            />            

            <Card
            imgData={ellaPhoto}
            img={ellaProfile}
            fname="Ella"
            lname="Reisinger"
            role="Social Media Coordinator"
            major="Graphic Design"
            linkedin="https://www.linkedin.com/in/ella-r-56972a185/"
            portfolio="https://ereisi20.myportfolio.com/"
            />

            <Card
            imgData={arjunPhoto}
            img={arjunProfile}
            fname="Arjun"
            lname="Gupta"
            role="Visual Designer"
            major="User Experience"
            linkedin="https://www.linkedin.com/in/arjun-gupta-ux/"
            portfolio="https://arjunguptadesign.com/"
            />

            <Card
            imgData={pranshuPhoto}
            img={pranshuProfile}
            fname="Pranshu"
            lname="Agarwal"
            role="Outreach Coordinator"
            major="User Experience"
            linkedin="https://www.linkedin.com/in/pranshu-agarwal-97a41a198/"
            portfolio="https://pranshuagarwal.com/"
            />

            <Card
            imgData={banksPhoto}
            img={banksProfile}
            fname="Banks"
            lname="Maynard"
            role="Motion Media Designer"
            major="Motion Media"
            linkedin="https://www.linkedin.com/in/banks-maynard-721b23201"
            portfolio="https://www.banksmaynard.com/"
            />

            <Card
            imgData={shivaniPhoto}
            img={shivaniProfile}
            fname="Shivani"
            lname="Varandani"
            role="Motion Media Designer"
            major="Motion Media"
            linkedin="https://www.linkedin.com/in/shivani-varandani"
            portfolio="https://shivanivarandani.com/"
            />

            <FacultyCard
            imgData={briannaPhoto}
            img={briannaProfile}
            fname="Brianna"
            lname="Hayes"
            role="SCADpro Project Coordinator"
            linkedin="https://www.linkedin.com/in/brianna-hayes/"
            />

            <FacultyCard
            imgData={joshPhoto}
            img={joshProfile}
            fname="Josh"
            lname="Lind"
            role="Executive Director of &nbsp; Stragetic Enterprises"
            linkedin="https://www.linkedin.com/in/joshlind/"
            />

            <FacultyCard
            imgData={jeannePhoto}
            img={jeanneProfile}
            fname="Jeanne"
            lname="McPhillips"
            role="Event Advisor"
            linkedin="https://www.linkedin.com/in/jeanne-mcphillips/"
            />

            <div className="centerBC"></div>

            <FacultyCard
            imgData={bcPhoto} 
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

  const imgStyles = {
    background: 'url(' + props.img + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  if(props.imgData) {
    console.log(props.imgData)
    console.log(props.imgData.node.childImageSharp)
  }
  

  return(
    <div className="entireWrapperCards">
      <div className="profileHalf">
      {/* <div className="profileHalf" style={imgStyles}> */}
        {props.imgData ? <GatsbyImage className="profilePic" image={props.imgData.node.childImageSharp.gatsbyImageData}/> : null}
        {/* <img className="profilePic" src={props.img} /> */}
      </div>

      <div className="cardContent" >
        <div className="textContent">
          <h2 className="cardFirstName">{props.fname}</h2>
          <h2 className="cardLastName">{props.lname}</h2>
          <p className="cardRole">{props.role}</p>
          <p className="cardMajor">{props.major}</p>
        </div>
        <div class="buttonWrapper">
          <form action={props.linkedin} target="_blank">
            <button className="externalButton">LinkedIn <strong> &nbsp; {String.fromCharCode(10230)}</strong></button>
          </form>
          <form action={props.portfolio} target="_blank">
            <button className="externalButton">Portfolio <strong> &nbsp; {String.fromCharCode(10230)}</strong></button>
          </form>
        </div>
      </div>
    </div>
  );
}

function FacultyCard (props) {

  const imgStyles = {
    background: 'url(' + props.img + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return(

      <div className="faculty entireWrapperCards">
        <div className="profileHalf">
        {/* <div className="profileHalf" style={imgStyles}> */}
          {/* <img className="profilePic" src={props.img} /> */}
          {props.imgData ? <GatsbyImage className="profilePic" image={props.imgData.node.childImageSharp.gatsbyImageData}/> : null}
        </div>

        <div className="facultyCard cardContent">
          <div className="textContent">
            <h2 className="cardFirstName">{props.fname}</h2>
            <h2 className="cardLastName">{props.lname}</h2>
            <p className="cardRole">{props.role}</p>
            <p className="cardMajor">{props.major}</p>
          </div>
          <div class="buttonWrapper">
            <form action={props.linkedin} target="_blank">
              <button className="externalButtonFaculty">LinkedIn <strong> &nbsp; {String.fromCharCode(10230)}</strong> </button>
            </form>
          </div>
        </div>
      </div>
  );
}

export default TeamPage;