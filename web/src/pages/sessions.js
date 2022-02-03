import React, { useState, useEffect} from "react";
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
import ScheduleControls from "../components/scheduleControls";
import SessionsSchedule from "../components/sessionsSchedule";
import CTA from "../components/cta";

import '../styles/schedule.scss';

export const query = graphql`
  query SessionsPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    sessions: allSanitySessions(sort: {fields: sessionDateTime}) {
        edges {
          node {
            zoomURL
            videoURL
            slug {
              _key
              _type
              current
            }
            sessionDateTime
            relatedSession {
              slug {
                _key
                _type
                current
              }
              name
            }
            resources {
              _key
              _type
              resourceTitle
              resourceLink
              resourceType
            }
            registrationURL
            prerequisites {
              name
              slug {
                _key
                _type
                current
              }
            }
            name
            locationName
            location {
              _key
              _type
              lat
              lng
              alt
            }
            id
            host {
              name
              partner {
                partnerName
                partnerLink
                partnerType
              }
              linkedIn
            }
            heroImage {
              asset {
                url
                gatsbyImageData(fit: FILLMAX, placeholder: DOMINANT_COLOR)
              }
            }
            excerpt
            duration
            difficulty
            detailedDescription {
              _key
              _type
              style
              list
              _rawChildren
            }
            demoFiles {
              fileLink
              fileTitle
            }
            clubPartner {
              partnerName
              partnerType
              partnerLink
            }
            categories
          }
        }
      }
  }
`;

const SessionsPage = props => {
  const { data, errors } = props;
  
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const sessionNodes = (data || {}).sessions
    ? mapEdgesToNodes(data.sessions)
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
        <main className="schedule">
          <Container>
            <ScheduleControls activeCalendar={false}/>
            <SessionsSchedule sanityData={sessionNodes}/>
            <CTA/>
          </Container>
        </main>
    </Layout>
  );
};

export default SessionsPage;
