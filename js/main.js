$(document).on("ready",function(){
    $(".hamburger-menu").on("click", function(){
		$(this).toggleClass("open");
		
		if(!$(".yeti-mobile-menu").hasClass("open")) {
			console.log("is closed");
			$(".yeti-mobile-menu").css("z-index", "1").delay(2000).addClass("open");
		}else {
			$(".yeti-mobile-menu").removeClass("open");
			setTimeout(function(){
				$(".yeti-mobile-menu").css("z-index", "-1");
			},600);
		}
    });    
});