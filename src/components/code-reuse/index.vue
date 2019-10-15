<!-- 代码复用学习 -->
<template>
  <div class="code-reuse">
    <code-one ref="codeOne"></code-one>
    <code-two></code-two>
    <code-three></code-three>
  </div>
</template>

<script>
import CodeOne from './code-one'
import CodeTwo from './code-two'
import CodeThree from './code-three'

export default {
  data () {
    return {
    }
  },
  provide () {
    return {
      isJSON: this.isJSON
    }
  },
  mounted () {
    let getNode = function (currentNode, node) {
      if (currentNode.$refs[node]) {
        return currentNode.$refs[node]
      } else {
        if (currentNode.$vnode.componentInstance.$children.length) {
          currentNode = currentNode.$vnode.componentInstance.$children[0]
          return getNode(currentNode, node)
        }
      }
    }
  },
  components: {
    CodeOne,
    CodeTwo,
    CodeThree
  },
  methods: {
    /**
     * 判断字符串是否标准json字符串
     */
    isJSON (str) {
      if (typeof str === 'string' && str != 'NaN') {
        try {
          let obj = JSON.parse(str)
          if (typeof obj === 'object' && obj) {
            return true
          } else {
            return false
          }
        } catch (e) {
          return false
        }
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
.code-reuse{
  height: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
