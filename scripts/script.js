$(".link a").click(function(e) {
    var sectionID = e.currentTarget.id + "an";

    $("html body").animate({
        scrollTop: $("#" + sectionID).offset()
            .top

    }, 1500)
});


$(function() {
$('#slides').slidesjs({
height: 235,
navigation: true,
pagination: false,
effect: {
fade: {
speed: 700}},callback:
{
start: function(number)
{
$("#slider_content1,#slider_content2,#slider_content3").fadeOut(500);},
complete: function(number)
{
$("#slider_content" + number).delay(500).fadeIn(1000);}},
play:
{
active: false,
auto: true,
interval: 6000,
pauseOnHover: false}});});



$(document).ready(function() {
var stickyNavTop = $('.nav').offset().top;
 
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
      
if (scrollTop > stickyNavTop) { 
    $('.top-wrapper').addClass('sticky');
} else {
    $('.top-wrapper').removeClass('sticky'); 
}
};
 
stickyNav();
 
$(window).scroll(function() {
  stickyNav();
});
});