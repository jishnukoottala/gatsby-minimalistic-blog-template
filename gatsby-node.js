// ** Source Maps ***

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
      devtool: "eval-source-map"
    });
  };

  const path = require("path")


exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
  
    const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
  
    return graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 100
        ) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }
  
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: blogPostTemplate,
          context: {}, // additional data can be passed via context
        })
      })
    })
  }

