import React from 'react';
import styled from 'styled-components';

import {
  Breadcrumbs,
  Navigation,
  HeadingM,
  HeadingXL,
  Layout,
  TextBody,
  TrederImage,
} from '../components';

const AboutMeWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 var(--sides-padding-desktop);
  margin: 80px auto 50px auto;
  max-width: var(--max-width-desktop);

  ${HeadingXL} {
    display: block;
    width: fit-content;
    margin-left: 0;
  }

  article + div {
    margin-top: 20px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 115px;
  }

  @media screen and (max-width: 1270px) {
    article + div {
      width: 260px;
      height: 260px;
      margin-bottom: 100px;
    }
  }

  @media screen and (max-width: 1140px) {
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 20px;

    article + div {
      width: 140px;
      height: 140px;
      margin: 0 0 80px 0;
    }
  }

  @media screen and (max-width: 600px) {
    margin-top: 20px;
    margin-bottom: 0;

    article {
      margin-bottom: 0;

      h1 {
        margin-bottom: 0;
      }
    }

    article + div {
      margin: 0 0 40px 0;
    }

    div[class*='TrederImage'] {
      margin-bottom: 10px;
    }
  }
`;

const DescriptionWrapper = styled.article`
  display: flex;
  flex-direction: column;

  ${TextBody} {
    width: 660px;

    @media screen and (max-width: 1140px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 1140px) {
    margin-bottom: 40px;
  }
`;

const DetailsWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 20px auto;
  background-color: #000000;
`;

const DetailsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: var(--max-width-desktop);
  padding: 60px var(--sides-padding-desktop);

  ${HeadingM} {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 60px 115px;
  }

  @media screen and (max-width: 600px) {
    padding-top: 30px;
  }
`;

const Background = styled.article`
  width: 695px;
  margin-right: 80px;
`;

const Values = styled.article`
  width: 695px;

  ${TextBody} {
    margin-bottom: 40px;
  }
`;

const ValuesList = styled.ol`
  margin-left: 0;
  padding-left: 0;
  counter-reset: my-counter;
  list-style: none;
`;

const ValueItem = styled.li`
  counter-increment: my-counter;
  position: relative;

  &::before {
    content: counter(my-counter);
    position: absolute;
    border: 1px solid var(--gold-color);
    width: 22px;
    height: 22px;
    font-size: 12px;
    line-height: 24px;
    color: var(--gold-color);
    text-align: center;
  }
`;

const ValueHeader = styled.h4`
  margin-left: 34px;

  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  color: var(--gold-color);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const GoodAt = styled.article``;

const GoodAtList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 400px;
  margin-top: 0;
  padding-left: 0;
  list-style: none;

  @media screen and (max-width: 450px) {
    width: 300px;
  }
`;

const GoodAtItem = styled.li`
  display: block;
  width: fit-content;
  height: 40px;
  margin: 18px 18px 0 0;
  padding: 11px;
  border: 1px solid
    ${props => (props.level === 'gold' ? 'var(--gold-color)' : '#d9d9d9')};
  color: ${props => (props.level === 'gold' ? 'var(--gold-color)' : '#d9d9d9')};
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;

  &:nth-child(-n + 2) {
    margin-top: 0;
  }

  @media screen and (max-width: 450px) {
    &:nth-child(-n + 2) {
      margin-top: 18px;
    }
  }
`;

const About = ({ location, data }) => {
  return (
    <>
      <Navigation seoTitle="About" variant="light" activeLink={1} />
      <Layout>
        <AboutMeWrapper>
          <DescriptionWrapper>
            <HeadingXL variant="dark">About me.</HeadingXL>
            <TextBody variant="dark">
              <p>
                I'm a builder. I love building great products and assembling
                teams able to cross the chasm between good and great. It's my
                source of love, energy and fulfillment. It's everything.
              </p>
              <p>
                Things weren't always that clear. Although I started designing
                and coding as soon as I got my first PC (at 14 years old – times
                were different), I haven't started really considering myself a
                "designer" until I turned 21.
              </p>
              <p>
                In between, I thought that I'm going to become a musician,
                philosopher, writer... but I had to fry chickens, sell icream
                and shoes to make a living.
              </p>
              <p>
                I'm grateful that I found my path and I'm passionate about
                helping people found theirs.
              </p>
            </TextBody>
          </DescriptionWrapper>
          <TrederImage />
        </AboutMeWrapper>
        <Breadcrumbs location={location} label="about" />
        <DetailsWrapper>
          <DetailsContent>
            <Background>
              <HeadingM>Background</HeadingM>
              <TextBody variant="light">
                <p>
                  For the past 12 years I've been working in digital design and
                  product management. I've started as a UX designer and I
                  quickly progressed to various roles in design and product
                  leadership.
                </p>
                <p>
                  Back in 2010 I co-founded UXPin – one of the world leading
                  design and prototyping tools. Today UXPin is proudly
                  profitable with more than 50 great teammates aboard. I
                  continue to work on UXPin's product and design strategies, as
                  well as investor–relationships, and top executive coaching.
                </p>
                <p>
                  I'm a frequent public speaker (over 50 talks in the last 5
                  years, 3 continents covered!) and writer. I'm deeply
                  passionate about the intersection of design and technology.
                  Design is my profession but coding is my hobby.
                </p>
              </TextBody>
            </Background>
            <GoodAt>
              <HeadingM>What am I good at?</HeadingM>
              <GoodAtList>
                <GoodAtItem level="gold">design leadership</GoodAtItem>
                <GoodAtItem level="gold">product leadership</GoodAtItem>
                <GoodAtItem level="gold">design strategy</GoodAtItem>
                <GoodAtItem level="gold">product strategy</GoodAtItem>
                <GoodAtItem level="gold">ux design</GoodAtItem>
                <GoodAtItem level="gold">ux research</GoodAtItem>
                <GoodAtItem level="gold">a/b tests</GoodAtItem>
                <GoodAtItem level="gold">product innovation</GoodAtItem>
                <GoodAtItem level="gold">product mgmt</GoodAtItem>
                <GoodAtItem level="silver">grahic design</GoodAtItem>
                <GoodAtItem level="silver">branding</GoodAtItem>
                <GoodAtItem level="silver">html/css</GoodAtItem>
                <GoodAtItem level="silver">javascript</GoodAtItem>
              </GoodAtList>
            </GoodAt>
            <Values>
              <HeadingM>Values</HeadingM>
              <TextBody variant="light">
                Over the years I understood that self-awareness is one of the keys
                to being a good leader and a good person. On my quest to
                understand myself I identified the following core values:
              </TextBody>
              <ValuesList>
                <ValueItem>
                  <ValueHeader>discipline</ValueHeader>
                  <TextBody variant="light">
                    I take a great pride in being highly disciplined. If I
                    commit to a task, there's nothing that can stop me
                    from completing it. Whether we're talking about work, sports
                    or hobbies – I'm acting with total commitment and
                    unbreakable discipline.
                  </TextBody>
                </ValueItem>
                <ValueItem>
                  <ValueHeader>mastery</ValueHeader>
                  <TextBody variant="light">
                    I enjoy learning and bringing new skills to the level of
                    mastery. It's important to me to gradually, day by day,
                    become better at what matters to me. I treat my work and my
                    passions as a never ending quest to become perfect.
                  </TextBody>
                </ValueItem>
                <ValueItem>
                  <ValueHeader>loyalty</ValueHeader>
                  <TextBody variant="light">
                    I remain loyal to people and I highly value loyalty. Life is
                    easier when faced together with a group of reliable people.
                    I always aspire to be the person that others can rely on.{' '}
                  </TextBody>
                </ValueItem>
              </ValuesList>
            </Values>
          </DetailsContent>
        </DetailsWrapper>
      </Layout>
    </>
  );
};

export default About;