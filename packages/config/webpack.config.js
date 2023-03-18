const { resolve } = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const requireContext = require('require-context')

// tsup entry
const tsupExportEntry = (path) => {
  const modulesFiles = requireContext(path, false, /\.ts$/)
  const modules = modulesFiles.keys().reduce((module, modulePath) => {
    const moduleFileName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const moduleName = moduleFileName.replace('.ts', '')
    module[moduleName] = `./libs/${moduleFileName}`
    return module
  }, {})
  return modules
}

// webpack entry
const exportEntry = (path) => {
  const modulesFiles = requireContext(path, false, /\.ts$/)
  const modules = modulesFiles.keys().reduce((module, modulePath) => {
    const moduleFileName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const moduleName = moduleFileName.replace('.ts', '')
    module[moduleName] = {
      import: `./libs/${moduleFileName}`,
      library: {
        type: 'module',
      },
    }

    module[`${moduleName}.cjs`] = {
      import: `./libs/${moduleFileName}`,
      library: {
        type: 'commonjs2',
      },
    }
    return module
  }, {})
  return modules
}

// 默认配置
const exportWebpackConfig = (dir) => {
  const plugins = [
    new ForkTsCheckerWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: 'libs/types',
          to: 'types',
        },
        {
          from: 'tsc-dist/*.d.ts',
          to: '[name][ext]',
        },
      ],
    }),
  ]

  return {
    target: 'web',
    mode: 'production',
    devtool: 'source-map',
    cache: {
      type: 'filesystem',
      cacheLocation: resolve(dir, '.cache'),
    },
    output: {
      filename: '[name].js',
      path: resolve(dir, 'dist'),
      libraryTarget: 'module',
      clean: true,
    },
    experiments: {
      outputModule: true,
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node-modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
          },
        },
      ],
    },
    plugins,
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          extractComments: false,
          terserOptions: {
            warnings: false,
            module: true,
            safari10: true,
          },
        }),
      ],
    },
  }
}

module.exports = { tsupExportEntry, exportEntry, exportWebpackConfig }
