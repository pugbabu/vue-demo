<!-- 左侧组件库 -->
<template>
  <div class="wrapper">
    <h2>组件库</h2>
    <ul>
      <li v-for="(item, index) in collapses" :key="index">
        <h3>{{item.title}}</h3>
        <div class="info" draggable="true" @dragstart="drag($event, item)">
          <Icon :type="item.icon" />
          <p>{{item.name}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      collapses: [
        {
          title: '页面头部组件',
          name: '标题栏',
          icon: 'md-barcode',
          type: 'title-tpl'
        },
        {
          title: '页面底部组件',
          name: '导航标签',
          icon: 'md-navigate',
          type: 'footer-tpl'
        }
      ]
    }
  },
  methods: {
    drag (evt, item) {
      evt.dataTransfer.setData('Text', JSON.stringify({type: item.type, name: item.name}))
    }
  }
}
</script>

<style scoped>
.wrapper{
  height: 100%;
  width: 200px;
  border: 1px solid #EAEAEA;
  border-radius: 4px;
  box-shadow: 0 0 20px #00c1de;
    border: 1px solid #00c1de;
}
h2{
  line-height: 40px;
  background: #f1f1f1;
  text-align: center;
}
h3{
  line-height: 30px;
  color: #666;
  padding-left: 20px;
  margin: 10px 0;

}
.info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #F8F8F9;
  border: 1px solid #EAEAEA;
  border-radius: 4px;
  width: 80px;
  height: 80px;
  margin-left: 20px;

}
.info p{
  margin-top: 10px;
}
</style>
