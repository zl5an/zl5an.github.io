$(document).ready(function () {
    "use strict";
    $('.carousel').carousel({
        interval: 3000
    });
});
    
        // Nice Scroll
    
$("html").niceScroll();
    
$('.carousel').carousel({
    interval: 6000
        
});

//loading screen
$(window).load(function () {
    "use strict";
    $("body").css("overflow", "auto");
    $(".loading .spinner ").fadeOut(2000,
        function () {
            $(this).parent().fadeOut(1000, 
                function () {
                    $(this).remove();
                });
        
        });
});


