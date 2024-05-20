var lastScrollTop = 0;

$(window).scroll(function(event){
	var st = $(this).scrollTop();
		if (st > lastScrollTop){
			$('.navbar').addClass('hidden');
		} else {
			$('.navbar').removeClass('hidden');
		}
		lastScrollTop = st;
});