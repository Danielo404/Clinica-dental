$(document).ready(function(){
    $(window).on('scroll', function(){

        if( $(window).scrollTop() > 0)
        {
            $('.menu').addClass('menu-fixed');
        } 
        else
        {
            $('.menu').removeClass('menu-fixed');
        }
    });
});