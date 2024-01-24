export default [

    {
      path: '/*',
      // redirect:'create-account',
      name: 'PageNotFound',
      meta: {layout: 'auth',authRequired:false},
      component: () => import('../../views/PageNotFound.vue')

    },
    {
      path: '/',
      // redirect:'create-account',
      name: 'Login',
      meta: {layout: 'auth',authRequired:false},
      component: () => import('../../views/auth/Login.vue')
    },

    {
      path: '/create-account',
      name: 'create_account',
      meta: {layout: 'auth',authRequired:false},
        // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../../views/auth/SignUp.vue')
    },

    {
      path: '/forgot-password',
      name: 'forgot_password',
      meta: {layout: 'auth',authRequired:false},

        // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../../views/auth/ForgotPassword.vue')
    },

    {
      path: '/invite-user',
      name: 'invite_user',
      meta: {layout: 'auth',authRequired:false},

        // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../../views/auth/InviteUser.vue')
    },

    {
      path: '/reset-pin',
      name: 'reset_pin',
      meta: {layout: 'auth',authRequired:false},
        // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../../views/auth/ResetPin.vue')
    },

    {
      path: '/verify-account',
      name: 'verify_account',
      meta: {layout: 'auth',authRequired:false},
        // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../../views/auth/VerifyAccount.vue')
    },
]