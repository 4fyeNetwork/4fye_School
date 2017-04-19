
/* ############################################# */
/* JavaScript für SmoothScrolling bei Ancorlinks */
/* ############################################# */

$('document').ready(function () {
    $('a[href*="#"]').stop().on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var HASH = this.hash;
            var ZIEL = $(this.hash);
            if (ZIEL.length) {
                var ABSTAND_TOP = ZIEL.offset().top;
                
                $('html,body').animate({ scrollTop: ABSTAND_TOP }, 1300, function () {
                    window.location = HASH;
                });

                return false;                
                
            }
        }
    }); 
});