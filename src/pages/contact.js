import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';

import {
  Button,
  Breadcrumbs,
  Navigation,
  HeadingM,
  HeadingL,
  HeadingXL,
  PortfolioImageWrapper,
  Layout,
  TextBody,
  TrederImage,
  ButtonLink,
} from '../components';

import Grid from '../images/grid.svg';

const BlogHeaderWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  ${ButtonLink} {
    margin-bottom: 80px;
  }

  div[class*='Breadcrumbs'] {
    margin-bottom: 20px;
  }
`;

const BlogHeader = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: var(--max-width-desktop);
  padding: 0 var(--sides-padding-desktop);
  margin: 0 auto 20px auto;
  height: 300px;
  overflow: hidden;

  ${PortfolioImageWrapper} {
    margin-top: -80px;
    padding: 0;
  }

  ${HeadingXL} {
    width: 580px;
    margin: 80px 80px 0 -5px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 115px;

    ${PortfolioImageWrapper} {
      width: auto;
      margin-top: -80px;
      padding: 0;
    }
  }

  @media screen and (max-width: 1300px) {
    justify-content: center;

    ${HeadingXL} {
      width: 580px;
      margin: 80px 0 0 0;
    }
  }

  @media screen and (max-width: 1223px) {
    ${PortfolioImageWrapper} {
      margin-top: -220px;
    }
  }

  @media screen and (max-width: 1130px) {
    justify-content: center;
    max-height: 600px;
    overflow: hidden;
    margin-top: 0;

    ${PortfolioImageWrapper} {
      margin-top: -490px;
    }
  }

  @media screen and (max-width: 770px) {
    ${HeadingXL} {
      width: fit-content;
    }
  }
`;

const BlogContentWrapper = styled.section`
  width: 100%;
  background-color: #fff;
`;

const BlogContent = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: var(--max-width-desktop);
  margin: 0 auto;
  padding: 0 var(--sides-padding-desktop);

  @media screen and (max-width: 666px) {
    justify-content: center;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding: 40px 0 80px 0;

  label {
    padding-bottom: 60px;
    color: var(--gold-color);
    font-variant: small-caps;
    letter-spacing: 1px;
  }

  label,
  input,
  textarea {
    display: block;
  }

  input,
  textarea {
    min-width: 600px;
    margin-top: 10px;
    padding: 20px 10px;
    color: #000;
    background-color: #fff;
    border: 1px solid var(--gold-color);
  }
`;

const BreadCrumbsWrapper = styled.nav`
  margin: 0 auto 10px auto;
`;

const Contact = ({ location, data }) => {
  return (
    <>
      <Navigation
        seoTitle="Contact Marcin Treder"
        variant="light"
        activeLink={4}
      />
      <BlogHeaderWrapper>
        <BlogHeader>
          <HeadingXL variant="dark">Let's Talk</HeadingXL>
          <PortfolioImageWrapper>
            <img src={Grid} alt="contact me" />
          </PortfolioImageWrapper>
        </BlogHeader>
      </BlogHeaderWrapper>
      <Layout>
        <BreadCrumbsWrapper>
          <Breadcrumbs location={location} label="blog" />
        </BreadCrumbsWrapper>
        <BlogContentWrapper>
          <BlogContent>
            <Form
              name="contact"
              netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <input type="hidden" name="bot-field" />
              <label>
                name
                <input type="text" name="name" id="name" />
              </label>
              <label>
                your email
                <input type="email" name="email" id="email" />
              </label>
              <label>
                subject
                <input type="text" name="subject" id="subject" />
              </label>
              <label>
                message
                <textarea name="message" id="message" rows="5" />
              </label>
              <Button type="submit" variant="gold" hoveredLabelColor="light">
                e-mail me
              </Button>
            </Form>
          </BlogContent>
        </BlogContentWrapper>
      </Layout>
    </>
  );
};

export default Contact;
