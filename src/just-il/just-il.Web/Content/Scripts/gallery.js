$(document).on("ready", function () {

    function detectIE() {
        var ua = window.navigator.userAgent;

        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        var edge = ua.indexOf("Edge/");
        if (edge > 0) {
            var ver = ua.substring(edge + 5, ua.indexOf('.', edge), 10);
            return parseInt(ver);
        }

        // other browser
        return -1;
    };

    $(".lazy").Lazy({
        effect: 'fadeIn',
        effectTime: 400/*,
        afterLoad: function (element) {
            var $img = $(element);
            if (!!$img.data("fade")) {
                $($img.data("fade")).animate({ opacity: 1 }, 200);
            }
        }*/
    });/*.each(function (index, el) {
        var $img = $(el);
        if (!!$img.data("fade")) {
            $($img.data("fade")).css({ opacity: 0 });
        }
    });*/

    var items = [];

    var lazyLoad = true;

    var isPresentingLightbox = false;

    var getLightboxSettings = function (selector) {
        return {
            itemSelector: selector,
            src: 'data-fullsize',
            closeOnBackdropClick: false,
            lazy: true,
            caption: function (el, index) {
                var $el = $(el);
                if (!items.length) {
                    items = new Array(index.length);
                }
                items[index.index] =
                    {
                        src: $el.data("fullsize"),
                        pinterest: $el.data("pinterest"),
                        tags: $el.data("tags"),
                        shareLabel: $el.data("share-label"),
                        downloadId: $el.data("download-id")
                    };
                return "";
            }
        };
    };

    var lightboxEvents = function (lb) {
        return {
            'show.slickLightbox': function () {
                isPresentingLightbox = true;
                $(".slick-lightbox-slick-item-inner").each(function () {
                    var $el = $(this);
                    var $img = $el.find("img");
                    var shareContainer = $('<div/>').addClass("gallery-item-actions");
                    var tagsContainer = $('<div/>').addClass("gallery-item-tags-container");
                    var src = "";
                    if (!!$img.data("lazy")) {
                        src = $img.data("lazy");
                    } else {
                        src = $img.attr("src");
                    }
                    shareContainer.css({ opacity: 0 });
                    tagsContainer.css({ opacity: 0 });
                    $img.on("load", function () {
                        var lazySrc = decodeURIComponent($(this).data("lazy") || "");
                        var src = decodeURIComponent(this.src);
                        if (!lazySrc || src.indexOf(lazySrc) >= 0) {
                            shareContainer.animate({ opacity: 1 }, 200);
                            tagsContainer.animate({ opacity: 1 }, 200);
                        }
                    });
                    var data = items.find(function (i) { return i.src == src });
                    if (!!data) {
                        if (!!data.pinterest || !!data.downloadId) {
                            if (!!data.pinterest) {
                                var pinterestLink = $('<a/>').attr("href", data.pinterest).addClass("share-pinterest");
                                shareContainer = shareContainer.append(pinterestLink);
                            }
                            if (!!data.downloadId) {
                                var id = data.downloadId;
                                var downloadButton = $('<a/>').addClass("btn").addClass("btn-icon").addClass("gallery-download").attr("href", "/download/" + id);
                                shareContainer = shareContainer.append(downloadButton);
                            }
                            $el.append(shareContainer);
                        }
                        if (!!data.tags.length) {
                            var tagsList = $('<ul/>').addClass("gallery-item-tags");
                            for (var i = 0; i < data.tags.length; i++) {
                                var tag = $('<li/>').html(data.tags[i]);
                                tagsList.append(tag);
                            }
                            tagsContainer.append(tagsList);
                            $el.append(tagsContainer);
                        }

                    }
                });
                $(".slick-lightbox-slick-caption").remove();
            },
            'shown.slickLightbox': function () {
                isPresentingLightbox = false;
            },
            'hide.slickLightbox': function () {

            }
        }
    };

    var $grid = $(".gallery-grid").masonry({ itemSelector: '.gallery-image' });
    if (detectIE() > 6) {
        var fixGridLayout = function () {
            var items = $grid.find(".gallery-image");
            var height = $grid.height();
            var bottom = -1;
            for (var i = 0; i < items.length; i++) {
                var item = items.get(i);
                var $item = $(item);
                var itemBottom = $item.position().top + $item.outerHeight();
                if (itemBottom > bottom) {
                    bottom = itemBottom;
                }
            }
            if (bottom > height) {
                $grid.height(height);
            }
        };
        $grid.on('layoutComplete', fixGridLayout);
        $(window).on('scroll', function () {
            $grid.masonry('layout');
        });
    }
    var preselectedImageID = window.imageID || 0;
    if (!!lazyLoad) {
        window.imageID = 0;
        $(".gallery-grid").find(".gallery-image > img").Lazy({
            effect: 'fadeIn',
            effectTime: 400,
            afterLoad: function ($element) {
                $grid.masonry('layout');
                if ($element.data("id") == preselectedImageID) {
                    $element.trigger("click");
                }
            }
        });
    } else {
        $grid.imagesLoaded().progress(function () {
            $grid.masonry('layout');
        });
    }

    var gridLB = $(".gallery-grid").slickLightbox(getLightboxSettings('> .gallery-image > img'));
    gridLB.on(lightboxEvents(gridLB));

    /*
    var projectsLB = $(".grid-projects").slickLightbox(getLightboxSettings("li > .link-block > .item-image-wrap > img"));
    projectsLB.on(lightboxEvents(projectsLB));*/

    $(".gallery-carousel").slick();
    var carouselLB = $(".gallery-carousel").slickLightbox(getLightboxSettings('li > .gallery-image > img'));
    carouselLB.on(lightboxEvents(carouselLB));

    if (!!window.imageID) {
        $('.gallery-item-image[data-id="' + preselectedImageID + '"]').trigger("click");
    }

    $(".gallery-image-infobtn").on("click", function () {
        $(this).closest(".gallery-image").find("img").trigger("click");
    });

});
