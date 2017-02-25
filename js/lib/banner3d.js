define(['jquery'], function($) {
    function Banner3D($ct) {
        this.$ct = $ct;
        this.init();
        this.bind();
    }
    Banner3D.prototype.init = function() {
        this.$bannerCt = this.$ct.find('.banner-ct');
        this.$bannerLi = this.$ct.find('.banner-ct li');
        this.$bullet = this.$ct.find('.bullet');
        this.$bulletLi = this.$ct.find('.bullet li');
        this.$banner = this.$ct.find('.banner');
        this.$shadow = this.$ct.find('.shadow');
        this.$box1 = this.$ct.find('.box-1');
        this.$box2 = this.$ct.find('.box-2');
        this.$box3 = this.$ct.find('.box-3');

        this.showIndex = 0;
        this.mouseon = false;

    }

    Banner3D.prototype.bind = function() {
        this.clock();
        this.mouseEvent();
        this.bulletClick();
    }

    Banner3D.prototype.clock = function() {
        var _this = this;
        setInterval(function() {
            if (!_this.mouseon) {
                $(_this.$bannerLi[_this.showIndex]).fadeIn(1000);
                $(_this.$bannerLi[_this.showIndex]).siblings('li').fadeOut(1000);
                $(_this.$bulletLi[_this.showIndex]).addClass('active');
                $(_this.$bulletLi[_this.showIndex]).siblings('li').removeClass('active');
                _this.showIndex++;
                if (_this.showIndex == _this.$bannerLi.length) {
                    _this.showIndex = 0;
                }
            }
        }, 5000)
    }
    Banner3D.prototype.mouseEvent = function() {
        var _this = this;
        this.$bannerCt.on('mouseenter', function() {
            _this.mouseon = true;
            _this.$shadow.addClass('active');
            _this.$banner.css({
                "transform": "translateZ(5px)"
            })
        })
        this.$bannerCt.on('mouseleave', function() {
            _this.mouseon = false;
            _this.$shadow.removeClass('active');
            _this.$banner.css({
                "transform": " rotateX(0deg) rotateY(0deg) translateZ(0px)"
            })

            _this.$box2.css({
                "transform": "translateX(0px) translateY(0px)"
            })
            _this.$box3.css({
                "transform": "translateX(0px) translateY(0px)"
            })
        })
        this.$shadow.mousemove(function(e) {
            e.stopPropagation();
        })
        this.$shadow.mouseenter(function(e) {
            e.stopPropagation();
        })
        this.$bannerCt.mousemove(function(e) {
            var deltaX = (e.clientX - (_this.$bannerCt.offset().left + _this.$bannerCt.width() * .5)) / (_this.$bannerCt.width() * .5),
                deltaY = ((_this.$bannerCt.offset().top + _this.$bannerCt.height() * .5) - e.clientY) / (_this.$bannerCt.height() * .5);
            _this.$banner.css({
                "transform": " rotateX(" + (deltaY * 6) + "deg) rotateY(" + (deltaX * 8) + "deg) translateZ(5px)"
            })
            _this.$shadow.css({
                "transform": "translateX(" + (-deltaX * 30) + "px) translateY(" + (deltaY * 15) + "px)"
            })
            _this.$box2.css({
                "transform": "translateX(" + (-deltaX * 3) + "px) translateY(" + (-deltaY * 0) + "px)"
            })
            _this.$box3.css({
                "transform": "translateX(" + (deltaX * 5) + "px) translateY(" + (deltaY * 0) + "px)"
            })
        })
    }

    Banner3D.prototype.bulletClick = function() {
        var _this = this;
        this.$bullet.on('click', 'li', function() {
            _this.showIndex = [].indexOf.call(_this.$bulletLi, this);
            $(_this.$bannerLi[_this.showIndex]).fadeIn(500);
            $(_this.$bannerLi[_this.showIndex]).siblings('li').fadeOut(500);
            $(_this.$bulletLi[_this.showIndex]).addClass('active');
            $(_this.$bulletLi[_this.showIndex]).siblings('li').removeClass('active');
            _this.showIndex++;
            if (_this.showIndex == _this.$bannerLi.length) {
                _this.showIndex = 0;
            }
        })
    }
    return Banner3D;
})
