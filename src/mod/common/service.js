
import device from 'kqjs/lib/env';
import axios from 'axios';


// 生产环境： https://opa.99bill.com/finder
// DEV:http://192.168.55.213:8081/finder

// 个人用户：uId   ：10228
// 企业用户uId:10233 本行  ； uId:10241  跨行
//
const $axios = axios.create({
  baseURL: 'http://192.168.55.214:8099/finder',
  headers: {
    post: {
      'x-99bill-platformcode': '200000000000028',
      // 'content-type': 'application/json',
      // 'X-99bill-Signature': ''
    }
  }
})

export const request = (opt)=>{
  return $axios({
    method: 'post',
    // headers: { 'x-99bill-traceid': Date.now() },
    ...opt
  });
}
