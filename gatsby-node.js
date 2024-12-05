/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.md$/,
            use: 'raw-loader'
          }
        ]
      }
    })
  }


  const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query for all markdown files
  const result = await graphql(`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "articles" }
          extension: { regex: "/(md|mdx)/" }
        }
      ) {
        edges {
          node {
            id
            name
            relativePath
            internal {
              content
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const articles = result.data.allFile.edges;

  // Create a page for each article
  articles.forEach(({ node }) => {
    console.log(node)
    createPage({
      path: `/articles/${node.name}`, // URL for the article
      component: path.resolve(`./src/pages/articles.js`), // Template file
      context: {
        id: node.id,
        name: node.name,
        content: node.internal.content,
      },
    });
  });
};
