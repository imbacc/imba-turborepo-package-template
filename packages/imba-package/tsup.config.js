const { resolve } = require('path')
const { exportTsupConfig } = require('config/tsup.config')
const { tsupExportEntry } = require('config/webpack.config')

// 不用tsup编译可删除此文件
module.exports = Object.assign(exportTsupConfig(), {
  entry: tsupExportEntry(resolve(__dirname, 'libs')),
})