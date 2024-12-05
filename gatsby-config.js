module.exports = {
  flags: {
    FAST_DEV: true,
  },
  siteMetadata: {
    title: `Aayush Shrestha`,
    description: `Aayush Shrestha - Software Engineer and Technology Enthusiast`,
    author: `Aayush Shrestha`,
    siteUrl: "https://www.aayushh.com", // Use HTTPS if possible
    image: "/images/og-image.jpg", // Add a default social sharing image
    twitterUsername: "@yourtwitterhandle", // Add if you have Twitter
    keywords: ["software engineer", "software developer", "portfolio", "Aayush Shrestha"],
    lang: "en",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/articles`,
        name: `articles`,
      },
    },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [], // Add any remark plugins here if needed
    //   },
    // },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.aayushh.com',
        sitemap: 'https://www.aayushh.com/sitemap/sitemap-index.xml',
        policy: [
          { 
            userAgent: '*',
            allow: '/',
            disallow: [
              '/404',
              '/404.html',
              '/dev-404-page',
              '/offline-plugin-app-shell-fallback',
            ],
            crawlDelay: 10,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        host: "http://aayush6194.github.io",
        sitemap: "https://www.example.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-transformer-sharp`,

    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aayush Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#6CCBFE`,
        theme_color: `#6CCBFE`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
};
