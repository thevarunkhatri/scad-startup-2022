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

import blankProfile from '../assets/img/judges/blankProfile.png';

import amyMartin from '../assets/img/judges/amyMartin.jpeg';
import amyMcclure from '../assets/img/judges/amyMcclure.jpeg';
import andrewFirstenberger from '../assets/img/judges/andrewFirstenberger.jpeg';
import annaliseLao from '../assets/img/judges/annaliseLao.jpeg';
import cassieMcdaniel from '../assets/img/judges/cassieMcdaniel.jpeg';
import coreyKeller from '../assets/img/judges/coreyKeller.jpeg';
import danGrossman from '../assets/img/judges/danGrossman.jpeg';
import fonzMorris from '../assets/img/judges/fonzMorris.jpeg';
import hilalKoyuncu from '../assets/img/judges/hilalKoyuncu.jpeg';
import jayFanelli from '../assets/img/judges/jayFanelli.jpeg';
import lukeLi from '../assets/img/judges/lukeLi.jpeg';
import marySargent from '../assets/img/judges/marySargent.jpeg';
import nishatAkhtar from '../assets/img/judges/nishatAkhtar.jpeg';
import parvanehToghiani from '../assets/img/judges/parvanehToghiani.jpeg';
import staceyBurr from '../assets/img/judges/staceyBurr.jpeg';
import teslimA from '../assets/img/judges/teslimA.jpeg';

import aditiVyas from '../assets/img/judges/aditiVyas.jpeg';
import akshayKhandelwal from '../assets/img/judges/akshayKhandelwal.jpeg';
import alanGorinstein from '../assets/img/judges/alanGorinstein.jpeg';
import andresSepulveda from '../assets/img/judges/andresSepulveda.jpeg';
import annaJones from '../assets/img/judges/annaJones.jpeg';
import brianOllison from '../assets/img/judges/brianOllison.jpeg';
import caseyHarper from '../assets/img/judges/caseyHarper.jpeg';
import dipaliBajaj from '../assets/img/judges/dipaliBajaj.jpeg';
import goldieChan from '../assets/img/judges/goldieChan.jpeg';
import jaiTudor from '../assets/img/judges/jaiTudor.jpeg';
import jamesSpence from '../assets/img/judges/jamesSpence.jpeg';
import joshInch from '../assets/img/judges/joshInch.jpeg';
import leonZhang from '../assets/img/judges/leonZhang.jpeg';
import marcelaVillalobos from '../assets/img/judges/marcelaVillalobos.jpeg';
import mattAshwood from '../assets/img/judges/mattAshwood.jpeg';
import mitziOkou from '../assets/img/judges/mitziOkou.jpeg';
import nadiaLe from '../assets/img/judges/nadiaLe.jpeg';
import nickBraver from '../assets/img/judges/nickBraver.jpeg';
import nickCuda from '../assets/img/judges/nickCuda.jpeg';
import nickDine from '../assets/img/judges/nickDine.jpeg';
import sarahLashinsky from '../assets/img/judges/sarahLashinsky.jpeg';
import travisNeilson from '../assets/img/judges/travisNeilson.jpeg';

import bobbyBerk from '../assets/img/judges/bobbyBerk.jpeg';
import chrisDown from '../assets/img/judges/chrisDown.jpeg';
import deanNelson from '../assets/img/judges/deanNelson.jpeg';
import faraiMadzima from '../assets/img/judges/faraiMadzima.jpeg';
import jenBonnet from '../assets/img/judges/jenBonnet.jpeg';
import lanceShields from '../assets/img/judges/lanceShields.jpeg';
import mikeBuzzard from '../assets/img/judges/mikeBuzzard.jpeg';
import xerxesIrani from '../assets/img/judges/xerxesIrani.jpeg';

import abiLierheimer from '../assets/img/judges/abiLierheimer.jpeg';
import angelaMartin from '../assets/img/judges/angelaMartin.jpeg';
import devinObryan from '../assets/img/judges/devinObryan.jpeg';
import danielleTorres from '../assets/img/judges/danielleTorres.jpeg';
import markManalaysay from '../assets/img/judges/markManalaysay.jpeg';
import nicolePappas from '../assets/img/judges/nicolePappas.jpeg';
import vedikaBhasin from '../assets/img/judges/vedikaBhasin.jpeg';
import justinKeoninh from '../assets/img/judges/justinKeoninh.jpeg';

import druraParrish from '../assets/img/judges/druraParrish.jpeg';
import ericaCardenas from '../assets/img/judges/ericaCardenas.jpeg';
import gonzoGelso from '../assets/img/judges/gonzoGelso.jpeg';
import staceyRoach from '../assets/img/judges/staceyRoach.jpeg';
import alexWhitman from '../assets/img/judges/alexWhitman.jpeg';




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

            {/* <JudgeCard
            img={bobbyBerk}
            fname="Bobby"
            lname="Berk"
            role="Founder & CEO"
            company="Bobby Berk"
            linkedin="https://www.linkedin.com/in/bobbyberk/"
            /> */}

            <JudgeCard
            img={chrisDown}
            fname="Chris"
            lname="Down"
            role="Chief Design Officer"
            company="Mattel"
            linkedin="https://www.linkedin.com/in/chdown/"
            />

            <JudgeCard
            img={deanNelson}
            fname="Dean"
            lname="Nelson"
            role="SCADpro Professor"
            company="SCAD"
            linkedin="https://www.linkedin.com/in/dean-n-96b639/"
            />

            <JudgeCard
            img={faraiMadzima}
            fname="Farai"
            lname="Madzima"
            role="UX Designer"
            company="Shopify"
            linkedin="https://www.linkedin.com/in/farai/"
            />

            <JudgeCard
            img={jenBonnet}
            fname="Jen"
            lname="Bonnet"
            role="Executive Director"
            company="SEDA"
            linkedin="https://www.linkedin.com/in/jenniferbonnett/"
            />

            <JudgeCard
            img={lanceShields}
            fname="Lance"
            lname="Shields"
            role="Director of International Design"
            company="Adobe"
            linkedin="https://www.linkedin.com/in/lanceshields/"
            />

            <JudgeCard
            img={mikeBuzzard}
            fname="Mike"
            lname="Buzzard"
            role="Senior Design Manager"
            company="Google"
            linkedin="https://www.linkedin.com/in/buzzard/"
            />

            <JudgeCard
            img={xerxesIrani}
            fname="Xerxes"
            lname="Irani"
            role="Director of Equitable Design"
            company="Facebook"
            linkedin="https://www.linkedin.com"
            />



          <JudgeCard
            img={amyMartin}
            fname="Amy"
            lname="Martin"
            role="Senior Manager of Creative"
            company="Gulfstream"
            linkedin="https://www.linkedin.com/in/amy-bierbach-martin-2901304/"
            />


          <JudgeCard
            img={amyMcclure}
            fname="Amy"
            lname="McClure"
            role="Director of Product Design"
            company="Squarespace"
            linkedin="https://www.linkedin.com/in/amylucasmcclure/"
            />


          <JudgeCard
            img={andrewFirstenberger}
            fname="Andrew"
            lname="Firstenberger"
            role="Director of Product Design"
            company="Intuit"
            linkedin="https://www.linkedin.com/in/firsten/"
            />


          <JudgeCard
            img={annaliseLao}
            fname="Annalise"
            lname="Lao"
            role="Senior Product Designer"
            company="Mattel"
            linkedin="https://www.linkedin.com/in/annaliselao/"
            />


          <JudgeCard
            img={cassieMcdaniel}
            fname="Cassie"
            lname="McDaniel"
            role="Director of Product Design"
            company="Lattice"
            linkedin="https://www.linkedin.com/in/cassiemc/"
            />


          <JudgeCard
            img={coreyKeller}
            fname="Corey"
            lname="Keller"
            role="Senior UX Lead"
            company="IBM"
            linkedin="https://www.linkedin.com/in/corey-keller-ba638928/"
            />

            
          <JudgeCard
            img={danGrossman}
            fname="Dan"
            lname="Grossman"
            role="Design Director"
            company="Smart Design"
            linkedin="https://www.linkedin.com/in/dancgrossman/"
            />


          <JudgeCard
            img={fonzMorris}
            fname="Fonz"
            lname="Morris"
            role="Lead Product Designer"
            company="Netflix"
            linkedin="https://www.linkedin.com/in/fonzmorris/"
            />


          <JudgeCard
            img={hilalKoyuncu}
            fname="Hilal"
            lname="Koyuncu"
            role="UX Manager"
            company="Google"
            linkedin="https://www.linkedin.com/in/hilal-koyuncu-060b2118/"
            />


          <JudgeCard
            img={jayFanelli}
            fname="Jay"
            lname="Fanelli"
            role="Senior Design Manager"
            company="Duolingo"
            linkedin="https://www.linkedin.com/in/jay-fanelli-25602b158/"
            />


          <JudgeCard
            img={lukeLi}
            fname="Luke"
            lname="Li"
            role="Global Creative Lead"
            company="IKEA"
            linkedin="https://www.linkedin.com/in/lukeiscrazyman/"
            />


          <JudgeCard
            img={marySargent}
            fname="Mary"
            lname="Sargent"
            role="Senior Product Designer"
            company="Webflow"
            linkedin="https://www.linkedin.com/in/maryelsargent/"
            />


          <JudgeCard
            img={nishatAkhtar}
            fname="Nishat"
            lname="Akhtar"
            role="VP of Creative"
            company="Intstrument"
            linkedin="https://www.linkedin.com/in/nishatakhtar/"
            />


          <JudgeCard
            img={parvanehToghiani}
            fname="Parvaneh"
            lname="Toghiani"
            role="Staff Product Designer"
            company="Uber"
            linkedin="https://www.linkedin.com/in/parvanehtoghiani/"
            />


          <JudgeCard
            img={staceyBurr}
            fname="Stacey"
            lname="Burr"
            role="VP of Product"
            company="Google"
            linkedin="https://www.linkedin.com/in/stburr/"
            />


          <JudgeCard
            img={teslimA}
            fname="Teslim"
            lname="A"
            role="Product Design Lead"
            company="Netflix"
            linkedin="https://www.linkedin.com/in/teslimalabi/"
            />


          </div>

          <div className="mentorsSectionHeader">
            <Mentors />
            <h2>Our Enthusiastic Mentors</h2>
          </div>

          <div class="peopleContainer">

          <JudgeCard
            img={abiLierheimer}
            fname="Abi"
            lname="Lierheimer"
            role="Founder"
            company="Bobblehaus"
            linkedin="https://www.linkedin.com"
            />

          <JudgeCard
            img={aditiVyas}
            fname="Aditi"
            lname="Vyas"
            role="Industrial Designerr"
            company="Clear"
            linkedin="https://www.linkedin.com/in/vyasaditi/"
            />

            <JudgeCard
            img={akshayKhandelwal}
            fname="Akshay"
            lname="Khandelwal"
            role="Sr. Product Designer"
            company="BIC"
            linkedin="https://www.linkedin.com/in/khandelwalakshay/"
            />

            <JudgeCard
            img={alanGorinstein}
            fname="Alan"
            lname="Gorinstein"
            role="UX Designer"
            company="Ancestry"
            linkedin="https://www.linkedin.com/in/alanrivero/"
            />

            <JudgeCard
            img={alexWhitman}
            fname="Alex"
            lname="Whitman"
            role="Project Manager"
            company="Snap-On"
            linkedin="https://www.linkedin.com/in/alex-whitman-9b41a1185/"
            /> 

            <JudgeCard
            img={angelaMartin}
            fname="Angela"
            lname="Martin"
            role="UX Designer"
            company="Lenovo"
            linkedin="https://www.linkedin.com"
            />

            <JudgeCard
            img={andresSepulveda}
            fname="Andrés"
            lname="Sepúlveda"
            role="UX Researcher"
            company="Lowe's"
            linkedin="https://www.linkedin.com/in/andresfelipegalvis/"
            />

            <JudgeCard
            img={annaJones}
            fname="Anna"
            lname="Jones"
            role="Sr. UX Designer"
            company="Calendly"
            linkedin="https://www.linkedin.com/in/anna-jones-21471b36/"
            />

<JudgeCard
            img={brianOllison}
            fname="Brian"
            lname="Ollison"
            role="Sr. Product Designer"
            company="Intuit"
            linkedin="https://www.linkedin.com/in/brian-ollison-924a7248/"
            />

<JudgeCard
            img={caseyHarper}
            fname="Casey"
            lname="Harper"
            role="Product Designer"
            company="Mailchimp"
            linkedin="https://www.linkedin.com/in/caseymharper/"
            />

<JudgeCard
            img={devinObryan}
            fname="Devin"
            lname="O'Bryan"
            role="Design Lead"
            company="IBM"
            linkedin="https://www.linkedin.com/in/devinobryan/"
            />

<JudgeCard
            img={danielleTorres}
            fname="Danielle"
            lname="Torres"
            role="Interaction Designer"
            company="Google"
            linkedin="https://www.linkedin.com/in/dtorrvis/"
            />

<JudgeCard
            img={dipaliBajaj}
            fname="Dipali"
            lname="Bajaj"
            role="Experience Designer"
            company="Adobe"
            linkedin="https://www.linkedin.com/in/dipali-bajaj-861a7b105/"
            />

            <JudgeCard
            img={druraParrish}
            fname="Drura"
            lname="Parrish"
            role="Partner"
            company="RSLP"
            linkedin="https://www.linkedin.com/in/drura-parrish-b7b5bb52/"
            /> 

            <JudgeCard
            img={ericaCardenas}
            fname="Erica"
            lname="Cardenas"
            role="Senior Graphic Designer"
            company="Iknow LLC"
            linkedin="https://www.linkedin.com/in/ericamcardenas/"
            /> 

<JudgeCard
            img={goldieChan}
            fname="Goldie"
            lname="Chan"
            role="Speaker & Founder"
            company="Warm Robots"
            linkedin="https://www.linkedin.com/in/goldie/"
            />

            <JudgeCard
            img={gonzoGelso}
            fname="Gonzo"
            lname="Gelso"
            role="Product & UX Designer"
            company="NYC"
            linkedin="https://www.linkedin.com/in/gonzalogelso/"
            /> 

<JudgeCard
            img={jaiTudor}
            fname="Jai"
            lname="Tudor"
            role="Product Designer"
            company="Zillow"
            linkedin="https://www.linkedin.com/in/jaitudor/"
            />

<JudgeCard
            img={jamesSpence}
            fname="James"
            lname="Spence"
            role="Principal Design Program Manager"
            company="Zillow"
            linkedin="https://www.linkedin.com/in/jspence1/"
            />

<JudgeCard
            img={joshInch}
            fname="Josh"
            lname="Inch"
            role="Sr. Product Designer"
            company="Meta"
            linkedin="https://www.linkedin.com/in/josh-inch-0415b334/"
            />

<JudgeCard
            img={justinKeoninh}
            fname="Justin"
            lname="Keoninh"
            role="Product Designer"
            company="Kalshi"
            linkedin="https://www.linkedin.com/in/justin-keoninh/"
            />

<JudgeCard
            img={leonZhang}
            fname="Leon"
            lname="Zhang"
            role="UX Designer"
            company="Expedia"
            linkedin="https://www.linkedin.com/in/zhangleondesign/"
            />

<JudgeCard
            img={marcelaVillalobos}
            fname="Marcela"
            lname="Villalobos"
            role="Graphic Designer"
            company="Axiom Space"
            linkedin="https://www.linkedin.com/in/marcelavillalobos22/"
            />

<JudgeCard
            img={markManalaysay}
            fname="Mark"
            lname="Manalaysay"
            role="Interactive Design Lead"
            company="Apple"
            linkedin="https://www.linkedin.com/in/mmanal/"
            />

<JudgeCard
            img={mattAshwood}
            fname="Matt"
            lname="Ashwood"
            role="Principal Product Designer"
            company="Intuit"
            linkedin="https://www.linkedin.com/in/mattashwood/"
            />

<JudgeCard
            img={mitziOkou}
            fname="Mitzi"
            lname="Okou"
            role="Associate Product Designer"
            company="Spotify"
            linkedin="https://www.linkedin.com/in/mitzi-okou-30918b144/"
            />

            <JudgeCard
            img={nadiaLe}
            fname="Nadia"
            lname="Le"
            role="Product Designer"
            company="Corus Entertainment"
            linkedin="https://www.linkedin.com/in/nadiahle/"
            />

            <JudgeCard
            img={nickBraver}
            fname="Nick"
            lname="Braver"
            role="Product Designer"
            company="Indeed"
            linkedin="https://www.linkedin.com/in/nickbraver/"
            />

            <JudgeCard
            img={nickCuda}
            fname="Nick"
            lname="Cuda"
            role="Sr. Product Designer"
            company="Mailchimp"
            linkedin="https://www.linkedin.com/in/nickcuda/"
            />

          <JudgeCard
            img={nickDine}
            fname="Nick"
            lname="Dine"
            role="SCADpro Professor"
            company="SCAD"
            linkedin="https://www.linkedin.com/in/nick-dine-a8a94375/"
            />

<JudgeCard
            img={nicolePappas}
            fname="Nicole"
            lname="Peppas"
            role="Junior 2D Animator"
            company="Buck"
            linkedin="https://www.linkedin.com/in/nicole-pappas-a718b5169/"
            />


          <JudgeCard
            img={sarahLashinsky}
            fname="Sarah"
            lname="Lashinsky"
            role="Product Designer"
            company="Mailchimp"
            linkedin="https://www.linkedin.com/in/sarah-lashinsky/"
            />

            <JudgeCard
            img={staceyRoach}
            fname="Stacey"
            lname="Roach"
            role="Chief Operating Officer"
            company="Inventure IT"
            linkedin="https://www.linkedin.com/in/staceyroach"
            /> 


          <JudgeCard
            img={travisNeilson}
            fname="Travis"
            lname="Neilson"
            role="Interaction Designer"
            company="Google"
            linkedin="https://www.linkedin.com/in/travisneilson/"
            />

<JudgeCard
            img={vedikaBhasin}
            fname="Vedika"
            lname="Bhasin"
            role="AR Designer"
            company="Bare Tree Media"
            linkedin="https://www.linkedin.com/in/vedikabhasin/"
            />
          </div>

        </Container>
      </main>
    </Layout>
  );
};

function JudgeCard (props) {
  return(

      <div className="entireWrapperCardsJudge">
        <div className="profileHalfJudge">
          <img className="profilePicJudge" src={props.img} />
        </div>

        <div className = "judgesCardContent" >
          <h2 className="judgesFirstName">{props.fname}</h2>
          <h2 className="judgesLastName">{props.lname}</h2>
          <p className="judgesRole">{props.role} @ <strong>{props.company}</strong></p>
          <div class="buttonWrapperJudges">
            <form action={props.linkedin} target="_blank">
              <button className="externalButtonFaculty">LinkedIn <strong> &nbsp; {String.fromCharCode(10230)}</strong></button>
            </form>
          </div>
        </div>
      </div>
  );
}

{/* <JudgeCard
img={blankProfile}
fname="first"
lname="last"
role="role"
company="company"
linkedin="https://www.linkedin.com"
/>  */}



export default JudgesPage;