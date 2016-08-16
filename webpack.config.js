var fs = require('fs')
var path = require('path')
var webpack = require('webpack')


module.exports = {

  //devtool: 'source-map',

  entry: './client.js',
  // context: __dirname,
  output: {
    path: __dirname + '/__build__',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },

      {
  test: /\.js$/,
  loader: 'babel-loader',
  query: {
    presets: ["es2015", "babel-preset-react", "stage-0", require.resolve("babel-preset-es2015")],
    plugins: ["transform-react-constant-elements", "transform-react-inline-elements"]
  },
  exclude: /(node_modules)/
},
    ]
  },
  resolve: {
    alias: {
      'react-router': path.join(__dirname, '..', 'modules')
    }
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('client', null, false),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: false },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]

}
