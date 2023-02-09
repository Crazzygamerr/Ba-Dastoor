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
}

module.exports = nextConfig
