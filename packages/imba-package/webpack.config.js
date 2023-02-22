const { resolve } = require('path')
const { exportEntry, exportWebpackConfig } = require('config/webpack.config')

module.exports = Object.assign(exportWebpackConfig(__dirname), {
  entry: exportEntry(resolve(__dirname, 'libs')),
})
