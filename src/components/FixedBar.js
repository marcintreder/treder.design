import styled from 'styled-components';

export default styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  /*position: fixed;*/
  height: 130px;
  width: 100%;
  top: 0px;

  @media (max-width: 849px) {
    padding: 0 var(--sides-padding-mobile);
  }
`;
