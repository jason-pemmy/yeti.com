$(document).on("ready",function(){
    $(".hamburger-menu").on("click", function(){
        $(this).toggleClass("open");
        $(".yeti-mobile-menu").toggleClass("open");
    });    
});