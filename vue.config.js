module.exports = {
	chainWebpack: config => {
		config
			.plugin("html")
			.tap(args => {
				args[0].title = "Oander test HZS";
				return args;
			});
	},
	publicPath: './'
};
