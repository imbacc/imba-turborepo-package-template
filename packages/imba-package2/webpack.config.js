const { exportWebpackConfig } = require('config/webpack.config')
module.exports = Object.assign(exportWebpackConfig(__dirname), {
  // 配置...
})
