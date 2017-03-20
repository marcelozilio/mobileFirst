$(document).ready(function(){
    $('.topo').hide();
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 0)
        {
            $('.topo').fadeIn();
        }
        else
        {
            $('.topo').fadeOut();    
        }
    });
    
    $('.topo').click(function(){
        $('body').animate({
            scrollTop: 0
        });    
    });
});