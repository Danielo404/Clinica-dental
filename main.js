$(document).ready(function(){
    var altura = $('.menu').offset().top;

    $(window).on('scroll', function(){

        if( $(window).scrollTop() > altura)
        {
            $('.menu').addClass('menu-fixed');
            $('.contenedor-body').addClass('paddin');
        } 
        else
        {
            $('.menu').removeClass('menu-fixed');
            $('.contenedor-body').removeClass('paddin');
        }
    });
});