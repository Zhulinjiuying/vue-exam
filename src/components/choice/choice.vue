<template>
  <el-form>
    <component :is="item" v-for="(question, index) in questions" :question="question" :answer="answer" :index="index">
    </component>
  </el-form>
</template>
<script>
  import MultipleChoice from '@/components/multiplechoice/multiplechoice.vue'
  import SingleChoice from '@/components/singlechoice/singlechoice.vue'
  import TfChoice from '@/components/tfchoice/tfchoice.vue'

  export default {
    props: {
      questions: {
        type: Array
      },
      item: {
        type: String,
        default: 'SingleChoice'
      },
      answer: {
        type: Array
      }
    },
    components: {
      SingleChoice,
      MultipleChoice,
      TfChoice
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>