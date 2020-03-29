/* eslint-disable */
const path = require("path");

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Arpan Laha",
        short_name: "Arpan Laha",
        description: "CS @ Illinois | Product @ Hack4Impact",
        start_url: "/",
        background_color: "#1a1e23",
        theme_color: "#1a1e23",
        display: "browser",
        icon: "static/logo.svg",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-preload-fonts",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-split-css",
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        allExtensions: true,
        isTSX: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images"),
      },
    },
    "gatsby-transformer-sharp",
  ],
};
