/**
 * @author Dalei
 * @description 本文件是配置接口地址
 */
export default {
  /**
   * 微信接口模块
   */
  wechat_config: '/webchatgroup-server/api/webchat/coupon/weixinCoupon/getWechatConfig', // 微信jssdk配置信息
  wechat_get_coupon_sign: '/webchatgroup-server/api/webchat/coupon/weixinCoupon/getCouponSignInfoToAddCard', // 根据优惠券获取卡券签名信息
  wechat_send_coupon_result: '/webchatgroup-server/api/webchat/coupon/weixinCoupon/wechatAddCardResult', // 领券成功后把卡券信息告知后台便于后面核销
  webchat_all_qrcode: '/webchatgroup-server/api/webchat/coupon/use/couponQrCode', // 统一获取优惠券二维码
  wechat_openId: '/webchatgroup-server/api/webchat/get/openId', // 获取openId

  /**
   * 活动模块
   */
  activity_list: '/webchatgroup-server/api/activity/list', // 活动列表
  activity_detail: '/webchatgroup-server/api/activity/get', // 活动详情
  cost_info: '/webchatgroup-server/api/activity/item/cost/get', // 获取支付信息
  activity_pay: '/webchatgroup-server/api/activity/item/pay', // 立即支付
  order_detail: '/webchatgroup-server/api/activity/order/get', // 订单详情

  /**
   * 会员中心模块
  */
  member_info: '/webchatgroup-server/api/webchat/member/info', // 会员中心信息
  member_code: '/webchatgroup-server/api/webchat/member/getQRCode', // 会员二维码
  member_edit: '/webchatgroup-server/api/webchat/member/edit', // 修改个人信息
  member_config: '/webchatgroup-server/api/webchat/member/config', // 会员可修改字段
  member_score_detail: '/webchatgroup-server/api/webchat/member/scoreDetail', // 积分成长值明细
  member_grade_desc: '/webchatgroup-server/api/webchat/member/gradeDescription', // 规则说明
  member_ticket_count: '/webchatgroup-server/api/webchat/member/ticketCount', // 我的卡券
  member_isPerfect: '/webchatgroup-server/api/webchat/member/isPerfect', // 查询会员是否完善过信息
  member_registerConfig: '/webchatgroup-server/api/webchat/member/registerConfig', // 会员完善信息
  member_needmerge: '/webchatgroup-server/api/webchat/member/card/memberCardNeedMerge', // 用户是否需要进行卡号融合
  member_card_list: '/webchatgroup-server/api/webchat/member/card/list', // C端会员卡列表
  member_set_card: '/webchatgroup-server/api/webchat/member/card/setDefaultCardNo', // C端选择默认卡号（卡号融合）
  /**
   * 门票模块
   */
  ticket_list: '/webchatgroup-server/api/ticket/list', // 我的门票列表
  ticket_detail: '/webchatgroup-server/api/ticket/get', // 门票详情
  ticket_count: '/webchatgroup-server/api/ticket/get/count', // 门票数量
  ticket_writeoff: '/webchatgroup-server/api/ticket/writeoff', // 门票核销

  /**
   * 优惠券模块
  */
  coupon_center_list: '/webchatgroup-server/api/webchat/coupon/center/list', // 领券中心列表
  coupon_member_list: '/webchatgroup-server/api/webchat/coupon/member/pageList', // 我的优惠券列表
  coupon_member_count: '/webchatgroup-server/api/webchat/coupon/member/countAvailable', // 我的可用优惠券数量
  coupon_detail: '/webchatgroup-server/api/webchat/coupon/center/detail', // 券中心优惠券详情

  coupon_member_detail: '/webchatgroup-server/api/webchat/coupon/member/detail', // 我的优惠券详情
  coupom_revieve: '/webchatgroup-server/api/webchat/coupon/center/recieve', // 优惠券领取
  coupon_market_list: '/webchatgroup-server/api/webchat/coupon/marketing/list', // 获取活动优惠券列表
  coupon_writeoff_info: '/webchatgroup-server/api/webchat/coupon/getWriteOffInfo', // 获取优惠券核销详情
  coupon_writeoff: '/webchatgroup-server/api/webchat/coupon/writeOffCouponC', // 获取优惠券核销详情

  /**
   * 核销模块
   */
  writeoff_org_list: '/webchatgroup-server/api/ticket/tree/get', // 获取核销绑定页的公司列表
  writeoff_bind: '/webchatgroup-server/api/ticket/writer/save', // 核销页面绑定接口
  writeoff_iswriter: '/webchatgroup-server/api/ticket/writeoff/isWriter', // 查询是否具有核销权限
  writeoff_detail: '/webchatgroup-server/api/ticket/writeoff/ticket/detail', // 获取核销内容
  writeoff_ticket: '/webchatgroup-server/api/ticket/writeoff', // 核销

  /**
   * 广告位模块
   */
  add_space: '/webchatgroup-server/api/webchat/setting/getAdSpace', // 获取广告位信息

  /**
   * 游戏模块
   */
  game_info: '/webchatgroup-server/api/game/info', // 获取游戏信息
  game_member_qualification: '/webchatgroup-server/api/game/memberGameQualification', // 用户游戏资格信息
  game_my_award: '/webchatgroup-server/api/game/myAward', // 我的奖品列表
  game_draw_result: '/webchatgroup-server/api/game/proceedGame', // 游戏结果（转盘小游戏）
  game_award_detail: '/webchatgroup-server/api/game/memberAwardDetail' // 奖品详情
}
