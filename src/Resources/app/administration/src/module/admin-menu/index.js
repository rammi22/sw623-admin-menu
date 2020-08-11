import './page/admin-menu-template';

const { Module } = Shopware;

Module.register('admin-menu', {
    type: 'plugin',
    color: '#ff3d58',
    icon: 'default-shopping-paper-bag-product',
    title: 'AdminMenuTEST',
    description: 'Manage bundles here.',

    routes: {
        template: {
            component: 'admin-menu-template',
            path: 'template'
        },
    },

    navigation: [{
        label: 'AdminMenuTEST',
        path: 'admin.menu.template',
        position: 5,
        parent: 'sw-marketing'
    }]
});
