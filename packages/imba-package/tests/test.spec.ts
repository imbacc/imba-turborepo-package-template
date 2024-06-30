import 'config/jsdom'
import { describe, it, expect } from 'vitest'
import { fun1, fun2 } from '../libs/index'

describe('imba-package 测试组', () => {
  it('测试fun1', () => {
    const result = fun1('i am string')
    expect(result).to.be.eq('i am string')
  })

  it('测试fun2', () => {
    const result = fun2('123456')
    expect(result).to.be.eq('123456')
  })
})
