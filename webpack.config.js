const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./App/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    alias: {
      durandal: path.resolve(__dirname, "node_modules/durandal/js"),
      plugins: path.resolve(__dirname, "node_modules/durandal/js/plugins"),
      transitions: path.resolve(
        __dirname,
        "node_modules/durandal/js/transitions"
      ),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /durandal\/js\/.*\.js$/,
        use: {
          loader: "imports-loader",
          options: {
            additionalCode: "var define = false;",
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      inject: "body",
    }),
  ],
  mode: "production",
};
