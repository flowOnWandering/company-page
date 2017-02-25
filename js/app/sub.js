define(['jquery', 'banner3d', 'product-panel', 'shadowandgotop'], function($, Banner3D, ProductPanel, ShadowAndGoTop) {
    new Banner3D($('.banner3d'));
    new ProductPanel($('.product-list'));
    new ShadowAndGoTop();
})
