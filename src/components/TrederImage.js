import React from 'react';
import styled from 'styled-components';
import Treder from '../images/treder.png';

const TrederImageWrapper = styled.div`
  flex-shrink: 0;
  width: 373px;
  height: 373px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 20px 20px 0 var(--gold-color);

  @media screen and (max-width: 890px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (max-width: 760px) {
    width: 250px;
    height: 250px;
  }

  @media screen and (max-width: 650px) {
    width: 180px;
    height: 180px;
    box-shadow: 10px 10px 0 var(--gold-color);
  }

  @media screen and (max-width: 620px) {
    margin-bottom: 40px;
  }
`;

const TrederImage = props => {
  return (
    <TrederImageWrapper>
      <img src={Treder} alt="Marcin Treder" />
    </TrederImageWrapper>
  );
};

export default TrederImage;
