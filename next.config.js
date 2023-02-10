/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
	reactStrictMode: true,
	webpack(config) {
		config.module.rules.forEach((rule) => {
			const { oneOf } = rule;
			if (oneOf) {
				oneOf.forEach((one) => {
					if (!`${one.issuer?.and}`.includes("_app")) return;
					one.issuer.and = [path.resolve(__dirname)];
				});
			}
		});
		return config;
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'src/styles')],
		additionalData: `@import "src/styles/root/_mixins.scss";`,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'firebasestorage.googleapis.com',
				pathname: '/v0/b/badastoor-86ddb.appspot.com/o/**',
				port: '',
			},
			{
				protocol: 'https',
				hostname: 'cdn-icons-png.flaticon.com',
				pathname: '/512/**',
				port: '',
			}
		]
	},
}

module.exports = nextConfig
