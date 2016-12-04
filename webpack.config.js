module.exports = {
  entry: [__dirname + '/web/src/client.js'],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/web/static'
  }
};