import Vue from 'vue'
import Router from 'vue-router'
import Choice from '@/components/choice/choice.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/singleQuesitions',
      component: Choice
    },
    {
      path: '/multipleQuesitions',
      component: Choice
    },
    {
      path: '/tfQuesitions',
      component: Choice
    }
  ]
})
