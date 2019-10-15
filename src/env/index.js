/**
 * @author DaLei
 * @description 不同环境下的域名地址配置
 */
const envList = {
  dev: {
    baseUrl: '',
    appId: 'wxb7ee6f2f790f6213' // 解百测试服务号 wxb7ee6f2f790f6213
  },
  test: {
    baseUrl: '',
    appId: 'wxb7ee6f2f790f6213'
  },
  weitong: {
    baseUrl: '',
    appId: 'wx52989159af26d752' // wx52989159af26d752 唯彤
  },
  prod: {
    baseUrl: '',
    appId: 'wxfd489615c5cf60c6' // wxfd489615c5cf60c6 数字解百 wx937cf2718011049d 杭州大厦购物城
  }
}
const currentEnv = 'prod'

export default envList[currentEnv]
