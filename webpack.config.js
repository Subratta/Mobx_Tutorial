var config = {
	entry: "./src/index.js",
	output: {
		path: __dirname,
		filename: "output.js"
	},
	module: {
		loaders: [
			{test: /\.css$/, loader: "style-loader!css-loader"},
			{test: /\.js$/, loader: "babel-loader"}
		]
	}
}

module.exports = config;