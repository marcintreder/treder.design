import styled from 'styled-components';

export default styled.h1`
  display: block;
  position: relative;
  margin: 0 auto 20px auto;
  font-size: 140px;
  line-height: 150px;
  text-align: left;
  font-weight: 900;
  letter-spacing: -1px;
  color: #fff;
  z-index: 1;

  @media screen and (max-width: 700px) {
    font-size: 120px;
    line-height: 130px;
  }

  @media screen and (max-width: 600px) {
    font-size: 100px;
    line-height: 110px;
  }

  @media screen and (max-width: 500px) {
    font-size: 80px;
    line-height: 90px;
  }

  @media screen and (max-width: 400px) {
    font-size: 60px;
    line-height: 70px;
  }
`;
