/**
 * Created by Kamil on 2016-06-24.
 */
// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

$(window).load(function(){
    $('#nav .navbar-nav a').smoothScroll({
    });
});

var waypoints = $('#skills').waypoint(function(direction) {
    if(skills == true) {
        return;
    }
    skills=true;
    $('#web-circle').circleProgress({
        value: 0.90,
        size: 160,
        fill: {
            color: "#30bae7"
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('p').html(parseInt(90 * progress) + '<span>%</span>');
    });

    $('#html-circle').circleProgress({
        value: 0.75,
        size: 160,
        fill: {
            color: "#d74680"
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('p').html(parseInt(75 * progress) + '<span>%</span>');
    });

    $('#graphic-circle').circleProgress({
        value: 0.70,
        size: 160,
        fill: {
            color: "#15c7a8"
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('p').html(parseInt(70 * progress) + '<span>%</span>');
    });

    $('#ui-circle').circleProgress({
        value: 0.85,
        size: 160,
        fill: {
            color: "#eb7d4b"
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('p').html(parseInt(85 * progress) + '<span>%</span>');
    });
}, {
    offset: '25%'
})

$('#all').click(function(e){
    e.stopPropagation();
    $('#photo1').show();
    $('#photo2').show();
    $('#photo3').show();
    $('#photo4').show();
});
$('#web').click(function(e){
    e.stopPropagation();
    $('#photo1').show();
    $('#photo2').show();
    $('#photo3').hide();
    $('#photo4').hide();
});
$('#apps').click(function(e){
    e.stopPropagation();
    $('#photo1').hide();
    $('#photo2').hide();
    $('#photo3').show();
    $('#photo4').show();
});
$('#icons').click(function(e){
    e.stopPropagation();
    $('#photo1').show();
    $('#photo2').hide();
    $('#photo3').show();
    $('#photo4').hide();
});

$(function(){
    var stt_is_shown = false;
    $(window).scroll(function(){
        var win_height = 300;
        var scroll_top = $(document).scrollTop();
        if (scroll_top > win_height && !stt_is_shown) {
            stt_is_shown = true;
            $("#scroll-to-top").fadeIn();
        } else if (scroll_top < win_height && stt_is_shown) {
            stt_is_shown = false;
            $("#scroll-to-top").fadeOut();
        }
    });
    $("#scroll-to-top").click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, 1500);
    });
});





