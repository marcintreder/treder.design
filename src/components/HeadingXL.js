import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeadingXL = styled.h1`
  display: block;
  position: relative;
  margin: 0 auto 20px auto;
  font-size: 140px;
  line-height: 130px;
  text-align: left;
  font-weight: 900;
  letter-spacing: -1px;
  color: ${props => props.variant === "dark" ? "#ffffff": "#000000"};
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

HeadingXL.propTypes = {
  variant: PropTypes.oneOf(['dark', 'light']),
}

export default HeadingXL;