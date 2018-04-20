
var webpack = require('webpack');
var glob = require('glob');
var path = require('path');

module.exports = {
	context: __dirname,
	entry: { 'myPages': glob.sync('./src/script/*.js') },
	output: {
		path: path.resolve(__dirname, "build"),
		filename: 'bundle.js'
	},
	mode: 'development'
};
