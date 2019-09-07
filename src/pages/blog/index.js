import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';

import {
  Breadcrumbs,
  Navigation,
  HeadingM,
  HeadingXL,
  PortfolioImageWrapper,
  Layout,
  TextBody,
  ButtonLink,
} from '../../components';

import Grid from '../../images/grid.svg';

const BlogHeaderWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 100%;

  div[class*='Breadcrumbs'] {
    margin-bottom: 20px;
  }

  ${PortfolioImageWrapper} {
      margin-right: 0;
  }
`;

const BlogHeader = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 420px;
  max-width: var(--max-width-desktop);
  padding: 0 var(--sides-padding-desktop);
  margin: 0 auto 20px auto;
  overflow: hidden;

  ${PortfolioImageWrapper} {
    margin-top: -80px;
    padding: 0;
  }

  ${HeadingXL} {
    width: 580px;
    margin: 80px 80px 0 -5px;
  }

  ${TextBody} {
    width: 40%;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 115px;

    ${PortfolioImageWrapper} {
      width: auto;
      margin-top: -80px;
      padding: 0;
    }
  }

  @media screen and (max-width: 1225px) {
    justify-content: center;
    overflow: hidden;
    margin-top: 0;

    ${HeadingXL} {
      width: fit-content;
      margin-right: auto;
      margin-left: auto;
      text-align: center;
    }

    ${PortfolioImageWrapper} {
      margin-top: -490px;
      margin-right: auto;
    }
  }

  @media screen and (max-width: 600px) {
      ${PortfolioImageWrapper} {
        margin-right: 0;
      }
  }
`;

const BlogContentWrapper = styled.section`
  width: 100%;
`;

const BlogContent = styled.article`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  max-width: var(--max-width-desktop);
  margin: 0 auto;
  padding: 0 var(--sides-padding-desktop);

  @media screen and (max-width: 666px) {
    justify-content: center;
  }
`;

const BlogLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  width: 260px;
  height: 260px;
  padding: 20px;
  background-color: #000000;
  margin: 0 20px 20px 0;

  time {
    color: #ffffff;
  }

  &:hover {
    box-shadow: 8px 8px 0 var(--gold-color);

    h3,
    time {
      color: var(--gold-color);
    }
  }

  @media screen and (max-width: 666px) {
    width: 100%;
    height: 140px;
    margin-right: 0;

    h3 {
      margin-top: 0;
    }
  }
`;

const BreadCrumbsWrapper = styled.nav`
  margin: 0 auto 40px auto;

  @media screen and (max-width: 600px) {
    margin: 0 auto;
  }
`;

const Blog = ({ location, data }) => {
  return (
    <>
      <Navigation seoTitle="About" variant="light" activeLink={3} />
      <BlogHeaderWrapper>
        <BlogHeader>
          <HeadingXL variant="dark">Organized Musings</HeadingXL>
          <PortfolioImageWrapper>
            <img src={Grid} alt="grid pattern" />
          </PortfolioImageWrapper>
        </BlogHeader>
      </BlogHeaderWrapper>
      <Layout>
        <BreadCrumbsWrapper>
          <Breadcrumbs location={location} label="blog" />
        </BreadCrumbsWrapper>
        <BlogContentWrapper>
          <BlogContent>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <BlogLink to={node.fields.slug} key={node.id}>
                <HeadingM variant="light">{node.frontmatter.title}</HeadingM>
                <time datetime={node.frontmatter.date}>
                  {node.frontmatter.date}
                </time>
              </BlogLink>
            ))}
          </BlogContent>
        </BlogContentWrapper>
      </Layout>
    </>
  );
};

export default Blog;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
