define(['jquery'], function($) {
    function ProductPanel($ct) {
        this.$ct = $ct;
        this.init();
        this.bind();
    }
    ProductPanel.prototype.init = function() {
        this.$productStyle = this.$ct.find('li .product-style');
        this.$operator = this.$ct.find('.operator');

    }
    ProductPanel.prototype.bind = function() {
        var _this = this;
        this.$ct.on('mouseenter', 'li', function() {
            $(this).css({
                "box-shadow": " 0 0 38px rgba(0,0,0,.08) inset"
            });
            $(this).find('.operator').css('opacity', '1');
        })
        this.$ct.on('mouseleave', 'li', function() {
            $(this).css({
                "box-shadow": " 0 0 0 rgba(0,0,0,0) inset"
            });
            $(this).find('.operator').css('opacity', '0');
        })
        this.$productStyle.on('mouseenter', 'li', function() {
            $(this).find('div').addClass('active');
            $(this).siblings('li').find('div').removeClass('active');
            $(this).parent().siblings('img').attr('src', $(this).attr('data-src'));
        })
    }
    return ProductPanel;
})
