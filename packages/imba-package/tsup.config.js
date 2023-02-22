const { resolve } = require('path')
const { exportTsupConfig } = require('config/tsup.config')
const { tsupExportEntry } = require('config/webpack.config')

module.exports = Object.assign(exportTsupConfig(), {
  entry: tsupExportEntry(resolve(__dirname, 'libs')),
})