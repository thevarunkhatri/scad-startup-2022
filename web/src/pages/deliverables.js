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

import '../styles/deliverables.css';

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
      <main>
        <Container>
          <div class="deliverablesHeader">
            <h3>Pitch your ideas and WIN BIG!!!</h3>
            <h1>The Deliverables</h1>
          </div>

          <div class="cardContainer">
            <div class="deliverablesCard" id="content1">
              <h2>Presentation Deck</h2>
              <p> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." </p>
              <button class="pastExamplesButton">Past Examples &nbsp; {String.fromCharCode(10230)}</button>
            </div>

            <div class="deliverablesCard" id="content2">
              <h2>Visual Prototype</h2>
              <p> ""Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." </p>
              <button class="pastExamplesButton">Past Examples &nbsp; {String.fromCharCode(10230)}</button>
            </div>

            <div class="deliverablesCard" id="content3">
              <h2>Business Model</h2>
              <p> ""Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." </p>
              <button class="pastExamplesButton">Past Examples &nbsp; {String.fromCharCode(10230)}</button>
            </div>

            <div class="deliverablesCard" id="content4">
              <h2>WOW FACTOR!!</h2>
              <p> ""Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." </p>
              <button class="pastExamplesButton">Past Examples &nbsp; {String.fromCharCode(10230)} </button>
            </div>

            <div class="deliverablesCard" id="content5">
              <h2>Still not sure? Here's some more examples.</h2>
              <p> ""Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." </p>
              <button class="pastExamplesButton">Past Pitches &nbsp; {String.fromCharCode(10230)}</button>
            </div>
          </div>
        </Container>
      </main>
    </Layout>
  );
};

export default DeliverablesPage;
