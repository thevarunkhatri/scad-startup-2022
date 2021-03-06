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
import HookMain from "../assets/svg/home/hookMain.svg";

import HeroVideo from "../assets/video/hero.mp4";
import CountdownVideo from "../assets/video/countdown.mp4";

import BigPrizes from "../assets/svg/home/bigprizes.svg";
import Connections from "../assets/svg/home/connections.svg";
import PortfolioPieces from "../assets/svg/home/portfoliopieces.svg";
import Scholarships from "../assets/svg/home/scholarships.svg";
import Learn from "../assets/svg/home/learn.svg";

import MobileInfoCircles from "../assets/svg/home/mobileInfoCircles.svg";

// import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/css";

import "../styles/index.scss"

const Hero = props => {
  return (
      <div className="hero">
        <video
          className="video-player"
          loop
          autoPlay 
          muted 
          playsInline>
          <source
            src={HeroVideo}
            type="video/mp4"/>
        </video>
      </div>
  );
};

const HomeInfo = props => {
  return (
    <div className="info">
      <div className="infoContainer">
        <p><span>SCAD StartUp</span> is our annual, week-long design sprint hosted by <a href="https://scadflux.com" target="_blank">FLUX</a> in collaboration with <a href="https://www.scad.edu/about/scadpro" target="_blank">SCADpro</a></p>
        {props.pageWidth >= 1000 ? <DesktopInfo/> : null}
        {props.pageWidth >= 600 && props.pageWidth < 1000 ? <TabletInfo/> : null}
        {props.pageWidth < 600 ? (
          <div className="mobileInfoHolder">
            <Swiper modules={[Autoplay]} slidesPerView='auto' centeredSlides={true} spaceBetween={30} loop={true} className="mySwiper" autoplay={{delay: 2500}}>  
              <SwiperSlide>
                <MobileInfoCircles/>
                <div className="infoSlide">
                  <span className="number">60+</span>
                  <span className="label">Teams</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <MobileInfoCircles/>
                <div className="infoSlide">
                  <span className="number">70+</span>
                  <span className="label">Mentors &amp; Experts</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <MobileInfoCircles/>
                <div className="infoSlide">
                  <span className="number">30+</span>
                  <span className="label">Majors</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <MobileInfoCircles/>
                <div className="infoSlide">
                  <span className="number">300+</span>
                  <span className="label">Students</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <MobileInfoCircles/>
                <div className="infoSlide">
                  <span className="number">1</span>
                  <span className="label">Week</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <MobileInfoCircles/>
                <div className="infoSlide">
                  <span className="number">40K+</span>
                  <span className="label">In Prizes</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <MobileInfoCircles/>
                <div className="infoSlide">
                  <span className="number">7</span>
                  <span className="label">Years Running</span>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const Completionist = () => <span className="completionist">Event is live now</span>;

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
  const countdownDate = new Date(2022, 1, 4, 10)

  return (
      <div className="countdown">
        <Container>
          <div className="videoHolder">
            <video
              className="video-player"
              loop
              autoPlay 
              muted 
              playsInline>
              <source
                src={CountdownVideo}
                type="video/mp4"/>
            </video>
          </div>
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
          <h2>What's in it for you?</h2>
          {/* <div className="hookMain"> 
            <HookMain/>
            <div className="carouselHolder">
            <Swiper modules={[Autoplay]} slidesPerView={1} spaceBetween={30} loop={true} className="mySwiper" autoplay={{delay: 3000}}>
              <SwiperSlide>
                  <Connections/>
                  <h3>Make Connections</h3>
              </SwiperSlide>
              <SwiperSlide>
                <BigPrizes/>
                <h3>Big Prizes</h3>
              <SwiperSlide>
                <Scholarships/>
                <h3>Additional Prizes</h3>
              </SwiperSlide>
              </SwiperSlide>
              <SwiperSlide>
                <PortfolioPieces/>
                <h3>Portfolio Pieces</h3>
              </SwiperSlide>
            </Swiper>
            </div>  
          </div> */}
          <div className="hookHolder">
            {/* <Divider/> */}
            <HookItem 
              iconLeft={true} 
              icon={<Connections/>}
              title="Make Connections"
              description="Every year, StartUp attracts industry professionals to mentor and judge your progress. This is an amazing chance to make connections within your field. Talk with your design idols, get a look into your dream company, and stand out from the crowd during interviews."/>
            <Divider/>
            <HookItem 
              iconLeft={false} 
              icon={<BigPrizes/>}
              title="Win Big"
              description="What would you do with $1,000? Or a gift card to your favorite store... or a subscription that helps you advance your career... start planning now, because the prizes this year will blow you away. "/>
            <Divider/>
            <HookItem 
              iconLeft={true} 
              icon={<PortfolioPieces/>}
              title="Create A Portfolio Piece"
              description="Whether this is your first big project or you???re returning for another year, StartUp projects make fantastic portfolio pieces. Employers are amazed with the creativity, ingenuity, and speed required to complete StartUp projects.  Make your portfolio stand out with a StartUp project ??? it only takes a week."/>
            <Divider/>
            <HookItem 
              iconLeft={false} 
              icon={<Learn/>}
              title="Learn a New Skill"
              description="This year, we???re completely revamping StartUp Sessions ?????the workshops we host to improve your product design skills. Instead of 6 Sessions on Launch Day, we???re hosting over 20 throughout the week so you can level up your designs. Whether you???re learning the basics, exploring a hobby, or dipping your toes in a new field, there???s a Session for everyone this StartUp."/>
            <Divider/>
            <HookItem 
              iconLeft={true} 
              icon={<Scholarships/>}
              title="Discover Additional Prizes"
              description="We have so much more planned for you this year and we can???t wait to show you everything. Make sure to sign up and tune in to the launch event so you don???t miss out."/>
            {/* description="Do you have that one class you???ve always wanted to take? Or maybe enroll in graduate school at SCAD? We???ve got you covered. Take a chance and apply." */}
            <Divider/>
          </div>
        </Container>
      </div>
  );
};

const HookItem = props => {
  return (
      <div className="hookItem">
        <div className={props.iconLeft ? "center" : "text"}>
          <div className={props.iconLeft ? "circle" : "textAlign"}>
            {props.iconLeft ? props.icon : (
              <>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
              </>
            )}
          </div>
        </div>
        <div className={props.iconLeft ? "text" : "center"}>
          <div className={props.iconLeft ? "textAlign" : "circle"}>
            {props.iconLeft ? (
              <>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
              </>
            ) : props.icon}
          </div>
        </div>
      </div>
  );
};

const CTASection = props => {
  return (
      <div className="ctaSection">
        <Container>
          <div className="ctaHeader">
            <h2>Want in?</h2>
            <form action="https://forms.gle/x3XDcaPtxvhrPmGk6">
              <input type="submit" value="Sign Up Today!" />
            </form>
          </div>
          <div className="ctaSteps">
            <div className="step">
              <Step1/>
              <p>Grab your friends.</p>
            </div>
            <Arrow/>
            <div className="step">
              <Step2/>
              <p>Design an amazing project.</p>
            </div>
            <Arrow/>
            <div className="step">
              <Step3/>
              <p>Win big, get noticed.</p>
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
        <DashedLine/>
        <div className="circle right"></div>
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
    window.localStorage.setItem('activeCalendar', true);
  });

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

  // console.log(pageWidth)

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
