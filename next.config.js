const withImages = require('next-images')
const withSass = require('@zeit/next-sass');

module.exports = withSass(withImages({
  webpack(config, options) {
    return config
  }
}));
