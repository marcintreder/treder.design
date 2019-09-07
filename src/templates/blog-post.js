import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import {
  Breadcrumbs,
  HeadingXL,
  Layout,
  SEO,
  TextBody,
  TextDate,
  Navigation,
} from '../components';

const BlogArticleWrapper = styled.section`
  width: 100%;
`;

const BlogArticleContent = styled.article`
  width: 100%;
  max-width: var(--max-width-desktop);
  margin: 0 auto;
  padding: 40px var(--sides-padding-desktop);
`;

const BlogHeaderWrapper = styled.section`
  width: 100%;
  background-color: #000;
`;

const BlogHeaderContent = styled.article`
  width: 100%;
  max-width: var(--max-width-desktop);
  margin: 0 auto;
  padding: 60px var(--sides-padding-desktop) 40px var(--sides-padding-desktop);
  background-color: #000;
`;

const BreadcrumbsWrapper = styled.section`
  margin-top: 20px;
`;

export default ({ location, data }) => {
  const post = data.markdownRemark;

  return (
    <>
      <Navigation seoTitle="About" variant="dark" />
      <BlogHeaderWrapper>
        <BlogHeaderContent>
          <HeadingXL variant="light">{post.frontmatter.title}</HeadingXL>
          <TextDate>{post.frontmatter.date}</TextDate>
        </BlogHeaderContent>
      </BlogHeaderWrapper>
      <Layout>
        <BlogArticleWrapper>
          <BreadcrumbsWrapper>
            <Breadcrumbs
              location={location}
              label={post.frontmatter.title.toLowerCase()}
            />
          </BreadcrumbsWrapper>
          <BlogArticleContent>
            <TextBody dangerouslySetInnerHTML={{ __html: post.html }} />
          </BlogArticleContent>
        </BlogArticleWrapper>
      </Layout>
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
