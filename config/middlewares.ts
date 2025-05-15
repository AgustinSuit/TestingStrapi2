export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": [
            "'self'",
            "https:",
            "https://res.cloudinary.com"
          ],
          "script-src": [
            "'self'",
            "'unsafe-inline'",
            "https://*.basemaps.cartocdn.com",
          ],
          "media-src": [
            "'self'",
            "blob:",
            "data:",
            "dl.airtable.com",
            "media.janoseventos.com",
            "janos-strapi-images.s3.us-east-1.amazonaws.com",
            "janos-strapi-images-dev.s3.us-east-1.amazonaws.com",
            "https://*.basemaps.cartocdn.com",
            "https://tile.openstreetmap.org",
            "https://*.tile.openstreetmap.org",
            "https://res.cloudinary.com"
          ],
          "img-src": [
            "'self'",
            "blob:",
            "dl.airtable.com",
            "media.janoseventos.com",
            "janos-strapi-images.s3.us-east-1.amazonaws.com",
            "janos-strapi-images-dev.s3.us-east-1.amazonaws.com",
            "data:",
            "https://*.basemaps.cartocdn.com",
            "market-assets.strapi.io",
            "https://*.tile.openstreetmap.org",
            "https://unpkg.com/leaflet@1.9.4/dist/images/",
            "https://res.cloudinary.com"
          ],
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
