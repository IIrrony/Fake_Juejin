import requests from "./request";

// 使用方法：
// export const getRegister = (username, password) => requests({
//   url: '/api/register', method: 'post', params: {
//     username: username,
//     password: password
//   }
// })
//
//页面需要调用此接口时 import {getRegister, getLogin} from "@/api/index.js" 进去
//然后直接调用方法即可

export const GetData = () => requests({
  url: '/api/lists', method: 'post'
})