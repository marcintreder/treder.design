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
import New_Editor from '../../images/new_editor.svg';
/* Illustrations used in the main section */
import Adele_1 from '../../images/adele_1.png';
import Adele_2 from '../../images/adele_2.png';

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

const OpenSourceAdventure = ({ location, data }) => {
  return (
    <Layout>
      <PortfolioHeaderWrapper variant="light">
        <Navigation
          seoTitle="Adele Design Systems – The Open Source Adventure"
          variant="light"
        />
        <PortfolioTeaser
          variant="light"
          alignment="left"
          heading="The Open Source Adventure – Adele"
          headingVariant="dark"
          subHeading="2018"
          subHeadingVariant="gold"
          subHeadingBorder
          ctaVariant="button"
          buttonVariant="gold"
          buttonHoveredLabel="light"
          ctaLabel="read this story"
          destination="/portfolio/open-source-adventure/#first"
          illustration={Adele}
          illustrationPosition="margin"
          bodyText={
            <>
              <p>
                Since 2012 I'm operating as a full–time CEO of a growing startup
                – UXPin (over 50 employees, profitable). Despite that, I've
                never stopped being a designer, coder, and a product person. To
                relax and contribute either to UXPin or the overall design and
                engineering community, I tend to take on side projects.
              </p>
              <p>
                To relax and contribute either to UXPin or the overall design
                and engineering community, I tend to take on side projects.
              </p>
              <p>
                In 2017, after talking to a bunch of friends working on Design
                Systems, I decided to devote my weekend to the creation of an
                open source repository of analyzed design systems.
              </p>
              <p>
                For two subsequent weekends in January 2018, I designed and
                coded (React.js and Node.js for tooling) the repository.
              </p>
              <p>
                The popularity of this project exceeded my most optimistic
                expectations.
              </p>
            </>
          }
        />
      </PortfolioHeaderWrapper>
      <BreadcrumbsPortfolioWrapper>
        <Breadcrumbs
          location={location}
          label="the open source adventures – adele"
        />
      </BreadcrumbsPortfolioWrapper>
      <ContextPortfolio
        id="first"
        contextContent={
          <>
            <p>
              Design systems are growing in popularity, but still, very few
              people can claim that they have built multiple complex design
              systems in their career. That leads to designers and engineers
              having a strong need to check how other people in the industry
              solved specific problems. When we kicked off work on our design
              system at UXPin, I'd have to constantly visit repositories of
              systems like IBM Carbon or Shopify Polaris to check how they
              approached, e.g. icons or colors in their respective systems.
              Every visit like that is time–consumign and distracting.
            </p>
            <p>
              I decided to solve this problem by creating an open platform where
              members of the community can share their analyses of design
              systems. Every system can be described with metadata spanning
              dozens of categories and covering everything from the depth of
              used technologies to the structure of the documentation.
            </p>
          </>
        }
        objectivesContent={
          <ol>
            <li>
              Creating the public repository with analyses of at least 50 design
              systems.
            </li>
            <li>Finding at least 10 maintainers of the public repository.</li>
            <li>
              Attracting at least 10,000 unique users in the first month after
              the launch.
            </li>
          </ol>
        }
        myRoleContent={
          <ul>
            <li>Coming up with the concept of the product.</li>
            <li>Prototyping and visual design.</li>
            <li>Coding: HTML/CSS/JS (React.js)</li>
            <li>Creating CLI build tools (Node.js)</li>
            <li>Writing the technical documentation</li>
            <li>Building and maintaining the community</li>
          </ul>
        }
      >
        <ExplorationWrapper>
          <HeadingM variant="dark">Exploration</HeadingM>
          <TextBody variant="dark">
            <p>
              After documenting my hypotheses and sketching initial interface
              concepts, I talked to multiple friends in the industry, trying to
              understand whether I'm thinking about the problem in the right
              way. My initial idea has been confirmed, but it became clear that
              the entire project has to be open sourced, so anybody can
              contribute straight from GitHub and, subsequently, the relevant
              tooling has to be built to create an easy maintenance process.
            </p>
            <p>
              While I felt comfortable with building the web part of the
              project, I felt that I might struggle with the tooling part. It
              seemed that the tooling (generators of file format, file builders
              etc.) has to be built in Node.js and at that time, I had a very
              rudimentary ability to use Node. I decided to treat as an
              excellent opportunity to become a better programmer!
            </p>
          </TextBody>
          <PortfolioImageWrapper>
            <img src={Adele_1} />
            <Caption variant="dark">
              The early prototype of Adele created in UXPin
            </Caption>
          </PortfolioImageWrapper>
        </ExplorationWrapper>
      </ContextPortfolio>
      <ProcessWrapper>
        <ProcessContent>
          <ProcessDescription>
            <HeadingM variant="dark">The Process</HeadingM>
            <TextBody variant="dark">
              <p>
                Before investing time into coding, I prototyped the entire
                experience in UXPin. In the way of casual research, I showed
                invited 10 friends to test the prototype. After correcting
                multiple small errors, I've concluded the study and moved to
                code.
              </p>
              <p>
                I have chosen React.js as the foundation of my approach to
                JavaScript. I felt comfortable with this library (we use it
                across UXPin), and I felt that the popularity of React.js will
                make a future contribution to Adele easier. For CSS, I've
                decided to use Styled Components. New at the time, styled
                components provided an easy way to dynamically manipulate
                styling within encapsulated components. Another safety check for
                future contributors.
              </p>
              <p>
                While writing the code of all the components, I added tests in
                Jest.
              </p>
              <p>
                The biggest challenge turned out to be completely unexpected.
                For accessibility and semantics reason, I've decided to use the
                HTML table element as the foundation of Adele table.
                Unfortunately, with all the features that I've planned, the HTML
                table struggled with performance. I had to deploy multiple hacks
                to make it work reasonably well while supporting full keyboard
                use (again, for accessibility reasons).
              </p>
            </TextBody>
          </ProcessDescription>
        </ProcessContent>
        <PortfolioImageWrapper>
          <img src={Adele_2} />
          <Caption variant="dark">
            Adele website now contains detailed analyses of over 80 design
            systems.
          </Caption>
        </PortfolioImageWrapper>
      </ProcessWrapper>
      <PortfolioResults
        results={
          <ul>
            <li>
              In the first 12 months after the launch of the project, Adele has
              been visited by over 120,000 people.
            </li>
            <li>
              Adele has 586 stars on Github and 73 people forked the repository.
            </li>
            <li>Today Adele stores 86 analyses of design systems</li>
            <li>Adele is maintained by a community of over 50 contributors.</li>
          </ul>
        }
        lessons={
          <ol>
            <li>
              Technical analysis is an important part of any project. I made a
              wrong decision about the HTML Table, because I didn't spend enough
              time analyzing the issue.
            </li>
            <li>Open source projects are highly rewarding.</li>
            <li>
              Taking care of the accessibility of the UI should be treated as a
              critical part of every project.
            </li>
          </ol>
        }
        tools={
          <ul>
            <li>UXPin (prototyping)</li>
            <li>Sketch (visual design)</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Styled Components</li>
            <li>Jest, Enzyme</li>
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
            performed a series of multivariable split tests (multiple variants
            of product pages were being served randomly to users. The result?
            24% increase in the conversion rate.
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
        destination="/portfolio/mobile-app-design"
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
        destination="/portfolio/uxpin-new-editor/"
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
        destination="/portfolio/ecommerce-video-portal"
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
    </Layout>
  );
};

export default OpenSourceAdventure;
