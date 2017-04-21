$('document').ready(function() {
    $('.slidepara').bind('inview', function(e, isInView, visiblePartX, visiblePartY){
        if (isInView) {
            if (visiblePartY == 'both' || visiblePartY == 'bottom') {
                $('.slidepara').css('visibility', 'visible');
                $('.slidepara').addClass('animated fadeInUp');
                $('.slidepara').unbind('inview');
            }
        }
    });
});