/**
 * @author Dalei
 * @description 活动模块的各个请求方法定义
 */
import API from '../config';
import {
  axios_get,
  axios_post
} from '../../axios'
const ACTIVITY_API = {
  activity_list: (data) => {
    return axios_post(API.activity_list, data).then(res => {
      return Promise.resolve(res);
    })
  },
  activity_detail: (data) => {
    return axios_post(API.activity_detail, data).then(res => {
      return Promise.resolve(res);
    })
  },
  cost_info: (data) => {
    return axios_post(API.cost_info, data).then(res => {
      return Promise.resolve(res);
    })
  },
  activity_pay: (data) => {
    return axios_post(API.activity_pay, data).then(res => {
      return Promise.resolve(res);
    })
  },
  order_detail: (data) => {
    return axios_post(API.order_detail, data).then(res => {
      return Promise.resolve(res);
    })
  }
}

export default ACTIVITY_API
