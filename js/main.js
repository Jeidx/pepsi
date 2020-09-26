$(document).ready(function(){
    $('#sprite-footer').click(function(event){
        $('#sprite').toggleClass('active');
        $('.bg-srpite').toggleClass('active');

        $('.bg-pepsi').removeClass('active');
        $('.bg-fanta').removeClass('active');
        $('.bg-cola').removeClass('active');

        $('#pepsi').removeClass('active');
        $('#fanta').removeClass('active');
        $('#cola').removeClass('active');

    });
    $('#pepsi-footer').click(function(event){
        $('#pepsi').toggleClass('active');
        $('.bg-pepsi').toggleClass('active');

        $('.bg-srpite').removeClass('active');
        $('.bg-fanta').removeClass('active');
        $('.bg-cola').removeClass('active');

        $('#sprite').removeClass('active');
        $('#fanta').removeClass('active');
        $('#cola').removeClass('active');
    });
    $('#fanta-footer').click(function(event){
        $('#fanta').toggleClass('active');
        $('.bg-fanta').toggleClass('active');

        $('.bg-pepsi').removeClass('active');
        $('.bg-srpite').removeClass('active');
        $('.bg-cola').removeClass('active');

        $('#sprite').removeClass('active');
        $('#pepsi').removeClass('active');
        $('#cola').removeClass('active');
    });
    $('#cola-footer').click(function(event){
        $('#cola').toggleClass('active');
        $('.bg-cola').toggleClass('active');

        $('.bg-pepsi').removeClass('active');
        $('.bg-fanta').removeClass('active');
        $('.bg-srpite').removeClass('active');

        $('#sprite').removeClass('active');
        $('#fanta').removeClass('active');
        $('#pepsi').removeClass('active');
    });
    $('.card-front').click(function(event){
        $('.popup').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.close-popup').click(function(event){
        $('.popup').removeClass('active');
        $('body').removeClass('lock');

    });
   
    
});