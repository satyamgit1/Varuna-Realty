module.exports = {
  siteUrl: 'https://www.varunarealty.com/',
  generateRobotsTxt: true, // (optional)
  
  // Optionally generate additional sitemaps (if needed for large sites)
  generateIndexSitemap: false,
  
  // Define the frequency of changes for the pages
  changefreq: 'daily', // or 'weekly', depending on how often you update content

  // Define default priority for pages
  priority: 0.7,

  // Additional options can be added for custom routes
  exclude: [
    '/api/*', // Exclude API routes
    '/private/*', // Exclude private routes if any
  ],

  // Alternative configuration for specific routes
  additionalPaths: async (config) => [
    {
      loc: '/owner', // custom URL for owner profile
      changefreq: 'monthly',
      priority: 0.8, // Higher priority for owner profile
      lastmod: new Date().toISOString(),
    },
  ],

  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/api/' }, // Block API routes
    ],
    additionalSitemaps: [
      'https://www.varunarealty.com/sitemap.xml', // If you have additional sitemaps
    ],
  },
};
