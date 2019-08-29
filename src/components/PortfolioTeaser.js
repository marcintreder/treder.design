import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { HeadingL, TextBody } from '../components';

const PortfolioTeaserWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 0 var(--sides-padding-desktop);
  background: ${props => (props.variant === 'dark' ? '#000000' : '#ffffff')};

  a {
    font-size: 16px;
    text-decoration: underline;
    color: var(--gold-color);
    &:hover {
      text-decoration: none;
    }
  }

  @media screen and (max-width: 1150px) {
    /*padding: 0 var(--sides-padding-mobile);*/
  }

`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--max-width-desktop);

  @media screen and (max-width: 1050px) {
    justify-content: center;
  }
`;

const SelectBadge = styled.span`
  font-size: 10px;
  color: var(--gold-color);
  font-weight: 400;
  line-height: 14px;
  font-variant: small-caps;
`;

const TextContentWrapper = styled.div`
  width: 60%;
  max-width: 800px;
  padding-top: 80px;
  padding-bottom: 80px;

  h2 {
    margin-top: 0;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }

`;

const CallToAction = styled.span`
    display: block;
    margin-top: 60px;
`

const IllustrationWrapper = styled.div`
  width: 40%;
  margin-left: 20px;
  background-repeat: no-repeat;
  background-image: url(${props => props.illustration});
  background-position: right, center;

  @media screen and (max-width: 1050px) {
      background-image: none;
      width: 0px;
  }
`;

const PortfolioTeaser = props => {
  return (
    <PortfolioTeaserWrapper variant={props.variant}>
      <ContentWrapper>
        <TextContentWrapper>
          <HeadingL variant={props.headingVariant}>{props.heading}</HeadingL>
          <TextBody variant={props.variant === 'dark' ? 'light' : 'dark'}>
            {props.bodyText}
          </TextBody>
          <CallToAction>
            <Link to="/">{props.linkLabel}</Link>
          </CallToAction>
        </TextContentWrapper>
        <IllustrationWrapper
          illustration={props.illustration}
          illustrationPosition={props.illustrationPosition}
        />
      </ContentWrapper>
    </PortfolioTeaserWrapper>
  );
};

PortfolioTeaser.propTypes = {
  variant: PropTypes.oneOf(['dark', 'light']),
  heading: PropTypes.string,
  headingVariant: PropTypes.oneOf(['dark', 'light', 'gold']),
  bodyText: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.instanceOf(Element),
  ]),
  linkLabel: PropTypes.string,
  illustration: PropTypes.string,
  illustrationPosition: PropTypes.oneOf(['margin', 'edge']),
};

export default PortfolioTeaser;
