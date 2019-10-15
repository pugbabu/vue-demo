<!-- 组件通信学习 -->
<template>
  <div class="communication-wrapper">
    <p v-if="isShowText">测试父子组件通信</p>
    <Button type="info" @click="showComponentB">点击</Button>
    <a-component title="我是a组件" :color="color" @show="handleShow"></a-component>
    <b-component ref="componentB"></b-component>
    <c-component></c-component>
  </div>
</template>

<script>
import AComponent from './a-component'
import BComponent from './b-component'
import CComponent from './c-component'

export default {
  data () {
    return {
      isShowText: false,
      color: 'red'
    }
  },
  components: {
    AComponent,
    BComponent,
    CComponent
  },
  methods: {
    handleShow (data) {
      console.log(data)
      this.isShowText = data
    },
    showComponentB () {
      console.log(this.$refs.componentB.text)
      this.$refs.componentB.show()
    },
    asyncComp () {
      if (!Vue.options.components[comp]) {
        Vue.component(comp, () =>
            import('../' + comp + '.vue')
        )
      }
    }
  }
}
</script>

<style scoped>
</style>
