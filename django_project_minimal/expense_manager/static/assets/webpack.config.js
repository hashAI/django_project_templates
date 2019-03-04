const config = {
    mode: 'development',
    devtool: 'inline-source-map',
	entry: __dirname + '/src/index.js',
	module: {
		rules: [
		  {
		    test: /\.js$/,
            exclude: /node_modules/,
			loader: 'babel-loader'
		  },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          }
		],
	},
	output: {
	   filename: 'bundle.js',
	   path: __dirname + '/build'
	}
};

module.exports = config;
