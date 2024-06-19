import { setCache, getCache, delCache, setCacheLoca, getCacheLoca, clearCache, comCache } from 'imba-package'
setCache('test_string', 'string')
setCache('test_number', 111)
setCache('test_boolean', true)
setCache('test_Object', { test_Object: 'test_Object' })
setCache('test_Array', ['test_Array'])
setCacheLoca('test_loca', 'test_loca')
const test_loca = getCacheLoca('test_loca')
console.log('%c [ test_loca ]-9', 'font-size:14px; background:#41b883; color:#ffffff;', test_loca)
if (!getCache('test_time')) setCache('test_time', 'test_time', 10, 'ss')
const get_result = getCache('test_time')
console.log('%c [ get_result ]-17', 'font-size:14px; background:#41b883; color:#ffffff;', get_result)
setCache('test_delCache', 111)
delCache('test_delCache')
const result = getCacheLoca('test_Array')
console.log('%c [ result ]-23', 'font-size:14px; background:#41b883; color:#ffffff;', result)
const test_time1 = getCacheLoca('test_time')
console.log('%c [ test_time1 ]-15', 'font-size:14px; background:#41b883; color:#ffffff;', test_time1)
const com = comCache('test_time')
console.log('%c [ com ]-17', 'font-size:14px; background:#41b883; color:#ffffff;', com)

const name = 'npm-imba-cache'
console.log('%c [ name ]-20', 'font-size:14px; background:#41b883; color:#ffffff;', name)
export default name
