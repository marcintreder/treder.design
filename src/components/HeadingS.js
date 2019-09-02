import styled from 'styled-components';

export default styled.h4`
  display: block;
  font-size: 16px;
  font-weight: 900;
  line-height: 24px;
  letter-spacing: 0;
  color: ${props =>
      props.variant === 'gold'
        ? 'var(--gold-color)'
        : props.variant === 'dark'
        ? '#000000'
        : '#ffffff'};
`;
