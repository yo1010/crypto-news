const reactSitemap = require('react-router-sitemap');
const routes = require('./routes');
const path = require('path');
const fs = require('fs');

const dest = path.resolve('./public', 'sitemap.xml');

const hostname = "http://www.bitcoinia.ru";

const sitemap = reactSitemap.sitemapBuilder(hostname, routes.routes);

fs.writeFileSync(dest, sitemap.toString());