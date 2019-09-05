import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { HeadingM, MiniQuote } from './';
import GridBackground from '../images/grid_background.svg';

const ResultsWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #000000;
  margin: 0 auto;

  font-size: 16px;
  font-weight: 100;
  line-height: 30px;
  color: #ffffff;

  ul,
  ol {
    padding-left: 15px;
  }
`;

const ResultsContent = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: var(--max-width-desktop);
  padding: 80px var(--sides-padding-desktop);

  background-image: url(${GridBackground});
  background-repeat: no-repeat;
  background-position: right 115px center;

  @media screen and (min-width: 1440px) {
    padding: 80px 115px;
  }

  @media screen and (max-width: 1440px) {
    background-position: right 11% center;
  }

  @media screen and (max-width: 1300px) {
    background-position: right 11.5% center;
  }

  @media screen and (max-width: 600px) {
    padding-top: 40px;
    background-position: center center;
  }
`;

const ResultsList = styled.div`
  width: 60%;
  padding-right: 80px;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding-right: 0;
  }
`;

const LessonsWrapper = styled.div`
  width: 60%;
  margin-top: 40px;
  padding-right: 80px;
  @media screen and (max-width: 600px) {
    width: 100%;
    padding-right: 0;
    margin-top: 20px;
  }
`;

const MiniQuoteWrapper = styled.div`
  width: 40%;

  q {
    display: block;
    margin-top: 75px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    margin-bottom: 20px;

    q {
      display: block;
      margin-top: 40px;
    }
  }
`;

const ToolsWrapper = styled.article`
  margin-top: 40px;

  @media screen and (max-width: 600px) {
    margin-top: 20px;
  }
`;

const PortfolioResults = props => {
  return (
    <ResultsWrapper>
      <ResultsContent>
        <ResultsList>
          <HeadingM>Results</HeadingM>
          {props.results}
        </ResultsList>
        <MiniQuoteWrapper>
          <MiniQuote>
            {props.quote}
          </MiniQuote>
        </MiniQuoteWrapper>
        <LessonsWrapper>
          <HeadingM>Lessons Learned</HeadingM>
         {props.lessons}
        </LessonsWrapper>
        <ToolsWrapper>
          <HeadingM>Tools</HeadingM>
          {props.tools}
        </ToolsWrapper>
      </ResultsContent>
    </ResultsWrapper>
  );
};

PortfolioResults.propTypes = {
  results: PropTypes.oneOfType([PropTypes.node, PropTypes.instanceOf(Element)]),
  lessons: PropTypes.oneOfType([PropTypes.node, PropTypes.instanceOf(Element)]),
  tools: PropTypes.oneOfType([PropTypes.node, PropTypes.instanceOf(Element)]),
  quote: PropTypes.string,
};

export default PortfolioResults;
