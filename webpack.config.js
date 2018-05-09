var path = require('path'),
    webpack = require('webpack');

module.exports= {

  context: __dirname,
  devtool: 'cheap-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './js/ClientApp.jsx'
  ],
  output:{
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath:'/public/'
  },
  devServer:{
    hot:true,
    publicPath:'/public/',
    historyApiFallback: true
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  stats:{
    colors: true,
    reasons: true,
    chunks: true

  },
  module:{
    rules: [
      {
        enforce:'pre',
        test:/\.jsx?$/,
        loader: 'eslint-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }

}
