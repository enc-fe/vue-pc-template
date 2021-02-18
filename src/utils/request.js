import axios from 'axios'
import { Message } from 'element-ui'
import Bus from '@/utils/bus/bus.js'
const service = axios.create({
  // baseURL: '', // api 的 base_url
  timeout: 25000 // request timeout
})
// request interceptor
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    if (response.config.url.includes('/epms')) {
      if (response.status === 200 && response.data.resultCode === 0) {
        return response.data.data
      } else {
        Message({
          message: response.data.resultMessage,
          type: 'error'
        })
        Bus.$emit('global-error')
        return Promise.reject(new Error('请求失败'))
      }
    }
    return response.data
  },
  error => {
    Bus.$emit('global-error')
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(new Error(error))
  }
)

export default service
