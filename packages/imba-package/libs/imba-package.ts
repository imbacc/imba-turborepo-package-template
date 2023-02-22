import type { val_DTYPE } from './types/global'

const fun1 = (val?: val_DTYPE) => {
  console.log('fun1', val)
  return val
}

const fun2 = (val: string) => {
  console.log('fun2', val)
  if (val) window.localStorage.setItem('fun2', val)
  return val
}

export { fun1, fun2 }
