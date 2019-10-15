<!--  -->
<template>
  <div>
    <Upload
      ref="uploadOne"
      :on-success="handleSuccess"
      :on-error="handleError"
      :format="['jpg','jpeg','png','gif']"
      :max-size="2048"
      :action="api"
      :headers="headers"
      :show-upload-list="false"
      name="image"
      class="image"
      >
        <Button v-if="!imgSrc" style="width:100%;height:100%">
          <span>上传图片</span>
        </Button>
        <div v-else style="display:inline-block;width:100%;height:100%">
            <img style="width:50px;height:50px;" :src="imgUrl + imgSrc" alt="图片">
        </div>
    </Upload>
  </div>
</template>

<script>
export default {
  props: ['index'],
  data () {
    return {
      imgSrc: '',
      imgUrl: 'http://oss.motherbuy.com/',
      api: 'https://api.motherbuy.com/decorate/upload/img',
      headers: {
        userLoginId: '287da7dc209d9224a22c4700cc1c9777'
      }
    }
  },
  methods: {
    handleSuccess (res, file) {
      console.log(res)
      if (res.code != 200) {
        this.$Message.error('上传出现错误')
      } else {
        this.imgSrc = res.data
        this.$emit('uploadImg', {
          url: res.data,
          index: this.index
        })
      }
    },
    handleError (error) {
      if (error) {
        this.$Message.error('上传出现错误')
      }
    }
  }
}
</script>

<style scoped>
</style>
