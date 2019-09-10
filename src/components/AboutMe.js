import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { HeadingL, TextBody, TrederImage } from '../components';

const AboutMeSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: var(--max-width-desktop);
  margin: 20px auto 100px auto;

  a {
    font-size: 16px;
    text-decoration: underline;
    color: var(--gold-dark-color);
    &:hover {
      text-decoration: none;
    }
  }

  @media screen and (max-width: 700px) {
    margin: 20px auto 100px auto;
  }
`;

const AboutMeWrapper = styled.div`
  padding: 0 var(--sides-padding-desktop);

  @media screen and (min-width: 1440px) {
    padding: 0 115px;
  }
`;

const HeaderWrapper = styled.div`
  width: fit-content;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 620px) {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
  }
`;

const TextWrapper = styled.div`
  width: 55%;

  @media screen and (max-width: 620px) {
    width: 100%;
  }
`;

const AboutMe = props => {
  return (
    <AboutMeSection>
      <AboutMeWrapper>
        <HeaderWrapper>
          <HeadingL variant="dark">
            Creating great products means everything to me.
          </HeadingL>
        </HeaderWrapper>
        <ContentWrapper>
          <TextWrapper>
            <TextBody variant="dark">
              <p>
                I'm a builder. I love building great products and assembling
                teams able to cross the chasm between good and great. It's my
                source of love, energy and fulfillment. It's everything.
              </p>
              <p>
                Things weren't always that clear. Athough I started designing
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
            <Link to="/about-marcin-treder">Learn More About Me</Link>
          </TextWrapper>
            <TrederImage />
        </ContentWrapper>
      </AboutMeWrapper>
    </AboutMeSection>
  );
};

export default AboutMe;
