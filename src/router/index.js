import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [

    {
        path: '/login',
        component: () =>
            import ('@/views/login/index'),
        hidden: true
    },

    {
        path: '/404',
        component: () =>
            import ('@/views/404'),
        hidden: true
    },

    {
        path: '/',
        component: Layout,
        redirect: '/home',
        name: '首页',
        children: [{
                path: '/home',
                name: 'Dashboard',
                component: () =>
                    import ('@/views/dashboard/index'),
                meta: { title: '首页', icon: 'dashboard' }
            },

        ],
        meta: { nav: true, }
    },
    {
        path: '/zb-center',
        component: Layout,
        redirect: '/zblist',
        name: '招投标管理中心',
        children: [{
            path: '/zblist',
            name: 'zblist',
            component: () =>
                import ('@/views/zhaobiao/index'),
            meta: { title: '招投标项目列表', icon: 'dashboard' }
        }, {
            path: '/zb-detail',
            name: 'zbDetail',
            component: () =>
                import ('@/views/zhaobiao/zbDetail'),
            meta: { title: '项目详情', icon: 'dashboard' }
        }],
        meta: { nav: true, title: "招投标管理中心" }
    },
    {
        path: '/project',
        component: Layout,
        redirect: '/proj-appr',
        name: '项目管理',
        children: [{
                path: '/proj-list',
                name: 'projlist',
                component: () =>
                    import ('@/views/project/projMsg/index'),
                meta: { title: '项目信息管理', icon: 'dashboard' },
                children: [{
                    path: '/proj-appr',
                    name: 'proj-appr',
                    component: () =>
                        import ('@/views/project/projMsg/proj-appr'),
                    meta: { title: '项目立项', icon: 'dashboard' }
                }, {
                    path: '/proj-cesuan',
                    name: 'proj-cesuan',
                    component: () =>
                        import ('@/views/project/projMsg/proj-cesuan'),
                    meta: { title: '项目测算', icon: 'dashboard' }
                }]
            },
            {
                path: '/proj-engin',
                name: 'projEngin',
                component: () =>
                    import ('@/views/project/engin/index'),
                meta: { title: '工程管理', icon: 'dashboard' },
                children: [{
                    path: '/jindu',
                    name: 'jindu',
                    component: () =>
                        import ('@/views/project/engin/jindu'),
                    meta: { title: '进度管理', icon: 'dashboard' }
                }]
            }
        ],
        meta: { nav: true }
    },
    {
        path: '/bill',
        component: Layout,
        redirect: '/bill-list',
        name: '财务中心',
        children: [{
            path: '/bill-list',
            name: 'projlist',
            component: () =>
                import ('@/views/bill/index'),
            meta: { title: '财务中心列表', icon: 'dashboard' }
        }],
        meta: { nav: true }
    },
    {
        path: '/zonghe',
        component: Layout,
        redirect: '/zonghe-list',
        name: '综合管理',
        children: [{
            path: '/zonghe-list',
            name: 'projlist',
            component: () =>
                import ('@/views/zonghe/index'),
            meta: { title: '综合管理列表', icon: 'dashboard' }
        }],
        meta: { nav: true }
    },
    {
        path: '/setting',
        component: Layout,
        redirect: '/setting-list',
        name: '框架配置',
        children: [{
            path: '/setting-list',
            name: 'projlist',
            component: () =>
                import ('@/views/setting/index'),
            meta: { title: '框架配置列表', icon: 'dashboard' }
        }],
        meta: { nav: true }
    },
    {
        path: '/daily',
        component: Layout,
        redirect: '/daily-list',
        name: '日常运营',
        children: [{
            path: '/daily-list',
            name: 'projlist',
            component: () =>
                import ('@/views/daily/index'),
            meta: { title: '日常运营列表', icon: 'dashboard' }
        }],
        meta: { nav: true }
    },

    // {
    //   path: '/example',
    //   component: Layout,
    //   redirect: '/example/table',
    //   name: 'Example',
    //   meta: { title: 'Example', icon: 'example' },
    //   children: [
    //     {
    //       path: 'table',
    //       name: 'Table',
    //       component: () => import('@/views/table/index'),
    //       meta: { title: 'Table', icon: 'table' }
    //     },
    //     {
    //       path: 'tree',
    //       name: 'Tree',
    //       component: () => import('@/views/tree/index'),
    //       meta: { title: 'Tree', icon: 'tree' }
    //     }
    //   ]
    // },

    // {
    //   path: '/form',
    //   component: Layout,
    //   children: [
    //     {
    //       path: 'index',
    //       name: 'Form',
    //       component: () => import('@/views/form/index'),
    //       meta: { title: 'Form', icon: 'form' }
    //     }
    //   ]
    // },

    // {
    //     path: '/nested',
    //     component: Layout,
    //     redirect: '/nested/menu1',
    //     name: 'Nested',
    //     meta: {
    //         title: 'Nested',
    //         icon: 'nested',
    //         nav: true
    //     },
    //     children: [{
    //             path: '/menu1',
    //             component: () =>
    //                 import ('@/views/nested/menu1/index'), // Parent router-view
    //             name: 'Menu1',
    //             meta: { title: 'Menu1' },
    //             children: [{
    //                     path: '/menu1-1',
    //                     component: () =>
    //                         import ('@/views/nested/menu1/menu1-1'),
    //                     name: 'Menu1-1',
    //                     meta: { title: 'Menu1-1' }
    //                 },
    //                 {
    //                     path: '/menu1-2',
    //                     component: () =>
    //                         import ('@/views/nested/menu1/menu1-2'),
    //                     name: 'Menu1-2',
    //                     meta: { title: 'Menu1-2' },
    //                     children: [{
    //                             path: '/menu1-2-1',
    //                             component: () =>
    //                                 import ('@/views/nested/menu1/menu1-2/menu1-2-1'),
    //                             name: 'Menu1-2-1',
    //                             meta: { title: 'Menu1-2-1' }
    //                         },
    //                         {
    //                             path: '/menu1-2-2',
    //                             component: () =>
    //                                 import ('@/views/nested/menu1/menu1-2/menu1-2-2'),
    //                             name: 'Menu1-2-2',
    //                             meta: { title: 'Menu1-2-2' }
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     path: '/menu1-3',
    //                     component: () =>
    //                         import ('@/views/nested/menu1/menu1-3'),
    //                     name: 'Menu1-3',
    //                     meta: { title: 'Menu1-3' }
    //                 }
    //             ]
    //         },
    //         {
    //             path: '/menu2',
    //             component: () =>
    //                 import ('@/views/nested/menu2/index'),
    //             meta: { title: 'menu2' }
    //         }
    //     ]
    // },

    // {
    //   path: 'external-link',
    //   component: Layout,
    //   children: [
    //     {
    //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
    //       meta: { title: 'External Link', icon: 'link' }
    //     }
    //   ]
    // },

    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router