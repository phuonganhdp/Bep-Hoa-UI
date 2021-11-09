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

        var swiperMenuTags = new Swiper(".menu__tags-list", {
            slidesPerView: 'auto',
            spaceBetween: 0,
            freeMode: true,
            navigation: {
                nextEl: ".menu__tags-list .swiper-button-next",
                prevEl: ".menu__tags-list .swiper-button-prev",
            },
        });

        $(".tagBox").sticky({topSpacing: 60});

        // Start Auto Scroll top menu when clicked filter

        function getElementY(query) {
            return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top
        }

        function doScrolling(element, duration) {
            var startingY = window.pageYOffset
            var elementY = getElementY(element)
            // If element is close to page's bottom then window will scroll only to some position above the element.
            var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
            var diff = targetY - startingY
            // Easing function: easeInOutCubic
            // From: https://gist.github.com/gre/1650294
            var easing = function (t) {
                return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
            }
            var start

            if (!diff) return

            // Bootstrap our animation - it will get called right before next frame shall be rendered.
            window.requestAnimationFrame(function step(timestamp) {
                if (!start) start = timestamp
                // Elapsed miliseconds since start of scrolling.
                var time = timestamp - start
                // Get percent of completion in range [0, 1].
                var percent = Math.min(time / duration, 1)
                // Apply the easing.
                // It can cause bad-looking slow frames in browser performance tool, so be careful.
                percent = easing(percent)

                window.scrollTo(0, startingY + diff * percent)

                // Proceed with animation as long as we wanted it to.
                if (time < duration) {
                    window.requestAnimationFrame(step)
                }
            })
        }


        var tagsfilter = document.getElementsByClassName('tags-filter');

        for (let i = 0; i < tagsfilter.length; i++) {
            tagsfilter[i].addEventListener("click", doScrolling.bind(null, '#head-menu', 500))
        }

        $('.tags-filter').each(function () {
            $(this).click(function () {
                $(".tags-filter").removeClass("active");
                $(this).addClass("active");
            })
        });
        // End Auto Scroll top menu when clicked filter

        // Scoll to Top
        $('.go-to-top').click(function () {
            window.scrollTo({top: 0, behavior: 'smooth'});
        })

        // Plus and Minus order in PopUp Detail
        $('.minus').click(function () {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.plus').click(function () {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });

        //Swiper Gallery in Popup Detail
        let swiperGallery = new Swiper(".swiper-gallery", {
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: {
                el: ".galleryBox .swiper-pagination",
                type: "fraction",
            },
        });

        // Fancy Box Popup Detail
        $('.open-popup-atc').fancybox({
            protect: true,
            animationDuration: 500,
            animationEffect: 'slide-in-out',
            touch: false,
            smallBtn : false,
            beforeShow: function () {
                swiperGallery.init();
                $('body').addClass('popup-active');
            },
            afterClose: function () {
                $('body').removeClass('popup-active');
            }
        });

        if (me.windowW > 800) {

        } else {


        }
    },
};