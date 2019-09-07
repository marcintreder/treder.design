import styled from 'styled-components';

export default styled.h3`
  display: block;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0;
  color: ${props =>
      props.variant === 'gold'
        ? 'var(--gold-color)'
        : props.variant === 'dark'
        ? '#000000'
        : '#ffffff'};
`;
