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

import '../styles/deliverables.scss';

export const query = graphql`
  query DeliverablesPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`;

const DeliverablesPage = props => {
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
      <main id="deliverablesPageBG">
        <Container>
          <div class="deliverablesHeader">
            <h3>Pitch your ideas and WIN BIG!!!</h3>
            <h1 className="pageName">The Deliverables</h1>
          </div>

          <div class="deliverablesContainer">
            <div class="deliverablesCard" id="content1">
              <h2>Presentation Deck</h2>
              <p> No pitch is perfect without a slide deck! Craft your presentation and make it STAND OUT. This is how you introduce others to your BRILLIANT IDEAS, so make it count! </p>
              <form action={"https://drive.google.com/drive/folders/1CVVK8T1B0IfzghZCd0mNnlp0SHWke1Oi"} target="_blank">
                <button class="pastExamplesButton">Past Examples &nbsp; {String.fromCharCode(10230)}</button>
              </form>
            </div>

            <div class="deliverablesCard" id="content2">
              <h2>30 Second Video</h2>
              <p> We want your idea to be SHOUTED FROM THE ROOFTOP (virtually) so we will post YOUR 30 second video to @scadstartup on instagram! Inspiring the future of StartUp. </p>
              <form action={"https://drive.google.com/drive/folders/1b2cZnGUzNoVYMyGBxxbSu4yPX39-gUK0?usp=sharing"} target="_blank">
                <button class="pastExamplesButton">Past Examples &nbsp; {String.fromCharCode(10230)}</button>
              </form>
            </div>

            <div class="deliverablesCard" id="content3">
              <h2>Business Model</h2>
              <p> A business model keeps it real. Shoot for the stars and see your idea come to life in the real world. A business model can help you answer the hard questions (like “who’s it for?” and “how does it make $$$$”)! </p>
              <form action={"https://drive.google.com/drive/folders/1G0QeWDSDzxmwOBA5rpWWF7jDLoa2pp01"} target="_blank">
                <button class="pastExamplesButton">Past Examples &nbsp; {String.fromCharCode(10230)}</button>
              </form>
            </div>

            <div class="deliverablesCard" id="content4" >
              <h2>WOW FACTOR!!</h2>
              <p> What makes an idea stand out? What makes the audience gasp? Flex your team’s skillset and make your idea SHAKE THE ROOM (even if it’s virtual ;)). </p>
              <form action={"https://drive.google.com/drive/folders/1G0QeWDSDzxmwOBA5rpWWF7jDLoa2pp01"} target="_blank">
                <button class="pastExamplesButton">Past Examples &nbsp; {String.fromCharCode(10230)} </button>
              </form>
            </div>

            <div class="deliverablesCard" id="content5">
              <h2>Still not sure? Here's some more examples.</h2>
              <div class="StillNotSure">
                <p> Lucky for you we have every single entry from last year's StartUp. Take a look around and see what catches your eye! </p>   
              </div>
              <form action={"https://drive.google.com/drive/folders/1b2cZnGUzNoVYMyGBxxbSu4yPX39-gUK0?usp=sharing"} target="_blank">
                <button class="pastExamplesButton">Past Pitches &nbsp; {String.fromCharCode(10230)}</button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </Layout>
  );
};




export default DeliverablesPage;
