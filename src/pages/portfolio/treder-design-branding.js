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
import Logo_Sketches_White from '../../images/logo_sketches_white.svg';
import Logo_Sign from '../../images/logo_sign.svg';
import LogoTypes from '../../images/logotypes.svg';

/* Page specific style components */
const ExplorationWrapper = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: var(--max-width-desktop);
  margin: 0 auto;
  padding: 0 var(--sides-padding-desktop);

  ${PortfolioImageWrapper} {
      margin: 80px auto;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 115px;
  }
`;

const TrederDesignBranding = ({ location, data }) => {
  return (
    <Layout>
      <PortfolioHeaderWrapper variant="dark">
        <Navigation seoTitle="Treder Design Brand Identity" variant="dark" />
        <PortfolioTeaser
          variant="dark"
          alignment="left"
          heading="Treder Design Brand Identity"
          headingVariant="gold"
          subHeading="2019"
          subHeadingVariant="gold"
          subHeadingBorder
          ctaVariant="button"
          buttonVariant="gold"
          buttonHoveredLabel="dark"
          ctaLabel="read this story"
          destination="/portfolio/treder-design-branding/#first"
          illustration={Logo_Sketches}
          illustrationPosition="margin"
          bodyText={
            <>
              <p>
                I spent my entire career working on products and user
                interfaces. I built multiple teams, completed hundreds of
                projects, and launched dozens of products. I never have,
                however, designed full brand identity.
              </p>
              <p>
                I always had great respect for designers working on brands. Some
                of my design heroes – Massimo Vignelli and Michael Bierut
                designed timeless brand identities.
              </p>
              <p>
                Finally, I've decided to surrender to my desire and allow myself
                to work on a dream project – design of my brand.
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
              Before sketching any ideas, I started to write down my story. I
              had to find an answer to the crucial questions: "What do I stand
              for?", "What is important to me in design?", "How can I contribute
              to teams creating amazing products?".
            </p>
            <p>
              After over 12 years of creating digital (and sometimes physical!)
              products, I stood on the verge of the chasm of meaning, wondering
              how can I create a sign that sums up my whole career as well as my
              plans for the future.
            </p>
            <p>
              I started with the highest possible level – the level of values. I
              consider myself a principled man with solid self–awareness, and
              yet I struggled with naming my values. I had to take a deep dive
              into the stories of my past and ambitions for the future. After
              this exercise, I identified: <strong>loyalty</strong>,{' '}
              <strong>mastery</strong> (neverending strive to become better),
              and <strong>self-discipline</strong> as my three fundamental
              values.
            </p>
            <p>
              Subsequently, I started to think about all the critical moments in
              my career. What pushed me forward? What empowered me to become
              better? I consider myself a capable designer (always on the path
              to becoming better!). However, my career wasn't built entirely on
              the foundation of my craft. Not at all. I was quickly promoted to
              leadership, and by being a leader, I made more impact than as a
              designer. I was able to talk to people when others were silent,
              form teams from individuals, help people grow, and create a
              healthy tension that led everyone to great results. I'm a
              designer, but I exist for the people.
            </p>
            <p>
              I had to design a sign that represents my simple values and my
              devotion to people and teams. What an exciting challenge!
            </p>
          </>
        }
        objectivesContent={
          <ol>
            <li>Creating memorable brand identity, in tune with my values.</li>
            <li>
              Identifying the desired message, meaning and values represented by
              the brand.
            </li>
          </ol>
        }
        myRoleContent={
          <ul>
            <li>
              Defining the meaning and message behind the Treder Design brand.
            </li>
            <li>
              Sketching multiple versions of the logo in the exploration phase.
            </li>
            <li>Selecting typeface and typographical details.</li>
            <li>Designing the final version the logotype</li>
          </ul>
        }
      >
        <ExplorationWrapper>
          <HeadingM variant="dark">Exploration</HeadingM>
          <TextBody variant="dark">
            <p>
              I started by sketching geometrical signs that, on some level,
              represented my story. I designed nearly a hundred different signs
              – some of them where more esoterical, some, very straightforward.
              I took a lot of inspiration from the modernist era. I strived for
              similar simplicity and compelling message, as well as the clean
              aesthetics.
            </p>
          </TextBody>
          <PortfolioImageWrapper>
            <img src={Logo_Sketches_White} style={{width: "80%"}}/>
            <Caption variant="dark">
              Examples of signs created in the exploration phase of the process.
            </Caption>
          </PortfolioImageWrapper>
          <TextBody variant="dark">
            <p>
              I decided that gold and black are going to be the primary colors
              that I'm going to use on this project. I love this powerful
              combination, and I believe it fits my message. Cold metal, with
              high value and stability, combined with the space created by the
              lack of light, felt just right.
            </p>
            <p>
              The finally selected sign represents my values in the form of a
              sharp, gold rectangle that encompasses two halves of a circle –
              individuals working together thanks to the creative tension.
            </p>
          </TextBody>
          <PortfolioImageWrapper>
            <img src={Logo_Sign} style={{ width: '280px', height: '280px' }} />
            <Caption variant="dark">
              The final sign. Simplicity of values and leadership creating space
              for collaboration.
            </Caption>
          </PortfolioImageWrapper>
          <TextBody variant="dark">
            <p>
              Finally, I started working on typography. At first, intuitively, I
              started working with the creations of my typography hero – Adrian
              Frutiger. I tested Avenir, Avenir Next, Frutiger, Universe, but
              nothing from my favorite typefaces looked right. Slightly
              disappointed, I cast a wider net. Finally, I found the perfect
              typeface for the project – modern, but also classically modernist,
              not anonymous, but not overused and simply beautiful. Neue Plak –
              a modern reedition of Plak designed by Paul Renner became my
              typeface of choice.
            </p>
          </TextBody>

          <PortfolioImageWrapper>
            <img src={LogoTypes} />
            <Caption variant="dark">
              Four variants of Treder Design logotype
            </Caption>
          </PortfolioImageWrapper>
          <TextBody variant="dark">
            <p>
              Design of the logotype is just the beginning of the whole project.
              This case study is going to grow in the near future with a more
              complete brand identity standards and examples.
            </p>
          </TextBody>
        </ExplorationWrapper>
      </ContextPortfolio>
      <PortfolioResults
        results={
          <ul>
            <li>
              The brand identity inspired the entire Treder Design portfolio
              website.
            </li>
            <li>
              Defining values helped me better understand myself and my career
              path.
            </li>
          </ul>
        }
        lessons={
          <ol>
            <li>
              Designing brand identity is much more a task in storytelling than
              sketching.
            </li>
            <li>
              It may take hundred of takes to find the right sign for the story,
              but at the end of the day – it's worth it.
            </li>
            <li>I loved the process.</li>
          </ol>
        }
        tools={
          <ul>
            <li>UXPin (early sketches, interactive exploration)</li>
            <li>Figma (final visual design of the logo)</li>
          </ul>
        }
        quote="Designing for yourself is tough."
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
        ctaLabel="read this story"
        destination="/portfolio/open-source-adventure"
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
    </Layout>
  );
};

export default TrederDesignBranding;
