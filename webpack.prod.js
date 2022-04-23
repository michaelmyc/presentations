const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const fs = require("fs");

let presentations = fs
  .readdirSync("./src/presentations", { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name)
  // filter out example in production
  .filter((name) => name !== "example");

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(ttf|woff|eot)$/,
        loader: "file-loader",
        options: {
          name: "fonts/[name].[ext]?[hash]",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "src/index.html" }),
    ...presentations.map(
      (presentation) =>
        new HtmlWebpackPlugin({
          template: `src/presentations/${presentation}/index.html`,
          filename: `${presentation}/index.html`,
        })
    ),
    new CopyPlugin({
      patterns: [
        { from: "static", noErrorOnMissing: true },
        ...presentations.map((presentation) => ({
          from: `src/presentations/${presentation}/assets`,
          to: `${presentation}/assets/[name][ext]`,
          noErrorOnMissing: true,
        })),
      ],
    }),
  ],
  performance: {
    // hints: false,
    // maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
