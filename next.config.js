const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{
        loader: '@svgr/webpack',
        options: { icon: true }
      }]
    })

    return config
  }
}