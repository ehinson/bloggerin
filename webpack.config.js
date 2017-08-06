const path = require('path');

module.exports = {
  entry: [
    'babel-polyfill', './src/app.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/'
  },
  devServer: {
    inline: true,
    port: 3000,
    contentBase: './dist'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  }
}
