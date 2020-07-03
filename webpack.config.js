/* eslint-disable @typescript-eslint/no-var-requires */

const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    index: ["./src/index.ts", "./src/styles/main.scss"],
    "page-not-found": ["./src/page-not-found.ts", "./src/styles/error.scss"],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "static/[name].css",
            },
          },
          {
            loader: "extract-loader",
          },
          {
            loader: "css-loader?-url",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  mode: "production",
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/index.html", to: "." },
        { from: "src/page-not-found.html", to: "." },
        { from: "static", to: "static" },
      ],
    }),
  ],
};
