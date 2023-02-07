/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
	reactStrictMode: true,
	// scss support
	sassOptions: {
		includePaths: [path.join(__dirname, 'src/styles')],
		additionalData: `@import "src/styles/root/_mixins.scss";`,
	},
}

module.exports = nextConfig
