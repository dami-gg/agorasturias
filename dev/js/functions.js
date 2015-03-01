jQuery(document).ready(function($){
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.to-top-button');

    //hide or show the "back to top" link
    $(window).scroll(function(){
        if ( $(this).scrollTop() > offset ) {
            $back_to_top.addClass('visible');
        }
        else {
            $back_to_top.removeClass('visible');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0 ,
            }, scroll_top_duration
        );
    });

    $(document).click(function (event) {
        var _clickover = $(event.target),
            _opened = $(".navbar-collapse").hasClass("navbar-collapse collapse in");
        if (_opened === true && _clickover.hasClass("navbar-toggle") === false) {
            $("button.navbar-toggle").click();
        }
    });

    window.addEventListener('error', function (err) {
        var lineAndColumnInfo = err.colno ? ' line:' + err.lineno +', column:'+ err.colno : ' line:' + err.lineno;
        ga('send', 'event', 'JavaScript Error', err.message,
            err.filename + lineAndColumnInfo + ' -> ' +  navigator.userAgent, 0, true);
    });

    jQuery.error = function (message) {
        ga('send', 'event', 'jQuery Error', message, navigator.userAgent, 0, true);
    };

});