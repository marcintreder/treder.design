module.exports = {
  siteMetadata: {
    title: `Treder Design – Marcin Treder Personal Website. UX Design, UX Leadership, Product Management, Product Leadership.`,
    description: `A custom Gatsby starter template to start a blog or personal website.`,
    author: `Marcin Treder`,
    twitter: `@marcintreder`,
    email: `marcintreder@gmail.com`,
    siteUrl: `https://lewis-gatsby-starter-blog.firebaseapp.com/`,
    gitUrl: `https://github.com/lewislbr/lewis-gatsby-starter-blog`
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-remove-serviceworker',
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        defaultCrumb: {
          location: {
            state: { crumbClicked: true },
            pathname: "/",
          },
          crumbLabel: "home",
          crumbSeparator: " / ",
          crumbStyle: { color: "#000" },
          crumbActiveStyle: { color: "#e7ad7a" },
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/svg_icons/`,
        }
      }
    },
    {
      resolve: "gatsby-plugin-copy-files",
      options: {
          source: `${__dirname}/src/fonts/`,
          destination: '/'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              quality: 75,
              withWebp: true,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lewis Gatsby Starter Blog`,
        short_name: `LGSB`,
        start_url: `/`,
        background_color: `#fcfcfc`,
        theme_color: `#fcfcfc`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
  ],
};
