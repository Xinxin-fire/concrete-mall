const { defineConfig } = require('@vue/cli-service');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 9070,
    client: {
      overlay: {
        warnings: false,
        errors: true
      }
    }
    // setupMiddlewares: require('./mock/mock.js')
  },
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            require('autoprefixer')(),
            require('postcss-pxtorem')({
              rootValue: 192,
              propList: ['*']
            })
          ]
        }
      }
    }
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.devtool();
    }
    config
      .optimization.splitChunks({
        chunks: 'all',
        minSize: 0,
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial' // only package third parties that are initially dependent
          },
          elementUI: {
            name: 'chunk-elementUI', // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
          },
          commons: {
            name: 'chunk-commons',
            test: /[\\/]src[\\/]_?utils(.*)/,
            priority: 30
          }
        }
      });
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end();
  }
});
