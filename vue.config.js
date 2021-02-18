const path = require('path')
module.exports = {
  outputDir: 'dist',
  devServer: {
    open: true,
    port: '8081'
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@image', path.join(__dirname, 'src/assets/image'))
  }
}