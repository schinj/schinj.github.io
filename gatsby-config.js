module.exports = {
    siteMetadata: {
      title: `Portfolio`,
    },
    plugins: [
        {
          resolve: `gatsby-plugin-typography`,
          options: {
            pathToConfigModule: `src/utils/typography`,
          },
        },
    ],
}