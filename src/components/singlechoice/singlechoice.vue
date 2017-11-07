<template>
  <div class="single">
    <el-form-item :label="question.title">
    </el-form-item>
    <el-form-item v-for="(item, index) in question.item">
      <el-radio class="radio" v-model="radio" :label="index + 1">{{question.item[index]}}</el-radio>
    </el-form-item>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        radio: ''
      }
    },
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
    created: function() {
      if (typeof this.answer[this.index] === 'number') {
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