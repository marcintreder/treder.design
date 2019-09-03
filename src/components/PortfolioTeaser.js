import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { ButtonLink, HeadingL, TextBody } from '../components';

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
  padding-bottom: ${props => (props.alignment === 'left' ? '80px' : '20px')};

  h2 {
    margin-top: 0;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const CallToAction = styled.span`
  width: fit-content;
  margin-top: 60px;

  ${ButtonLink} {
    margin-left: ${props => (props.alignment === 'left' ? '0px' : 'auto')};
  }
`;

const IllustrationWrapper = styled.div`
  width: ${props => (props.alignment === 'left' ? '40%' : '100%')};
  height: ${props => (props.alignment === 'left' ? 'inherit' : '380px')};
  margin-left: ${props => (props.alignment === 'left' ? '20px' : '0px')};
  margin-bottom: ${props => (props.alignment === 'left' ? '0px' : '200px')};
  background-repeat: no-repeat;
  background-image: url(${props => props.illustration});
  background-position: ${props =>
      props.alignment === 'left' ? 'right' : 'center'},
    center;

  ${ButtonLink} {
    margin: 450px auto 0 auto;
  }

  @media screen and (max-width: 1050px) {
    background-image: none;
    width: ${props => (props.alignment === 'left' ? '0px' : '60%')};
    height: inherit;
    margin: ${props =>
      props.alignment === 'left' ? '0 0 0 20px' : '0 auto 80px auto'};

    ${ButtonLink} {
      margin: 0;
    }
  }
`;

const PortfolioTeaser = props => {
  return (
    <PortfolioTeaserWrapper variant={props.variant} id={props.id}>
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
          <TextBody variant={props.variant === 'dark' ? 'light' : 'dark'}>
            {props.bodyText}
          </TextBody>
          {props.alignment === 'left' ? (
            <CallToAction alignment={props.alignment}>
              {props.ctaVariant === 'link' ? (
                <Link to="/">{props.ctaLabel}</Link>
              ) : (
                <ButtonLink
                  to={props.destination}
                  variant={props.buttonVariant}
                  hoveredLabelColor={props.buttonHoveredLabel}
                >
                  {props.ctaLabel}
                </ButtonLink>
              )}
            </CallToAction>
          ) : (
            ''
          )}
        </TextContentWrapper>
        <IllustrationWrapper
          illustration={props.illustration}
          illustrationPosition={props.illustrationPosition}
          alignment={props.alignment}
        >
          {props.alignment === 'center' ? (
            <CallToAction>
              {props.ctaVariant === 'link' ? (
                <Link to="/">{props.ctaLabel}</Link>
              ) : (
                <ButtonLink
                  to={props.destination}
                  variant={props.buttonVariant}
                  hoveredLabelColor={props.buttonHoveredLabel}
                >
                  {props.ctaLabel}
                </ButtonLink>
              )}
            </CallToAction>
          ) : (
            ''
          )}
        </IllustrationWrapper>
      </ContentWrapper>
    </PortfolioTeaserWrapper>
  );
};

PortfolioTeaser.propTypes = {
  id: PropTypes.string,
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
