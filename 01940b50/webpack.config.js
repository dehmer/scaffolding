// https://webpack.js.org/guides/author-libraries/#authoring-a-library
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

const libraryName = 'library'

// https://webpack.js.org/guides/author-libraries/#webpack-configuration
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',

    // https://webpack.js.org/guides/author-libraries/#expose-the-library
    library: libraryName,
    globalObject: 'this',
    library: {
      name: libraryName,
      type: 'umd'
    }
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ extractComments: false })
    ]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: { loader: 'babel-loader' }
      }
    ]
  }
}
