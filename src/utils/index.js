/**
 * @author DaLei
 * @description 公共函数定义
 */

const Util = {
  /**
   *
   *
   * @param {string} [format='yyyy-MM-dd']
   * @param {*} date
   * @returns 2017-12-05 || 2017-12-05 08:02:30
   */
  getTimeFormat (format = 'yyyy-MM-dd', date) {
    // 调用：'yyyy-MM-dd'  'yyyy-MM-dd HH:mm:ss'
    return date ? date.Format(format) : new Date().Format(format)
  },
  /** 参数说明：
   * 根据长度截取先使用字符串，超长部分追加…
   * str 对象字符串
   * len 目标字节长度
   * 返回值： 处理结果字符串
   */
  cutString (str, len) {
    // length属性读出来的汉字长度为1
    if (str.length * 2 <= len) {
      return str
    }
    var strlen = 0
    var s = ''
    for (var i = 0; i < str.length; i++) {
      s = s + str.charAt(i)
      if (str.charCodeAt(i) > 128) {
        strlen = strlen + 2
        if (strlen >= len) {
          return s.substring(0, s.length - 1) + '...'
        }
      } else {
        strlen = strlen + 1
        if (strlen >= len) {
          return s.substring(0, s.length - 2) + '...'
        }
      }
    }
    return s
  },
  /**
   * 根据身份证号获取 生日
   */
  getBirthdayFromIdCard (idCard) {
    var birthday = ''
    if (idCard != null && idCard != '') {
      if (idCard.length == 15) {
        birthday = '19' + idCard.substr(6, 6)
      } else if (idCard.length == 18) {
        birthday = idCard.substr(6, 8)
      }
      birthday = birthday.replace(/(.{4})(.{2})/, '$1-$2-')
    }
    return birthday
  },
  /**
   * 根据身份证号获取 性别
   */
  getSexFromIdCard (idCard) {
    if (idCard != undefined && idCard != '') {
      var sexIndex = idCard.substr(idCard.length - 2, 1)
      if (Number(sexIndex) % 2 == 0) {
        return '女'
      } else {
        return '男'
      }
    }
  },
  /**
   * 根据 生日 获取 年龄
   */
  getAgeFromBirthday (val) {
    if (val == null || val == '' || val == undefined) {
      return ''
    }
    const cDate = new Date(val)
    return new Date().getFullYear() - parseInt(cDate.getFullYear()) + ''
  },
  /***
   * 根据 证件type返回 身份类型
   */
  getCardTypeIdentifyType (val) {
    if (!val) return ''
    switch (val) {
      case 'ID_CARDS':
        val = '身份证'
        break
      case 'PASS_PORT':
        val = '护照'
        break
      case 'PASS':
        val = '港澳台胞证'
        break
      case '身份证':
        val = 'ID_CARDS'
        break
      case '护照':
        val = 'PASS_PORT'
        break
      case '港澳台胞证':
        val = 'PASS'
        break
    }
    return val
  },
  /**
   * 根据status返回婚姻情况 1已婚 0 未婚
   */
  getMarriType (val) {
    switch (val) {
      case 1:
        val = '已婚'
        break
      case 0:
        val = '未婚'
        break
      case '已婚':
        val = '1'
        break
      case '未婚':
        val = '0'
        break
    }
    return val
  },
  getSexType (val) {
    switch (val) {
      case '男':
        return 'M'
      case '女':
        return 'F'
      default:
        return ''
    }
  },
  /***
   * 计算文字长度
   */
  GetStringLength (str) {
    return str.replace(/[\u0391-\uFFE5]/g, 'aa').length // 先把中文替换成两个字节的英文，在计算长度
  },
  /***
   * 获取设备尺寸
   */
  getScreenSize () {
    return {
      width: document.body.scrollWidth,
      height: document.body.scrollHeight
    }
  },
  /**
   *  url 参数解析
   */
  getUrlParams: function (names) {
    // 获取？后面的参数
    var urlSearch = location.href
    var urlValue = ''
    // 以？*&来拆分
    var params = urlSearch.split(/[?*&*#]/)
    for (var i = 0; i < params.length; i++) {
      // 如果url参数里包含传递过来names字段，则取=后面的部分
      if (params[i].indexOf(names) >= 0) {
        urlValue = params[i].split('=')[1]
        return urlValue
      }
    }
    return urlValue
  },
  /**
   * 返回对象类型
   */
  getTypeOf (obj) {
    const {
      toString
    } = Object.prototype
    const map = {
      '[object Boolean]': 'boolean',
      '[object Number]': 'number',
      '[object String]': 'string',
      '[object Function]': 'function',
      '[object Array]': 'array',
      '[object Date]': 'date',
      '[object RegExp]': 'regExp',
      '[object Undefined]': 'undefined',
      '[object Null]': 'null',
      '[object Object]': 'object',
      '[object Symbol]': 'symbol'
    }
    return map[toString.call(obj)]
  },
  // 微信权限配置
  wxConfig () {
    return new Promise((resolve, reject) => {
      axios_get(API.wechat_config, {
        url: location.origin,
        orgId: localStorage.getItem('orgId') || ''
      }).then(res => {
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: res.data.appId, // 必填，公众号的唯一标识
          timestamp: res.data.timestamp, // 必填，生成签名的时间戳
          nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
          signature: res.data.signature, // 必填，签名，见附录1
          jsApiList: ['addCard', 'chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        })
        wx.ready(function (res) {
          resolve(res)
        })
        wx.error(function (error) {
          reject(error)
        })
      })
    })
  },
  // 添加微信卡券到卡券包
  createWechatCoupon (sign, item) {
    let iObj = {
      timestamp: sign.timestamp,
      nonce_str: sign.nonceStr,
      signature: sign.signature,
      outer_str: sign.outerStr
    }
    window.wx.addCard({
      cardList: [{
        cardId: sign.cardId,
        cardExt: JSON.stringify(iObj)
      }],
      success: function (res) {
        // 添加卡券成功后告知后台
        if (res && res.errMsg.match('ok')) {
          let iList = res.cardList[0]
          axios_post(API.wechat_send_coupon_result, {
            memberId: localStorage.memberId,
            cardList: [
              {code: iList.code, cardId: iList.cardId, contactId: item.couponContactId}
            ]
          }).then(res => {
            store.commit('SET_ADDCARD_FLAG', true)
          })
        }
      }
    })
  },
  // 获取用户openId
  getOpenId (code) {
    return new Promise((resolve, reject) => {
      axios_get(API.wechat_openId, {
        code: code
      }).then(res => {
        if (res.code == 10000) {
          localStorage.setItem('openId', res.data.openId)
          resolve(res.data.openId)
        }
      }).catch(err => {
        reject(err)
      })
    })
  }
}
export default Util
