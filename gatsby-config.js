/* eslint-disable */

module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Arpan Laha",
        short_name: "Arpan Laha",
        description: "Arpan Laha's personal website",
        start_url: "/",
        background_color: "#abcdef",
        theme_color: "#fedcba",
        display: "standalone",
        icon: "static/favicon.ico"
      }
    },
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        allExtensions: true,
        isTSX: true
      }
    }
  ]
};
