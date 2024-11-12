const express = require('express');
var cors = require('cors')

const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(cors())


/** @type {import('http-proxy-middleware/dist/types').RequestHandler<express.Request, express.Response>} */
const contentAggregatorProxy = createProxyMiddleware({
  target: 'https://content.dev.b2x.b2bx.mindcurv.io/', // target host with the same base path
  changeOrigin: true, // needed for virtual hosted sites
});

/** @type {import('http-proxy-middleware/dist/types').RequestHandler<express.Request, express.Response>} */
const productAggregatorProxy = createProxyMiddleware({
  target: 'https://productcatalog.dev.b2x.b2bx.mindcurv.io/', // target host with the same base path
  changeOrigin: true, // needed for virtual hosted sites
});



app.use('/content', contentAggregatorProxy);
app.use('/product', productAggregatorProxy);
app.listen(7890);