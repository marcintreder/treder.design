import styled from 'styled-components';

export default styled.section`
  background-color: ${props => props.variant === "light" ? "#FFFFFF" : "#000000"};

  div[class*='PortfolioTeaser__TextContentWrapper'] {
    padding-top: 0;
  }

  section[class*='PortfolioTeaser__PortfolioTeaserWrapper'] {
    margin-top: 40px;
  }

  @media screen and (max-width: 1050px) {
    div[class*='PortfolioTeaser__TextContentWrapper'] {
      width: 100%;
      max-width: 100%;
    }
  }
`;
