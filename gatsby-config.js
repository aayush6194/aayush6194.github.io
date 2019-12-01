module.exports = {

  siteMetadata: {
    title: `Aayush Shrestha`,
    description: ``,
    author: `Aayush Shrestha`,
    siteUrl: 'http://www.aayushh.com'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        host: 'http://aayush6194.github.io',
       sitemap: 'https://www.example.com/sitemap.xml',
       policy: [{ userAgent: '*', allow: '/' }]
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
      }
    },
   'gatsby-plugin-offline',
   {
    resolve: `gatsby-plugin-styled-components`,
    options: {
      // Add any options here
    },
  }
  ],
}
