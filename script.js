$(document).ready(function() {
	$('.navsummary').hide(); // hide the extra info divs under each tab in nav bar
	
	//slide down the extra info divs
	$('.navtop').hover(function() { 
		var idtype = $(this).attr('id');
		$("#"+idtype+"tab").slideToggle(75);
		$("#"+idtype+"tab").removeClass('navblack');
	});
	
	//slide out the extra info divs in black
	$('.navtop').mouseout(function() {
		var idtype = $(this).attr('id');
		$("#"+idtype+"tab").toggleClass('navblack');
	});
	
	//keep the extra info divs open if mouseover
	$('.navsummary').hover(function() {
		var summtype = $(this).attr('id');
		var navstyle = {
			"background-color":"#ccff11",
			"border-radius":"15px",
			"border-top-right-radius":"0px",
			"border-top-left-radius":"0px",
			"color":"black",
			"cursor":"default"
		};
		summtype = summtype.slice(0,summtype.length-3); // cut the id name to get the parent tab
		$(this).toggleClass('navblack');
		$("#"+summtype).css(navstyle);
		$("#"+summtype+" a").css("color","#000");
	});
	
	//remove temp css formatting on the tabs after mouseout
	$('.navsummary').mouseout(function() {
		var summtype = $(this).attr('id');
		summtype = summtype.slice(0,summtype.length-3);
		$("#"+summtype).removeAttr('style');
		$("#"+summtype+" a").removeAttr('style');
	});
});

//this is for resume seciton only
$(document).ready(function(){
	$('#resumefull').accordion({heightStyle:"content",collapsible:true});
});