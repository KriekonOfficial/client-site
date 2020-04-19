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
			port: 3000,
			host: '192.168.33.10',
			historyApiFallback: true
		}
	}
}
