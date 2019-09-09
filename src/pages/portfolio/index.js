import React from 'react';
import styled from 'styled-components';

import {
  ButtonLink,
  Breadcrumbs,
  HeadingXL,
  Navigation,
  PortfolioTeaser,
  Layout,
  TextBody,
} from '../../components';

import Logo_Sketches from '../../images/logos.svg';
import Conversion from '../../images/conversion.svg';
import Grid from '../../images/grid.svg';
import New_Editor from '../../images/new_editor.svg';
import Homepage from '../../images/homepage.svg';
import Adele from '../../images/adele.svg';
import Mobile from '../../images/mobile.svg';
import Video from '../../images/video.svg';

const PortfolioHeaderWrapper = styled.section`
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

const PortfolioHeader = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: var(--max-width-desktop);
  padding: 0 var(--sides-padding-desktop);
  margin: 80px auto;

  ${HeadingXL} {
    width: 580px;
    margin: 0 80px 0 -5px;
  }

  ${TextBody} {
    width: 40%;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 115px;
  }

  @media screen and (max-width: 1300px) {
    justify-content: center;
    margin-top: 50px;

    ${HeadingXL} {
      width: 580px;
      margin: 0;
    }

    ${TextBody} {
      width: 580px;
    }
  }

  @media screen and (max-width: 700px) {
    justify-content: center;

    ${HeadingXL} {
      width: 490px;
      margin: 0;
    }

    ${TextBody} {
      width: 490px;
    }
  }

  @media screen and (max-width: 600px) {
    justify-content: center;

    ${HeadingXL} {
      width: 420px;
      margin: 0;
    }

    ${TextBody} {
      width: 420px;
    }
  }

  @media screen and (max-width: 500px) {
    justify-content: center;

    ${HeadingXL} {
      width: 320px;
      margin: 0;
    }

    ${TextBody} {
      width: 320px;
    }
  }

  @media screen and (max-width: 400px) {
    justify-content: center;

    ${HeadingXL} {
      width: fit-content;
      margin: 0;
    }

    ${TextBody} {
      width: fit-content;
    }
  }
`;

const Portfolio = ({ location, data }) => {
  return (
    <>
      <Layout>
        <Navigation seoTitle="Portfolio" variant="light" activeLink={2} />
        <PortfolioHeaderWrapper>
          <PortfolioHeader>
            <HeadingXL variant="dark">Design & Product Portfolio</HeadingXL>
            <TextBody variant="dark">
              <p>
                This portfolio is devoted to my greatest passion – the creation
                of products. For the past 12 years, I've worked on dozens of
                projects and hundreds of features.
              </p>
              <p>
                In this portfolio, I'm sharing some of the battle stories of the
                past decade. Large web projects, small optimizations, mobile
                apps for multiple platforms, software, open-source project, and
                even... a paper prototyping notepad – this portfolio is full of
                stories of designing and building products.
              </p>
              <p>
                Building products means everything to me. And there's nothing
                I'd rather do than dwell on product strategy and design details.
              </p>
            </TextBody>
          </PortfolioHeader>
          <ButtonLink
            to="/portfolio/#first"
            variant="gold"
            hoveredLabelColor="light"
          >
            explore my portfolio
          </ButtonLink>
          <Breadcrumbs location={location} label="portfolio" />
        </PortfolioHeaderWrapper>
        <PortfolioTeaser
          id="first"
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
              In 2009 I was trusted with the optimization of critical elements
              of the Nokaut.pl product page. Together with the engineering team,
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
          destination="/portfolio/paper-prototyping-redesigned"
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
        <PortfolioTeaser
          variant="gold"
          alignment="left"
          heading="eCommerce Mobile App for 3 Platforms"
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
                couple of years earlier, but with the growing popularity of
                smart phones users expected richer experiences.
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
          subHeadingVariant="gold"
          subHeadingBorder
          ctaVariant="button"
          buttonVariant="dark"
          buttonHoveredLabel="light"
          ctaLabel="read this story"
          destination="/portfolio/ecommerce-video-portal/"
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
                Since 2012 I'm operating as a full–time CEO of a growing startup
                – UXPin (over 50 employees, profitable). Despite that, I've
                never stopped being a designer, coder, and a product person. To
                relax and contribute either to UXPin or the overall design and
                engineering community, I tend to take on side projects.
              </p>
              <p>
                In 2017, after talking to a bunch of friends working on Design
                Systems, I decided to devote my weekends to the creation of an
                open source repository of analyzed design systems.
              </p>
              <p>
                For two subsequent weekends in January 2018, I designed and
                coded (React.js and Node.js for tooling) the repository. The
                popularity of this project exceeded my most optimistic
                expectations. In 2017, after talking to a bunch of friends
                working on Design
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
          destination="/portfolio/treder-design-branding"
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

export default Portfolio;
