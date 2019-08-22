const Webpack = require('webpack');
const Jarvis = require("webpack-jarvis");
const path = require("path");
const OfflinePlugin = require('offline-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const WorkboxPlugin = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

require('dotenv').config();

module.exports = {
  entry:'./src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        // look for .css or .scss files
        test: /\.(css|scss)$/,
        // in the `src` directory
        // include: [__dirname + '/src'],
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader:MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            // options: {
            //   discardDuplicates: true,
            //   importLoaders: 1,
            //   // This enables local scoped CSS based in CSS Modules spec
            //   modules: true,
            //   // generates a unique name for each class (e.g. app__app___2x3cr)
            //   localIdentName: '[name]__[local]___[hash:base64:5]',
            // },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      Utilities: path.resolve(__dirname, './src/Utilities')
    }
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js'
  },
  optimization:{
    splitChunks:{
      name: "vendor",
      minChunks: Infinity,
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      }
    }
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Jarvis({
        port: 1337 // optional: set a port
    }),
    new Webpack.DefinePlugin({
      HOST: JSON.stringify(process.env.HOST), 
      PROTOCOL: JSON.stringify(process.env.PROTOCOL), 
      BASE_URL: JSON.stringify(process.env.BASE_URL), 
    }),
    new OfflinePlugin({
        externals: ['/'],
        caches: 'all',
        safeToUseOptionalCaches: true,
        autoUpdate: true,
        updateStrategy: 'all',
        ServiceWorker: {
            events: true,
            prefetchRequest: {credentials: 'same-origin'}
        },
        AppCache: {
            events: true,
            includeCrossOrigin: true
        },
    }),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$|\.scss$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new ManifestPlugin({publicPath:__dirname + '/dist/.'}),
    new HtmlWebpackPlugin({
      title: 'Caching',
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css"
    }),
    // new CleanWebpackPlugin(),
    // new WorkboxPlugin.GenerateSW()
],
  devServer: {
    contentBase: './dist',
    hot: true,
    overlay: true,
    headers: {
      'Cache-Control': 'max-age=31536000'
    },
    historyApiFallback: true,
  }
}

