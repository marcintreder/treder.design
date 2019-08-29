import styled from 'styled-components';

export default styled.div`
  display: block;
  font-size: 16px;
  line-height: 30px;
  font-weight: 100;

  color: ${props => props.variant === "dark" ? "#000000" : "#ffffff"};

  p {
    margin-bottom: 32px;
  }

  @media (max-width: 849px) {
    margin: 0 0 5vh 0;
  }
`;
