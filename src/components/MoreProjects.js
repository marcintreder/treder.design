import React from 'react';
import styled from 'styled-components';
import { HeadingL, TextBody} from './';

const MoreProjectsWrapper = styled.section`
    width: 100%;
    `;
const MoreProjectsContent = styled.article`
    width: 100%;
    max-width: var(--max-width-desktop);
    padding: 40px var(--sides-padding-desktop) 80px var(--sides-padding-desktop);

    @media screen and (min-width: 1440px) {
    padding: 40px 115px 80px 115px;
  }

  h2 {
      margin-bottom: 20px;
  }
`;

const MoreProjects = props => {
    return(
        <MoreProjectsWrapper>
            <MoreProjectsContent>
                <HeadingL variant="dark">More Projects?</HeadingL>
                <TextBody variant="dark">Ready for more of stories? Choose the next project below.</TextBody>
            </MoreProjectsContent>
        </MoreProjectsWrapper>
    );
}

export default MoreProjects;

