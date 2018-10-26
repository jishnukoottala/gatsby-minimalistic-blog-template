module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-offline',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/posts/`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        excerpt_separator: `<!-- end -->`
      }
    },
    
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-128168119-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        
      },
    },
    
  ],
}
