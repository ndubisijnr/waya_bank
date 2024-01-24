export default [

    {
        path: '/dashboard',
        // redirect:'create-account',
        name: 'Dashboard',
        meta: {layout: 'dashboard',authRequired:false},
        component: () => import('../../components/dashboard/Payment.vue')
    },

    // {
    //     path: '/contacts',
    //     // redirect:'create-account',
    //     name: 'Contacts',
    //     meta: {layout: 'dashboard',authRequired:false},
    //     component: () => import('../../components/contact/Contact.vue')
    // },
    {
        path: '/transactions',
        // redirect:'create-account',
        name: 'Transactions',
        meta: {layout: 'dashboard',authRequired:false},
        component: () => import('../../components/dashboard/Transactions.vue')
    },
    {
        path: '/settings',
        // redirect:'create-account',
        name: 'Layout',
        meta: {layout: 'dashboard',authRequired:false},
        component: () => import('../../components/settings/Layout.vue')
    },

]