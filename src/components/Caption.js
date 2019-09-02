import styled from 'styled-components';

export default styled.figcaption`
  display: block;
  font-size: 12px;
  font-weight: 100;
  color: ${props =>
      props.variant === 'gold'
        ? 'var(--gold-color)'
        : props.variant === 'dark'
        ? '#000000'
        : '#ffffff'};
`;