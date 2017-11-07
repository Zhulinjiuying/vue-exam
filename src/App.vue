<template>
  <div id="app">
    <header class="header" :class="{ 'header-fixed' : headerFixed }">
      <el-form :inline="true" :model="user" class="form-inline">
        <el-form-item label="工号">
          <el-input v-model="user.number" placeholder="请输入工号"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="user.name" placeholder="请输入姓名"></el-input>
        </el-form-item>       
        <el-form-item label="部门">
          <el-input v-model="user.depart" placeholder="请输入部门"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </header>
    <div v-show="headerFixed" style="position: relative;height: 60px;width: 100%;"></div>
    <main>
      <div class="main-left">
        <el-menu default-active="/singleQuesitions" class="el-menu-vertical-demo" :router="true">
          <el-menu-item index="/singleQuesitions" :class="{'isActive': active === 1}">单项选择题</el-menu-item>
          <el-menu-item index="/multipleQuesitions" :class="{'isActive': active === 2}">多项选择题</el-menu-item>
          <el-menu-item index="/tfQuesitions" :class="{'isActive': active === 3}">判断题</el-menu-item>
        </el-menu>
      </div>
      <div  class="main-right" >
        <transition name="fade">
          <router-view class="view" :item="item" :questions="questions" :answer ="answer"></router-view>
        </transition>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </div>
    </main>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Element from 'element-ui'
  import 'element-ui/lib/theme-default/index.css'

  Vue.use(Element)

  export default {
    data() {
      return {
        user: {
          number: '',
          name: '',
          depart: ''
        },
        headerFixed: true,
        active: 1,
        item: 'SingleChoice',
        questions: [
          {
            'title': '1+1=?',
            'item': [
              '1',
              '2',
              '3',
              '4'
            ]
          },
          {
            'title': '5+5=?',
            'item': [
              '9',
              '12',
              '10',
              '8'
            ]
          }
        ],
        answers: {
          SingleChoice: [1],
          MultipleChoice: [2],
          TfChoice: [3]
        },
        answer: []
      }
    },
    created: function() {
      this.$router.push('/singleQuesitions')
      /* eslint-disable no-unused-vars */
      for (let answer in this.answers) {
        this.answers[answer] = Array.from({length: this.questions.length}, () => 0)
      }
      this.answer = this.answers[this.item]
    },
    methods: {
      onSubmit() {

      }
    },
    watch: {
      '$route': function (to, from) {
        if (to.path === '/singleQuesitions') {
          this.active = 1
          this.item = 'SingleChoice'
          this.answer = this.answers[this.item]
        } else if (to.path === '/multipleQuesitions') {
          this.active = 2
          this.item = 'MultipleChoice'
          this.answer = this.answers[this.item]
        } else if (to.path === '/tfQuesitions') {
          this.active = 3
          this.item = 'TfChoice'
          this.answer = this.answers[this.item]
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body
    margin: 0
  #app 
    min-width: 1200px
    margin: 0 auto
    font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;
    header
      z-index: 1000
      min-width: 1200px
      transition: all 0.5s ease
      border-top: solid 4px #3091F2 
      background-color: #fff
      box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04)
      .form-inline
        margin-top: 5px
        padding-left: 300px!important;
      .header-fixed:
        position: fixed
        top: 0
        left: 0
        right: 0
    main
      display: flex
      min-height: 800px;
      border: solid 40px #E9ECF1  
      background-color: #FCFCFC
      .main-left
        text-align: center
        flex: 0 0 200px
      .main-right 
        -webkit-box-flex:1
        -ms-flex:1;flex:1
        background-color: #fff
        padding: 50px 70px
</style>
