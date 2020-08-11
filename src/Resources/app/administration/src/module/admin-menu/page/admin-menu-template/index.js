import template from './my-template.html.twig';

Shopware.Component.register('admin-menu-template', {
    template,

    metaInfo() {
        return {
            title: this.$createTitle()
        };
    },
});
