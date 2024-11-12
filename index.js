const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

/** @type {import('http-proxy-middleware/dist/types').RequestHandler<express.Request, express.Response>} */
const exampleProxy = createProxyMiddleware({
  target: 'https://content.dev.b2x.b2bx.mindcurv.io/', // target host with the same base path
  changeOrigin: true, // needed for virtual hosted sites
});


app.use('/', exampleProxy);
app.listen(7890);