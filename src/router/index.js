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
        path: 'goods-list',
        name: 'goodsList',
        component: () => import(/* webpackChunkName: "goodsList" */ '@/views/goodsList/GoodsList')
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
        path: 'payment',
        name: 'payment',
        component: () => import(/* webpackChunkName: "payment" */ '@/views/payment/Payment')
      },
      {
        path: '/personal/order-manage/evaluate',
        name: 'evaluate',
        component: () => import(/* webpackChunkName: "evaluate" */ '@/views/orderManage/evaluate/Evaluate')
      },
      {
        path: '/personal/order-manage/take-delivery',
        name: 'takeDelivery',
        component: () => import(/* webpackChunkName: "evaluate" */ '@/views/orderManage/takeDelivery/TakeDelivery')
      },
      {
        path: '/personal/settle-center/enter-payment',
        name: 'enterPayment',
        component: () => import(/* webpackChunkName: "evaluate" */ '@/views/settleCenter/enterPayment/EnterPayment')
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
                component: () => import(/* webpackChunkName: "contractDetail" */ '@/views/personal/contractDetail/ContractDetail')
              },
              {
                path: 'project-info',
                name: 'projectInfo',
                component: () => import(/* webpackChunkName: "projectInfo" */ '@/views/personal/projectInfo/ProjectInfo')
              },
              {
                path: 'bill-info',
                name: 'billInfo',
                component: () => import(/* webpackChunkName: "billInfo" */ '@/views/personal/billInfo/BillInfo')
              },
              {
                path: 'harvest-address',
                name: 'harvestAddress',
                component: () => import(/* webpackChunkName: "harvestAddress" */ '@/views/personal/harvestAddress/HarvestAddress')
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
                component: () => import(/* webpackChunkName: "myOrder" */ '@/views/orderManage/myOrder/MyOrder')
              },
              {
                path: 'order-detail',
                name: 'orderDetail',
                component: () => import(/* webpackChunkName: "orderDetail" */ '@/views/orderManage/orderDetail/OrderDetail')
              },
              {
                path: 'my-transport',
                name: 'myTransport',
                component: () => import(/* webpackChunkName: "myTransport" */ '@/views/orderManage/myTransport/MyTransport')
              },
              {
                path: 'transport-detail',
                name: 'transportDetail',
                component: () => import(/* webpackChunkName: "transportDetail" */ '@/views/orderManage/transportDetail/TransportDetail')
              }
            ]
          },
          {
            path: '/personal/settle-center',
            name: 'settleCenter',
            redirect: '/personal/settle-center/my-statement',
            component: () => import(/* webpackChunkName: "settleCenter" */ '@/views/settleCenter/LeftMenu'),
            children: [
              {
                path: 'my-statement',
                name: 'myStatement',
                component: () => import(/* webpackChunkName: "myStatement" */ '@/views/settleCenter/myStatement/MyStatement')
              },
              {
                path: 'statement-detail',
                name: 'statementDetail',
                component: () => import(/* webpackChunkName: "statementDetail" */ '@/views/settleCenter/statementDetail/StatementDetail')
              },
              {
                path: 'payment-list',
                name: 'paymentList',
                component: () => import(/* webpackChunkName: "paymentList" */ '@/views/settleCenter/paymentList/PaymentList')
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
