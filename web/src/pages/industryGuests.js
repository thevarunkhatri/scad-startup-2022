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
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Checkmark from "../assets/svg/judges/checkmark.svg"
import Mentors from "../assets/svg/judges/mentors.svg"

import '../styles/people.scss';
import '../styles/judges.scss';

// import blankProfile from '../assets/img/judges/blankProfile.png';

let amyMartin           =  'industryGuests/amyMartin.jpeg';
let amyMcclure          =  'industryGuests/amyMcclure.jpeg';
let andrewFirstenberger =  'industryGuests/andrewFirstenberger.jpeg';
let annaliseLao         =  'industryGuests/annaliseLao.jpeg';
let cassieMcdaniel      =  'industryGuests/cassieMcdaniel.jpeg';
let coreyKeller         =  'industryGuests/coreyKeller.jpeg';
let danGrossman         =  'industryGuests/danGrossman.jpeg';
let fonzMorris          =  'industryGuests/fonzMorris.jpeg';
let hilalKoyuncu        =  'industryGuests/hilalKoyuncu.jpeg';
let jayFanelli          =  'industryGuests/jayFanelli.jpeg';
let lukeLi              =  'industryGuests/lukeLi.jpeg';
let marySargent         =  'industryGuests/marySargent.jpeg';
let nishatAkhtar        =  'industryGuests/nishatAkhtar.jpeg';
let parvanehToghiani    =  'industryGuests/parvanehToghiani.jpeg';
let staceyBurr          =  'industryGuests/staceyBurr.jpeg';
let teslimA             =  'industryGuests/teslimA.jpeg';
let aditiVyas           =  'industryGuests/aditiVyas.jpeg';
let akshayKhandelwal    =  'industryGuests/akshayKhandelwal.jpeg';
let alanGorinstein      =  'industryGuests/alanGorinstein.jpeg';
let andresSepulveda     =  'industryGuests/andresSepulveda.jpeg';
let annaJones           =  'industryGuests/annaJones.jpeg';
let brianOllison        =  'industryGuests/brianOllison.jpeg';
let caseyHarper         =  'industryGuests/caseyHarper.jpeg';
let dipaliBajaj         =  'industryGuests/dipaliBajaj.jpeg';
let goldieChan          =  'industryGuests/goldieChan.jpeg';
let jaiTudor            =  'industryGuests/jaiTudor.jpeg';
let jamesSpence         =  'industryGuests/jamesSpence.jpeg';
let joshInch            =  'industryGuests/joshInch.jpeg';
let leonZhang           =  'industryGuests/leonZhang.jpeg';
let marcelaVillalobos   =  'industryGuests/marcelaVillalobos.jpeg';
let mattAshwood         =  'industryGuests/mattAshwood.jpeg';
let mitziOkou           =  'industryGuests/mitziOkou.jpeg';
let nadiaLe             =  'industryGuests/nadiaLe.jpeg';
let nickBraver          =  'industryGuests/nickBraver.jpeg';
let nickCuda            =  'industryGuests/nickCuda.jpeg';
let nickDine            =  'industryGuests/nickDine.jpeg';
let sarahLashinsky      =  'industryGuests/sarahLashinsky.jpeg';
let travisNeilson       =  'industryGuests/travisNeilson.jpeg';
let bobbyBerk           =  'industryGuests/bobbyBerk.jpeg';
let chrisDown           =  'industryGuests/chrisDown.jpeg';
let deanNelson          =  'industryGuests/deanNelson.jpeg';
let faraiMadzima        =  'industryGuests/faraiMadzima.jpeg';
let jenBonnet           =  'industryGuests/jenBonnet.jpeg';
let lanceShields        =  'industryGuests/lanceShields.jpeg';
let mikeBuzzard         =  'industryGuests/mikeBuzzard.jpeg';
let xerxesIrani         =  'industryGuests/xerxesIrani.jpeg';
let abiLierheimer       =  'industryGuests/abiLierheimer.jpeg';
let angelaMartin        =  'industryGuests/angelaMartin.jpeg';
let devinObryan         =  'industryGuests/devinObryan.jpeg';
let danielleTorres      =  'industryGuests/danielleTorres.jpeg';
let markManalaysay      =  'industryGuests/markManalaysay.jpeg';
let nicolePappas        =  'industryGuests/nicolePappas.jpeg';
let vedikaBhasin        =  'industryGuests/vedikaBhasin.jpeg';
let justinKeoninh       =  'industryGuests/justinKeoninh.jpeg';
let druraParrish        =  'industryGuests/druraParrish.jpeg';
let ericaCardenas       =  'industryGuests/ericaCardenas.jpeg';
let gonzoGelso          =  'industryGuests/gonzoGelso.jpeg';
let staceyRoach         =  'industryGuests/staceyRoach.jpeg';
let alexWhitman         =  'industryGuests/alexWhitman.jpeg';



export const query = graphql`
  query industryGuestsPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    photos: allFile(filter: {relativePath: {regex: "/^industryGuests/"}}) {
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

const IndustryGuestsPage = props => {
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

  let amyMartinPhoto = photosArray.find(element => element.node.relativePath == amyMartin)
  let amyMcclurePhoto = photosArray.find(element => element.node.relativePath == amyMcclure)
  let andrewFirstenbergerPhoto = photosArray.find(element => element.node.relativePath == andrewFirstenberger)
  let annaliseLaoPhoto = photosArray.find(element => element.node.relativePath == annaliseLao)
  let cassieMcdanielPhoto = photosArray.find(element => element.node.relativePath == cassieMcdaniel)
  let coreyKellerPhoto = photosArray.find(element => element.node.relativePath == coreyKeller)
  let danGrossmanPhoto = photosArray.find(element => element.node.relativePath == danGrossman)
  let fonzMorrisPhoto = photosArray.find(element => element.node.relativePath == fonzMorris)
  let hilalKoyuncuPhoto = photosArray.find(element => element.node.relativePath == hilalKoyuncu)
  let jayFanelliPhoto = photosArray.find(element => element.node.relativePath == jayFanelli)
  let lukeLiPhoto = photosArray.find(element => element.node.relativePath == lukeLi)
  let marySargentPhoto = photosArray.find(element => element.node.relativePath == marySargent)
  let nishatAkhtarPhoto = photosArray.find(element => element.node.relativePath == nishatAkhtar)
  let parvanehToghianiPhoto = photosArray.find(element => element.node.relativePath == parvanehToghiani)
  let staceyBurrPhoto = photosArray.find(element => element.node.relativePath == staceyBurr)
  let teslimAPhoto = photosArray.find(element => element.node.relativePath == teslimA)
  let aditiVyasPhoto = photosArray.find(element => element.node.relativePath == aditiVyas)
  let akshayKhandelwalPhoto = photosArray.find(element => element.node.relativePath == akshayKhandelwal)
  let alanGorinsteinPhoto = photosArray.find(element => element.node.relativePath == alanGorinstein)
  let andresSepulvedaPhoto = photosArray.find(element => element.node.relativePath == andresSepulveda)
  let annaJonesPhoto = photosArray.find(element => element.node.relativePath == annaJones)
  let brianOllisonPhoto = photosArray.find(element => element.node.relativePath == brianOllison)
  let caseyHarperPhoto = photosArray.find(element => element.node.relativePath == caseyHarper)
  let dipaliBajajPhoto = photosArray.find(element => element.node.relativePath == dipaliBajaj)
  let goldieChanPhoto = photosArray.find(element => element.node.relativePath == goldieChan)
  let jaiTudorPhoto = photosArray.find(element => element.node.relativePath == jaiTudor)
  let jamesSpencePhoto = photosArray.find(element => element.node.relativePath == jamesSpence)
  let joshInchPhoto = photosArray.find(element => element.node.relativePath == joshInch)
  let leonZhangPhoto = photosArray.find(element => element.node.relativePath == leonZhang)
  let marcelaVillalobosPhoto = photosArray.find(element => element.node.relativePath == marcelaVillalobos)
  let mattAshwoodPhoto = photosArray.find(element => element.node.relativePath == mattAshwood)
  let mitziOkouPhoto = photosArray.find(element => element.node.relativePath == mitziOkou)
  let nadiaLePhoto = photosArray.find(element => element.node.relativePath == nadiaLe)
  let nickBraverPhoto = photosArray.find(element => element.node.relativePath == nickBraver)
  let nickCudaPhoto = photosArray.find(element => element.node.relativePath == nickCuda)
  let nickDinePhoto = photosArray.find(element => element.node.relativePath == nickDine)
  let sarahLashinskyPhoto = photosArray.find(element => element.node.relativePath == sarahLashinsky)
  let travisNeilsonPhoto = photosArray.find(element => element.node.relativePath == travisNeilson)
  let bobbyBerkPhoto = photosArray.find(element => element.node.relativePath == bobbyBerk)
  let chrisDownPhoto = photosArray.find(element => element.node.relativePath == chrisDown)
  let deanNelsonPhoto = photosArray.find(element => element.node.relativePath == deanNelson)
  let faraiMadzimaPhoto = photosArray.find(element => element.node.relativePath == faraiMadzima)
  let jenBonnetPhoto = photosArray.find(element => element.node.relativePath == jenBonnet)
  let lanceShieldsPhoto = photosArray.find(element => element.node.relativePath == lanceShields)
  let mikeBuzzardPhoto = photosArray.find(element => element.node.relativePath == mikeBuzzard)
  let xerxesIraniPhoto = photosArray.find(element => element.node.relativePath == xerxesIrani)
  let abiLierheimerPhoto = photosArray.find(element => element.node.relativePath == abiLierheimer)
  let angelaMartinPhoto = photosArray.find(element => element.node.relativePath == angelaMartin)
  let devinObryanPhoto = photosArray.find(element => element.node.relativePath == devinObryan)
  let danielleTorresPhoto = photosArray.find(element => element.node.relativePath == danielleTorres)
  let markManalaysayPhoto = photosArray.find(element => element.node.relativePath == markManalaysay)
  let nicolePappasPhoto = photosArray.find(element => element.node.relativePath == nicolePappas)
  let vedikaBhasinPhoto = photosArray.find(element => element.node.relativePath == vedikaBhasin)
  let justinKeoninhPhoto = photosArray.find(element => element.node.relativePath == justinKeoninh)
  let druraParrishPhoto = photosArray.find(element => element.node.relativePath == druraParrish)
  let ericaCardenasPhoto = photosArray.find(element => element.node.relativePath == ericaCardenas)
  let gonzoGelsoPhoto = photosArray.find(element => element.node.relativePath == gonzoGelso)
  let staceyRoachPhoto = photosArray.find(element => element.node.relativePath == staceyRoach)
  let alexWhitmanPhoto = photosArray.find(element => element.node.relativePath == alexWhitman)

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
            <h1>Industry Guests</h1>
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
            imgData={chrisDownPhoto}
            img={chrisDown}
            fname="Chris"
            lname="Down"
            role="Chief Design Officer"
            company="Mattel"
            linkedin="https://www.linkedin.com/in/chdown/"
            />

            <JudgeCard
            imgData={deanNelsonPhoto}
            img={deanNelson}
            fname="Dean"
            lname="Nelson"
            role="SCADpro Professor"
            company="SCAD"
            linkedin="https://www.linkedin.com/in/dean-n-96b639/"
            />

            <JudgeCard
            imgData={faraiMadzimaPhoto}
            img={faraiMadzima}
            fname="Farai"
            lname="Madzima"
            role="UX Designer"
            company="Shopify"
            linkedin="https://www.linkedin.com/in/farai/"
            />

            <JudgeCard
            imgData={fonzMorrisPhoto}
            img={fonzMorris}
            fname="Fonz"
            lname="Morris"
            role="Lead Product Designer"
            company="Netflix"
            linkedin="https://www.linkedin.com/in/fonzmorris/"
            />            

            <JudgeCard
            imgData={jenBonnetPhoto}
            img={jenBonnet}
            fname="Jen"
            lname="Bonnet"
            role="Executive Director"
            company="SEDA"
            linkedin="https://www.linkedin.com/in/jenniferbonnett/"
            />

            <JudgeCard
            imgData={lanceShieldsPhoto}
            img={lanceShields}
            fname="Lance"
            lname="Shields"
            role="Director of International Design"
            company="Adobe"
            linkedin="https://www.linkedin.com/in/lanceshields/"
            />

            <JudgeCard
            imgData={mikeBuzzardPhoto}
            img={mikeBuzzard}
            fname="Mike"
            lname="Buzzard"
            role="Senior Design Manager"
            company="Google"
            linkedin="https://www.linkedin.com/in/buzzard/"
            />

            <JudgeCard
            imgData={xerxesIraniPhoto}
            img={xerxesIrani}
            fname="Xerxes"
            lname="Irani"
            role="Director of Equitable Design"
            company="Facebook"
            linkedin="https://www.linkedin.com"
            />



          <JudgeCard
          imgData={amyMartinPhoto}
            img={amyMartin}
            fname="Amy"
            lname="Martin"
            role="Senior Manager of Creative"
            company="Gulfstream"
            linkedin="https://www.linkedin.com/in/amy-bierbach-martin-2901304/"
            />


          <JudgeCard
          imgData={amyMcclurePhoto}
            img={amyMcclure}
            fname="Amy"
            lname="McClure"
            role="Director of Product Design"
            company="Squarespace"
            linkedin="https://www.linkedin.com/in/amylucasmcclure/"
            />


          <JudgeCard
          imgData={andrewFirstenbergerPhoto}
            img={andrewFirstenberger}
            fname="Andrew"
            lname="Firstenberger"
            role="Director of Product Design"
            company="Intuit"
            linkedin="https://www.linkedin.com/in/firsten/"
            />


          <JudgeCard
          imgData={annaliseLaoPhoto}
            img={annaliseLao}
            fname="Annalise"
            lname="Lao"
            role="Senior Product Designer"
            company="Mattel"
            linkedin="https://www.linkedin.com/in/annaliselao/"
            />


          <JudgeCard
          imgData={cassieMcdanielPhoto}
            img={cassieMcdaniel}
            fname="Cassie"
            lname="McDaniel"
            role="Director of Product Design"
            company="Lattice"
            linkedin="https://www.linkedin.com/in/cassiemc/"
            />


          <JudgeCard
          imgData={coreyKellerPhoto}
            img={coreyKeller}
            fname="Corey"
            lname="Keller"
            role="Senior UX Lead & Visual Designer"
            company="IBM"
            linkedin="https://www.linkedin.com/in/corey-keller-ba638928/"
            />

            
          <JudgeCard
          imgData={danGrossmanPhoto}
            img={danGrossman}
            fname="Dan"
            lname="Grossman"
            role="Design Director"
            company="Smart Design"
            linkedin="https://www.linkedin.com/in/dancgrossman/"
            />



          <JudgeCard
          imgData={hilalKoyuncuPhoto}
            img={hilalKoyuncu}
            fname="Hilal"
            lname="Koyuncu"
            role="UX Manager"
            company="Google"
            linkedin="https://www.linkedin.com/in/hilal-koyuncu-060b2118/"
            />


          <JudgeCard
          imgData={jayFanelliPhoto}
            img={jayFanelli}
            fname="Jay"
            lname="Fanelli"
            role="Senior Design Manager"
            company="Duolingo"
            linkedin="https://www.linkedin.com/in/jay-fanelli-25602b158/"
            />


          <JudgeCard
          imgData={lukeLiPhoto}
            img={lukeLi}
            fname="Luke"
            lname="Li"
            role="Global Creative Lead"
            company="IKEA"
            linkedin="https://www.linkedin.com/in/lukeiscrazyman/"
            />


          <JudgeCard
          imgData={marySargentPhoto}
            img={marySargent}
            fname="Mary"
            lname="Sargent"
            role="Senior Product Designer"
            company="Webflow"
            linkedin="https://www.linkedin.com/in/maryelsargent/"
            />


          <JudgeCard
          imgData={nishatAkhtarPhoto}
            img={nishatAkhtar}
            fname="Nishat"
            lname="Akhtar"
            role="VP of Creative"
            company="Intstrument"
            linkedin="https://www.linkedin.com/in/nishatakhtar/"
            />


          <JudgeCard
          imgData={parvanehToghianiPhoto}
            img={parvanehToghiani}
            fname="Parvaneh"
            lname="Toghiani"
            role="Staff Product Designer"
            company="Uber"
            linkedin="https://www.linkedin.com/in/parvanehtoghiani/"
            />


          <JudgeCard
          imgData={staceyBurrPhoto}
            img={staceyBurr}
            fname="Stacey"
            lname="Burr"
            role="VP of Product"
            company="Google"
            linkedin="https://www.linkedin.com/in/stburr/"
            />


          <JudgeCard
          imgData={teslimAPhoto}
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
          imgData={abiLierheimerPhoto}
            img={abiLierheimer}
            fname="Abi"
            lname="Lierheimer"
            role="Founder"
            company="Bobblehaus"
            linkedin="https://www.linkedin.com"
            />

          <JudgeCard
          imgData={aditiVyasPhoto}
            img={aditiVyas}
            fname="Aditi"
            lname="Vyas"
            role="Industrial Designerr"
            company="Clear"
            linkedin="https://www.linkedin.com/in/vyasaditi/"
            />

            <JudgeCard
            imgData={akshayKhandelwalPhoto}
            img={akshayKhandelwal}
            fname="Akshay"
            lname="Khandelwal"
            role="Sr. Product Designer"
            company="BIC"
            linkedin="https://www.linkedin.com/in/khandelwalakshay/"
            />

            <JudgeCard
            imgData={alanGorinsteinPhoto}
            img={alanGorinstein}
            fname="Alan"
            lname="Gorinstein"
            role="UX Designer"
            company="Ancestry"
            linkedin="https://www.linkedin.com/in/alanrivero/"
            />

            <JudgeCard
            imgData={alexWhitmanPhoto}
            img={alexWhitman}
            fname="Alex"
            lname="Whitman"
            role="Project Manager"
            company="Snap-On"
            linkedin="https://www.linkedin.com/in/alex-whitman-9b41a1185/"
            /> 

            <JudgeCard
            imgData={angelaMartinPhoto}
            img={angelaMartin}
            fname="Angela"
            lname="Martin"
            role="UX Designer"
            company="Lenovo"
            linkedin="https://www.linkedin.com"
            />

            {/* <JudgeCard
            imgData={andresSepulvedaPhoto}
            img={andresSepulveda}
            fname="Andrés"
            lname="Sepúlveda"
            role="UX Researcher"
            company="Lowe's"
            linkedin="https://www.linkedin.com/in/andresfelipegalvis/"
            /> */}

            <JudgeCard
            imgData={annaJonesPhoto}
            img={annaJones}
            fname="Anna"
            lname="Jones"
            role="Sr. UX Designer"
            company="Calendly"
            linkedin="https://www.linkedin.com/in/anna-jones-21471b36/"
            />

<JudgeCard
imgData={brianOllisonPhoto}
            img={brianOllison}
            fname="Brian"
            lname="Ollison"
            role="Sr. Product Designer"
            company="Intuit"
            linkedin="https://www.linkedin.com/in/brian-ollison-924a7248/"
            />

<JudgeCard
imgData={caseyHarperPhoto}
            img={caseyHarper}
            fname="Casey"
            lname="Harper"
            role="Product Designer"
            company="Mailchimp"
            linkedin="https://www.linkedin.com/in/caseymharper/"
            />

<JudgeCard
imgData={devinObryanPhoto}
            img={devinObryan}
            fname="Devin"
            lname="O'Bryan"
            role="Sr. Design Lead"
            company="IBM"
            linkedin="https://www.linkedin.com/in/devinobryan/"
            />

<JudgeCard
imgData={danielleTorresPhoto}
            img={danielleTorres}
            fname="Danielle"
            lname="Torres"
            role="Interaction Designer"
            company="Google"
            linkedin="https://www.linkedin.com/in/dtorrvis/"
            />

<JudgeCard
imgData={dipaliBajajPhoto}
            img={dipaliBajaj}
            fname="Dipali"
            lname="Bajaj"
            role="Experience Designer"
            company="Adobe"
            linkedin="https://www.linkedin.com/in/dipali-bajaj-861a7b105/"
            />

            <JudgeCard
            imgData={druraParrishPhoto}
            img={druraParrish}
            fname="Drura"
            lname="Parrish"
            role="Partner"
            company="RSLP"
            linkedin="https://www.linkedin.com/in/drura-parrish-b7b5bb52/"
            /> 

            <JudgeCard
            imgData={ericaCardenasPhoto}
            img={ericaCardenas}
            fname="Erica"
            lname="Cardenas"
            role="Senior Graphic Designer"
            company="Iknow LLC"
            linkedin="https://www.linkedin.com/in/ericamcardenas/"
            /> 

<JudgeCard
imgData={goldieChanPhoto}
            img={goldieChan}
            fname="Goldie"
            lname="Chan"
            role="Speaker & Founder"
            company="Warm Robots"
            linkedin="https://www.linkedin.com/in/goldie/"
            />

            <JudgeCard
            imgData={gonzoGelsoPhoto}
            img={gonzoGelso}
            fname="Gonzo"
            lname="Gelso"
            role="Product & UX Designer"
            company="NYC"
            linkedin="https://www.linkedin.com/in/gonzalogelso/"
            /> 

<JudgeCard
imgData={jaiTudorPhoto}
            img={jaiTudor}
            fname="Jai"
            lname="Tudor"
            role="Product Designer"
            company="Zillow"
            linkedin="https://www.linkedin.com/in/jaitudor/"
            />

<JudgeCard
imgData={jamesSpencePhoto}
            img={jamesSpence}
            fname="James"
            lname="Spence"
            role="Principal Design Program Manager"
            company="Zillow"
            linkedin="https://www.linkedin.com/in/jspence1/"
            />

<JudgeCard
imgData={joshInchPhoto}
            img={joshInch}
            fname="Josh"
            lname="Inch"
            role="Sr. Product Designer"
            company="Meta"
            linkedin="https://www.linkedin.com/in/josh-inch-0415b334/"
            />

<JudgeCard
imgData={justinKeoninhPhoto}
            img={justinKeoninh}
            fname="Justin"
            lname="Keoninh"
            role="Product Designer"
            company="Kalshi"
            linkedin="https://www.linkedin.com/in/justin-keoninh/"
            />

{/* <JudgeCard
imgData={leonZhangPhoto}
            img={leonZhang}
            fname="Leon"
            lname="Zhang"
            role="UX Designer"
            company="Expedia"
            linkedin="https://www.linkedin.com/in/zhangleondesign/"
            /> */}

<JudgeCard
imgData={marcelaVillalobosPhoto}
            img={marcelaVillalobos}
            fname="Marcela"
            lname="Villalobos"
            role="Graphic Designer"
            company="Axiom Space"
            linkedin="https://www.linkedin.com/in/marcelavillalobos22/"
            />

<JudgeCard
imgData={markManalaysayPhoto}
            img={markManalaysay}
            fname="Mark"
            lname="Manalaysay"
            role="Interactive Design Lead"
            company="Apple"
            linkedin="https://www.linkedin.com/in/mmanal/"
            />

<JudgeCard
imgData={mattAshwoodPhoto}
            img={mattAshwood}
            fname="Matt"
            lname="Ashwood"
            role="Principal Product Designer"
            company="Intuit"
            linkedin="https://www.linkedin.com/in/mattashwood/"
            />

<JudgeCard
imgData={mitziOkouPhoto}
            img={mitziOkou}
            fname="Mitzi"
            lname="Okou"
            role="Associate Product Designer"
            company="Spotify"
            linkedin="https://www.linkedin.com/in/mitzi-okou-30918b144/"
            />

            <JudgeCard
            imgData={nadiaLePhoto}
            img={nadiaLe}
            fname="Nadia"
            lname="Le"
            role="Product Designer"
            company="Corus Entertainment"
            linkedin="https://www.linkedin.com/in/nadiahle/"
            />

            <JudgeCard
            imgData={nickBraverPhoto}
            img={nickBraver}
            fname="Nick"
            lname="Braver"
            role="Product Designer"
            company="Indeed"
            linkedin="https://www.linkedin.com/in/nickbraver/"
            />

            <JudgeCard
            imgData={nickCudaPhoto}
            img={nickCuda}
            fname="Nick"
            lname="Cuda"
            role="Sr. Product Designer"
            company="Mailchimp"
            linkedin="https://www.linkedin.com/in/nickcuda/"
            />

          {/* <JudgeCard
          imgData={nickDinePhoto}
            img={nickDine}
            fname="Nick"
            lname="Dine"
            role="SCADpro Professor"
            company="SCAD"
            linkedin="https://www.linkedin.com/in/nick-dine-a8a94375/"
            /> */}

<JudgeCard
imgData={nicolePappasPhoto}
            img={nicolePappas}
            fname="Nicole"
            lname="Peppas"
            role="Junior 2D Animator"
            company="Buck"
            linkedin="https://www.linkedin.com/in/nicole-pappas-a718b5169/"
            />


          <JudgeCard
          imgData={sarahLashinskyPhoto}
            img={sarahLashinsky}
            fname="Sarah"
            lname="Lashinsky"
            role="Product Designer"
            company="Mailchimp"
            linkedin="https://www.linkedin.com/in/sarah-lashinsky/"
            />

            {/* <JudgeCard
            imgData={staceyRoachPhoto}
            img={staceyRoach}
            fname="Stacey"
            lname="Roach"
            role="Chief Operating Officer"
            company="Inventure IT"
            linkedin="https://www.linkedin.com/in/staceyroach"
            />  */}


          <JudgeCard
          imgData={travisNeilsonPhoto}
            img={travisNeilson}
            fname="Travis"
            lname="Neilson"
            role="Interaction Designer"
            company="Google"
            linkedin="https://www.linkedin.com/in/travisneilson/"
            />

<JudgeCard
imgData={vedikaBhasinPhoto}
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

  const imgStyles = {
    background: 'url(' + props.img + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return(

      <div className="entireWrapperCardsJudge">
        <div className="profileHalfJudge">
          {props.imgData ? <GatsbyImage className="profilePicJudge" image={props.imgData.node.childImageSharp.gatsbyImageData}/> : null}
          {/* <img className="profilePicJudge" src={props.img} /> */}
        </div>

        <div className="judgesCardContent">
          <div className="textContent">
            <h2 className="judgesFirstName">{props.fname}</h2>
            <h2 className="judgesLastName">{props.lname}</h2>
            <p className="judgesRole">{props.role} @ <strong>{props.company}</strong></p>
          </div>
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



export default IndustryGuestsPage;