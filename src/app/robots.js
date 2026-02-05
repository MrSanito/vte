export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://vishaltoolsenterprise.com/sitemap.xml',
  }
}
