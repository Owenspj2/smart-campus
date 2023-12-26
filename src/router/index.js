import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Class from '@/views/Class/index.vue'
import Grader from '@/views/Grader/index.vue'
import Student from '@/views/Student/index.vue'
import Teacher from '@/views/Teacher/index.vue'
import User from '@/views/User/index.vue'
import Home from '@/views/Home/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path:'/',
      component:Layout,
      redirect: '/index',
      children:[
        {
          path:'/index',
          component:Home,
          meta: {
            title: ''
          },
        },
        {
          path:'/student/manage',
          component:Student,
          meta: {
            title: '学生管理'
          },
        },{
          path:'/teacher/manage',
          component:Teacher,
          meta: {
            title: '教师管理'
          },
        },{
          path:'/class/manage',
          component:Class,
          meta: {
            title: '班级管理'
          },
        },
        {
          path:'/grader/manage',
          component:Grader,
          meta: {
            title: '年级管理'
          },
        },
        {
          path:'/user/manage',
          component:User,
          meta: {
            title: '个人信息管理'
          },
        }
      ]
    }
  ]
})

export default router
