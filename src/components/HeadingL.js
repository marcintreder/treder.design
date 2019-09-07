import styled from 'styled-components';

export default styled.h2`
  display: block;
  font-size: 70px;
  font-weight: 900;
  line-height: 76px;
  letter-spacing: 0;
  color: ${props =>
      props.variant === 'gold'
        ? 'var(--gold-color)'
        : props.variant === 'dark'
        ? '#000000'
        : '#ffffff'};

  @media screen and (max-width: 700px) {
    font-size: 50px;
    line-height: 60px;
  }
`;
