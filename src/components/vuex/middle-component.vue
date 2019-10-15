<!-- 中间栏组件 -->
<template>
  <div class="wrapper" @drop="dropNow($event)" @dragover="allowDrop($event)">
    <li :is="item.type" v-for="(item, index) in nowItems"  :content="item.content" :name="item.name" :key="index"></li>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      nowItems: [],
      tpls: ['title-tpl', 'footer-tpl']
    }
  },
  created () {
    this.asyncImport()
  },
  methods: {
    dropNow (ev) { // 拖到空白区域的时候，触发此方法
      ev.preventDefault()
      let data = ev.dataTransfer.getData('Text')
      let obj = JSON.parse(data)
      this.add(obj.type, obj.name)
      this.$store.commit('setCurrentEditComponent', obj.type + '-edit')
    },
    allowDrop (ev) {
      ev.preventDefault()
    },
    add (type, name) {
      this.nowItems.push({
        type,
        name,
        content: '{}'
      })
      this.$store.commit('setItems', this.nowItems)
    },
    asyncImport () {
      this.tpls.forEach(val => {
        if (!Vue.options.components[val]) {
          Vue.component(val, () =>
              import('./' + val + '.vue')
          )
        }
      })
    }
  }
}
</script>

<style scoped>
.wrapper{
  height: 100%;
  width: 377px;
  border: 1px solid #EAEAEA;
  margin-left: 40px;
  position: relative;
  box-shadow: 0 0 20px #00c1de;
    border: 1px solid #00c1de;
}
</style>
