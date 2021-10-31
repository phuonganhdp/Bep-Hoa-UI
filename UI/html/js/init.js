let App = {
    windowW: $(window).width(),
    initHelpers: function ($helpers) {
        let me = this;
        $(document).ready(function () {
            me.initHelper('common');
            if ($helpers != undefined) {
                if ($helpers instanceof Array) {
                    for (let $index in $helpers) {
                        me.initHelper($helpers[$index]);
                    }
                } else {
                    me.initHelper($helpers);
                }
            } else {

            }
        });

    },
    initHelper: function ($helper) {
        let me = this;
        //console.log($helper);
        if ($helper.length > 0) {
            console.log('init <' + $helper + '> function window width = ' + me.windowW);
            App[$helper]();
        }

    },

    common: function () {
        let me = this;

        if (me.windowW > 800) {

        } else {


        }
    },
    home: function () {
        let me = this;

        var swiperBannerHome = new Swiper(".swiper-hbanner", {
            slidesPerView: 1,
            spaceBetween: 0,
            autoplay: {
                delay: 3000
            },
            loop: true,
            pagination: {
                el: ".swiper-hbanner .swiper-pagination",
            },
        });
        if (me.windowW > 800) {

        } else {


        }
    },
};