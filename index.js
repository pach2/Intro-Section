$("#feature-button").click(function(){
    $(".feature-dropdown").slideToggle();
});
$("#company-button").click(function(){
    $(".company-dropdown").slideToggle();
});
$(".menu-icon").click(function(){
    if($("#menu").css('display')==='none'){
    $("nav").animate({width: 'toggle'});
    $("#menu").css('display','block');
    $("#signup").css('display','block');
    $(".menu-icon").css('content','url(Assets/icon-close-menu.svg)');
    }
    else{
        $("nav").animate({width: 'toggle'});
    $("#menu").css('display','none');
    $("#signup").css('display','none');
    $(".menu-icon").css('content','url(Assets/icon-menu.svg)');
    }
});