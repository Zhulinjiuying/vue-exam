<template>
  <div class="mulitple">
    <el-form-item :label="question.title">
    </el-form-item>
    <el-form-item v-for="(item, index) in question.item">
      <el-checkbox class="radio" v-model="checked" :label="index + 1">{{question.item[index]}}</el-checkbox>
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
        checked: []
      }
    },
    mounted: function() {
      if (typeof this.answer[this.index] === 'number') {
        this.checked = Array.from({length: this.question.item.length}, () => 0)
      } else {
        this.checked = this.answer[this.index]
      }
    },
    watch: {
      'checked': function() {
        this.answer[this.index] = this.checked
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>