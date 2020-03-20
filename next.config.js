const withImages = require('next-images');

const isProd = process.env.NODE_ENV === 'production';

const plugins = withImages({
  webpack(config, options) {
    return config
  }
});

module.exports = {
  target: 'serverless',
  ...plugins,
  env: {
    MAIN_URL: isProd ? 'https://xetainhosaigon.com' : '',
    CDN_URL: 'https://cdn.uixcrazy.now.sh/static/',
  },
}
