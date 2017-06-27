import Vue from 'vue'
import Router from 'vue-router'

const Home = r => require.ensure([], () => r(require('../views/Home.vue')));
const UpdateLog = r => require.ensure([], () => r(require('../views/UpdateLog.vue')));
const Message = r => require.ensure([], () => r(require('../views/Message.vue')));
const Share = r => require.ensure([], () => r(require('../views/Share.vue')));
const Discover = r => require.ensure([], () => r(require('../views/Discover.vue')));

Vue.use(Router);

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: Home },
      { path: '/discover/:page(\\d+)?', component: Discover },
      { path: '/share/:page(\\d+)?', component: Share },
      { path: '/message/:page(\\d+)?', component: Message },
      { path: '/updatelog/:page(\\d+)?', component: UpdateLog },
      // { path: '/item/:id(\\d+)', component: ItemView },
      // { path: '/user/:id', component: UserView },
      // { path: '/', redirect: '/top' }
    ]
  })
}
