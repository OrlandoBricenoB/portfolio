const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'orlandobricenob.com',
        pathname: '**',
      },
    ],
    // Optimizaciones de imagen para Next.js 15
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Configuración para Webpack (usado por Next.js en producción y algunas tareas)
  webpack(config) {
    // Configuración de SVGR para SVG
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            plugins: ['@svgr/plugin-jsx'],
            icon: true
          }
        }
      ]
    })
    return config
  },
  // Configuración experimental para Turbopack (usado en desarrollo si se habilita)
  experimental: {
    // Habilitar Turbopack
    turbo: true,
    // Configuración específica para módulos
    serverComponentsExternalPackages: ['@svgr/core', '@svgr/plugin-jsx']
  }
}
