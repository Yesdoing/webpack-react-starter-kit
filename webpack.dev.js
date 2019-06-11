const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './build',
        noInfo: true,
        open: true,
        port: 3000,
        after: function(app, server) {
            app.listen(3000, function () {
                console.log("Webpack dev server is listening on port 3000");
            })
        }
    }
});