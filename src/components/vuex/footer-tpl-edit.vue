<!--  -->
<template>
  <div class="footer-edit">
    <header>标题栏组件设置</header>
    <div class="edit-container">
      <div class="edit-item">
        <div class="title">导航设置：</div>
        <ul v-for="(item, index) in nowFooterTpl.icons" :key="index">
          <li>
            <h3 class="sub-title">图标{{index + 1}}</h3>
            <div class="item">
              <span class="label-text">图片：</span>
              <upload-img :index="index" @uploadImg="getImage"></upload-img>
            </div>
            <div class="item">
              <span class="label-text">名称：</span>
              <Input  v-model="item.value" class="edit-input"></Input>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import UploadImg from '@/components/base/upload'
export default {
  data () {
    return {
      nowFooterTpl: {
        icons: [{
          defaultIcon: 'http://oss.motherbuy.com/platform/31af22d3-01df-41fa-b07c-76183f9fcc17.png',
          value: '首页'
        },
        {
          defaultIcon: 'http://oss.motherbuy.com/platform/31af22d3-01df-41fa-b07c-76183f9fcc17.png',
          value: '分类'

        },
        {
          defaultIcon: 'http://oss.motherbuy.com/platform/31af22d3-01df-41fa-b07c-76183f9fcc17.png',
          value: '购物车'

        },
        {
          defaultIcon: 'http://oss.motherbuy.com/platform/31af22d3-01df-41fa-b07c-76183f9fcc17.png',
          value: '个人中心'
        }
        ]
      }
    }
  },
  components: {
    UploadImg
  },
  watch: {
    nowFooterTpl: {
      handler: function (val) {
        this.$bus.$emit('footerTpl', this.nowFooterTpl)
      },
      deep: true
    }
  },
  methods: {
    getImage (data) {
      let index = data.index
      let url = data.url
      this.nowFooterTpl.icons[index].defaultIcon = 'http://oss.motherbuy.com/' + url
    }
  }
}
</script>

<style scoped>
.footer-edit{
  height: 100%;
  overflow: auto;
}
header {
  line-height: 40px;
  background: #f1f1f1;
  border: 1px solid #eaeaea;
  padding-left: 17px;
}
.title,.sub-title{
  font-weight: bold;
  color: #000;
  font-size: 16px;
  padding-left:10px;
  margin: 10px;
}
.sub-title{
  font-size: 14px;
}
.item{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;
  padding: 10px;

}
.label-text{
  width: 100px;
  display: block;
}
/* .edit-item {
  margin: 20px;
}
.edit-item label {
  font-weight: bold;
  font-size: 14px;
}
.edit-item .edit-input {
  margin-top: 10px;
} */

</style>
