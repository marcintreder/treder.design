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
  PortfolioHeaderWrapper,
  PortfolioResults,
  PortfolioImageWrapper,
  Layout,
  TextBody,
} from '../../components';

/* Illustrations */
import Logo_Sketches from '../../images/logos.svg';
import Conversion from '../../images/conversion.svg';
import Grid from '../../images/grid.svg';
import New_Editor from '../../images/new_editor.svg';
import Adele from '../../images/adele.svg';
import Mobile from '../../images/mobile.svg';
import Video from '../../images/video.svg';
/* Illustrations used in the main section */
import Homepage from '../../images/small_homepage.svg';
import ProcessChartHomepage from '../../images/process_homepage.svg';
import NokautHomepageHead from '../../images/nokaut_homepage_head.png';
import NokautHomepage from '../../images/nokaut_homepage.png';

/* Page specific styles */
const ImageWrapper = styled(PortfolioImageWrapper)`
  margin: 80px auto;

  img {
    width: 70%;
    height: auto;
    margin: 0 auto;
  }

  figcaption {
    margin-top: 40px;
    text-align: center;
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

const AdPlaceImage = styled.figure`
  width: 30%;
  margin-top: 85px;
  img {
    max-width: 400px;
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    margin-top: 40px;
    margin-bottom: 40px;
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
              In 2011 I led the process of the redesign of Nokaut.pl Homepage.
              At that time, Nokaut.pl was attracting 2.5 million users a month
              and the owner of Nokaut.pl – Grupa Nokaut was preparing their IPO.
              An intense project!
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
              <strong>Grupa Nokaut</strong>. Hundreds of difficult projects with
              lots of external and internal constraints shaped me as a designer
              and a product leader.
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
              The one that was both memorable and highly interesting was the
              redesign of Nokaut.pl homepage in 2011.
            </p>
            <p>
              In 2011 Nokaut.pl was attracting over{' '}
              <strong>2.5 million users</strong> every month (grew up to 5
              million in early 2012!) and was the main engine of the growth that
              led to <strong>Grupa Nokaut IPO in 2012</strong>. Taking that at
              that time Poland had just over 20 million Internet users–the
              numbers generated by Nokaut.pl were amazing.
            </p>
            <p>
              Despite the strong business results, Nokaut.pl never managed to
              establish a solid brand. Majority of users entered Nokaut.pl
              through product pages well–positioned in Google Search.
            </p>
            <p>
              With the approaching IPO Grupa Nokaut wanted to change this flaw
              in the business model. The CEO decided to ask my team to redesign
              the homepage and turn it from an SEO powerhouse to a destination
              page with value on its own, but... without affecting negatively
              any of the SEO powers.
            </p>
          </>
        }
        objectivesContent={
          <ol>
            <li>
              Turning Nokaut.pl homepage into a destination page that users
              would like to visit.
            </li>
            <li>
              Keeping all the SEO features intact but turning them into a
              valuable part of overall user experience.
            </li>
            <li>Educating users about the value of Nokaut.pl.</li>
            <li>
              Finding new premium ad locations for Nokaut.pl network of ad
              partners.
            </li>
          </ol>
        }
        myRoleContent={
          <ul>
            <li>Leading the research and analysis.</li>
            <li>Creating a business case and product plan for the redesign.</li>
            <li>Leading the redesign team (1 designer, 2 developers)</li>
            <li>Wireframing and prototyping key experiences</li>
            <li>Planning and negotiating slots for ads.</li>
            <li>Presenting plan and progress of the work to the CEO.</li>
            <li>
              Measuring performance and optimizing the design with a series of
              multivariable Split Tests and usability studies.
            </li>
          </ul>
        }
      >
        <ImageWrapper>
          <img
            src={NokautHomepage}
            alt="Nokaut.pl homepage after the redesign in 2011"
          />
          <Caption variant="dark">
            Nokaut.pl Homepage after the 2011 redesign.
          </Caption>
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
                took pride in being data–driven yet creative.
              </p>{' '}
              <p>
                The homepage redesign was a special project with very high
                stakes and CEO requested me to be hands–on. I had to design the
                key experiences myself. I'm not fond of micromanagement, but I
                understood that with the upcoming IPO, changes on the homepage
                are going to be highly scrutinized by media and analysts.
              </p>
            </TextBody>
          </ProcessDescription>
          <AdPlaceImage>
            <img src={NokautHomepageHead} alt="Header of Nokaut.pl homepage" />
            <Caption variant="dark">
              Negotiating ad placements and presenting the value of Nokaut.pl
              were important for key stakeholders. On the design above you can
              see multiple signals of Nokaut.pl strength (counter of users who
              saved money with Nokaut.pl, prominent mention that Nokaut.pl
              stores 10 million offers from nearly 4000 stores) and a new
              premium ad space.
            </Caption>
          </AdPlaceImage>
        </ProcessContent>
        <ProcessChart>
          <img
            src={ProcessChartHomepage}
            alt="Chart showing the process used in the project"
          />
        </ProcessChart>
      </ProcessWrapper>
      <PortfolioResults
        results={
          <ul>
            <li>The homepage started to attract more users.</li>
            <li>
              During the research phase, we've discovered a need to compare
              multiple different products without losing the context of the
              current search query. A feature built as a result of this study
              significantly increased conversion rate.
            </li>
            <li>New ad slots increased ad revenue.</li>
            <li>
              The CEO was happy with the new homepage and the positive media
              reception. I was designated to comment on the redesign to media
              outlets.
            </li>
          </ul>
        }
        lessons={
          <ol>
            <li>
              The redesign brought a smaller revenue change than a feature
              inspired by the research that my team did at the same time. There
              was a solid business case for changing the homepage, but it only
              worked within the given priorities (IPO). An investment in more
              user research and product changes could lead to significantly
              better business results.
            </li>
            <li>
              Trust of the key stakeholders means everything. I was lucky to be
              granted a high degree of trust. Thanks to that the design team had
              more freedom to do the best work of their lives.
            </li>
          </ol>
        }
        tools={
          <ul>
            <li>Omnigraffle (wireframing)</li>
            <li>Axure (prototyping)</li>
            <li>Notable (comments on visual design)</li>
            <li>Photoshop (visual design)</li>
            <li>Proprietary multiveriable split testing tool</li>
            <li>Google Analytics</li>
          </ul>
        }
        quote="Design leadership requires empathy towards users as well as
        towards the stakeholders. Successful negotiations with key
        executives can lead to outstanding results."
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
        variant="light"
        alignment="left"
        heading="Paper Prototyping Redesigned"
        headingVariant="dark"
        subHeading="2010"
        subHeadingVariant="dark"
        subHeadingBorder
        ctaVariant="button"
        buttonVariant="dark"
        buttonHoveredLabel="light"
        ctaLabel="read this story"
        destination="/portfolio/paper-prototyping-redesigned/"
        illustration={Grid}
        illustrationPosition="margin"
        bodyText={<p>The story of the notepad that changed my life</p>}
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
        destination="/portfolio/ecommerce-mobile-app-design/"
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
        destination="/portfolio/ecommerce-video-portal/"
        illustration={Video}
        illustrationPosition="margin"
        bodyText={
          <p>
            For over two years I worked in the R&D Group at Grupa Nokaut. We
            were tasked with coming up with new product ideas that address the
            most critical strategic problems of the business. One of the
            projects that we realized in 2011 was Nokaut.tv – the eCommerce
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
        ctaLabel="read this story"
        destination="/portfolio/open-source-adventure/"
        illustration={Adele}
        illustrationPosition="margin"
        bodyText={
          <>
            <p>
              Since 2012 I'm operating as a full–time CEO of a growing startup –
              UXPin (over 50 employees, profitable). Despite that, I've never
              stopped being a designer, coder, and a product person. To relax
              and contribute to UXPin and the overall design and engineering
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

export default eCommerceHomepageDesign;
