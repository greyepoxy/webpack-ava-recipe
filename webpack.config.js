var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    main: ['./src/tests.js']
  },
  target: 'node',
  output: {
    path: '_build',
    filename: 'tests.js'
  },
  externals: [nodeExternals()],
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
