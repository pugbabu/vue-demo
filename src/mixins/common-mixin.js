export default {
  props: ['content'],
  data () {
    return {
      bg: '',
      nowContent: {}
    }
  },
  methods: {
    jump (type, value) {
      switch (type) {
        case 1:
          window.location.href = value
          break
        case 2:
          this.$router.push(`/shop/${value}`)
          break
        case 3:
          this.$router.push(`/goods-detail/${value}`)
          break
        default:
          break
      }
    },
    setDefaultContent (obj) {
      let _this = this
      if (_this.content === null || _this.content === '{}') { // 新加组件时，组件内容设置一个默认值如下
        _this.nowContent = obj
      } else { // 保存完回头继续编辑的时候，拿到content内容进行回显示
        _this.nowContent = JSON.parse(_this.content)
        _this.bg = _this.getBg(_this.nowContent)
        _this.borderStyle = _this.getBorderStyle(_this.nowContent)
      }
    },
    getBorderStyle (obj) {
      if (obj.hasOwnProperty('lineType')) {
        return obj.height + 'px ' + obj.lineType + ' ' + obj.color
      } else {
        return ''
      }
    },
    getBg (obj) {
      if (obj.hasOwnProperty('backgroundShowWay')) {
        switch (obj.backgroundShowWay) {
          case 0:
            return obj.backgroundColor
          case 2:
            obj.backgroundColor = this.defaultBgColor// 设置为默认颜色
            return obj.backgroundColor
        }
      }
    }
  }
}
