import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextBody = styled.div`
  display: block;
  font-size: 16px;
  line-height: 30px;
  font-weight: 100;

  color: ${props => props.variant === "light" ? "#ffffff" : "#000000"};

  p {
    margin-bottom: 32px;
  }
`;

TextBody.propTypes = {
  variant: PropTypes.oneOf(['dark', 'light']),
}

export default TextBody;