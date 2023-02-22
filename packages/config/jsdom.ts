import * as jsdom from 'jsdom'

const dom = new jsdom.JSDOM('<!DOCTYPE html><html><head></head><body></body></html>', {
  url: 'http://localhost/',
  contentType: 'text/html',
  includeNodeLocations: true,
  storageQuota: 10000000,
})

global.window = dom.window as unknown as Window & typeof globalThis
global.document = dom.window.document