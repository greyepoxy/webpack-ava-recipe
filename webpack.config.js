var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: {
    main: ['./src/tests.js']
  },
  target: 'node',
  output: {
    path: '_build',
    filename: 'tests.js'
  },
  externals: nodeModules,
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
