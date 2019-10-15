<!-- 标题组件 -->
<template>
  <div class="title-tpl" @click.self="showCloseIcon">
    <Icon
      v-if="isShowIcon"
      type="ios-close"
      class="close-icon"
      color="red"
      size="20"
      @click="handleDelete" />
    <Icon type="md-arrow-round-back" class="arrow-icon" />
    <span class="title-text" :style="{color: nowContent.fontColor}">{{nowContent.titleName}}</span>
  </div>
</template>

<script>
import CommonMixin from '@/mixins/common-mixin'
export default {
  data () {
    return {
      isShowIcon: false
    }
  },
  mixins: [CommonMixin],
  computed: {
    items () {
      return this.$store.getters.items
    }
  },
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
    },
    showCloseIcon () {
      this.isShowIcon = !this.isShowIcon
      this.$store.commit('setCurrentEditComponent', 'title-tpl-edit')
    },
    handleDelete () {
      let items = this.items
      let i = items.findIndex(val => {
        return val.type == 'title-tpl'
      })
      items.splice(i, 1)
      this.$store.commit('setItems', items)
      this.$store.commit('setCurrentEditComponent', '')
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
.close-icon{
  position: absolute;
  right: 10px;
  top: 5px;
}
</style>
