import router from './router';
import store from './store';
// import { Message } from 'element-ui';

router.beforeEach(async(to, from, next) => {
  if (to.path.indexOf('/personal') === 0) {
    store.commit('user/SET_PATH', 'personal');
  }
  if (to.path.indexOf('/home') === 0) {
    store.commit('user/SET_PATH', 'home');
  }
  next();
});

router.afterEach(() => {
  // finish progress bar
});
