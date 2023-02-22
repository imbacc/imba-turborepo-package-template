// test_api module 里的测试接口 mock
export default [
  {
    url: '/api/test/111/next',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 0,
        message: 'success',
        data: {
          dd: '我是/api/test/111/next?name=wtf',
        },
      }
    },
  },
  {
    url: '/api/test/2',
    method: 'post',
    response: () => {
      return {
        code: 0,
        message: 'success',
        data: {
          dd: '我是/api/test/2?name=xxx',
        },
      }
    },
  },
  {
    url: '/api/test/put',
    method: 'put',
    response: () => {
      return {
        code: 0,
        message: 'success',
        data: {
          dd: '我是/api/test/put',
        },
      }
    },
  },
  {
    url: '/api/test/post',
    method: 'post',
    response: () => {
      return {
        code: 0,
        message: 'success',
        data: {
          dd: '我是/api/test/post',
        },
      }
    },
  },
  {
    url: '/api/test/get',
    method: 'post',
    response: () => {
      return {
        code: 0,
        message: 'success',
        data: {
          dd: '我是/api/test/get',
        },
      }
    },
  },
  {
    url: '/api/test/getcache',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'success',
        data: {
          dd: '我是/api/test/getcache',
        },
      }
    },
  },
  {
    url: '/api/test/repeat',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'success',
        data: {
          dd: '我是/api/test/repeat',
        },
      }
    },
  },
  {
    url: '/api/test/baseurl/error',
    method: 'get',
    response: () => {
      return {
        code: 500,
        message: 'error',
      }
    },
  },
  {
    url: '/api/axios/options',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'success',
        data: null,
      }
    },
  },
]
