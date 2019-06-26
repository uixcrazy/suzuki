const withImages = require('next-images')
const withSass = require('@zeit/next-sass');

const plugins =  withSass(withImages({
  webpack(config, options) {
    return config
  }
}));

module.exports = {
  target: 'serverless',
  ...plugins,
}
