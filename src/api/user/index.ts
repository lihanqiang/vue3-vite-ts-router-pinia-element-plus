import http from '@/api'

// demo
export const getUser = () => {
  return http.get('http://www.baidu.com')
}
