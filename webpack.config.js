var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/app/main'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    modulesDirectories: ['node_modules', './src'],
    extensions: ['', '.js', '.jsx', '.less', '.gif', '.jpg', '.png', '.svg']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src', 'app')
    }, {
      test: /\.css$/,
      loaders: ['react-hot', 'style-loader', 'css-loader']
    }, {
      test: /\.less$/,
      loaders: ['react-hot', 'style-loader', 'css-loader', 'less-loader']
    }, {
      test: /\.gif/,
      loaders: ['react-hot', 'url-loader?limit=10000&mimetype=image/gif']
    }, {
      test: /\.jpg/,
      loaders: ['react-hot', 'url-loader?limit=10000&mimetype=image/jpg']
    }, {
      test: /\.png/,
      loaders: ['react-hot', 'url-loader?limit=10000&mimetype=image/png']
    }, {
      test: /\.svg/,
      loaders: ['react-hot', 'url-loader?limit=10000&mimetype=image/svg+xml']
    }]
  }
};
