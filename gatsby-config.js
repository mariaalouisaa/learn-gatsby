module.exports = {
  siteMetadata: {
    title: "Learning GatsbyJS",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    // the object below add files from this project to the GraphQL db
    {
      resolve: "gatsby-source-filesystem", 
      options: {
        name: `blog`, // folder name where the data if coming from
        path: `${__dirname}/blog`, //node feature to create absolute path 
      }
    },
  ],
};