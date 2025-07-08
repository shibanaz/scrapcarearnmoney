// generate-sitemap.js
import fs from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/buy-cod', changefreq: 'monthly', priority: 0.8 }
];

const sitemap = new SitemapStream({ hostname: 'https://scrapcar-earnmoney.com' });

const readable = Readable.from(links);

streamToPromise(readable.pipe(sitemap)).then((data) => {
  fs.writeFileSync('./public/sitemap.xml', data.toString());
});
