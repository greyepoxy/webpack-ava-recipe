var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  entry: {
    main: ['./src/foo.tests.js']
  },
  target: 'node',
  output: {
    path: path.join(__dirname, '_build'),
    filename: 'tests.js'
  },
  externals: [nodeExternals()],
  plugins: [],
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  "targets": {
                    "node": true
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  }
};
