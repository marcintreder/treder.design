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
import New_Editor from '../../images/new_editor.svg';
import Homepage from '../../images/small_homepage.svg';
import Adele from '../../images/adele.svg';
import Mobile from '../../images/mobile.svg';
import Video from '../../images/video.svg';
import Grid from '../../images/grid.svg';
/* Illustrations used in the main section */
import Nokauttv1 from '../../images/nokauttv_1.png';
import Nokauttv2 from '../../images/nokauttv_2.png';
import Nokauttv3 from '../../images/nokauttv_3.png';
import ProcessNokautTv from '../../images/process_tv.svg';

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

const EcommerceVideoPortal = ({ location, data }) => {
  return (
    <Layout>
      <PortfolioHeaderWrapper variant="light">
        <Navigation seoTitle="eCommerce Video Portal Design" variant="light" />
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
          destination="/portfolio/ecommerce-video-portal/#first"
          illustration={Video}
          illustrationPosition="margin"
          bodyText={
            <p>
              For over two years I worked as part of the R&D Group at Groupa
              Nokaut. We were tasked with coming up with new product ideas that
              address the most critical strategic problems of the business. One
              of the projects that we realized in 2011 was Nokaut.tv – an
              eCommerve Video Portal that quickly attracted over 100,000
              viewers. I had a pleasure to lead the design and product
              development process.
            </p>
          }
        />
      </PortfolioHeaderWrapper>
      <BreadcrumbsPortfolioWrapper>
        <Breadcrumbs location={location} label="ecommerce video portal" />
      </BreadcrumbsPortfolioWrapper>
      <ContextPortfolio
        id="first"
        contextContent={
          <>
            <p>
              Grupa Nokaut, preparing for the IPO, was desperately trying to
              strengthen brand awareness and diversify the traffic (over 90% of
              traffic came from Google search).
            </p>
            <p>
              At that time, I headed the design organization and,
              simultaneously, I worked in a small R&D team reporting directly to
              the founders of the company. The R&D team was created to solve the
              critical strategic problems of Grupa Nokaut and create
              future–facing product concepts.
            </p>
            <p>
              After reviewing the results of the research, the entire group was
              being divided into small interdisciplinary teams and asked to
              sketch a solution to problems uncovered by the research.
            </p>
            <p>
              One of the initiatives that the R&D team took on in late 2011 was
              creating a video content service and using content marketing to
              increase Nokaut.pl brand awareness and generate significantly more
              direct traffic.
            </p>
          </>
        }
        objectivesContent={
          <ol>
            <li>
              Finding a way to generate high quality, engaging, video content
              for Nokaut.pl.
            </li>
            <li>
              Attracting direct traffic to Nokaut.pl and improving brand
              awareness.
            </li>
            <li>
              Finding a way to appeal to a younger audience and presenting
              Nokaut.pl as "cool" and vibrant company.
            </li>
          </ol>
        }
        myRoleContent={
          <ul>
            <li>
              Working on the original concept of the service alongside 3 other
              members of the R&D team.
            </li>
            <li>
              Wireframing and prototyping the original version of the service.
            </li>
            <li>Managing internal and external visual designers.</li>
            <li>Wireframing and prototyping key experiences</li>
            <li>
              Coordinating collaboration with the external development partner.
            </li>
          </ul>
        }
      >
        <ExplorationWrapper>
          <HeadingM variant="dark">Exploration</HeadingM>
          <TextBody variant="dark">
            <p>
              The creative process started with an exploration. Taking the
              problems the business was facing, what kind of experience should
              we create? Video content was on the rise globally, but what did it
              mean for us? And how video content could change the brand of Grupa
              Nokaut?
            </p>
            <p>
              After multiple brainstorming sessions, we've decided to take a
              significant shortcut and use a local raising youtube star and take
              inspiration from his successful video channel. That led us to the
              concept of Nokaut.tv – youtube program focused on testing the
              knowledge of random people on the streets and gifting them
              products if they answered the questions correctly.
            </p>
            <p>
              We've also defined the brand concept and commissioned an intro
              video (screens below).
            </p>
          </TextBody>
        </ExplorationWrapper>
        <PortfolioImageWrapper>
          <img src={Nokauttv1} />
        </PortfolioImageWrapper>
        <PortfolioImageWrapper>
          <img src={Nokauttv2} />
          <Caption variant="dark">
            The dynamic, vibrant, brand image of Nokaut.tv
          </Caption>
        </PortfolioImageWrapper>
      </ContextPortfolio>
      <ProcessWrapper>
        <ProcessContent>
          <ProcessDescription>
            <HeadingM variant="dark">The Process</HeadingM>
            <TextBody variant="dark">
              <p>
                The chart below represents the process for this project. It's an
                accurate representation of how my team and I used to run design
                and product work at Grupa Nokaut at that time. An important, and
                unique, part of this particular process are the field tests in
                local supermarkets. The goal was to observe user behavior in the
                real environment. These studies informed many of our design
                decisions.
              </p>
            </TextBody>
          </ProcessDescription>
        </ProcessContent>
        <ProcessChart>
          <img src={ProcessNokautTv} />
        </ProcessChart>
        <PortfolioImageWrapper>
          <img src={Nokauttv3} />
          <Caption variant="dark">The homepage of Nokaut.tv</Caption>
        </PortfolioImageWrapper>
      </ProcessWrapper>
      <PortfolioResults
        results={
          <ul>
            <li>
              The first 15 episodes generated over 1M views on YouTube and
              delivered a significant amount of direct traffic to Nokaut.pl
            </li>
          </ul>
        }
        lessons={
          <ol>
            <li>
              The plan to maintain a service is as vital as plan to launch a
              service. After great initial success Nokaut.tv started to decline.
              The quality of content went down, novelty effect disappeared, and
              after 18 months, Nokaut.pl decided to close down the service (I
              wasn't at the company at that time).
            </li>
            <li>
              Coordination of content and development partners at the same time
              increases the overall level of risk for the project.
            </li>
            <li>
              Changing a brand perception of an established product is
              difficult.
            </li>
          </ol>
        }
        tools={
          <ul>
            <li>Axure (wireframing, prototyping)</li>
            <li>Notable (comments on visual design)</li>
            <li>Photoshop (visual design)</li>
            <li>Propriatory click–tracking software</li>
            <li>Google Analytics</li>
          </ul>
        }
        quote="Coordination of multiple external partners drastically increases the risk of 
        the project."
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
        destination="/portfolio/ecommerce-mobile-app-design"
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
        destination="/portfolio/treder-design-branding/"
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

export default EcommerceVideoPortal;
