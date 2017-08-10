const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/app.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      rx$: path.resolve(__dirname, './node_modules/rx/dist/rx.js')
    }
  },
  devServer: {
    inline: true,
    port: 3000,
    contentBase: './dist',
    historyApiFallback: true
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
};
