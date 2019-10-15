<!--  -->
<template>
  <div class="footer-tpl">
    <ul class="footer-box">
      <li v-for="item in nowContent.icons" :key="item.id">
        <img :src="item.defaultIcon"/>
        <p>{{item.value}}</p>
      </li>
    </ul>
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
    this.setDefaultContent(defaultContent)
    this.onEdit()
  },
  methods: {
    onEdit () {
      this.$bus.$on('footerTpl', val => {
        this.nowContent = val
      })
    }
  }

}
</script>

<style scoped>
.footer-tpl{
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  height:50px;
  border-top: 1px solid #ddd;
}
.footer-box{
  display: flex;
  width: 100%;
  height: 100%;
}
.footer-box li{
  flex:1;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;

}
.footer-box li img{
  width: 20px;
  height: 20px;
}
</style>
