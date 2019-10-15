<!-- 标题组件 -->
<template>
  <div class="title-tpl">
    <Icon type="md-arrow-round-back" class="arrow-icon" />
    <span class="title-text" :style="{color: nowContent.fontColor}">{{nowContent.titleName}}</span>
  </div>
</template>

<script>
import CommonMixin from '@/mixins/common-mixin'
export default {
  data () {
    return {

    }
  },
  mixins: [CommonMixin],
  created () {
    let defaultContent = {
      titleName: '页面标题', // 页面标题
      fontColor: '#666' // 初始化颜色，需要和产品定一下
    }
    this.setDefaultContent(defaultContent)
    this.onEdit()
  },
  methods: {
    onEdit () {
      this.$bus.$on('titleTpl', val => {
        this.nowContent = val
      })
    }
  }
}
</script>

<style scoped>
.title-tpl{
   height:50px;
  line-height:50px;
  background: #EAEAEA;
  text-align: center;
  background-size:100% 100%!important;
  position: relative;
}
.arrow-icon{
  position: absolute;
  left: 10px;
  top:50%;
  transform: translateY(-50%);
}
.title-text{
  font-size: 12px;
    color:#666;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
}
</style>
