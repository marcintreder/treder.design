import styled from 'styled-components';

export default styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  margin: 0 auto 0 auto;
  padding: 15px 22px;
  font-size: 12px;
  font-weight: 400;
  font-variant: small-caps;
  letter-spacing: 1px;
  border: 1px solid var(--gold-color);
  background: none;
  color: var(--gold-color);
  transition: box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1);

  :hover {
    background-color: var(--gold-color);
    color: black;
  }

  :active {
    outline: none;
    box-shadow: inset 0 0 1px #000;
  }
`;
