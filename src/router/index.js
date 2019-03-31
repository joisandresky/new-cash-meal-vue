import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/components/dashboard'
import employee from '@/components/employee/employee'
import job from '@/components/jobss/job'
import cashin from '@/components/cashin/cashin'
import cashout from '@/components/cashout/cashout'
import deposit from '@/components/deposit/deposit'
import notfound from '@/components/notfound/notfound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: dashboard
  }, {
    path: '/employee',
    component: employee
    }, {
      path: '/job',
      component: job
    }, {
      path: '/cashin',
      component: cashin
    }, {
      path: '/cashout',
      component: cashout
    }, {
      path: '/deposit',
      component: deposit
    }, {
      path: '*',
      component: notfound
    }]
})
