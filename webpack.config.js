const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = (env, argv) => ({
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    filename: 'bundle-[hash].js',
    path: path.resolve('./dist'),
    publicPath: argv.mode === 'production' ? '/cloud-alarm/' : '/',
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
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader', 'file-loader'],
      },
      // {
      //   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      //   issuer: {
      //     test: /\.jsx?$/,
      //   },
      //   use: ['babel-loader', '@svgr/webpack', 'url-loader'],
      // },
      // {
      //   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: 'url-loader',
      // },
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
      },
    },
    host: '192.168.29.104',
    public: 'http://myhency.duckdns.org:13000',
    port: 3000,
    disableHostCheck: true,
    compress: true,
    https: false,
    overlay: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});
