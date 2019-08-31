import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Wires from '../images/wires.svg';
import Table from '../images/table.svg';
import Logo_Sketches from '../images/logos.svg';

import {
  Navigation,
  HeadingXL,
  Layout,
  SEO,
  Button,
  AboutMe,
  PortfolioTeaser,
  Quote,
} from '../components';
import Circles from '../svg_icons/circles.svg';

const Hero = styled.div`
  padding: 100px var(--sides-padding-desktop) 80px var(--sides-padding-desktop);
  width: 100%;
  height: 700px;
  background: black;

  h1 {
    display: block;
    width: fit-content;
    margin: 0 auto;
    text-align: left;
  }

  @media screen and (max-width: 700px) {
    height: 640px;
  }

  @media screen and (max-width: 500px) {
    height: 580px;
  }

  @media screen and (max-width: 400px) {
    padding: 40px var(--sides-padding-desktop) 40px var(--sides-padding-desktop);
    height: 500px;
  }
`;

const TextHome = styled.p`
  display: block;
  width: fit-content;
  max-width: 548px;
  margin: 60px auto 40px auto;

  font-size: 16px;
  font-weight: 100;
  text-align: left;
  line-height: 29px;
  color: #fff;

  @media screen and (max-width: 700px) {
    max-width: 468px;
  }

  @media screen and (max-width: 600px) {
    max-width: 388px;
  }

  @media screen and (max-width: 500px) {
    max-width: 310px;
  }

  @media screen and (max-width: 400px) {
    max-width: 240px;
    margin: 40px auto 40px auto;
  }
`;

const CricleWrapper = styled.div`
  position: absolute;
  top: 180px;
  right: 0;
  left: 0;
  margin: auto;
  z-index: 0;

  @media screen and (max-width: 700px) {
    top: 160px;
  }

  @media screen and (max-width: 600px) {
    top: 140px;
    max-width: 340px;
  }

  @media screen and (max-width: 500px) {
    top: 120px;
    max-width: 300px;
  }

  @media screen and (max-width: 400px) {
    top: 60px;
    max-width: 240px;
  }
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Home = ({ data }) => {
  return (
    <>
      <Layout>
        <Navigation variant="dark" seoTitle="Treder Design" />
        <Hero>
          <HeadingXL variant="dark">
            Design +<br /> Product
          </HeadingXL>
          <TextHome>
            I'm Marcin Treder – product & design leader, coding designer and
            founding CEO at UXPin – one of the world leading design tools.
          </TextHome>
          <Button>explore my portfolio</Button>
          <CricleWrapper>
            <Circles style={{ width: '100%' }} />
          </CricleWrapper>
        </Hero>
        <Content>
          <AboutMe />
          <PortfolioTeaser
            variant="dark"
            alignment="left"
            heading="A radically different design tool"
            headingVariant="gold"
            ctaVariant="link"
            ctaLabel="read the story"
            illustration={Wires}
            illustrationPosition="edge"
            bodyText={
              <>
                <p>
                  In 2014 design tools, including UXPin, were cluttered,
                  obtrusive and distracting. We've decided to break away from
                  the crowd by changing UXPin into a tool as invisible and
                  minimalistic as possible. Instead of copying others, we've
                  took inspiration from modernism.
                </p>
                <p>
                  This is the story of this enormous process and my role in it –
                  from estabilishing the first principles to the launch.
                </p>
              </>
            }
          />
          <Quote />
          <PortfolioTeaser
            alignment="left"
            heading="The Open Source Adventure"
            headingVariant="dark"
            variant="light"
            ctaLabel="read the story"
            ctaVariant="link"
            illustration={Table}
            illustrationPosition="margin"
            bodyText={
              <>
                <p>
                  I love working right at the crossroads of design and
                  technology. No wonder building and analyzing design systems
                  became my passion. Soon, this passion led me to an exciting
                  open source adventure.
                </p>
                <p>
                  In January 2018, I've decided to buils Adele – an open source
                  repository of thoroughly analyzed design systems. I didn't
                  have any expectations. I just felt that this is a project that
                  should exist in the design systems community. Soon after the
                  launch 20,000 people visited Adele and 30 joined as project
                  contributors.
                </p>
                <p>
                  Today Adele is mantained by the community and deliveres
                  analyses to over 80,000 people a year.
                </p>
              </>
            }
          />
          <PortfolioTeaser
            alignment="left"
            heading="Designing for yourself is tough"
            headingVariant="gold"
            variant="dark"
            ctaLabel="read the story"
            ctaVariant="link"
            illustration={Logo_Sketches}
            illustrationPosition="margin"
            bodyText={
              <>
                <p>
                  I've spent way over a decade designing all sorts of products,
                  but hardly ever – brand identities. Neverthless, I have a deep
                  affection for the very special connection between art and
                  storytelling always present in great brand design.
                </p>
                <p>
                  When I decided to build my personal website, I knew that this
                  is a great opportunity to define my brand – my story,
                  aesthetics and message with a holistic design process.
                </p>
                <p>
                  I quickly became my own most demanding client and yet... I
                  thoroughly enjoyed the process of designing Treder Design
                  brand.
                </p>
              </>
            }
          />
        </Content>
      </Layout>
    </>
  );
};

export default Home;

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

/*
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link to={node.fields.slug}>
            <Post key={node.id}>
              <HeadingL>{node.frontmatter.title}</HeadingL>
              <TextBody>{node.excerpt}</TextBody>
              <TextDate>{node.frontmatter.date}</TextDate>
            </Post>
          </Link>
        ))}
*/
