import React from 'react';
import styled from 'styled-components';
import { HeadingL } from '../components';

const QuoteSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 600px;
  padding: 0 var(--sides-padding-desktop);
  background-color: var(--gold-color);

  @media screen and (max-width: 820px) {
    padding-bottom: 40px;
  }
`;

const QuoteWrapper = styled.div`
  width: 676px;
  margin: auto;

  @media screen and (max-width: 820px) {
    width: 400px;
    margin: auto;
  }

  @media screen and (max-width: 450px) {
    width: 300px;
    margin: auto;
  }
`;

const QuoteAuthor = styled.span`
  display: block;
  font-size: 20px;
  color: #000000;
  font-weight: 300;
  font-variant: small-caps;
  text-align: right;
  letter-spacing: 1px;
  margin-right: 34px;

  @media screen and (max-width: 330px) {
    margin-right: 0;
    padding-right: 30px;
  }
`;

const Quote = props => {
  return (
    <QuoteSection>
      <QuoteWrapper>
        <HeadingL variant="dark">
          If you can design one thing, you can design everything.
        </HeadingL>
        <QuoteAuthor>– massimo vignelli</QuoteAuthor>
      </QuoteWrapper>
    </QuoteSection>
  );
};

export default Quote;
