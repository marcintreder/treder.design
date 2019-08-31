import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Button, HeadingL, TextBody } from '../components';

const PortfolioTeaserWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  background: ${props =>
    props.variant === 'dark'
      ? '#000000'
      : props.variant === 'light'
      ? '#ffffff'
      : 'var(--gold-color)'};

  a {
    font-size: 16px;
    text-decoration: underline;
    color: var(--gold-color);
    &:hover {
      text-decoration: none;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: ${props => (props.alignment === 'left' ? 'row' : 'column')};
  width: 100%;
  max-width: var(--max-width-desktop);
  padding: 0 var(--sides-padding-desktop);

  @media screen and (max-width: 1050px) {
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 115px;
  }
`;

const SubHeading = styled.span`
  display: block;
  width: fit-content;
  padding: 8px 12px 4px 12px;
  margin-bottom: 30px;
  color: ${props =>
    props.subHeadingVariant === 'gold'
      ? 'var(--gold-color)'
      : props.subHeadingVariant === 'dark'
      ? '#000000'
      : '#ffffff'};
  font-size: 16px;
  font-weight: 300;
  line-height: 16px;
  border: ${props =>
    props.subHeadingBorder === undefined
      ? 'none'
      : props.subHeadingVariant === 'gold'
      ? '1px solid var(--gold-color)'
      : props.subHeadingVariant === 'dark'
      ? '1px solid #000000'
      : '1px solid #ffffff'};
`;

const TextContentWrapper = styled.div`
  width: 60%;
  max-width: 800px;
  margin: ${props => (props.alignment === 'center' ? '0 auto' : '0')};
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
  width: fit-content;
  margin-top: 60px;
`;

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
      <ContentWrapper alignment={props.alignment}>
        <TextContentWrapper alignment={props.alignment}>
          {props.subHeading ? (
            <SubHeading
              subHeadingVariant={props.subHeadingVariant}
              subHeadingBorder={props.subHeadingBorder}
            >
              {props.subHeading}
            </SubHeading>
          ) : (
            ''
          )}
          <HeadingL variant={props.headingVariant}>{props.heading}</HeadingL>
          <TextBody variant={props.variant}>{props.bodyText}</TextBody>
          <CallToAction>
            {props.ctaVariant === 'link' ? (
              <Link to="/">{props.ctaLabel}</Link>
            ) : (
              <Button
                variant={props.buttonVariant}
                hoveredLabelColor={props.buttonHoveredLabel}
              >
                {props.ctaLabel}
              </Button>
            )}
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
  variant: PropTypes.oneOf(['dark', 'light', 'gold']),
  alignment: PropTypes.oneOf(['left', 'center']),
  heading: PropTypes.string,
  headingVariant: PropTypes.oneOf(['dark', 'light', 'gold']),
  subHeading: PropTypes.string,
  subHeadingVariant: PropTypes.oneOf(['dark', 'light', 'gold']),
  subHeadingBorder: PropTypes.bool,
  bodyText: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.instanceOf(Element),
  ]),
  ctaVariant: PropTypes.oneOf(['link', 'button']),
  buttonVariant: PropTypes.oneOf(['gold', 'dark']),
  buttonHoveredLabel: PropTypes.oneOf(['gold', 'dark', 'light']),
  ctaLabel: PropTypes.string,
  illustration: PropTypes.string,
  illustrationPosition: PropTypes.oneOf(['margin', 'edge']),
};

export default PortfolioTeaser;
