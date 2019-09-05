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

import UXPinNotepad1 from '../../images/uxpin_notepad_1.png';
import UXPinNotepad2 from '../../images/uxpin_notepad_2.jpg';
import UXPinNotepad3 from '../../images/uxpin_notepad_3.jpg';
import UXPinNotepad4 from '../../images/uxpin_notepad_4.jpg';
import UXPinNotepad5 from '../../images/uxpin_notepad_5.png';
import UXPinNotepad6 from '../../images/uxpin_notepad_6.png';
import UXPinNotepad7 from '../../images/uxpin_notepad_7.jpg';
import UXPinNotepad8 from '../../images/uxpin_notepad_8.jpg';
import UXPinNotepadCollection1 from '../../images/uxpin_notepad_collection_1.png';
import UXPinNotepadCollection2 from '../../images/uxpin_notepad_collection_2.png';

import Logo_Sketches from '../../images/logos.svg';
import Conversion from '../../images/conversion.svg';
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
  align-items: center;
  padding: 0 var(--sides-padding-desktop);
  margin: 20px auto;

  img {
    width: 100%;
    height: auto;
    margin: 0 auto;
  }

  figcaption {
    margin-top: 40px;
    text-align: center;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }

  @media screen and (max-width: 600px) {
    margin: 40px 0;
  }
`;

const TwoImagesWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: var(--max-width-desktop);
  margin: 20px auto;
  padding: 0 var(--sides-padding-desktop);
  overflow: hidden;

  figcaption {
    margin-top: 40px;
    text-align: center;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 115px;
  }
`;

const TwoImagesContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 600px;
  margin: 0 auto;
  overflow: hidden;

  img:first-of-type {
    height: auto;
    margin-right: 20px;
  }

  img:last-of-type {
    width: 60%;
    height: auto;
  }

  @media screen and (max-width: 1380px) {
    height: 80%;
  }
`;

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

const ResultsWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #000000;
  margin: 80px auto 0 auto;

  font-size: 16px;
  font-weight: 100;
  line-height: 30px;
  color: #ffffff;

  ul,
  ol {
    padding-left: 15px;
  }
`;

const LaunchWrapper = styled.section`
  width: 100%;
`;

const LaunchContent = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: var(--max-width-desktop);
  margin: 40px auto 0 auto;
  padding: 0 var(--sides-padding-desktop);

  @media screen and (min-width: 1440px) {
    padding: 0 115px;
  }
`;

const LaunchDescription = styled.div`
  width: 65%;
  padding-right: 40px;

  @media screen and (max-width: 1280px) {
    width: 100%;
  }
`;

const LaunchSideImages = styled.aside`
  width: 375px;
  margin-top: 80px;

  img {
    width: 100%;
    height: auto;
  }

  img:first-of-type {
    margin-bottom: 40px;
  }

  figcaption {
    margin-top: 20px;
    text-align: center;
  }

  @media screen and (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    img {
      width: 80%;
      margin: 0 auto;
    }

    figcaption {
      margin-bottom: 80px;
    }
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
    padding-top: 40px;
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

const LessonsWrapper = styled.div`
  width: 60%;
  margin-top: 40px;
  padding-right: 80px;
  @media screen and (max-width: 600px) {
    width: 100%;
    padding-right: 0;
    margin-top: 20px;
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
    margin-bottom: 20px;

    q {
      display: block;
      margin-top: 40px;
    }
  }
`;

const ToolsWrapper = styled.article`
  margin-top: 40px;

  @media screen and (max-width: 600px) {
    margin-top: 20px;
  }
`;

const PaperPrototypingRedesigned = ({ location, data }) => {
  return (
    <Layout>
      <PortfolioHeaderWrapper variant="dark">
        <Navigation seoTitle="Paper Prototyping Redesigned" variant="dark" />
        <PortfolioTeaser
          variant="dark"
          alignment="left"
          heading="Paper Prototyping Redesigned"
          headingVariant="light"
          subHeading="2010"
          subHeadingVariant="gold"
          subHeadingBorder
          ctaVariant="button"
          buttonVariant="gold"
          buttonHoveredLabel="light"
          ctaLabel="read this story"
          destination="/portfolio/paper-prototyping-redesigned/#first"
          illustration={UXPinNotepad1}
          illustrationPosition="margin"
          bodyText={
            <p>
              In 2010 I got promoted to the role of Head of Design at Grupa
              Nokaut. I felt a great sense of pride and commitment to the
              company. And yet, being as young as I were at that time, I had
              endless energy to work long hours. I challenged myself to do more
              and more. I engaged in design work for a series of early–stage
              startups. Not a single one ended up successful. In the summer of
              2010, I've decided to reflect on the failures of all the projects
              and engage in a fun little project that answered the problem that
              I felt myself. Little did I know that this small side project will
              affect the next 10 years of my life and without planning to do so,
              I'll start one of the most prominent startups in the history of
              the tech industry in Poland.
            </p>
          }
        />
      </PortfolioHeaderWrapper>
      <BreadcrumbsPortfolioWrapper>
        <Breadcrumbs location={location} label="paper prototyping redesigned" />
      </BreadcrumbsPortfolioWrapper>
      <ContextPortfolio
        id="first"
        contextContent={
          <>
            <p>
              Grupa Nokaut was a highly engineering–driven organization. After
              successful experiments, the value of design was understood and
              appreciated, but collaboration remained to be a problem. Design
              and engineering existed in two silos, and it caused many
              inefficiencies in the product development process.
            </p>
            <p>
              To overcome this challenge in 2010, I've started to organize paper
              prototyping workshops. I invited the entire engineering team, and
              together with members of my team, we would present results of most
              recent research and hold an open discussion about their outcome.
            </p>
            <p>
              After reviewing the results of the research, the entire group was
              being divided into small interdisciplinary teams and asked to
              sketch a solution to problems uncovered by the research.
            </p>
            <p>
              The first iteration of this workshop was only somehow successful.
              The team was engaged, but many people struggled with sketching and
              felt concerned about their ability to express themselves visually.
            </p>
            <p>
              On a subsequent edition of the workshop instead of blank pieces of
              paper and pencils team received sticky notes with printed,
              essential components from our style guide. Instead of sketching
              the solution, the team was asked to build the interface with
              sticky notes.
            </p>
            <p>
              This playful approach turned out to be an overwhelming success.
            </p>
            <p>
              Soon after, together with two friends, I decided to turn this
              positive experience into a product. The problem felt real, and it
              seemed that we might have a solution. Without any hopes to turn it
              into a big business we've designed and produced the very first
              UXPin product – UXPin Paper Prototyping notepad for web design.
            </p>
          </>
        }
        objectivesContent={
          <ol>
            <li>Creating a collaborative tool for designers and engineers.</li>
            <li>
              Creating a GTM plan that strongly resonates with the target
              audience and launching on November 11th 2010.
            </li>
            <li>Selling 400 notepads withing 30 days post launch.</li>
          </ol>
        }
        myRoleContent={
          <ul>
            <li>Coming up with the concept of the product.</li>
            <li>Research and analysis</li>
            <li>Low fidelity design of notepads and collaterals</li>
            <li>Wireframing and prototyping key experiences</li>
            <li>Creating the business model</li>
            <li>
              Creating and executing the first marketing plan (including GTM)
            </li>
            <li>Post–launch customer service and quality assurance</li>
          </ul>
        }
      >
        <ImageWrapper>
          <img src={UXPinNotepad2} />
          <Caption variant="dark">
            The very first picture of the UXPin Paper Prototyping Notepad
          </Caption>
        </ImageWrapper>
        <ExplorationWrapper>
          <HeadingM variant="dark">Exploration</HeadingM>
          <TextBody variant="dark">
            <p>
              To kick off the process, together with my co–founders, we've
              started to attempt to define a small set of user interface
              elements (today, we would say – atoms) that was sufficient and
              universal enough to build any website. For hours we would cut out
              elements from sticky notes and try to recreate popular websites –
              eBay, Facebook, MySpace...
            </p>
            <p>
              Once we felt that we have something that works for us, we've
              started to run tests with our friends – designers. After dozens of
              iterations, we finally felt that we had a design that works for a
              majority of cases. Excited, we've started to look for a producer.
              It turned out that producing notepads with a sufficiently strong
              glue was quite a challenge. After 2 months of intense
              negotiations, we've found a printing house able to produce the
              first series of UXPin notepads – 400 pieces.
            </p>
          </TextBody>
        </ExplorationWrapper>
        <ImageWrapper>
          <img src={UXPinNotepadCollection1} />
          <Caption variant="dark">
            UXPin was always all about the quality. We checked every single
            notepad, making sure that everything is just right.
          </Caption>
        </ImageWrapper>
      </ContextPortfolio>
      <LaunchWrapper>
        <LaunchContent>
          <LaunchDescription>
            <HeadingM variant="dark">Launch</HeadingM>
            <TextBody variant="dark">
              <p>
                In early November the printing house completed our order of 400
                UXPin Notepads – in theory, we were ready to launch. The
                practice has been somehow more complicated, though. Now we had
                to find time to build the UXPin website and store.
              </p>
              <p>
                To motivated ourselves, we've set a fixed launch deadline –
                November 11th 2010. November 11th is simultaneously celebrated
                as the World Usability Day and Poland Independence Day (public
                holiday). Seemed like a great day to launch UXPin!
              </p>
              <p>
                Unfortunately, we were busy with other commitments until the
                very launch day, and we didn't manage to do nearly anything.
              </p>
              <p>
                Young and excited, instead of rescheduling the launch we've
                worked for 24 hours non–stop. The entire website was designed
                and build in one day. We had to accept some significant
                compromises (e.g., WordPress served us as the eCommerce
                platform). A price worth paying for keeping our word!
              </p>
              <p>
                In the late evening of November 11th we were ready to launch.
                The first order came a couple of minutes after the launch. We
                were completely sold out within 48 hours.
              </p>
              <p>UXPin adventure has started!</p>
            </TextBody>
          </LaunchDescription>
          <LaunchSideImages>
            <img src={UXPinNotepad6} />
            <img src={UXPinNotepad5} />
            <Caption variant="dark">
              The original wireframe and the design of the first UXPin website.
            </Caption>
          </LaunchSideImages>
        </LaunchContent>
      </LaunchWrapper>
      <ImageWrapper>
        <img src={UXPinNotepadCollection2} />
        <Caption variant="dark">
          The first batch of UXPin notepads sold out in 48 hours.
        </Caption>
      </ImageWrapper>
      <ResultsWrapper>
        <ResultsContent>
          <ResultsList>
            <HeadingM>Results</HeadingM>
            <ul>
              <li>
                UXPin quickly became extremely popular. Just in the first month
                we've started to serve IBM, Apple, Google, MySpace, Sony and
                other great companies all over the world.
              </li>
              <li>
                This very simple notepad, within 12 months, led us to starting a
                real company, which attracted multiple awards, VC funding (first
                Polish company that raised capital in Silicon Valley) and today
                serves tens of thousands companies all over the world.
              </li>
            </ul>
          </ResultsList>
          <MiniQuoteWrapper>
            <MiniQuote>
              Great design requires superb discipline. Only with discipline a
              designer can achieve her goals.
            </MiniQuote>
          </MiniQuoteWrapper>
          <LessonsWrapper>
            <HeadingM>Lessons Learned</HeadingM>
            <ol>
              <li>
                Problem based product development can lead to amazing success.
              </li>
              <li>Discipline is necessary in any design and product work.</li>
              <li>
                One decision can lead to years of unexpected consequences.
              </li>
            </ol>
          </LessonsWrapper>
          <ToolsWrapper>
            <HeadingM>Tools</HeadingM>
            <ul>
              <li>Axure (prototyping)</li>
              <li>Photoshop (visual design)</li>
              <li>Google Analytics</li>
            </ul>
          </ToolsWrapper>
        </ResultsContent>
      </ResultsWrapper>
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
            performed a series of multivariable split tests (multiple variants
            of product pages were being served randomly to users. The result?
            24% increase in the conversion rate.
          </p>
        }
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
        illustration={Homepage}
        illustrationPosition="margin"
        bodyText={
          <p>
            TIn 2011 I led the process of the redesign of the Nokaut.pl
            Homepage. At that time, Nokaut.pl was attracting 2.5 million users a
            month and the owner of Nokaut.pl – Grupa Nokaut was preparing their
            IPO. Intense project!
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
              couple of years earlier, but with the growing popularity of smart
              phones users expected richer experiences.
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
        subHeadingVariant="gold"
        subHeadingBorder
        ctaVariant="button"
        buttonVariant="dark"
        buttonHoveredLabel="light"
        ctaLabel="read this story"
        illustration={Video}
        illustrationPosition="margin"
        bodyText={
          <p>
            For over two years I worked as part of the R&D Group at Groupa
            Nokaut. We were tasked with coming up with new product ideas that
            address the most critical strategic problems of the business. One of
            the projects that we realized in 2011 was Nokaut.tv – an eCommerve
            Video Portal that quickly attracted over 100,000 viewers. I had a
            pleasure to lead the design and product development process.
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
              We weren't happy though. We knew that we have to do even more to
              realize our mission and help the design tools industry move
              forward. We started a design process that changed the entire
              industry.
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
        ctaLabel="read this story"
        illustration={Adele}
        illustrationPosition="margin"
        bodyText={
          <>
            <p>
              Since 2012 I'm operating as a full–time CEO of a growing startup –
              UXPin (over 50 employees, profitable). Despite that, I've never
              stopped being a designer, coder, and a product person. To relax
              and contribute either to UXPin or the overall design and
              engineering community, I tend to take on side projects.
            </p>
            <p>
              In 2017, after talking to a bunch of friends working on Design
              Systems, I decided to devote my weekends to the creation of an
              open source repository of analyzed design systems.
            </p>
            <p>
              For two subsequent weekends in January 2018, I designed and coded
              (React.js and Node.js for tooling) the repository. The popularity
              of this project exceeded my most optimistic expectations. In 2017,
              after talking to a bunch of friends working on Design
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
        illustration={Logo_Sketches}
        illustrationPosition="margin"
        bodyText={
          <>
            <p>
              I've spent way over a decade designing all sorts of products, but
              hardly ever – brand identities. Neverthless, I have a deep
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

export default PaperPrototypingRedesigned;
