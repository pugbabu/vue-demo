<!-- 组件a -->
<template>
  <div class="wrapper">
    <div class="title" @click="show" :style="{'color': color}">{{title}}</div>
  </div>
</template>

<script>
export default {
  props: ['title', 'color'],
  data () {
    return {
      flag: false
    }
  },
  methods: {
    show () {
      this.flag = !this.flag
      this.$emit('show', this.flag)
      // 下面是演示bus传递数据
      this.flag ? this.$bus.$emit('emitComponentC', 'hello c') : this.$bus.$emit('emitComponentC', '')
    }
  }
}
</script>

<style scoped>
.wrapper{
  border: 1px solid #000;
  height: 300px;
}
</style>
