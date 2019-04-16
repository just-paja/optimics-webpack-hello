const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    path.resolve(__dirname, 'main.js')
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3001,
    disableHostCheck: true,
    hot: true,
    host: 'localhost'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}
