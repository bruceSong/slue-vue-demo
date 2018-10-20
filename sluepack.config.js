var path = require('path');
module.exports = {
    // 要注入的html
    injectTo: './src/index.html',
    // 入口文件
    entry: {
        app: './src/main.js'
    },
    // 打包输出目录
    output: {
        // 文件输出的根目录
        root: path.resolve(__dirname, './build'),
        // 静态文件输出目录，包括的包出的js、css、图片等文件
        staticPath: './pkg'
    },
    // 监听文件变化，开启增量编译摸索
    watch: true,
    // 环境变量，development or production
    mode: 'production'
};