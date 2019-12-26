$(document).ready(function() {
    //slider
    $('.bxslider').show()
    if ($('.bxslider').children().length > 1) {
        $('.bxslider').bxSlider({
            mode: 'fade',
            auto: 'true',
            pager: 'true',
            controls: 'false'
        });
    }
    initTab();
    $(".navbar-toggle").click(function() {
        $(this).toggleClass("active");
    });
    $(window).scroll(function() {
        var scrolly = $(window).scrollTop()
        if (scrolly > 100) {
            $("header").addClass("bg")
        } else {
            $("header").removeClass("bg")
        }
    });
     $(".toggle-search, .close-search").click(function() {
            $(".search-feild").toggleClass("open");
        });
});


//team page
var rowCount = 3;

function initTab() {
    $(".team-list").each(function(ind, elem) {
        $(elem).find('.team-wrap').each(function(index, el) {
            $(el).attr('data-index', index);
        });
    });
    // $('.team-list').find('.wrap').wrap("<li class='li-wrap'></li>");
    $("body").on('click', '.team-list .team-wrap[data-index] .team-block figure', function(event) {
        var $this = $(this);
        $this.closest('[data-index]').siblings().removeClass('active');
        $this.closest('[data-index]').toggleClass('active');
        event.preventDefault();
        var ind = 0;
        var parLi = $this.closest('[data-index]');
        if (parLi.is('.breakpoint-div')) {
            ind = parLi.attr('data-index');
        } else {
            ind = parLi.nextAll('.breakpoint-div').eq(0).attr('data-index');
        }
        console.log(ind)
        $this.closest('.team-list').find('.detail-content').insertAfter($this.closest('.team-list').find("[data-index='" + ind + "']"));
        $this.closest('.team-list').find(".detail-content .team-detail").not($this.closest('.team-list').find(".detail-content .team-detail").eq(parLi.attr('data-index'))).hide();
        $this.closest('.team-list').find(".detail-content").show();
        $this.closest('.team-list').find(".detail-content .team-detail").eq(parLi.attr('data-index')).stop().slideToggle(function() {
            if (!$this.closest('[data-index]').hasClass('active')) {
                $this.closest('.team-list').find(".detail-content").hide();
            }
        });
    });
    $("body").on('click', '.team-detail .close-btn', function(event) {
        var $this = $(this);
        event.preventDefault();
        $this.closest('.team-list').find("[data-index].active .team-block figure").trigger('click');
    });

    function setRowClass() {
        $(".team-list [data-index].active").removeClass('active');
        $(".detail-content, .detail-content .team-detail").hide();
        if (window.innerWidth <= 480) {
            rowCount = 1;
        } else if (window.innerWidth <= 767) {
            rowCount = 2;
        } else {
            rowCount = 3;
        }
        $(".team-list .team-wrap").removeClass('breakpoint-div');
        $(".team-list").each(function(ind, elem) {
            var dataIndexElem = $(elem).find("[data-index]");
            dataIndexElem.each(function(index, el) {
                if ((index + 1) % rowCount == 0 || index == (dataIndexElem.length - 1)) {
                    $(el).addClass('breakpoint-div');
                }
            });
        });
    }
    setRowClass();
    $(window).resize(setRowClass);
}