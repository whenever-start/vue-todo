module.exports = {
  publicPath: '/', // 根路径
  outputDir: 'dist', // 构建输出目录，执行：npm run build后项目打包在dist文件下
  assetsDir: 'assets', // 静态资源目录（js,css,img,fonts）
  chainWebpack: (config) => {
    // 别名, .set(key, value)
    config.resolve.alias
      .set('components', '@/components')
      .set('assets', '@/assets')
      .set('store', '@/store')
      .set('utils', '@/utils');
  },
  devServer: {
    open: true, // 浏览器自动打开页面
    host: 'localhost', // 域名
    port: 8080,
  },
};
