const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/app.js',
    publicPath: "/dist/"
  },
  module: {
	  rules: [
	  	// react语法的处理
	    {
	      test: /\.jsx$/,
	      exclude: /(node_modules)/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['env', 'react']
	        }
	      }
	    },
	    // css的处理
	    {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      // sass的处理
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      // 图片的配置
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              publicPath: '../',
              name: 'resource/[name].[ext]'
              // name: 'resource/[name].[ext]'
            }
          }
        ]
      },
      // 字体图标配置
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              publicPath: '../',
              name: 'resource/[name].[ext]'
            }
          }
        ]
      }
	  ]
	},
  plugins: [
  	new HtmlWebpackPlugin({
  		template: './src/index.html'
  	}),
  	// 独立css文件
  	new ExtractTextPlugin("css/[name].css"),
  	// 提出公共模块
  	new webpack.optimize.CommonsChunkPlugin({
  		name: 'common',
  		filename: 'js/base.js'
  	})
	],
	devServer: {
    // contentBase: './dist'
    port: 8080
  }
};