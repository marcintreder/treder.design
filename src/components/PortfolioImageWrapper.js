import styled from 'styled-components';

export default styled.figure`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0 var(--sides-padding-desktop);
margin: 20px auto;

img {
  width: 100%;
  height: auto;
  margin: 0 auto;
}

figcaption {
  margin-top: 40px;
  text-align: center;
}

@media screen and (min-width: 1440px) {
  width: 1440px;
}

@media screen and (max-width: 600px) {
  margin: 40px 0;
}
`;