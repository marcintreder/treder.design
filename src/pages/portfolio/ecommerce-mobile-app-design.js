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
  PortfolioTeaser,
  PortfolioResults,
  PortfolioHeaderWrapper,
  PortfolioImageWrapper,
  Layout,
  TextBody,
} from '../../components';

/* Illustrations Imports */
import Logo_Sketches from '../../images/logos.svg';
import Conversion from '../../images/conversion.svg';
import Grid from '../../images/grid.svg';
import New_Editor from '../../images/new_editor.svg';
import Adele from '../../images/adele.svg';
import Homepage from '../../images/small_homepage.svg';
import Video from '../../images/video.svg';
/* Illustrations used in the main content section */
import Mobile from '../../images/mobile.svg';
import NokautSkaner from '../../images/nokaut_skaner.png';
import ProcessChartMobile from '../../images/process_mobile.svg';

/* Styles for page specific components */

const ImageWrapper = styled(PortfolioImageWrapper)`
  margin: 80px auto;

  img {
    width: 80%;
  }
`;



const ProcessWrapper = styled.section`
  width: 100%;
  margin-bottom: 120px;

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

const eCommerceMobileAppDesign = ({ location, data }) => {
  return (
    <Layout>
      <PortfolioHeaderWrapper variant="light">
        <Navigation seoTitle="eCommerce Homepage redesign" variant="light" />
        <PortfolioTeaser
          variant="light"
          alignment="left"
          heading="eCommerce Mobile App for 3 Platforms"
          headingVariant="dark"
          subHeading="2011"
          subHeadingVariant="dark"
          subHeadingBorder
          ctaVariant="button"
          buttonVariant="dark"
          buttonHoveredLabel="light"
          ctaLabel="read this story"
          destination="/portfolio/ecommerce-mobile-app-design#first"
          illustration={Mobile}
          illustrationPosition="margin"
          bodyText={
            <>
              <p>
                In early 2011 Grupa Nokaut trusted me with one of the most
                exciting projects of my career – creation of a mobile platform
                for 3 operating systems (Windows Mobile, iOS, Android).
              </p>
              <p>
                Innovative product idea, high strategic value, business
                partnership with Microsoft and simultaneous work in 3 different
                design languages – this project was as challenging as it was
                satisfying.
              </p>
            </>
          }
        />
      </PortfolioHeaderWrapper>
      <BreadcrumbsPortfolioWrapper>
        <Breadcrumbs location={location} label="ecommerce mobile app design" />
      </BreadcrumbsPortfolioWrapper>
      <ContextPortfolio
        id="first"
        contextContent={
          <>
            <p>
              Web products of Groupa Nokaut had been dominant (2.5 million
              unique visitors per month in 2011), but the company didn't have
              much success on the mobile market. Nokaut's mobile offering, at
              the time, was limited to a dated mobile version of the core
              service built for old cell phones. This service was highly popular
              couple of years earlier, but with the growing popularity of
              smartphones, users expected richer experiences.
            </p>
            <p>
              In 2011 the company decided to increase investment into the mobile
              eCommerce market. I had been asked to lead the R&D and User
              Experience efforts. The idea was that Nokaut should build an app
              connecting online and offline shopping experiences. The user could
              quickly prices in brick-and-mortar stores with those listed online
              on thousands of eCommerce website.
            </p>
            <p>
              Due to a strategic partnership with Microsoft, the first target
              platform had to be Windows Mobile (precursor to Windows Phone).
              Windows Mobile was pre–installed on some of the most memorable
              smartphones of that era – including HTC Diamond. Microsoft's
              mobile OS followed a paradigm of the pre-iPhone mobility. The
              system offered a scaled–down version of the desktop operating
              system. Most of the Windows Mobile devices had to be operated with
              a stencil. Interactive elements were typically small. Lots of
              actions had to be performed from the contextual menu (the
              equivalent of the right–click menu on desktop) and of course there
              was the notorious start menu.
            </p>
            <p>
              Limitations of the native design language had to be respected. We
              had to comply with the existing standards to create a comfortable
              experience for our users. Unfortunately, the user interface and
              experience guidelines for Windows Mobile, at that time, were very
              basic. To understand the platform, we had to document and catalog
              design patterns from the operating system and the most popular
              apps on the platform.
            </p>
            <p>
              Windows Mobile had also certain technical limitations. The
              platform was not ready for all the advanced features that our
              early market research proved essential. Most notably – the key
              feature of our planned experience – scanner of product bar–codes.
            </p>
            <p>
              To ease the pain of comparing prices offline and online, we wanted
              to build into our mobile app a scanner that would allow users to
              quickly scan bar–codes of physical products and browse through a
              list of prices online. Thanks to a scanner users could quickly
              find what they were looking for without any typing. Our app
              supposed to be used in physical stores, so everything that would
              limit the typing was a much desired accessiblity feature.
            </p>
            <p>
              Bar–code scanner – the key feature of the app had to be removed
              from the Windows Mobile version. We felt disappointed, but also
              accepting of reality. Once the Windows Mobile app progressed into
              development (development has been done with an external partner),
              our team started to work on iOS and Android versions
              simultaneously. Thanks to superb documentation of design languages
              for both platforms, design work was significantly more comfortable
              and faster. Reaching the desired level of an engaging experience
              that felt "native" to both Android and iOS users, took less time
              than R&D and design work for Windows Mobile.
            </p>
            <p>
              Android and iOS didn't have the technical limitations of Windows
              Mobile, and we were able to add the much–desired scanner feature.
              Our vision was finally being fulfilled!
            </p>
            <p>
              First tests, showed that users love the scanner and treat it as
              the main way to interact with the search engine. We've adapted our
              designs accordingly, and the scanner took the central place in our
              interface. We've also decided to change the name of the app to{' '}
              <strong>Nokaut Skaner</strong> to emphasize the core value.
            </p>
            <p>
              After months of work, the app entered the market to much applause.
              However, our job was not done. We've started to analyze the data
              and optimize the experience until we've met all business
              objectives. Couple of iterations later – the app the key
              objectives. The user engagement was high and the app quickly
              became popular. However the impact on revenue was smaller than
              expected. The CPC (cost per click) business model wasn't the right
              fit for the mobile market at that time. Very few stores that
              Nokaut Skaner redirected users to were mobile ready. Our app was
              used as a tool to check prices in the store, but the purchase was
              done at home, in front of a computer.
            </p>
          </>
        }
        objectivesContent={
          <ol>
            <li>
              Creating engaging experience that encourages daily usage of Grupa
              Nokaut ecosystem of services on mobile devices.
            </li>
            <li>
              Educating the market about the cost–saving benefits of shopping
              online.
            </li>
            <li>
              Building mobile apps for Windows Mobile 6.5 (due to a strategic
              partnership with Microsoft), iOS, and Android.
            </li>
          </ol>
        }
        myRoleContent={
          <ul>
            <li>
              Preparing the business concept of the app under the supervision of
              the VP of Product.
            </li>
            <li>
              Managing a project team of one UX designer and one Visual Designer
              (I was the sole designer of the project for Windows Mobile 6.5 and
              iOS).
            </li>
            <li>Leading the market and product research.</li>
            <li>
              Coordinating design – development collaboration with an external
              development partner.
            </li>
            <li>
              Defining Information Architecture of the app and UI for the core
              experiences.
            </li>
            <li>
              Art directing the visual design of the application and marketing
              materials.
            </li>
            <li>
              Reporting progress of the work and clarifying business objectives
              directly with the CEO of Grupa Nokaut.
            </li>
            <li>Leading post–launch research and optimizations.</li>
          </ul>
        }
      >
        <ImageWrapper>
          <img src={NokautSkaner} />
          <Caption variant="dark">
            Nokaut Skaner with a central position of the scanner button
            ("skanuj" means "scan it" in Polish)
          </Caption>
        </ImageWrapper>
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
          <img src={ProcessChartMobile} />
        </ProcessChart>
      </ProcessWrapper>
      <PortfolioResults 
        results={<ul>
          <li>
            The app quickly became popular among Grupa Nokaut users and
            became the top 5 eCommerce mobile app in Central and Eastern
            Europe.
          </li>
          <li>
            The app didn't contribute significantly to the revenue
            generation for the business. The CPC business model didn't fit
            into the mobile experience.
          </li>
        </ul>}
        lessons={
          <ol>
              <li>
                Products built just for the sake of a business partnership are
                challenging to turn into success (Windows Mobile 6.5 app had
                barely any usage).
              </li>
              <li>
                Mobile design requires an extreme focus on the overall context
                of use (we've learned a lot by observing users scanning codes of
                products with their phones in real stores).
              </li>
              <li>
                Working with platform constraints can lead to creative solutions
                (e.g., we've enlarged the primary action button using the
                padding of the tab bar).
              </li>
              <li>
                Not every business model fits into every use case (CPC business
                model didn't fit into mobile use case)
              </li>
              <li>
                Working with external development partners requires clear
                documentation, frequent check-ins, and a great deal of
                relationship building.
              </li>
            </ol>
        }
        tools={
          <ul>
              <li>Axure (wireframing, prototyping)</li>
              <li>Notable (comments on visual design)</li>
              <li>Photoshop (visual design)</li>
              <li>MixPanel Flow</li>
              <li>Google Analytics</li>
            </ul>
        }
        quote="In mobile design – context is king. You can't design a great
        mobile app that will be used 'everywhere' by sitting in front of a
        computer in the office."
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
            Homepage. At that time, Nokaut.pl was attracting 2.5 million users a
            month and the owner of Nokaut.pl – Grupa Nokaut was preparing their
            IPO. Intense project!
          </p>
        }
      />
      <PortfolioTeaser
        variant="gold"
        alignment="left"
        heading="eCommerce Video Portal"
        headingVariant="dark"
        subHeading="2011"
        subHeadingVariant="dark"
        subHeadingBorder
        ctaVariant="button"
        buttonVariant="dark"
        buttonHoveredLabel="gold"
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

export default eCommerceMobileAppDesign;
