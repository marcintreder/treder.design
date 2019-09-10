import React from 'react';
import styled from 'styled-components';

import {
  Caption,
  ContextPortfolio,
  Breadcrumbs,
  BreadcrumbsPortfolioWrapper,
  HeadingM,
  Navigation,
  MoreProjects,
  PortfolioImageWrapper,
  PortfolioTeaser,
  PortfolioHeaderWrapper,
  PortfolioResults,
  Layout,
  TextBody,
} from '../../components';

/* Illustrations */
import Logo_Sketches from '../../images/logos.svg';
import Conversion from '../../images/conversion.svg';
import Homepage from '../../images/small_homepage.svg';
import Adele from '../../images/adele.svg';
import Mobile from '../../images/mobile.svg';
import Video from '../../images/video.svg';
import Grid from '../../images/grid.svg';
import New_Editor_Small from '../../images/new_editor_small.svg';
import New_Editor_1 from '../../images/new_editor_1.png';
/* Illustrations used in the main section */
import EditorEvolution from '../../images/editor_evolution.png';
import ProcessNewEditor from '../../images/process_new_editor.svg';
import EditorLightDark from '../../images/editor_light_dark.png';

/* Page specific style components */
const ExplorationWrapper = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: var(--max-width-desktop);
  margin: 0 auto;
  padding: 0 var(--sides-padding-desktop);

  @media screen and (min-width: 1440px) {
    padding: 0 115px;
  }
`;

const ExplorationVideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  margin: 40px auto 100px auto;

  ${Caption} {
    margin-top: 40px;
    text-align: center;
  }
`;

const ExplorationVideo = styled.iframe`
  border: 0;
  outline: 0;
`;

const ProcessWrapper = styled.section`
  width: 100%;
  margin-bottom: 120px;

  ${PortfolioImageWrapper} {
    margin-top: 120px;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 80px;
  }
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

  @media screen and (max-width: 1200px) {
    width: 50%;
    max-right: 10px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    max-right: 0;
  }
`;

const ProcessChart = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  padding: 0 var(--sides-padding-desktop);
  img {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const UXPinNewEditor = ({ location, data }) => {
  return (
    <Layout>
      <PortfolioHeaderWrapper variant="dark">
        <Navigation seoTitle="The New Design Editor" variant="dark" />
        <PortfolioTeaser
          variant="dark"
          alignment="left"
          heading="The New Design Editor"
          headingVariant="light"
          subHeading="2015"
          subHeadingVariant="gold"
          subHeadingBorder
          ctaVariant="button"
          buttonVariant="gold"
          buttonHoveredLabel="dark"
          ctaLabel="read this story"
          destination="/portfolio/uxpin-new-editor/#first"
          illustration={New_Editor_Small}
          illustrationPosition="margin"
          bodyText={
            <p>
              In 2015 UXPin was an established design tool serving over two
              thousand companies. We've just raised our Series A (led by True
              Ventures and Jeff Veen – former VP of Design at Adobe). We weren't
              happy, though. We knew that we have to do even more to realize our
              mission and help the design tools industry move forward. We
              started a design process that changed the entire industry.
            </p>
          }
        />
      </PortfolioHeaderWrapper>
      <BreadcrumbsPortfolioWrapper>
        <Breadcrumbs location={location} label="uxpin new editor" />
      </BreadcrumbsPortfolioWrapper>
      <ContextPortfolio
        id="first"
        contextContent={
          <>
            <p>
              In 2015 design tools were cluttered, slow, and obtrusive. As
              absurdly, as it sounds, nobody on the design tools market was
              focused on improving the state of design software. Somebody had to
              change it. UXPin was well-positioned to make that change.
              After all, UXPin was started by designers.
            </p>
            <p>
              Many things were wrong with the design tools of that era.
              According to our research, the most critical factors affecting the
              experience of users were: color-heavy interfaces, lots of
              redundant panels, lack of concern for the overall usability of the
              system, poor performance. All the leading design tools companies
              seemed satisfied with this state of affairs. We didn't want to
              comply.
            </p>
            <p>
              At UXPin, we've decided to reject the status quo. We wanted to
              take the risk and do everything in our power to realize our
              mission. UXPin was started to connect design and engineering and
              helping the design industry progress. We could not achieve this
              mission without taking our design to the next level. In early 2015
              we were ready to act.
            </p>
          </>
        }
        objectivesContent={
          <ol>
            <li>
              Introducing the new minimalist design to the world of design
              tools.
            </li>
            <li>Increasing user satisfaction by at least 25%.</li>
            <li>
              Refactoring UXPin engine and increasing performance in key metrics
              by at least 25%.
            </li>
            <li>
              Using the state of the art design to build trust on the enterprise
              market.
            </li>
          </ol>
        }
        myRoleContent={
          <ul>
            <li>Setting up the standards and expectations for the project.</li>
            <li>Empowering the team to do the best job of their lives.</li>
            <li>Leading the team of over 40 people.</li>
            <li>Prototyping the initial concept of the new editor.</li>
            <li>Creating the design principles for the entire project.</li>
            <li>Coaching design team throughout the entire process.</li>
          </ul>
        }
      >
        <ExplorationWrapper>
          <HeadingM variant="dark">Exploration</HeadingM>
          <ExplorationVideoWrapper>
            <ExplorationVideo
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/cuYQIEWTvFo"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></ExplorationVideo>
            <Caption variant="dark">
              The first prototype and this video were meant to explore new
              interactions concepts and inspire the team to make bold decisions.
            </Caption>
          </ExplorationVideoWrapper>
          <TextBody variant="dark">
            <p>
              The process of working on an entirely new approach to a design
              editor started with a memo sent to our entire team. I argued that
              we shouldn't be compliant with the industry, and instead, we
              should focus on user feedback and our ambition to create the best
              tool possible.
            </p>
            <p>
              I called out the industry to be uninspired and misguided. I shared
              with the team a set of principles that we were to use to guide our
              work and a video of a concept prototype that I created to inspire
              a new approach to design tooling.
            </p>
            <p>
              After that, I invited the entire team and, especially all
              designers, to participate in the process of creating the new
              UXPin.
            </p>
          </TextBody>
        </ExplorationWrapper>
        <PortfolioImageWrapper>
          <img
            src={New_Editor_1}
            alt="low fidelity prototype of new UXPin design editor"
          />
          <Caption variant="dark">
            One of the first low fidelity prototypes of new UXPin.
          </Caption>
        </PortfolioImageWrapper>
      </ContextPortfolio>
      <ProcessWrapper>
        <ProcessContent>
          <ProcessDescription>
            <HeadingM variant="dark">The Process</HeadingM>
          </ProcessDescription>
        </ProcessContent>
        <ProcessChart>
          <img
            src={ProcessNewEditor}
            alt="Chart used in the process for this project"
          />
        </ProcessChart>
        <PortfolioImageWrapper>
          <img
            src={EditorEvolution}
            alt="Different iterations of UXPin interface since 2010"
          />
          <Caption variant="dark">
            The evolution of UXPin interface over the years.
          </Caption>
        </PortfolioImageWrapper>
        <PortfolioImageWrapper>
          <img
            src={EditorLightDark}
            alt="Light and dark version of the UXPin design editor"
          />
          <Caption variant="dark">
            Light and Dark mode were part of the new UXPin from day 1.
          </Caption>
        </PortfolioImageWrapper>
      </ProcessWrapper>
      <PortfolioResults
        results={
          <ul>
            <li>
              Within 12 months of the launch of the new UXPin, nearly all design
              tools on the market applied our approach to UI design. Today all
              leading tools are similar to what we've created in 2015.
            </li>
            <li>
              Overhaul of our interface and engine led to a growth in the
              popularity of UXPin over the next 4 years.
            </li>
            <li>
              In two years after the redesign, user satisfaction grew over 100%.
            </li>
            <li>Various performance metrics exceeded 10x improvement.</li>
            <li>
              We've never had to do a redesign again. The universality of our
              principles serves us to this day!
            </li>
            <li>
              Our brand became strong enough that we were able to establish
              enterprise sales and close +$100,000 accounts.
            </li>
          </ul>
        }
        lessons={
          <ol>
            <li>
              In order to do a great job, people need the right emotional
              environment. Contrary to the popular belief – applying pressure
              doesn't lead to the creation of "diamonds"
            </li>
            <li>
              Design principles, if used correctly, can be extremely powerful.
            </li>
            <li>
              Collaboration between designers and engineers leads to the best
              results.
            </li>
          </ol>
        }
        tools={
          <ul>
            <li>UXPin (wireframing, prototyping, visual design)</li>
            <li>Kissmetrics</li>
            <li>Google Analytics</li>
          </ul>
        }
        quote="Combination of research and vision, empowered by strong conviction, lead to the best results."
      />
      <MoreProjects />
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
        destination="/portfolio/conversion-optimization"
        illustration={Conversion}
        illustrationPosition="margin"
        bodyText={
          <p>
            In 2009 I was trusted with the optimization of critical elements of
            the Nokaut.pl product page. Together with the engineering team,
            we've worked out a series of hypotheses based on factors affecting
            human attention (contrast, color, movement, pattern...) and we've
            performed a series of multivariable split tests. The result? 24%
            increase in the conversion rate.
          </p>
        }
      />
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
        ctaLabel="read this story"
        destination="/portfolio/ecommerce-homepage-design/"
        illustration={Homepage}
        illustrationPosition="margin"
        bodyText={
          <p>
            In 2011 I led the process of the redesign of Nokaut.pl Homepage. At
            that time, Nokaut.pl was attracting 2.5 million users a month and
            the owner of Nokaut.pl – Grupa Nokaut was preparing their IPO. An
            intense project!
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
        ctaLabel="read this story"
        destination="/portfolio/ecommerce-mobile-app-design"
        illustration={Mobile}
        illustrationPosition="margin"
        bodyText={
          <>
            <p>
              Web products of Grupa Nokaut had been dominant (2.5 million unique
              visitors per month in 2011), but the company didn't have much
              success on the mobile market. Our mobile offering, at the time,
              was limited to a dated mobile version of the core service built
              for old cell phones. This service was highly popular couple of
              years earlier, but with the growing popularity of smart phones
              users expected "richer" experiences.
            </p>
            <p>
              In 2010 Grupa Nokaut asked me to lead the process of designing and
              building a mobile app for 3 platforms: iOS, Android and Windows
              Mobile.
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
        ctaLabel="read this story"
        destination="/portfolio/ecommerce-video-portal"
        illustration={Video}
        illustrationPosition="margin"
        bodyText={
          <p>
            I worked in the Grupa Nokaut R&D Group for over two years. We were
            tasked with coming up with new product ideas that addressed the most
            critical strategic problems of the business. One of the projects
            that we realized in 2011 was Nokaut.tv – an eCommerce Video Portal
            that quickly attracted over 100,000 viewers. I had the pleasure to
            lead design and product development process.
          </p>
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
              Since 2012 I work as a full–time CEO of a growing startup – UXPin
              (over 50 employees, profitable). Despite that, I've never stopped
              being a designer, coder, and a product person. To relax and
              contribute to UXPin and the overall design and engineering
              community, I tend to take on side projects.
            </p>
            <p>
              In 2017, after talking to a bunch of friends working on design
              systems, I decided to devote my weekends to the creation of an
              open source repository of analyzed design systems.
            </p>
            <p>
              For two subsequent weekends in January 2018, I designed and coded
              (React.js and Node.js) the repository. The popularity of this
              project exceeded my most optimistic expectations.
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
              I've spent way over a decade designing all sorts of products, but
              hardly ever – brand identities. Nevertheless, I have a deep
              affection for the very special connection between art and
              storytelling always present in great brand design.
            </p>
            <p>
              When I decided to build my personal website, I knew that this is a
              great opportunity to define my brand – my story, aesthetics and
              message with a holistic design process.
            </p>
            <p>
              I quickly became my own most demanding client and yet... I
              thoroughly enjoyed the process of designing Treder Design brand.
            </p>
          </>
        }
      />
    </Layout>
  );
};

export default UXPinNewEditor;
