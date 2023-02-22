const { defineConfig } = require('tsup')

// 没经过webpack、通过esbuild编译的。cjs,mjs,dts混合编译可以，但是代码没压缩，没经过babel-loader
const exportTsupConfig = () => {
  return defineConfig({
    splitting: false,
    sourcemap: true,
    clean: true,
    dts: true,
    format: ['cjs', 'esm'],
  })
}

module.exports = { exportTsupConfig }