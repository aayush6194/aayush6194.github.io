module.exports = {

  siteMetadata: {
    title: `Aayush Shrestha`,
    description: ``,
    author: `Aayush Shrestha`,
    siteUrl: 'http://aayush6194.github.io'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,'gatsby-plugin-robots-txt',
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
        background_color: `#2188F0`,
        theme_color: `#2188F0`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      }
    },
   'gatsby-plugin-offline',
  ],
}
