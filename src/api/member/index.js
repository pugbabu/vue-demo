/**
 * @author Dalei
 * @description 会员模块的各个请求方法定义
 */
import API from '../config';
import {
  axios_get,
  axios_post
} from '../../axios'
const MEMBER_API = {
  member_info: (data) => {
    return axios_get(API.member_info, data).then(res => {
      return Promise.resolve(res);
    })
  },
  member_code: (data) => {
    return axios_get(API.member_code, data).then(res => {
      return Promise.resolve(res);
    })
  },
  member_edit: (data) => {
    return axios_post(API.member_edit, data).then(res => {
      return Promise.resolve(res);
    })
  },
  member_config: (data) => {
    return axios_get(API.member_config, data).then(res => {
      return Promise.resolve(res);
    })
  },
  member_score_detail: (data) => {
    return axios_post(API.member_score_detail, data).then(res => {
      return Promise.resolve(res);
    })
  },
  member_grade_desc: (data) => {
    return axios_get(API.member_grade_desc, data).then(res => {
      return Promise.resolve(res);
    })
  },
  member_ticket_count: (data) => {
    return axios_get(API.member_ticket_count, data).then(res => {
      return Promise.resolve(res);
    })
  },
  member_isPerfect: (data) => {
    return axios_get(API.member_isPerfect, data).then(res => {
      return Promise.resolve(res);
    })
  },
  member_registerConfig: (data) => {
    return axios_get(API.member_registerConfig, data).then(res => {
      return Promise.resolve(res);
    })
  },
  member_needmerge: (data) => {
    return axios_get(API.member_needmerge, data).then(res => {
      return Promise.resolve(res);
    })
  },
  member_card_list: (data) => {
    return axios_get(API.member_card_list, data).then(res => {
      return Promise.resolve(res);
    })
  },
  member_set_card: (data) => {
    return axios_post(API.member_set_card, data).then(res => {
      return Promise.resolve(res);
    })
  },
}
export default MEMBER_API
