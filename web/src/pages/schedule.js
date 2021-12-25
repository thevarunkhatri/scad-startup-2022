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
import GeneralSchedule from "../components/generalSchedule";
import SessionsSchedule from "../components/sessionsSchedule";

import '../styles/schedule.scss';

export const query = graphql`
  query SchedulePageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }

  }
`;

const SchedulePage = props => {
  const { data, errors } = props;
  const [activeCalendar, setActiveCalendar] = useState(true);

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

  const flipCalendar = () => {
    setActiveCalendar(!activeCalendar)
  }

  return (
    <Layout>
        <SEO title={site.title} description={site.description} keywords={site.keywords} />
        <main className="schedule">
          <Container>
            <div className="scheduleControls">
              <ul className="controlHolder">
                <li onClick={ activeCalendar ? null : flipCalendar } className={ activeCalendar ? "active activeLeft controls" : "activeLeft controls" }>Overview</li>
                <li onClick={ activeCalendar ? flipCalendar : null } className={ activeCalendar ? "activeRight controls" : "active activeRight controls" }>Sessions</li>
              </ul>
              <div className="controlHolder controls filter">
                Filter
              </div>
            </div>
            { activeCalendar ? <GeneralSchedule/> : <SessionsSchedule/>}
          </Container>
        </main>
    </Layout>
  );
};

export default SchedulePage;
