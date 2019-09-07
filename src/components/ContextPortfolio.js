import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { HeadingM, TextBody } from './';

const ContextRoleWrapper = styled.section`
  width: 100%;

  h3 {
    margin-bottom: 30px;
  }
`;

const ContextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: var(--max-width-desktop);
  padding: 0 var(--sides-padding-desktop);
  margin: 0 auto;

  @media screen and (max-width: 780px) {
    flex-direction: column;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 115px;
  }
`;

const ContextContent = styled.article`
  width: 65%;
  padding-right: 40px;

  @media screen and (max-width: 780px) {
    width: 100%;
    padding-right: 0px;
  }
`;

const ObjectivesRoleWrapper = styled.aside`
  width: 375px;
  font-size: 16px;
  line-height: 30px;
  font-weight: 100;

  ul,
  ol {
    padding-left: 12px;
  }

  @media screen and (max-width: 780px) {
    width: 100%;
  }
`;

const ObjectivesContent = styled.article`
  margin-bottom: 122px;

  @media screen and (max-width: 780px) {
    margin-bottom: 60px;
  }
`;

const RoleContent = styled.article``;

const ContextPortfolio = props => {
  return (
    <ContextRoleWrapper id={props.id}>
      <ContextWrapper>
        <ContextContent>
          <HeadingM variant="dark">Context</HeadingM>
          <TextBody variant="dark">{props.contextContent}</TextBody>
        </ContextContent>
        <ObjectivesRoleWrapper>
          <ObjectivesContent>
            <HeadingM variant="dark">Objectives</HeadingM>
            {props.objectivesContent}
          </ObjectivesContent>
          <RoleContent>
            <HeadingM variant="dark">My Role</HeadingM>
            {props.myRoleContent}
          </RoleContent>
        </ObjectivesRoleWrapper>
      </ContextWrapper>
        {props.children}
    </ContextRoleWrapper>
  );
};

ContextPortfolio.propTypes = {
  id: PropTypes.string,
  contextContent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.instanceOf(PropTypes.element),
  ]),
  objectivesContent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.instanceOf(PropTypes.element),
  ]),
  myRoleContent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.instanceOf(PropTypes.element),
  ]),
};

export default ContextPortfolio;
