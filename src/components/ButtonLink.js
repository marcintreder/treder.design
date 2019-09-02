import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const ButtonLink = styled(Link)`
  display: flex;
  width: fit-content;
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
  border: 1px solid
    ${props => (props.variant === 'gold' ? 'var(--gold-color)' : '#000000')};
  background: none;
  color: ${props =>
    props.variant === 'gold' ? 'var(--gold-color)' : '#000000'};
  transition: box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1);

  :hover {
    background-color: ${props =>
      props.variant === 'gold' ? 'var(--gold-color)' : '#000000'};
    color: ${props =>
      props.hoveredLabelColor === 'gold'
        ? 'var(--gold-color)'
        : props.hoveredLabelColor === 'dark'
        ? '#000'
        : '#fff'};
  }

  :active {
    outline: none;
    box-shadow: inset 0 0 1px #000;
  }
`;

ButtonLink.propTypes = {
  variant: PropTypes.oneOf(['gold', 'dark']),
  hoveredLabelColor: PropTypes.oneOf(['gold', 'dark', 'light']),
};

export default ButtonLink;
