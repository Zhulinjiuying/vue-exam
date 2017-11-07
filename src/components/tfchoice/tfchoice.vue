<template>
  <div class="tf">
    <el-form-item :label="question.title">
    </el-form-item>
    <el-form-item >
      <el-radio class="radio" v-model="radio" label="1">对</el-radio>
      <el-radio class="radio" v-model="radio" label="2">错</el-radio>
    </el-form-item>
  </div>
</template>
<script>
  export default {
    props: {
      question: {
        type: Object
      },
      answer: {
        type: Array
      },
      index: {
        type: Number
      }
    },
    data() {
      return {
        radio: ''
      }
    },
    mounted: function() {
      if (typeof this.answer[this.index] === 'string') {
        this.radio = this.answer[this.index]
      }
    },
    watch: {
      'radio': function() {
        this.answer[this.index] = this.radio
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>