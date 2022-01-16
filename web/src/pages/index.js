import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import GraphQLErrorList from "../components/graphql-error-list";
import Container from "../components/container";
import Marquee from "react-fast-marquee";
import CountdownTimer from 'react-countdown';
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import Layout from "../containers/layout";

import DesktopInfo from "../assets/svg/home/desktopInfo.svg";
import TabletInfo from "../assets/svg/home/tabletInfo.svg";
import Step1 from "../assets/svg/home/step1.svg";
import Step2 from "../assets/svg/home/step2.svg";
import Step3 from "../assets/svg/home/step3.svg";
import Arrow from "../assets/svg/home/arrow.svg";
import DashedLine from "../assets/svg/home/dashedLine.svg";

import "../styles/index.scss"

const Hero = props => {
  return (
      <div className="hero">
        
      </div>
  );
};

const HomeInfo = props => {
  return (
    <div className="info">
      <div className="infoContainer">
        <p><span>SCAD StartUp</span> is our annual, week-long design sprint hosted by <a href="">FLUX - the UX club</a> - in collaboration with <a href="">SCADpro</a></p>
        {props.pageWidth >= 1000 ? <DesktopInfo/> : null}
        {props.pageWidth > 600 && props.pageWidth < 1000 ? <TabletInfo/> : null}
      </div>
    </div>
  );
};

const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className="timer">
        <div className="value">
          <span className="number">{days}</span>
          <span className="label">Days</span>
        </div>
        <span className="yellow">:</span>
        <div className="value">
          <span className="number">{hours}</span>
          <span className="label">Hours</span>
        </div>
        <span className="yellow">:</span>
        <div className="value">
          <span className="number">{minutes}</span>
          <span className="label">Minutes</span>
        </div>
      </div>
    )
  }
};

const Countdown = props => {
  const countdownDate = new Date(2022, 1, 9, 10)

  return (
      <div className="countdown">
        <Container>
          <h2 className="kickoffTitle">Countdown to Kickoff</h2>
          <CountdownTimer 
            date={countdownDate}
            renderer={renderer}/>
        </Container>
      </div>
  );
};

const Hooks = props => {
  return (
      <div className="hooks">
        <Container>
          <h2>What's in it for me?</h2>
          <div className="hookHolder">
            <Divider/>
            <HookItem/>
            <Divider/>
            <HookItem/>
            <Divider/>
          </div>
        </Container>
      </div>
  );
};

const HookItem = props => {
  return (
      <div className="hookItem">
        
      </div>
  );
};

const CTASection = props => {
  return (
      <div className="ctaSection">
        <Container>
          <div className="ctaHeader">
            <h2>Want in?</h2>
            <form action="https://google.com">
              <input type="submit" value="Sign Up Today!" />
            </form>
          </div>
          <div className="ctaSteps">
            <div className="step">
              <Step1/>
              <p>Grab your friends</p>
            </div>
            <Arrow/>
            <div className="step">
              <Step2/>
              <p>Create an amazing design</p>
            </div>
            <Arrow/>
            <div className="step">
              <Step3/>
              <p>Win big, get noticed!</p>
            </div>
          </div>
        </Container>
      </div>
  );
};

const Divider = props => {
  return (
      <div className="divider">
        <div className="circle"></div>
        <div className="line">
          <DashedLine/>
        </div>
        <div className="circle"></div>
      </div>
  );
};

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`;

const IndexPage = props => {
  const { data, errors } = props;
  const [pageWidth, setPageWidth] = useState(1200);

  useEffect(() => {
    setPageWidth(window.innerWidth);

    function handleResize() {
      setPageWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [pageWidth]);

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

  console.log(pageWidth)

  return (
    <Layout>
      <Hero/>
      <Marquee className="marquee" gradientColor={[6,6,6]}>
        <p>A competition for innovation and growth</p>
        <p>A competition for innovation and growth</p>
        <p>A competition for innovation and growth</p>
        <p>A competition for innovation and growth</p>
        <p>A competition for innovation and growth</p>
      </Marquee>
      <main>
        <HomeInfo pageWidth={pageWidth}/>
        <Countdown/>
        <div className="hook">
          <Hooks/>
          <CTASection/>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
