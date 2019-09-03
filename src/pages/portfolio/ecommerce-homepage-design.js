import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';

import {
  Button,
  ButtonLink,
  Caption,
  ContextPortfolio,
  Breadcrumbs,
  BreadcrumbsPortfolioWrapper,
  HeadingM,
  HeadingXL,
  Navigation,
  MiniQuote,
  MoreProjects,
  PortfolioTeaser,
  PortfolioHeaderWrapper,
  Layout,
  TextBody,
} from '../../components';

import Logo_Sketches from '../../images/logos.svg';
import ConverionIllustration from '../../images/conversion.svg';
import Grid from '../../images/grid.svg';
import New_Editor from '../../images/new_editor.svg';
import Homepage from '../../images/small_homepage.svg';
import Adele from '../../images/adele.svg';
import Mobile from '../../images/mobile.svg';
import Video from '../../images/video.svg';
import Nokaut from '../../images/nokaut_home_page.jpg';
import Buttons from '../../images/buttons.png';
import GridBackground from '../../images/grid_background.svg';
import ProcessChartHomepage from '../../images/process_homepage.svg';
import NokautHomepageHead from '../../images/nokaut_homepage_head.png';
import NokautHomepage from '../../images/nokaut_homepage.png';

const ImageWrapper = styled.figure`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 var(--sides-padding-desktop);
    margin: 80px 0;

    img {
        width: 60%;
        height: auto;
        margin: 0 auto;
    }

    figcaption {
        text-align: center;
    }
`;

const ProcessWrapper = styled.section`
  width: 100%;
`;

const ProcessContent = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: var(--max-width-desktop);
  margin: 0 auto;
  padding: 0 var(--sides-padding-desktop);

  @media screen and (min-width: 1440px) {
    padding: 0 115px;
  }
`;

const ProcessDescription = styled.div`
    width: 60%;
    margin-right: 20px;
`;

const AdPlaceImage = styled.figure`
    width: 30%;
    margin-top: 85px;
  img {
    max-width: 400px;
    width: 100%;
    height: auto;
  }
`;

const ProcessChart = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  img {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const eCommerceHomepageDesign = ({ location, data }) => {
  return (
    <Layout>
      <PortfolioHeaderWrapper variant="light">
        <Navigation seoTitle="eCommerce Homepage redesign" variant="light" />
        <PortfolioTeaser
          variant="light"
          alignment="left"
          heading="Homepage for 2.5M People"
          headingVariant="dark"
          subHeading="2011"
          subHeadingVariant="dark"
          subHeadingBorder
          ctaVariant="button"
          buttonVariant="dark"
          buttonHoveredLabel="light"
          ctaLabel="read this story"
          destination="/portfolio/ecommerce-homepage-design"
          illustration={Homepage}
          illustrationPosition="margin"
          bodyText={
            <p>
              TIn 2011 I led the process of the redesign of the Nokaut.pl
              Homepage. At that time, Nokaut.pl was attracting 2.5 million users
              a month and the owner of Nokaut.pl – Grupa Nokaut was preparing
              their IPO. Intense project!
            </p>
          }
        />
      </PortfolioHeaderWrapper>
      <BreadcrumbsPortfolioWrapper>
        <Breadcrumbs location={location} label="ecommerce homepage design" />
      </BreadcrumbsPortfolioWrapper>
      <ContextPortfolio
        contextContent={
          <>
            <p>
              2008 – 2012 I had a pleasure to work for one of the leading
              eCommerce companies of Central & Eastern Europe –{' '}
              <strong>Groupa Nokaut</strong>. Hundreds of difficult projects
              with lots of external and internal constraints shaped me as a
              designer and product leader.
            </p>
            <p>
              After two years of working as an individual contributor, I was
              promoted to the management team, simultaneously leading the design
              organization and working in the product R&D team on the future of
              Grupa Nokaut products.
            </p>
            <p>
              Among all the great projects that I had a pleasure to participate
              in, couple holds a very special place in my memory. They were
              extremely difficult, challenging, yet important and... not
              entirely successful. They were great lessons for myself and the
              business.
            </p>
            <p>
              The one that was both memorable and highly interestign was the
              redesign of Nokaut.pl homepage in 2011.
            </p>
            <p>
              In 2011 Nokaut.pl was attracting over{' '}
              <strong>2.5 million users</strong> (grew up to 5 million in early
              2012) every month and was the main engine of the growth that led
              to <strong>Grupa Nokaut IPO in 2012</strong>. Taking that at that
              time Poland had just over 20 million Internet users – the numbers
              generated by Nokaut.pl were amazing.
            </p>
            <p>
              Despite the strong business results, Nokaut.pl never managed to
              establish a solid brand. Majority of users entered Nokaut.pl
              through well–positioned product pages in Google Search.
            </p>
            <p>
              With the approaching IPO Grupa Nokaut wanted to change that
              situation. The CEO decided to ask my team to redesign the homepage
              and turn it from an SEO powerhouse to a destination page with
              value on its own, but... without affecting negatively any of the
              SEO juice.
            </p>
          </>
        }
        objectivesContent={
          <ol>
            <li>
              Turning Nokaut.pl homepage into a destination page that users
              would like to visit (the majority of traffic to Nokaut.pl was
              coming from product–specific queries in Google, which made the
              task of building a brand difficult).
            </li>
            <li>
              Keeping all the SEO features intact but turning them into a
              valuable part of overall user experience
            </li>
            <li>Educating users about the value of Nokaut.pl.</li>
            <li>
              Finding new premium ad locations for Nokaut's network of ad
              partners.
            </li>
          </ol>
        }
        myRoleContent={
          <ul>
            <li>Leading the research and analysis.</li>
            <li>
              Creating a business case and product plan for the redesign and
              associated features.
            </li>
            <li>Leading the redesign team (1 designer, 2 developers)</li>
            <li>Wireframing and prototyping key experiences</li>
            <li>Planning and negotiating slots for ads</li>
            <li>Presenting plan and progress of work to the CEO</li>
            <li>
              Measuring performance and optimizing the design with a series of
              Multivariable Split Tests and usability studies.
            </li>
          </ul>
        }>
            <ImageWrapper>
                <img src={NokautHomepage} />
                <Caption variant="dark">Nokaut.pl Homepage after the 2011 redesign.</Caption>
            </ImageWrapper>
        </ContextPortfolio>
      <ProcessWrapper>
        <ProcessContent>
          <ProcessDescription>
            <HeadingM variant="dark">The Process</HeadingM>
            <TextBody variant="dark">
              <p>
                The chart below represents the process run for this project.
                It's also an accurate representation of how my team and myself
                run design and product work at Grupa Nokaut at that time. We
                took pride in being data–driven yet balanced and creative and
                we've never shied away from negotiating with key stakeholders.
              </p>{' '}
              <p>
                The homepage redesign was a very special project with very high
                stakes and CEO requested me to be very hands–on and design key
                experiences on my own. I wasn't particularly fond of
                micromanagement, but I understood that with the upcoming IPO
                changes on the homepage are going to be highly scrutinized by
                media and analysts. There was no room for mistakes.
              </p>
            </TextBody>
          </ProcessDescription>
          <AdPlaceImage>
            <img src={NokautHomepageHead} />
            <Caption variant="dark">
              Negotiating ad placements and presenting the value of Nokaut.pl
              were important for key stakeholders. Above you can see multiple
              signals of Nokaut.pl strength (counter of users who saved money
              with Nokaut.pl, prominent mention that Nokaut.pl stores 10 million
              offers from nearly 4000 stores) and a new premium ad space.
            </Caption>
          </AdPlaceImage>
        </ProcessContent>
        <ProcessChart>
          <img src={ProcessChartHomepage} />
        </ProcessChart>
      </ProcessWrapper>
    </Layout>
  );
};

export default eCommerceHomepageDesign;
