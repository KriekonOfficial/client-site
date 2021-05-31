module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
		? '/' : 'http://local.www.kriekon.com',
	configureWebpack: {
		devServer: {
			watchOptions: {
				aggregateTimeout: 300,
				poll: 1000
			},
			disableHostCheck: true,
			port: 80,
			public: 'local.www.kriekon.com',
			host: 'local.www.kriekon.com',
			historyApiFallback: true
		}
	}
}
