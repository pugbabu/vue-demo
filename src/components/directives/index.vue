<!-- 指令内容学习 -->
<template>
  <div class="directives-wrapper">
    <!-- 系统核心指令 -->
    <section class="system-directives">
      <!-- 示例1 -->
      <div class="example-block">
        <h3>1、v-if</h3>
        <p v-if="true">v-if显示示例</p>
        <Button type="info" @click="handleClick">{{ isShow1 ? '隐藏' : '显示'}}</Button>
        <transition name="fade">
          <p v-if="isShow1">70周年庆生</p>
        </transition>
      </div>
      <!-- 示例2 -->
      <div class="example-block">
        <h3>2、v-show</h3>
        <p v-show="true">v-show显示示例</p>
        <Button type="info" @click="handleClick">{{ isShow1 ? '隐藏' : '显示'}}</Button>
        <transition name="fade">
          <p v-show="isShow1">70周年庆生</p>
        </transition>
      </div>

      <!-- 示例3 -->
      <div class="example-block">
        <h3>3、v-bind</h3>
        <!-- 注意：这里的url是一个变量，不能直接写字符串 -->
        <a v-bind:href="url">去百度</a>
      </div>

       <!-- 示例4 -->
      <div class="example-block">
        <h3>4、v-on</h3>
        <a v-on:click="goTo">点我试试</a>
      </div>

       <!-- 示例5 -->
      <div class="example-block">
        <h3>5、v-for</h3>
        <!-- 遍历数组,记得价上key索引，索引值需要保持唯一性 -->
        <ul>
          <li v-for="(item, index) in items" :key="index">
            <p>姓名：{{item.name}}</p>
            <p>年龄：{{item.age}}</p>
            <!-- <p>性别：{{item.sex | sexFilter}}</p> -->
            <p>性别：{{handleSex(item.sex)}}</p>

          </li>
        </ul>
        <hr>
        <!-- 遍历对象 -->
        <ul>
          <li v-for="(value, key) in object" :key="key">
            <template v-if="key === 'time'">
              <p>{{key}}: {{value | formatTime}}</p>
            </template>
            <template v-else>
              <p>{{key}}: {{value}}</p>
            </template>
          </li>
        </ul>
        <!-- 数组更新注意点 -->
        <Button type="info" @click="changeItems">点我更新数组</Button>
      </div>

       <!-- 示例6 -->
      <div class="example-block">
        <h3>6、自定义指令</h3>
        <!-- 在产品需要搜索框自动聚焦时很有用，autofocus在某些内核中不起效果 -->
        <!-- <input type="text" v-focus> -->
        <!-- 颜色指令 -->
        <p v-color:bgColor="bgColor" v-color:fontColor="fontColor">测试指令</p>
        <!-- 当多个地方需要处理输入框为正整数时，全局指令会比在当前组件中监听输入事件更为方便 -->
        <input v-integer>
        <input @input="handleInput" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow1: false,
      url: 'http://www.baidu.com',
      items: [
        {
          name: '张三',
          age: 20,
          sex: 'male'
        },
        {
          name: '李思',
          age: 21,
          sex: 'female'
        },
        {
          name: '王二麻子',
          age: 18,
          sex: 'male'
        }
      ],
      object: {
        title: '指令学习',
        author: 'dalei',
        time: 1570762039157
      },
      bgColor: 'red',
      fontColor: 'green'
    }
  },
  created () {
    console.log(this.$data)
  },
  methods: {
    handleClick () {
      this.isShow1 = !this.isShow1
    },
    goTo () {
      window.location.href = this.url
    },
    handleSex (sex) {
      return sex === 'male' ? '男' : '女'
    },
    changeItems () {
      this.items[1] = {
        name: '哈哈',
        age: 21,
        sex: 'female'
      }
      // let item = this.items[1]
      // item.name = '哈哈哈'
      // this.$set(this.items, 1, item)
    },
    handleInput (e) {
      e.target.value = e.target.value.replace(/\D+/g, '')
    }
  },
  filters: {
    sexFilter (value) {
      return value === 'male' ? '男' : '女'
    }
  },
  directives: {
    focus: {
      inserted (el, binding) {
        el.focus() // 聚焦元素
      }
    },
    color: {
      // 第一个钩子函数  bind 指令第一次绑定到元素上
      bind: function (el, binding) {
        console.log('bind') // bind
      },
      // 第二个钩子函数  inserted 指令所在的元素插入到父节点
      inserted: function (el, binding) {
        console.log('inserted') // inserted
        // 背景颜色
        if (binding.arg === 'bgColor') {
          el.style.background = binding.value
        }
        // 字体颜色
        if (binding.arg === 'fontColor') {
          el.style.color = binding.value
        }
      },
      // 第三个钩子函数 update 数据发生变化
      update: function (el, binding) {
        console.log('update')
      },
      // 第四个钩子函数 componentUpdated 更新完毕
      componentUpdated: function (el, binding) {
        console.log('componentUpdated')
      },
      // 第五个钩子函数 unbind 解绑
      unbind: function (el, binding) {
        console.log('unbind')
      }

    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave {
  opacity: 0
}
</style>
