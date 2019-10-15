<!-- vuex页面演示 -->
<template>
  <div class="vuex-container">
    <!-- 左侧一栏 -->
    <left-component></left-component>
    <!-- 中间栏 -->
    <middle-component></middle-component>
    <!-- 右侧栏 -->
    <right-component></right-component>
  </div>
</template>

<script>
import LeftComponent from './left-component'
import MiddleComponent from './middle-component'
import RightComponent from './right-component'
export default {
  data () {
    return {}
  },
  components: {
    LeftComponent,
    MiddleComponent,
    RightComponent
  }
}
</script>

<style scoped>
.vuex-container{
  height: 100%;
  display: flex;
}
</style>
