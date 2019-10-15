<!-- 组件c -->
<template>
  <div class="wrapper">
    <h3>我是组件c</h3>
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  mounted () {
    this.$bus.$on('emitComponentC', (msg) => {
      this.text = msg
    })
  }
}
</script>

<style scoped>
.wrapper{
  border: 1px solid #000;
  height: 300px;
  margin-top: 30px;
}
</style>
