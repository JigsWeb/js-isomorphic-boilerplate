module.exports = {
  context: __dirname + "/../..",
  entry: [__dirname + '/../src/client.js'],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/../static'
  }
};