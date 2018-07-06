const paths = require("./paths");
const path=require('path');

module.exports = {
  devtool: "cheap-module-source-map",
  entry: paths.srcEntryPath,
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "build"),
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              highlightCode: true
            }
          }
        ]
      },
      {
        test: /\.scss/,
        include: paths.srcPath,
        exclude: /(node_modules)/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            query: {
              sourceMap: true,
              modules: true,
              importLoaders: 3,
              localIdentName: "[local]_[hash:base64:5]" //[name]-[local]_[hash:base64:5]
            }
          },
          // {
          //   loader: "postcss-loader"
          // },
          {
            loader: "sass-loader",
            options: {
              includePaths: ["node_modules"]
            }
          },
          {
            loader: "sass-resources-loader",
            options: {
              resources: [
                "./src/styles/functions/_functions.all.scss",
                "./src/styles/settings/_settings.all.scss",
                "./src/styles/mixins/_mixins.all.scss"
              ]
            }
          }
        ]
      },
      {
        test: [/\.svg$/],
        include: paths.srcPath,
        loader: "url-loader",
        options: {
          limit: 2000,
          name: "assets/media/[name].[ext]"
        }
      },
      {
        // Exclude everything that's being handled by the loaders above.
        // Also exclude `html` and `json` extensions so they get processed
        // by webpacks internal loaders.
        include: paths.srcPath,
        exclude: [
          /\.(js|jsx|mjs)$/,
          /\.html$/,
          /\.graphql$/,
          /\.json$/,
          /\.svg/,
          /\.(css|scss)$/,
          /(node_modules)/
        ],
        loader: "file-loader",
        options: {
          name: "assets/media/[name].[ext]"
        }
      }
    ]
  },
  devServer: {
    contentBase: paths.servePath,
    historyApiFallback:true
  },
};
