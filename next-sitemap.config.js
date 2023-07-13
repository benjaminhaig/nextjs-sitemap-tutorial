module.exports = {
    siteUrl: 'https://localhost:3000',
    generateRobotsTxt: true,
    exclude: ['/server-sitemap.xml', '/blog/*'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                disallow: '/admin'
            },
            {
                userAgent: '*',
                allow: '/'
            },
        ],
        additionalSitemaps: [
            'https://localhost:3000/server-sitemap.xml'
        ]
    },
}