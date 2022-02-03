import React, { useState, useEffect} from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import GeneralSchedule from "../components/generalSchedule";
import ScheduleControls from "../components/scheduleControls";
import CTA from "../components/cta";

import '../styles/schedule.scss';

export const query = graphql`
  query NewSchedulePageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`;

const SchedulePage = props => {
  const { data, errors } = props;
  
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;

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
            <ScheduleControls activeCalendar={true}/>
            <GeneralSchedule/>
            <CTA/>
          </Container>
        </main>
    </Layout>
  );
};

export default SchedulePage;
