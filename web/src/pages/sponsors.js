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

import '../styles/sponsors.scss';

import sedaLogo from '../assets/img/sponsors/sedaLogo.png';
import gulfstreamLogo from '../assets/img/sponsors/gulfstreamLogo.png';

export const query = graphql`
  query SponsorsPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`;

const SponsorsPage = props => {
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
      <main id="sponsersBG">
        <Container>
          <div class="sponsersHeader">
            <h3>Startup wouldn't be possible without our</h3>
            <h1>Sponsers & Partners</h1>
          </div>

          <div class="sponsersContainer">
            <div class="sponsersCard">
              <img class="sponserLogo" src={sedaLogo} />
            </div>

            <div class="sponsersCard">
                <img class="sponserLogo" src={gulfstreamLogo} />
            </div>
{/* 
            <div class="sponsersCard">
                <img class="sponserLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/736px-Google_2015_logo.svg.png" />
            </div>

            <div class="sponsersCard">
              <img class="sponserLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/736px-Google_2015_logo.svg.png" />
            </div>

            <div class="sponsersCard">
              <img class="sponserLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/736px-Google_2015_logo.svg.png" />
            </div>

            <div class="sponsersCard">
              <img class="sponserLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/736px-Google_2015_logo.svg.png" />
            </div> */}

          </div>
        </Container>
      </main>
    </Layout>
  );
};

export default SponsorsPage;
