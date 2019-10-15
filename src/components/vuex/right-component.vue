<!--  -->
<template>
   <div class="current-component">
    <component :is="currentEditComponent"></component>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      tpls: ['title-tpl-edit', 'footer-tpl-edit']

    }
  },
  computed: {
    currentEditComponent () {
      return this.$store.getters.currentEditComponent
    }
  },
  created () {
    this.asyncImport()
  },
  methods: {
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
.current-component{
  min-width: 426px;
  height: 100%;
  border: 1px solid #EAEAEA;
  border-radius: 4px;
  margin-left: 40px;
  box-shadow: 0 0 20px #00c1de;
  border: 1px solid #00c1de;
}
</style>
