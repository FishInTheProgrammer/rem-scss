var webpack = require('webpack');
var path = require("path");
module.exports = {
	//页面入口文件配置
	entry:[
		'./app.js'	//  './'表示根目录
	],
	//入口文件输出配置
	output:{
		path:path.resolve(_dirname,'./build'),
		filename: 'bundle.js'
	},
	module:{
		//加载器配置
		loaders:[
			{test:/\.css$/,loader:'style-loader!css-loader'},
			{test:/\.scss$/,loader:'style-loader!css-loader!sass-loader?style-loader'},
			{test:/\.(png|jpg)$/,loader:'url-loader?limit=8192'}
		]
	}
}