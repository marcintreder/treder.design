import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Logo from '../images/treder2.svg';

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  margin: 60px auto 40px auto;
  font-size: 16px;
  font-weight: 100;

  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 30px auto 20px auto;
  }
`;

const FooterLogo = styled.figure`
  width: 44px;
  height: 73px;
  margin-top: 40px;
  background: url(${Logo});

  @media screen and (max-width: 700px) {
    margin-top: 20px;
  }
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 600px;
  list-style: none;

  @media screen and (max-width: 700px) {
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    padding: 0;
  }
`;
const LinkListItem = styled.li`
  display: inline-block;

  &:hover {
    a {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 700px) {
    margin-bottom: 20px;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <Container>
      <LinkList>
        <LinkListItem>
          <Link to="/about-marcin-treder">About Me</Link>
        </LinkListItem>
        <LinkListItem>
          <Link to="/portfolio">Portfolio</Link>
        </LinkListItem>
        <LinkListItem>
          <Link to="/blog">Blog</Link>
        </LinkListItem>
        <LinkListItem>
          <Link to="/contact">Contact</Link>
        </LinkListItem>
      </LinkList>
      <FooterLogo />
    </Container>
  );
};

export default Footer;
