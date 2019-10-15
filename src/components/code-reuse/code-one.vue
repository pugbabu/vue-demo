<!--  -->
<template>
  <div class="wrapper">
    {{flag}}
    <!-- <ul>
      <li v-for="(item, index) in list" :key="index" @click="jump(item.type, item.value)">
        type: {{item.type}}
        <br>
        value: {{item.value}}
      </li>
    </ul> -->
  </div>
</template>

<script>
import CommonMixin from '@/mixins/common-mixin'
import CodeTest from './code-test'
export default {
  data () {
    return {
      flag: null,
      list: [
        {
          type: 1,
          value: 'http://www.baidu.com'
        },
        {
          type: 2,
          value: 222
        },
        {
          type: 3,
          value: 333
        },
        {
          type: 4,
          value: 444
        }
      ]
    }
  },
  components: {
    CodeTest
  },
  mixins: [CommonMixin],
  inject: ['isJSON'],
  created () {
    let str = 'hello'
    console.log(this.isJSON(str))
    this.flag = this.isJSON(str)
  }
}
</script>

<style scoped>
.wrapper{
  height: 100%;
  flex: 1;
  background: #17233d;
font-size: 20px;
  color: #fff;
}
ul {
 margin-top: 20px;
}
li{
  padding: 10px 0;
  margin-bottom: 10px;
  background: #000;
  color: #fff;
  line-height:50px;
  text-align: center;

}
</style>
