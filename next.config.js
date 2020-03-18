const withImages = require('next-images')

const plugins = withImages({
  webpack(config, options) {
    return config
  }
});

module.exports = {
  target: 'serverless',
  ...plugins,
}
