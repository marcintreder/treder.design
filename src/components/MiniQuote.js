import styled from 'styled-components';

export default styled.q`
    font-size: 30px;
    color: ${props => props.variant === "dark" ? "#000000": "#FFFFFF"};
    font-weight: 900;
    line-height: 32px;
    letter-spacing: -1;
`;