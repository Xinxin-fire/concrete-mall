const { defineConfig } = require('@vue/cli-service');
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
  }
});
