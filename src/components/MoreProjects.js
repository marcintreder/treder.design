import React from 'react';
import styled from 'styled-components';
import { HeadingL, TextBody } from './';

import Grid from '../images/grid.svg';

const MoreProjectsWrapper = styled.section`
  width: 100%;
`;

const MoreProjectsContent = styled.article`
  width: 100%;
  max-width: var(--max-width-desktop);
  margin: 0 auto;
  padding: 40px var(--sides-padding-desktop) 80px var(--sides-padding-desktop);
  background-image: url(${Grid});
  background-position: right var(--sides-padding-desktop) center;
  background-repeat: no-repeat;

  @media screen and (min-width: 1440px) {
    padding: 40px 115px 80px 115px;
    background-position: right 115px center;
  }

  @media screen and (max-width: 1440px) {
    background-position: right 11% center;
  }

  @media screen and (max-width: 1300px) {
    background-position: right 11.5% center;
  }

  @media screen and (max-width: 1110px) {
    background-image: none;

    width: fit-content;

    h2 {
      text-align: center;
    }
  }

  h2 {
    margin-bottom: 20px;
  }
`;

const MoreProjects = props => {
  return (
    <MoreProjectsWrapper>
      <MoreProjectsContent>
        <HeadingL variant="dark">More Projects?</HeadingL>
        <TextBody variant="dark">
          Ready for more of stories? Choose the next project below.
        </TextBody>
      </MoreProjectsContent>
    </MoreProjectsWrapper>
  );
};

export default MoreProjects;
