const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
    target: 'https://www.brahama.work.gd',
    changeOrigin: true

};
module.exports = function (app) {
    app.use('/api', createProxyMiddleware(proxy));
};