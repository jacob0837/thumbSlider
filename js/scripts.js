$(document).ready(function () {
	var totalWidth = 0;
	var positions = new Array();
	
	$('#slides .slide').each(function(i){
		// Get slider widths
		positions[i] = totalWidth;
		totalWidth += $(this).width();
		
		// check widths
		if (!$(this).width()) {
			alert('Please add a width to your images');
			return false;
		}

	});
	// set width
	$('#slides').width(totalWidth);
	
	// menu item clicker
	$('#menu ul li a').click(function (e, keepScroll) {
		// remove active class when add inactive
		$('li.product').removeClass('active').addClass('inactive');
		//add active class to parent
		$(this).parent().addClass('active');

		var pos = $(this).parent().prevAll('.product').length;

		



$('#slides').stop().animate({marginLeft:-positions[pos]+'px' }, 450);
		
		//Prevent Default
		
		e.preventDefault();
		//stop autosctoll
		if (!autoScroll) clearInterval(itvl);
	});
		//make first image active 
	$('#menu ul li.product:first').addClass('active').siblings().addClass('inactive');
	
	//Auto Scroll
	var current = 1;
	function autoScroll() {
		if (current == -1) return false;

		$('#menu ul li a').eq(current % $('#menu ul li a').length).trigger('click', [true]);
		current++;

	}
	
	//duration for autoscroll
	
	var duration = 10;
	var itvl = setInterval(function () { autoScroll() },
		duration * 1000);


});