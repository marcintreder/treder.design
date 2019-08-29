import { createGlobalStyle } from 'styled-components';

import * as font from '../fonts';
console.log(font);

export default createGlobalStyle`
  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  :root {
    --sides-padding-desktop: 8%;
    --sides-padding-mobile: 5%;
    --max-width-desktop: 1440px;
    --light-color: hsl(0, 0%, 99%);
    --light-color-translucent: hsla(0, 0%, 99%, 0.92);
    --dark-color: hsl(0, 0%, 15%);
    --dark-color-light: hsla(0, 0%, 15%, 0.9);
    --dark-color-lighter: hsla(00, 0%, 15%, 0.7);
    --accent-color: hsl(339, 100%, 55%);
    --gold-color: rgba(231,173,122,1);
    --gray-color: #e9e9e9;
    --font-family: Neue Plak, 'Neue Plak', 'NeuePlak', 'Helvetica', sans-serif;
  }


  body {
    height: 100%;
    width: 100%;
    margin: 0;
    margin-left: auto;
    margin-right: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1;
    background-color: var(--light-color);
    font-family: var(--font-family);
    font-size: 16px;
    color: var(--dark-color);
  }
@font-face {
  font-family: "Neue Plak";
  src: url('${font.NeuePlakBlack}') format("woff2");
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: "Neue Plak";
  src: url('${font.NeuePlakBold}') format("woff2");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: "Neue Plak";
  src: url('${font.NeuePlakSemiBold}') format("woff2");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Neue Plak";
  src: url('${font.NeuePlakRegular}') format("woff2");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Neue Plak";
  src: url('${font.NeuePlakLight}') format("woff2");
  font-weight: 100;
  font-style: normal;
}

  a {
    text-decoration: none;
    -webkit-tap-highlight-color: hsla(0, 0%, 0%, 0);
    -webkit-tap-highlight-color: transparent;
    color: inherit;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    height: 100%;
    width: 100%;
  }

  /* Logo Animation */

  @keyframes hideshow-right {
    0% { 
      transform: translate(-2.70px, 9px);
    }
    80% {
      transform: translate(0px, 9px);
    }
    100% { 
      transform: translate(0px);
    }
  }

  @keyframes hideshow-right-reversed {
    0% { 
      transform: translate(0px);
    }
    25% {
      transform: translate(0px, 9px);
    }
    50% {    
      transform: translate(-2.70px, 9px);
      animation-delay: 4s;
    }
    75% {
      transform: translate(0px, 9px);
    }
    100% { 
      transform: translate(0px);
    }
  }

  @keyframes hideshow-left {
    0% { 
      transform: translate(1.7px, -5.5px);
    }
    80% {
      transform: translate()(0px, -5.5px);
    }
    100% { 
      transform: translate(0px);
    }
  }

  @keyframes hideshow-left-reversed {
    0% { 
      transform: translate(0px);
    }
    25% {
      transform: translate()(0px, -5.5px);
    }
    50% { 
      transform: translate(1.7px, -5.5px);
    }
    75% {
      transform: translate()(0px, -5.5px);
    }
    100% { 
      transform: translate(0px);
    }
  }

  .treder-logo:hover {
    .logo-right {
      animation: hideshow-right-reversed 300ms ease-out;
      
    }
    .logo-left {
      animation: hideshow-left-reversed 300ms ease-out;
    }
  }

  .logo-right {
    /*transform: translate(-2.70px, 9px);*/
    animation: hideshow-right 300ms ease;
    &:hover {
      animation-play-state: running;
    }
  }

  .logo-left {
    /*transform: translate(1.7px, -5.5px);*/
    animation: hideshow-left 300ms ease;
  }
`;
