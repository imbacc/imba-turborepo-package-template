require('config/jsdom')
const { expect } = require('chai')
const { describe, it } = require('mocha')
const { fun1, fun2 } = require('../libs/index')

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
