<!-- 标题栏编辑-->
<template>
  <div class="title-edit">
    <header>标题栏组件设置</header>
    <div class="edit-container">
      <div class="edit-item">
        <label>标题名称：</label>
        <Input  v-model="nowTitleTpl.titleName" placeholder="页面标题" class="edit-input"></Input>
      </div>
      <div class="edit-item">
        <label>标题颜色：</label>
        <colorPicker v-model="nowTitleTpl.fontColor"></colorPicker>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nowTitleTpl: {
        titleName: '页面标题', // 页面标题
        autoHidden: 0, // 0不隐藏，1隐藏
        backgroundShowWay: 0, // 背景展示方式 0背景颜色1图片2默认颜色
        fontColor: '#666', // 初始化颜色，需要和产品定一下
        backgroundColor: '', // 背景颜色
        backgroundImage: '', // 背景图片
        isShareShow: 0, // 0隐藏分享1显示分享
        isSearchShow: 0 // 0隐藏搜索1显示搜索
      }
    }
  },
  watch: {
    nowTitleTpl: {
      handler: function (val) {
        this.$bus.$emit('titleTpl', this.nowTitleTpl)
      },
      deep: true
    }
  }
}
</script>

<style scoped>
header{
  line-height: 40px;
  background: #F1F1F1;
  border: 1px solid #EAEAEA;
  padding-left: 17px;
}

.edit-item{
  margin: 20px;
}
.edit-item label{
  font-weight: bold;
  font-size: 14px;
}
.edit-item .edit-input{
  margin-top: 10px;
}
</style>
