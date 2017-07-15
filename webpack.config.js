const path = require('path');
<<<<<<< HEAD

module.exports = {
  context: __dirname,  // will always run from root directory
  entry: "./js/ClientApp.jsx",
  devtool: "cheap-eval-source-map",
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
=======
const webpack = require('webpack');

const config = {
  context: __dirname,
  entry: ['./js/ClientApp.jsx'],
  devtool: process.env.NODE_ENV === 'development' ? 'cheap-eval-source-map' : false,
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  devServer: {
    hot: true,
    publicPath: '/public/',
    historyApiFallback: true
>>>>>>> 03296d511993ad5399c09b032d2088583ab13102
  },
  devServer: {
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  stats: {
    colors: true,
    reasons: true,
<<<<<<< HEAD
    chunks: true
  },
=======
    chunks: false
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()],
>>>>>>> 03296d511993ad5399c09b032d2088583ab13102
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
<<<<<<< HEAD
        exclude: /node_modules
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
=======
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [path.resolve('js'), path.resolve('node_modules/preact-compat/src')]
>>>>>>> 03296d511993ad5399c09b032d2088583ab13102
      }
    ]
  }
};

if (process.env.NODE_ENV === 'development') {
  config.entry.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000');
}

module.exports = config;
