import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import TrederLogo from '../svg_icons/treder.svg';
import Twitter from '../svg_icons/twitter.svg';
import Linkedin from '../svg_icons/linkedin.svg';
import GitHub from '../svg_icons/github.svg';
import MobileMenu from '../images/mobile_menu.svg';
import CloseMobileMenu from '../images/close_menu.svg';
import { FixedBar } from '../components';

const HeaderWrapper = styled(FixedBar)`
  justify-content: space-between;
  max-width: var(--max-width-desktop);

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;

const Logo = styled.p`
`;

const MenuWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 600px) {
    display: flex;
    visibility: ${props => (props.mobileMenu === true ? 'visible' : 'hidden')};
    position: fixed;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    padding: 80px;
    background-color: black;
  }
`;

const MobileMenuButton = styled.button`
  visibility: hidden;

  @media screen and (max-width: 600px) {
    position: fixed;
    visibility: visible;
    right: var(--sides-padding-desktop);
    width: 48px;
    height: 48px;
    background: black;
    background-image: url(${props => props.mobileMenuState === false ? MobileMenu : CloseMobileMenu});
    background-position: center;
    background-repeat: no-repeat;
    outline: none;
    border: none;
    z-index: 101;

    &:hover, &:active {
      filter: invert(78%) sepia(12%) saturate(1455%) hue-rotate(339deg) brightness(95%) contrast(91%);
    }
  }
`;

const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: 'Neue Plak';
  font-size: 14px;
  color: #ffffff;
  font-weight: 300;
  text-decoration: none solid rgb(255, 255, 255);
  line-height: 26px;
  letter-spacing: 1px;
  font-variant: small-caps;
  text-align: center;

  @media screen and (max-width: 600px) {
    margin-top: 40px;
  }
`;

const MenuItem = styled.li`
  display: inline-block;
  min-width: 60px;
  padding: 14px 0 18px 0;
  &:hover {
    outline: 1px solid var(--gold-color);
    outline-offset: -1px;
    color: var(--gold-color);
  }
  &:active {
    background: var(--gold-color);
    color: black;
  }

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

const MenuLink = styled(Link)`
  padding: 14px 12px 18px 12px;
`;

const SocialMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    justify-content: center;
    margin-top: 60px;
  }
`;

const SocialMenuItem = styled.li`
  display: inline-flex;
  margin-right: 15px;

  @media screen and (max-width: 600px) {
    margin-right: 30px;
  }

  &:first-of-type {
    margin: 0 15px;

    @media screen and (max-width: 600px) {
      margin: 0 30px;
    }
  }
  &:last-of-type {
    margin-right: 0;

    @media screen and (max-width: 600px) {
      margin-right: 30px;
    }
  }
`;

const SocialMenuLink = styled.a`
  fill: #fff;
  &:hover {
    fill: var(--gold-color);
  }
`;

const HeaderLogo = () => {
  const [mobileMenuState, showMenu] = useState(false);

  return (
    <HeaderWrapper>
      <Logo>
        <TrederLogo />
      </Logo>
      <MobileMenuButton
        onClick={() => showMenu(!mobileMenuState)}
        mobileMenuState={mobileMenuState}
      />
      <MenuWrapper mobileMenu={mobileMenuState}>
        <Menu>
          <MenuItem key="about">
            <MenuLink to="/about">about</MenuLink>
          </MenuItem>
          <MenuItem key="work">
            <MenuLink to="/about">work</MenuLink>
          </MenuItem>
          <MenuItem key="blog">
            <MenuLink to="/about">blog</MenuLink>
          </MenuItem>
          <MenuItem key="contact">
            <MenuLink to="/about">contact</MenuLink>
          </MenuItem>
        </Menu>
        <SocialMenu>
          <SocialMenuItem>
            <SocialMenuLink
              href="http://linkedin.com/in/marcintreder"
              target="_blank"
            >
              <Linkedin />
            </SocialMenuLink>
          </SocialMenuItem>
          <SocialMenuItem>
            <SocialMenuLink
              href="http://twitter.com/marcintreder"
              target="_blank"
            >
              <Twitter />
            </SocialMenuLink>
          </SocialMenuItem>
          <SocialMenuItem>
            <SocialMenuLink
              href="http://github.com/marcintreder"
              target="_blank"
            >
              <GitHub />
            </SocialMenuLink>
          </SocialMenuItem>
        </SocialMenu>
      </MenuWrapper>
    </HeaderWrapper>
  );
};

export default HeaderLogo;
