import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import TrederLogo from '../svg_icons/treder.svg';
import Twitter from '../svg_icons/twitter.svg';
import Linkedin from '../svg_icons/linkedin.svg';
import GitHub from '../svg_icons/github.svg';
import MobileMenuIcon from '../svg_icons/mobile_menu.svg';
import CloseMobileMenuIcon from '../svg_icons/close_menu.svg';
import { FixedBar, SEO } from '../components';

const NavigationWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 130px;
  background-color: ${props => (props.variant === 'dark' ? '#000000' : '#ffffff')};

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;

const NavElement = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: var(--max-width-desktop);
  padding: 0 var(--sides-padding-desktop);

  @media screen and (min-width: 1440px) {
    padding: 0 115px;
  }
`;

const Logo = styled.a``;

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
    background-color: #000000;
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
    padding-top: 5px;
    background: ${props => props.variant === "dark" ? "#000000" : props.mobileMenuState ? "#000000" : "#ffffff"};
    outline: none;
    border: none;
    fill: ${props => props.variant === "dark" ? "#ffffff" : props.mobileMenuState ? "#ffffff" : "#000000" };
    z-index: 101;

    &:hover,
    &:active {
        fill: var(--gold-color);

    }
  }
`;

const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-size: 14px;
  color: ${props => (props.variant === 'dark' ? '#ffffff' : '#000000')};
  font-weight: 300;
  line-height: 26px;
  letter-spacing: 1px;
  font-variant: small-caps;
  text-align: center;

  li {
    :nth-child(${props => props.activeLink}) {
      background: var(--gold-color);
      color: ${props => (props.variant === 'dark' ? '#000000' : '#ffffff')};
    }
  }

  @media screen and (max-width: 600px) {
    margin-top: 40px;
  }
`;

const MenuItem = styled.li`
  display: inline-block;
  min-width: 60px;
  /* padding: 14px 0 18px 0; */
  &:hover {
    outline: 1px solid var(--gold-color);
    outline-offset: -1px;
    color: var(--gold-color);
  }
  &:active {
    background: var(--gold-color);
    color: ${props => props.variant === "dark" ? "#000000" : "#ffffff"};
  }

  @media screen and (max-width: 600px) {
    display: block;
    color: #ffffff;
  }
`;

const MenuLink = styled(Link)`
  display: block;
  padding: 14px 12px 18px 12px;
`;

const SocialMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

  li > a > svg {
    fill: ${props => (props.variant === 'dark' ? '#ffffff' : '#000000')};
    &:hover {
      fill: var(--gold-color);
    }
  }

  @media screen and (max-width: 600px) {
    justify-content: center;
    margin-top: 60px;
    li > a > svg {
      fill: #ffffff;
    }
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

const SocialMenuLink = styled.a``;

const Navigation = props => {
  const [mobileMenuState, showMenu] = useState(false);
  return (
    <NavigationWrapper variant={props.variant}>
        <NavElement>
        <SEO title={props.seoTitle} />
        <Logo href="/">
          <TrederLogo />
        </Logo>
        <MobileMenuButton
          onClick={() => showMenu(!mobileMenuState)}
          mobileMenuState={mobileMenuState}
          variant={props.variant}>
            {
               !mobileMenuState ? <MobileMenuIcon /> : <CloseMobileMenuIcon />
            }
        </MobileMenuButton>
        <MenuWrapper mobileMenu={mobileMenuState}>
          <Menu variant={props.variant} activeLink={props.activeLink}>
            <MenuItem key="about">
              <MenuLink to="/about-marcin-treder">about</MenuLink>
            </MenuItem>
            <MenuItem key="work">
              <MenuLink to="/portfolio">portfolio</MenuLink>
            </MenuItem>
            <MenuItem key="blog">
              <MenuLink to="/blog">blog</MenuLink>
            </MenuItem>
            <MenuItem key="contact">
              <MenuLink to="/contact">contact</MenuLink>
            </MenuItem>
          </Menu>
          <SocialMenu variant={props.variant}>
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
        </NavElement>
    </NavigationWrapper>
  );
};

Navigation.propTypes = {
  variant: PropTypes.oneOf(['light', 'dark']),
  activeLink: PropTypes.number,
  seoTitle: PropTypes.string,
};

export default Navigation;
