const path = require('path')

module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ['en', 'fr'],
        defaultLocale: 'fr'
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    }
}
