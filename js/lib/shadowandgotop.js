define(['jquery'], function($) {
    function ShadowAndGoTop() {
        this.init();
        this.bind();
    }
    ShadowAndGoTop.prototype.init = function() {
        this.$shadowUl = $('.shadow-style>.shadow-ul');
        this.$appList = $('.panel-ct .app-list');
        this.$cart = $('.main nav .cart');
        this.$cartPanel = this.$cart.find('.cart-panel');
        this.$a = $('a');
        this.$window = $(window);
        this.$goTop = $('.go-top');
        this.$body = $('body');

    }
    ShadowAndGoTop.prototype.bind = function() {
        var _this = this;
        this.$shadowUl.on('mouseenter', 'li', function() {
            $(this).css({
                "box-shadow": " 0 0 38px rgba(0,0,0,.08) inset"
            });
        })
        this.$shadowUl.on('mouseleave', 'li', function() {
            $(this).css({
                "box-shadow": " 0 0 0 rgba(0,0,0,0) inset"
            });
        })
        this.$appList.on('mouseenter', 'li', function() {
            $(this).find('.operation').fadeIn(150);
        })
        this.$appList.on('mouseleave', 'li', function() {
            $(this).find('.operation').fadeOut(150);
        })
        this.$cart.on('mouseenter', function() {
            _this.$cartPanel.fadeIn(100);
        })
        this.$cart.on('mouseleave', function() {
            _this.$cartPanel.fadeOut(100);
        })
        this.$a.click(function(e) {
            e.preventDefault();
        })
        this.$window.on('scroll', function() {
            if (_this.$window.scrollTop() > 600) {
                _this.$goTop.css('bottom', '20px');
            } else {
                _this.$goTop.css('bottom', '-55px');
            }
        })
        this.$goTop.click(function() {
            _this.$body.animate({
                scrollTop: '0'
            }, 300, 'swing');
        })
    }
    return ShadowAndGoTop;
})
