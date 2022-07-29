import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/views/layout';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/HomeView')
      },
      {
        path: 'detail',
        name: 'detail',
        component: () => import(/* webpackChunkName: "detail" */ '@/views/commodityDetail/DetailView')
      },
      {
        path: 'payment',
        name: 'payment',
        component: () => import(/* webpackChunkName: "payment" */ '@/views/payment/Payment')
      },
      {
        path: 'personal',
        name: 'personal',
        redirect: '/personal/personalInfo',
        component: () => import(/* webpackChunkName: "personal" */ '@/views/personal'),
        children: [
          {
            path: '/personal/personalInfo',
            name: 'personalInfo',
            redirect: '/personal/personalInfo/base-info',
            component: () => import(/* webpackChunkName: "personalInfo" */ '@/views/personal/LeftMenu'),
            children: [
              {
                path: 'base-info',
                name: 'baseInfo',
                component: () => import(/* webpackChunkName: "baseInfo" */ '@/views/personal/baseInfo/BaseInfo')
              },
              {
                path: 'contract',
                name: 'contract',
                component: () => import(/* webpackChunkName: "contract" */ '@/views/personal/contract/Contract')
              },
              {
                path: 'contract-detail',
                name: 'contractDetail',
                component: () => import(/* webpackChunkName: "contract" */ '@/views/personal/contractDetail/ContractDetail')
              },
              {
                path: 'project-info',
                name: 'projectInfo',
                component: () => import(/* webpackChunkName: "contract" */ '@/views/personal/projectInfo/ProjectInfo')
              },
              {
                path: 'bill-info',
                name: 'billInfo',
                component: () => import(/* webpackChunkName: "contract" */ '@/views/personal/billInfo/BillInfo')
              },
              {
                path: 'harvest-address',
                name: 'harvestAddress',
                component: () => import(/* webpackChunkName: "contract" */ '@/views/personal/harvestAddress/HarvestAddress')
              }
            ]
          },
          {
            path: '/personal/order-manage',
            name: 'personalInfo',
            redirect: '/personal/order-manage/my-order',
            component: () => import(/* webpackChunkName: "personalInfo" */ '@/views/orderManage/LeftMenu'),
            children: [
              {
                path: 'my-order',
                name: 'myOrder',
                component: () => import(/* webpackChunkName: "baseInfo" */ '@/views/orderManage/myOrder/MyOrder')
              }
            ]
          },
          {
            path: '/personal/settle-center',
            name: 'personalInfo',
            redirect: '/personal/settle-center/my-statement',
            component: () => import(/* webpackChunkName: "personalInfo" */ '@/views/personal/LeftMenu'),
            children: [
              {
                path: 'my-statement',
                name: 'myStatement',
                component: () => import(/* webpackChunkName: "baseInfo" */ '@/views/settleCenter/myStatement/MyStatement')
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/login/Login')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
