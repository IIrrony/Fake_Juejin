//对axios进行第二次封装
import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

const request = axios.create({
  timeout: 5000,
  headers: {
    "Access-Control-Allow-Origin":"*"
  }
})

//请求拦截器
request.interceptors.request.use((config) => {
  
  if (localStorage.token) {
    config.headers.common['Authorization'] = "Bearer "+ localStorage.token
  }
  nprogress.start()
  return config;

})

//响应拦截器
request.interceptors.response.use((res) => {
  nprogress.done()
  //响应成功回调函数
  return res.data;
}, (error) => {
  //响应失败回调函数
  console.log(error.status);
  
  return Promise.reject(new Error('false'))
})

export default request;