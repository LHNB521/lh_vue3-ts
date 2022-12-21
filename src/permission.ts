import router from './router/index.js';
router.beforeEach((to, from, next) => {
  if (sessionStorage.getItem('token')) {
    if (to.name === 'Login') {
      next({
        name: 'Home'
      });
    }
    next();
  } else {
    console.log('-6-');
    if (to.name === 'Login') {
      next();
    }
    next({
      name: 'Login'
    });
  }
});
