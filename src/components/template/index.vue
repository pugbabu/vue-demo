<!-- 模版内容学习 -->
<template>
  <div class="template-content">
    <!-- 示例1 -->
    <div class="example-block">
       <h3>1、文本插值</h3>
       <p>
         {{message1}}
        </p>
        <p>{{handleStatus()}}</p>
    </div>

    <!-- 示例2 -->
    <div class="example-block">
      <h3>2、表达式插值</h3>
      <p>
         {{ isMale ? '男' : '女' }}
      </p>
      <p>
         {{ message2.split('').reverse().join('')}}
      </p>
    </div>

    <!-- 示例3 -->
    <div class="example-block">
       <h3>3、v-text</h3>
       <p v-text="message3"> </p>
       <p v-text="handleStatus()"></p>
    </div>

    <!-- 示例4 -->
    <div class="example-block">
       <h3>4、v-html</h3>
       <p v-html="message4"> </p>
    </div>

    <!-- 示例5 -->
    <div class="example-block">
       <h3>5、class绑定</h3>
       <!-- 对象语法 -->
       <p :class="{'active': isActive, 'text-red': hasError}">对象语法绑定class示例1</p>
       <p :class="{'active': status == 1, 'text-red': hasError}">对象语法绑定class示例2</p>
       <!-- 数组语法 -->
       <p :class="[activeClass, errorClass]">数组语法绑定class示例1</p>
       <p :class="[isActive ? activeClass : '', status == 1 ? 'text-green' : '']">数组语法绑定class示例2</p>
       <!-- 组件绑定 -->
       <!-- <a-template :class="{'active'; isActive}"></a-template> -->
    </div>

    <!-- 示例6 -->
    <div class="example-block">
       <h3>6、style绑定</h3>
       <!-- 对象语法 -->
       <p :style="{color: colorStyle, border: borderStyle, fontSize: fontSize + 'px'}">对象语法绑定style示例1</p>
       <p :style="styleObject">styleObject示例</p>
       <!-- 数组语法 -->
       <p :style="[baseStyle, overridingStyles]">数组语法绑定style</p>
    </div>

    <!-- 示例7 -->
    <div class="example-block">
       <h3>7、过滤器</h3>
       <!-- 局部过滤器 -->
       <p>{{ text | myFilter}}</p>
       <p>{{ text | myFilter | filterLength}}</p>
       <p>{{ text | filterFunc('hello', 'world')}}</p>

       <!-- 全局过滤器 -->
       <p>{{ startTime | formatTime}}</p>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      status: 1,
      message1: '我是示例1',
      isMale: true,
      message2: '天龙巴布',
      message3: '示例3:v-text',
      message4: `this is a <b style="color:red;">html</b> document`,
      isActive: false,
      hasError: true,
      activeClass: 'active',
      errorClass: 'text-red',
      borderStyle: '1px solid red',
      fontSize: 20,
      styleObject: {
        color: 'green',
        fontSize: '16px'
      },
      baseStyle: {
        color: 'green',
        fontSize: '16px'
      },
      overridingStyles: {
        width: '150px',
        height: '100px',
        border: '3px solid red'
      },
      startTime: 1570762039157,
      text: '大王'

    }
  },
  computed: {
    colorStyle () {
      return this.status === 1 ? '#000000' : 'yellow'
    }
  },
  methods: {
    handleStatus () {
      if (this.status === 1) {
        return '进行中'
      }
      return ''
    }
  },
  filters: {
    myFilter (value) {
      return value.split('').reverse().join('')
    },
    filterLength (value) {
      return value.length
    },
    filterFunc (value, arg1, arg2) {
      return value + '-' + arg1 + '-' + arg2
    }
  }
}
</script>

<style>
/* :root { --color: blue; } */
.active{
  font-size: 20px;
}
.text-red{
  color:red;
}
.text-green{
  color: green;
}
</style>
