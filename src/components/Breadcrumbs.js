import React from 'react';
import styled from 'styled-components';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';

const BreadcrumbWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--max-width-desktop);
  margin: 0 auto;
  padding: 0 var(--sides-padding-desktop);

  div > div > span {
    font-size: 10px !important;
    margin: 0 5px;
  }

  [href] {
    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 600px) {
    visibility: hidden;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 115px;
  }
`;

const Breadcrumbs = props => (
  <BreadcrumbWrapper>
    <Breadcrumb
      location={props.location}
      crumbLabel={props.label}
      crumbActiveStyle={{ color: '#7e4717' }}
      style={{
        fontSize: '14px',
        fontVariant: 'small-caps',
        letterSpacing: '1px',
      }}
    />
  </BreadcrumbWrapper>
);

export default Breadcrumbs;
