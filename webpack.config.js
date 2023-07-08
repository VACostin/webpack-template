const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const config = {
    entry: {
      index: "./src/index.jsx"
    },
    devServer: {
      static: "./dist"
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "index.html"
      })
    ],
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource"
        },
        {
          test: /\.(?:js|jsx|mjs|cjs)$/,
          exclude: /node_modules/,
          use: "babel-loader",
          resolve: {
            extensions: [".js", ".jsx"]
          }
        }
      ]
    },
    resolve: {
      alias: {
        Slices: path.resolve(__dirname, "src/slices"),
        Styles: path.resolve(__dirname, "src/styles")
      }
    }
  };
  if (argv.mode === "development") {
    config.devtool = "inline-source-map";
    config.mode = "development";
  } else config.mode = "production";
  return config;
};
