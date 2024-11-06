import { antfu } from '@antfu/eslint-config'
import { eslintConfig, ignoresConfig } from 'imba-config'

/** @type {import('eslint').Linter.Config[]} */
export default antfu({
  typescript: true,
  vue: false,

  // Disable jsonc and yaml support
  jsonc: false,
  yaml: false,
  ignores: ignoresConfig,
}, {
  rules: eslintConfig,
  ignores: ignoresConfig,
})
