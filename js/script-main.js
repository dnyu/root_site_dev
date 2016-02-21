$("document").ready(function() {
	
	$.scrollify({ section : ".panel" });

	$(".scroll, .scroll-button").click(function(){
		$.scrollify.next();
	});

});
