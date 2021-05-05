const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = (env, argv) => ({
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    filename: 'bundle-[hash].js',
    path: path.resolve('./dist'),
    publicPath: argv.mode === 'production' ? '/hae-sign-front/' : '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif|mp4)$/i,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
    new Dotenv({
      path: argv.mode === 'production'
        ? path.resolve(__dirname, './config/.env.production')
        : path.resolve(__dirname, './config/.env.development'),
    }),
  ],
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api/v1/platform': {
        target: 'http://localhost:8080/',
        changeOrigin: true,
      }
    }
  },
});
