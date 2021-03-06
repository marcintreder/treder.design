import React from 'react';
import styled from 'styled-components';

import {
  Caption,
  Breadcrumbs,
  ContextPortfolio,
  BreadcrumbsPortfolioWrapper,
  HeadingM,
  Navigation,
  MiniQuote,
  MoreProjects,
  PortfolioTeaser,
  Layout,
  PortfolioHeaderWrapper,
  PortfolioImageWrapper,
} from '../../components';

/* Illustrations */
import Logo_Sketches from '../../images/logos.svg';
import Grid from '../../images/grid.svg';
import New_Editor from '../../images/new_editor.svg';
import Adele from '../../images/adele.svg';
import Mobile from '../../images/mobile.svg';
import Video from '../../images/video.svg';
import Buttons from '../../images/buttons.png';
import GridBackground from '../../images/grid_background.svg';
import Homepage from '../../images/homepage.svg';
/* Illustrations used in the main section */
import ConverionIllustration from '../../images/conversion.svg';
import Nokaut from '../../images/nokaut_home_page.jpg';

/* Page specific style components */
const ImageWrapper = styled(PortfolioImageWrapper)`
  margin: 60px auto 120px auto;

  img {
    width: 759px;
    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1);
  }

  ${Caption} {
    margin-top: 30px;
  }
`;

const ResultsWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #000000;
  margin: 0 auto;

  font-size: 16px;
  font-weight: 100;
  line-height: 30px;
  color: #ffffff;

  ul,
  ol {
    padding-left: 0;
    list-style-position: inside;
  }
`;

const ResultsContent = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: var(--max-width-desktop);
  padding: 80px var(--sides-padding-desktop);

  background-image: url(${GridBackground});
  background-repeat: no-repeat;
  background-position: right 115px center;

  @media screen and (min-width: 1440px) {
    padding: 80px 115px;
  }

  @media screen and (max-width: 1440px) {
    background-position: right 11% center;
  }

  @media screen and (max-width: 1300px) {
    background-position: right 11.5% center;
  }

  @media screen and (max-width: 600px) {
    background-position: center center;
  }
`;

const ResultsList = styled.div`
  width: 60%;
  padding-right: 80px;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding-right: 0;
  }
`;

const MiniQuoteWrapper = styled.div`
  width: 40%;

  q {
    display: block;
    margin-top: 75px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

const ButtonsIllustration = styled.figure`
  display: flex;
  width: 100%;

  img {
    width: 80%;
    margin: 0 auto;

    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
`;

const ToolsWrapper = styled.article``;

const Conversion = ({ location, data }) => {
  return (
    <>
      <Layout>
        <PortfolioHeaderWrapper variant="dark">
          <Navigation
            seoTitle="Conversion Optimization Design Project"
            variant="dark"
          />
          <PortfolioTeaser
            variant="dark"
            alignment="left"
            heading="Conversion Optimization"
            headingVariant="light"
            subHeading="2009"
            subHeadingVariant="gold"
            subHeadingBorder
            ctaVariant="button"
            buttonVariant="gold"
            buttonHoveredLabel="dark"
            ctaLabel="read this story"
            destination="/portfolio/conversion-optimization/#anchor"
            illustration={ConverionIllustration}
            illustrationPosition="margin"
            bodyText={
              <p>
                In 2009 I was trusted with the optimization of critical elements
                of the Nokaut.pl product page. Together with the engineering
                team, we've worked out a series of hypotheses based on factors
                affecting human attention (contrast, color, movement,
                pattern...) and we've performed a series of multivariable split
                tests. The result was amazing. 24% increase in the conversion
                rate.
              </p>
            }
          />
        </PortfolioHeaderWrapper>
        <BreadcrumbsPortfolioWrapper>
          <Breadcrumbs location={location} label="conversion optimization" />
        </BreadcrumbsPortfolioWrapper>
        <ContextPortfolio
          id="anchor"
          contextContent={
            <>
              <p>
                In 2008 I was hired as the first in-house product designer at a
                Polish eCommerce startup – <strong>Nokaut.pl</strong> (later
                known as Grupa Nokaut). Before I joined, all the design tasks
                were either outsourced or performed by engineers. Shortly after
                I came on board, I noticed that most of the team seemed to
                consider design to be a mere decoration.
              </p>
              <p>
                Nokaut.pl was a consumer–focused company, and this disregard for
                design, started to harm the business. To help Nokaut.pl grow, I
                had to introduce a proper design process (UCD) and prove the
                value of design. Beginnings were not easy, but ultimately,thanks
                to my mentor – the co-founder and VP of Product, I found my way
                to prove the value of design. A combination of direct
                collaboration with engineers and constant work on improving
                business metrics brought outstanding results.
              </p>
              <p>
                One of the initiatives that helped me establish design at
                Nokaut.pl was a series of projects focused on{' '}
                <strong>optimizing the conversion rate</strong>. I tried to use
                my knowledge about human cognition to optimize the key aspects
                of user interface. For the team, it was an opportunity to
                observe how design hypotheses can lead to real, measurable,
                change.
              </p>
              <p>
                There are very few documents and assets of my old work. After
                all, it was, 10 – 11 years ago and Grupa Nokaut, after a
                successful <strong>IPO</strong>, ultimately failed and seized to
                exist (years after I left). However, one case study of my early
                work survived thanks to talks that I had at local meetups and
                conferences.
              </p>
              <p>
                In 2009 I was trusted with the optimization of critical elements
                of the Nokaut.pl product page. A product page was really a
                collection of millions of individual pages representing every
                product listed in Nokuat.pl. Collectively, those pages had the
                most significant impact on the overall conversion rate.
              </p>
              <p>
                Together with the engineering team, we've worked out a series of
                hypotheses based on factors affecting human attention (contrast,
                color, movement, pattern...) and we've performed a series of
                multivariable split tests.
              </p>
            </>
          }
          objectivesContent={
            <ol>
              <li>
                Increase the conversion rate on the "go to store" button (CPC
                business model, every click generated a transaction)
              </li>
              <li>
                Engage engineers in the design process and prove the power of
                design.
              </li>
            </ol>
          }
          myRoleContent={
            <ul>
              <li>
                Helping the engineering team understand the value of design
                through a series of workshops.
              </li>
              <li>
                Helping engineering team understand how the knowledge about
                human cognition can lead to better business results.
              </li>
              <li>
                Leading the collaborative "state the design hypothesis"
                exercise.
              </li>
              <li>Wireframing and prototyping.</li>
              <li>Conducting and analyzing multivariable split tests.</li>
            </ul>
          }
        >
          <ImageWrapper>
            <img src={Nokaut} alt="An example of Nokaut.pl product page" />
            <Caption variant="dark">
              An example of the Nokaut.pl product page in 2008 - 2009
            </Caption>
          </ImageWrapper>
        </ContextPortfolio>
        <ResultsWrapper>
          <ResultsContent>
            <ResultsList>
              <HeadingM>Results</HeadingM>
              <ul>
                <li>
                  One of the tests – the test of a contrast of color of buttons,
                  led to 24% conversion rate growth and changed Nokaut.pl
                  forever.
                </li>
                <li>
                  The change was exciting for the entire team and was essential
                  in establishing design process in the organization.
                </li>
                <li>Soon after, I was promoted to the leadership team.</li>
              </ul>
            </ResultsList>
            <MiniQuoteWrapper>
              <MiniQuote>
                Great design is a result of understanding and empathizing with
                people.
              </MiniQuote>
            </MiniQuoteWrapper>
            <ButtonsIllustration>
              <img
                src={Buttons}
                alt="Buttons used in the test. Blue has increased conversion rate by 24%."
              />
            </ButtonsIllustration>
            <ToolsWrapper>
              <HeadingM>Tools</HeadingM>
              <ul>
                <li>Axure (wireframing, prototyping)</li>
                <li>Notable (comments on visual design)</li>
                <li>Photoshop (visual design)</li>
                <li>Proprietary multiveriable split testing tool</li>
                <li>Google Analytics</li>
              </ul>
            </ToolsWrapper>
          </ResultsContent>
        </ResultsWrapper>
        <MoreProjects />
        <PortfolioTeaser
          variant="gold"
          alignment="left"
          heading="Paper Prototyping Redesigned"
          headingVariant="dark"
          subHeading="2010"
          subHeadingVariant="dark"
          subHeadingBorder
          ctaVariant="button"
          buttonVariant="dark"
          buttonHoveredLabel="gold"
          ctaLabel="read this story"
          destination="/portfolio/paper-prototyping-redesigned/"
          illustration={Grid}
          illustrationPosition="margin"
          bodyText={<p>The story of the notepad that changed my life</p>}
        />
        <PortfolioTeaser
          variant="light"
          alignment="center"
          heading="Homepage for 2.5M People"
          headingVariant="dark"
          subHeading="2011"
          subHeadingVariant="dark"
          subHeadingBorder
          ctaVariant="button"
          buttonVariant="dark"
          buttonHoveredLabel="light"
          destination="/portfolio/ecommerce-homepage-design/"
          ctaLabel="read this story"
          illustration={Homepage}
          illustrationPosition="margin"
          bodyText={
            <p>
              In 2011 I led the process of the redesign of the Nokaut.pl
              Homepage. At that time, Nokaut.pl was attracting 2.5 million users
              a month and the owner of Nokaut.pl – Grupa Nokaut was preparing
              their IPO. An intense project!
            </p>
          }
        />
        <PortfolioTeaser
          variant="gold"
          alignment="left"
          heading="Mobile App for 3 Platforms"
          headingVariant="dark"
          subHeading="2011"
          subHeadingVariant="dark"
          subHeadingBorder
          ctaVariant="button"
          buttonVariant="dark"
          buttonHoveredLabel="gold"
          destination="/portfolio/ecommerce-mobile-app-design/"
          ctaLabel="read this story"
          illustration={Mobile}
          illustrationPosition="margin"
          bodyText={
            <>
              <p>
                Web products of Groupa Nokaut had been dominant (2.5 million
                unique visitors per month in 2011), but the company didn't have
                much success on the mobile market. Our mobile offering, at the
                time, was limited to a dated mobile version of the core service
                built for old cell phones. This service was a highly popular
                couple of years earlier, but with the growing popularity of
                smart phones users expected "richer" experiences.
              </p>
              <p>
                In 2010 Grupa Nokaut asked me to lead the process of designing
                and building a mobile app for 3 platforms: iOS, Android and
                Windows Mobile.
              </p>
            </>
          }
        />
        <PortfolioTeaser
          variant="light"
          alignment="left"
          heading="eCommerce Video Portal"
          headingVariant="dark"
          subHeading="2011"
          subHeadingVariant="dark"
          subHeadingBorder
          ctaVariant="button"
          buttonVariant="dark"
          buttonHoveredLabel="light"
          destination="/portfolio/ecommerce-video-portal/"
          ctaLabel="read this story"
          illustration={Video}
          illustrationPosition="margin"
          bodyText={
            <p>
              For over two years I worked as part of the R&D Group at Grupa
              Nokaut. We were tasked with coming up with new product ideas that
              address the most critical strategic problems of the business. One
              of the projects that we realized in 2011 was Nokaut.tv – the
              eCommerce Video Portal that quickly attracted over 100,000
              viewers. I had a pleasure to lead the design and product
              development process.
            </p>
          }
        />
        <PortfolioTeaser
          variant="dark"
          alignment="center"
          heading="The New Design Editor"
          headingVariant="light"
          subHeading="2015"
          subHeadingVariant="gold"
          subHeadingBorder
          ctaVariant="button"
          buttonVariant="gold"
          buttonHoveredLabel="dark"
          destination="/portfolio/uxpin-new-editor/"
          ctaLabel="read this story"
          illustration={New_Editor}
          illustrationPosition="margin"
          bodyText={
            <>
              <p>
                In 2015 UXPin was an established design tool serving over two
                thousand companies. We've just raised our Series A (led by True
                Ventures and Jeff Veen – former VP of Design at Adobe).
              </p>
              <p>
                We knew that this is not enough. We knew that we have to do even
                more to realize our mission and help the design tools industry
                move forward. Soon, we've started a design process that changed
                the entire industry.
              </p>
            </>
          }
        />
        <PortfolioTeaser
          variant="gold"
          alignment="left"
          heading="The Open Source Adventure"
          headingVariant="dark"
          subHeading="2018"
          subHeadingVariant="dark"
          subHeadingBorder
          ctaVariant="button"
          buttonVariant="dark"
          buttonHoveredLabel="gold"
          destination="/portfolio/open-source-adventure/"
          ctaLabel="read this story"
          illustration={Adele}
          illustrationPosition="margin"
          bodyText={
            <>
              <p>
                Since 2012 I'm operating as a full–time CEO of a growing startup
                – UXPin (over 50 employees, profitable). Despite that, I've
                never stopped being a designer, coder, and a product person. To
                relax and contribute to UXPin and the overall design and
                engineering community, I tend to take on side projects.
              </p>
              <p>
                In 2017, after talking to a bunch of friends working on design
                systems, I decided to devote my weekends to the creation of an
                open source repository of analyzed design systems.
              </p>
              <p>
                For two subsequent weekends in January 2018, I designed and
                coded (React.js and Node.js) the repository. The popularity of
                this project exceeded my most optimistic expectations.
              </p>
            </>
          }
        />
        <PortfolioTeaser
          variant="dark"
          alignment="left"
          heading="Designing for yourself is tough"
          headingVariant="gold"
          subHeading="2019"
          subHeadingVariant="gold"
          subHeadingBorder
          ctaVariant="button"
          buttonVariant="gold"
          buttonHoveredLabel="dark"
          ctaLabel="read this story"
          destination="/portfolio/treder-design-branding/"
          illustration={Logo_Sketches}
          illustrationPosition="margin"
          bodyText={
            <>
              <p>
                I've spent way over a decade designing all sorts of products,
                but hardly ever – brand identities. Nevertheless, I have a deep
                affection for the very special connection between art and
                storytelling always present in great brand design.
              </p>
              <p>
                When I decided to build my personal website, I knew that this is
                a great opportunity to define my brand – my story, aesthetics
                and message with a holistic design process.
              </p>
              <p>
                I quickly became my own most demanding client and yet... I
                thoroughly enjoyed the process of designing Treder Design brand.
              </p>
            </>
          }
        />
      </Layout>
    </>
  );
};

export default Conversion;
