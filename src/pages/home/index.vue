<!-- 首页 -->
<template>
  <div class="home-wrapper">
    <Menu mode="horizontal" :theme="theme1" :active-name="activeName" @on-select="handleMenuChange">
      <MenuItem name="1">
        <Icon type="ios-paper"/>模版内容
      </MenuItem>
      <MenuItem name="2">
        <Icon type="ios-people"/>指令
      </MenuItem>
      <MenuItem name="3">
        <Icon type="ios-people"/>组件通信
      </MenuItem>
      <MenuItem name="4">
        <Icon type="ios-people"/>vuex
      </MenuItem>
      <MenuItem name="5">
        <Icon type="ios-construct"/>代码复用
      </MenuItem>
    </Menu>
    <section class="content">
      <!-- 模版内容 -->
      <template-content v-if="activeName == 1"></template-content>
      <!-- 指令 -->
      <directives-content v-else-if="activeName == 2"></directives-content>
      <!-- 组件通信 -->
      <component-communication v-else-if="activeName == 3"></component-communication>
      <!-- vuex演示 -->
      <vuex-container v-else-if="activeName == 4"></vuex-container>
      <!-- 代码复用演示 -->
      <code-reuse v-else></code-reuse>
    </section>
  </div>
</template>

<script>
import TemplateContent from '@/components/template'
import DirectivesContent from '@/components/directives'
import ComponentCommunication from '@/components/communication'
import VuexContainer from '@/components/vuex'
import CodeReuse from '@/components/code-reuse'
export default {
  data () {
    return {
      theme1: 'dark',
      activeName: '1'
    }
  },
  components: {
    TemplateContent,
    DirectivesContent,
    ComponentCommunication,
    VuexContainer,
    CodeReuse
  },
  methods: {
    handleMenuChange (name) {
      this.activeName = name
    }
  }
}
</script>

<style scoped>
.home-wrapper {
  height: 100%;
}
.content {
  padding: 40px;
  height: calc(100% - 60px);
}
</style>
