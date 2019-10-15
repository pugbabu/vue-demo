<!-- 二维码弹窗组件 -->
<template>
  <transition name="mm-dialog-fade">
    <div class="dialog-box" v-show="dialogShow">
        <div class="mm-dialog-content" @click="dialogShow = false">
            我是一个弹窗，哈哈！
        </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      dialogShow: false,
      text: 'what'
    }
  },
  watch: {
    dialogShow (val) {
      if (val) {
        // 执行动作
      }
    }
  },
  mounted () {

  },
  methods: {
    show () {
      this.dialogShow = true
    }
  }
}
</script>

<style scoped>
.dialog-box {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.72);
  user-select: none;
}
.dialog-box.mm-dialog-fade-enter-active {
  animation: mm-dialog-fadein 0.3s;
}

.mm-dialog-content{
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%,-50%,0);
  background: #fff;
}
@keyframes mm-dialog-fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
