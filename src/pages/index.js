import React from 'react';
import styled from 'styled-components';
import {
  Navigation,
  HeadingXL,
  Layout,
  ButtonLink,
  AboutMe,
  PortfolioTeaser,
  Quote,
} from '../components';
import Logo_Sketches from '../images/logos.svg';
import Circles from '../svg_icons/circles.svg';
import Small_Editor from '../images/small_editor.svg';
import Adele from '../images/adele_gold.svg';

const Hero = styled.div`
  padding: 65px var(--sides-padding-desktop) 80px var(--sides-padding-desktop);
  width: 100%;
  height: 640px;
  background: black;

  h1 {
    display: block;
    width: fit-content;
    margin: 0 auto;
    text-align: left;
  }

  @media screen and (max-width: 700px) {
    height: 640px;
    h1 {
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 600px) {
    h1 {
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 500px) {
    height: 580px;
  }

  @media screen and (max-width: 400px) {
    padding: 40px var(--sides-padding-desktop) 40px var(--sides-padding-desktop);
    height: 500px;

    h1 {
      margin-top: 0px;
    }
  }
`;

const TextHome = styled.p`
  display: block;
  width: fit-content;
  max-width: 548px;
  margin: 80px auto 40px auto;

  font-size: 16px;
  font-weight: 100;
  text-align: left;
  line-height: 29px;
  color: #fff;

  a {
    text-decoration: none;
    border-bottom: 1px dotted currentColor;

    &:hover {
      color: var(--gold-color);
    }
  }

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
  top: 140px;
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
          <HeadingXL variant="light">
            Design +<br /> Product
          </HeadingXL>
          <TextHome>
            I'm Marcin Treder – product and design leader, coding designer and
            founding CEO at <a href="http://uxpin.com" target="__blank">UXPin</a> – one of the world leading design tools.
          </TextHome>
          <ButtonLink variant="gold" hoveredLabelColor="dark" to="/portfolio">
            explore my portfolio
          </ButtonLink>
          <CricleWrapper>
            <Circles style={{ width: '100%' }} />
          </CricleWrapper>
        </Hero>
        <Content>
          <AboutMe />
          <PortfolioTeaser
            variant="dark"
            alignment="left"
            heading="The New Design Tool"
            subHeading="2015"
            subHeadingVariant="gold"
            subHeadingBorder
            headingVariant="gold"
            ctaVariant="button"
            buttonVariant="gold"
            ctaLabel="read the story"
            buttonHoveredLabel="dark"
            destination="/portfolio/uxpin-new-editor/"
            illustration={Small_Editor}
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
                  from establishing the first principles to the launch.
                </p>
              </>
            }
          />
          <Quote />
          <PortfolioTeaser
            alignment="left"
            heading="The Open Source Adventure"
            subHeading="2018"
            subHeadingBorder
            subHeadingVariant="dark"
            headingVariant="dark"
            variant="light"
            ctaLabel="read the story"
            ctaVariant="button"
            buttonVariant="dark"
            buttonHoveredLabel="light"
            destination="/portfolio/open-source-adventure/"
            illustration={Adele}
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
                  In January 2018, I've decided to build Adele – an open source
                  repository of thoroughly analyzed design systems. I didn't
                  have any expectations. I just felt that this is a project that
                  should exist in the design systems community. Soon after the
                  launch 20,000 people visited Adele and 30 joined as project
                  contributors.
                </p>
                <p>
                  Today Adele is maintained by the community and delivers
                  design systems analyses to over 80,000 people a year.
                </p>
              </>
            }
          />
          <PortfolioTeaser
            alignment="left"
            heading="Treder Design Brand Identity"
            headingVariant="gold"
            subHeading="2019"
            subHeadingBorder
            subHeadingVariant="gold"
            variant="dark"
            ctaLabel="read the story"
            ctaVariant="button"
            buttonVariant="gold"
            buttonHoveredLabel="dark"
            destination="/portfolio/treder-design-branding/"
            illustration={Logo_Sketches}
            illustrationPosition="margin"
            bodyText={
              <>
                <p>
                  I've spent over a decade designing all sorts of products,
                  but hardly ever – brand identities. Nevertheless, I have a deep
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