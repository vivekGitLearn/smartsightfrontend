const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function addProxyMiddleware(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://brahama.work.gd',
            changeOrigin: true,
        }),
    );
};