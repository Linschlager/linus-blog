const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  target: 'serverless',
  webpack: (config) => {
    config.module.rules.push(
     {
       test: /\.md$/,
       use: 'raw-loader'
     }
    );

    return config
  },
});