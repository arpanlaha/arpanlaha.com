/* eslint-disable */
const path = require("path");

module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Arpan Laha",
        short_name: "Arpan Laha",
        description: "Arpan Laha's personal website",
        start_url: "/",
        background_color: "#16191d",
        theme_color: "#16191d",
        display: "browser",
        icon: "static/favicon.ico"
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-preload-fonts",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        allExtensions: true,
        isTSX: true
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images")
      }
    },
    "gatsby-transformer-sharp"
  ]
};
