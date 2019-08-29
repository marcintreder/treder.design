import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <link rel="stylesheet" type="text/css" href="TrederDesignNeuePlak.css" />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

const MyFontsLicense = `<!--
/**
 * @license
 * MyFonts Webfont Build ID 3800738, 2019-08-25T14:08:46-0400
 * 
 * The fonts listed in this notice are subject to the End User License
 * Agreement(s) entered into by the website owner. All other parties are 
 * explicitly restricted from using the Licensed Webfonts(s).
 * 
 * You may obtain a valid license at the URLs below.
 * 
 * Webfont: NeuePlakText-Italic by Monotype
 * URL: https://www.myfonts.com/fonts/mti/neue-plak/text-italic/
 * 
 * Webfont: NeuePlakText-LightItalic by Monotype
 * URL: https://www.myfonts.com/fonts/mti/neue-plak/text-light-italic/
 * 
 * Webfont: NeuePlak-Black by Monotype
 * URL: https://www.myfonts.com/fonts/mti/neue-plak/black/
 * 
 * Webfont: NeuePlak-Bold by Monotype
 * URL: https://www.myfonts.com/fonts/mti/neue-plak/bold/
 * 
 * Webfont: NeuePlak-ExtraBlack by Monotype
 * URL: https://www.myfonts.com/fonts/mti/neue-plak/extra-black/
 * 
 * Webfont: NeuePlak-Light by Monotype
 * URL: https://www.myfonts.com/fonts/mti/neue-plak/light/
 * 
 * Webfont: NeuePlak-SemiBold by Monotype
 * URL: https://www.myfonts.com/fonts/mti/neue-plak/semibold/
 * 
 * Webfont: NeuePlak-Regular by Monotype
 * URL: https://www.myfonts.com/fonts/mti/neue-plak/regular/
 * 
 * Webfont: NeuePlakText-Black by Monotype
 * URL: https://www.myfonts.com/fonts/mti/neue-plak/text-black/
 * 
 * Webfont: NeuePlakText-Bold by Monotype
 * URL: https://www.myfonts.com/fonts/mti/neue-plak/text-bold/
 * 
 * Webfont: NeuePlakText-Light by Monotype
 * URL: https://www.myfonts.com/fonts/mti/neue-plak/text-light/
 * 
 * Webfont: NeuePlakText-Regular by Monotype
 * URL: https://www.myfonts.com/fonts/mti/neue-plak/text-regular/
 * 
 * Webfont: NeuePlakText-SemiBold by Monotype
 * URL: https://www.myfonts.com/fonts/mti/neue-plak/text-semibold/
 * 
 * Webfont: NeuePlakText-Thin by Monotype
 * URL: https://www.myfonts.com/fonts/mti/neue-plak/text-thin/
 * 
 * 
 * License: https://www.myfonts.com/viewlicense?type=web&buildid=3800738
 * Licensed pageviews: 250,000
 * Webfonts copyright: Copyright &#x00A9; 2018 Monotype Imaging Inc. All rights
 * reserved.
 * 
 * © 2019 MyFonts Inc
*/

-->`;

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
