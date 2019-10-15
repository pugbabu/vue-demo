/**
 * @author DaLei
 * @description 不同环境下的域名地址配置
 */
const envList = {
  dev: {
    baseUrl: 'http://test.mamago.com',
    appId: 'wxb7ee6f2f790f6213'
  },
  test: {
    baseUrl: 'http://test.mamago.com',
    appId: 'wxb7ee6f2f790f6213'
  },
  pre: {
    baseUrl: 'https://pre-test.motherbuy.com',
    appId: 'wx52989159af26d752'
  },
  prod: {
    baseUrl: 'https://m.motherbuy.com',
    appId: 'wxfd489615c5cf60c6'
  }
}
const currentEnv = 'prod'

export default envList[currentEnv]
