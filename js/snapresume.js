/*** iPhone's Clock ***/
setInterval(function(){
    document.getElementById("clock").innerHTML = (new Date()).toLocaleTimeString();
    var n = document.getElementById("clock").innerHTML.lastIndexOf(":");
    var str = document.getElementById("clock").innerHTML.slice(0,n) + document.getElementById("clock").innerHTML.slice(n+3);
    document.getElementById("clock").innerHTML = str;
}, 1000);


/*** Snapchat Behaviour ***/

/* Gloabal Variables */
displaytime = 10000;	//default: 10s


// Snaps are Mutually Exclusive
var mutex1 = 0;
var mutex2 = 0;
var mutex3 = 0;
var mutex4 = 0;

var displaytimeout = 0;
var clicktimeout   = 0;
var starttime      = 0;
var currenttime    = 0;
var status         = 0;	// 0: not-opened, 1: in-progress, 2: done


jQuery('#about-me').mousedown(function() {	
	if (mutex2 == 0 && mutex3 == 0 && mutex4 == 0)
	{
		mutex1 = 1;
		if (status == 0){
			starttime = (new Date()).getTime();
			clicktimeout = setTimeout(showSnap1, 200);
			displaytimeout = setTimeout(function(){hideSnap(".tab3")}, displaytime);
			jQuery("#timeleft1").html(parseInt((displaytime)/1000,10));
		}
		else if (status == 1) {
			clicktimeout = setTimeout(showSnap1, 200);
			displaytimeout = setTimeout(function(){hideSnap(".tab3")}, displaytime-currenttime-starttime);
		}
		else {
			hideSnap(".tab3");
			mutex1 = 0;
		}	
	}
}).on('mouseup mouseleave', function() {
	if (mutex1 == 1 && mutex2 == 0 && mutex3 == 0 && mutex4 == 0)
	{
		hideSnap(".tab3");
		if (status == 0) status = 1;
		clearTimeout(clicktimeout);
	}
});

function hideSnap(selector){
	jQuery(selector).css("display","none");
	jQuery("#view-home").css("display","block");
}

var showSnap1 = function() {
	jQuery(".tab3").css("display","block");
	jQuery("#view-home").css("display","none");
	jQuery("#about-me div.big").addClass("light");
	jQuery("#about-me span").addClass("ion-ios7-person-outline");
	jQuery("#about-me span").removeClass("ion-ios7-person-albums");

	var timeleft = setInterval(function(){
		currenttime = (new Date()).getTime();
		jQuery("#timeleft1").html(parseInt((displaytime+1000-(currenttime - starttime))/1000,10));
	}, 1000);
	setTimeout(function(){clearInterval(timeleft);status = 2;mutex1 = 0;}, displaytime);
};

var clicked2 = 0;

jQuery('#education').mousedown(function() {	
	if (mutex1 == 0 && mutex3 == 0 && mutex4 == 0)
	{
		mutex2 = 1;
		if (clicked2 == 0){
			starttime = (new Date()).getTime();
			clicktimeout = setTimeout(showSnap2, 200);
			displaytimeout = setTimeout(function(){hideSnap(".tab2")}, displaytime);
			jQuery("#timeleft2").html(parseInt((displaytime)/1000,10));
		}
		else if (clicked2 == 1) {
			clicktimeout = setTimeout(showSnap2, 200);
			displaytimeout = setTimeout(function(){hideSnap(".tab2")}, displaytime-currenttime-starttime);
		}
		else {
			hideSnap(".tab2");
			mutex2 = 0;
		}
	}
}).on('mouseup mouseleave', function() {
	if (mutex1 == 0 && mutex2 == 1 && mutex3 == 0 && mutex4 == 0)
	{
		hideSnap(".tab2");
		if (clicked2 == 0) clicked2 = 1;
		clearTimeout(clicktimeout);
	}
});

var showSnap2 = function() {
	jQuery(".tab2").css("display","block");
	jQuery("#view-home").css("display","none");
	jQuery("#education div.big").addClass("light");
	jQuery("#education span").addClass("ion-ios7-bookmarks-outline");
	jQuery("#education span").removeClass("ion-ios7-bookmarks");

	var timeleft = setInterval(function(){
		currenttime = (new Date()).getTime();
		jQuery("#timeleft2").html(parseInt((displaytime+1000-(currenttime - starttime))/1000,10));
	}, 1000);
	setTimeout(function(){clearInterval(timeleft);clicked2 = 2;mutex2 = 0;}, displaytime);
};

var clicked3 = 0;

jQuery('#work').mousedown(function() {	
	if (mutex1 == 0 && mutex2 == 0 && mutex4 == 0)
	{
		mutex3 = 1;
		if (clicked3 == 0){
			starttime = (new Date()).getTime();
			clicktimeout = setTimeout(showSnap3, 200);
			displaytimeout = setTimeout(function(){hideSnap(".tab1")}, displaytime);
			jQuery("#timeleft3").html(parseInt((displaytime)/1000,10));
		}
		else if (clicked3 == 1) {
			clicktimeout = setTimeout(showSnap3, 200);
			displaytimeout = setTimeout(function(){hideSnap(".tab1")}, displaytime-currenttime-starttime);
		}
		else {
			hideSnap(".tab1");
			mutex3 = 0;
		}
	}
}).on('mouseup mouseleave', function() {
	if (mutex1 == 0 && mutex2 == 0 && mutex3 == 1 && mutex4 == 0)
	{
		hideSnap(".tab1");
		if (clicked3 == 0) clicked3 = 1;
		clearTimeout(clicktimeout);
	}
});

var showSnap3 = function() {
	jQuery(".tab1").css("display","block");
	jQuery("#view-home").css("display","none");
	jQuery("#work div.big").addClass("light");
	jQuery("#work span").addClass("ion-ios7-briefcase-outline");
	jQuery("#work span").removeClass("ion-ios7-briefcase");

	var timeleft = setInterval(function(){
		currenttime = (new Date()).getTime();
		jQuery("#timeleft3").html(parseInt((displaytime+1000-(currenttime - starttime))/1000,10));
	}, 1000);
	setTimeout(function(){clearInterval(timeleft);clicked3 = 2;mutex3 = 0;}, displaytime);
};

var clicked4 = 0;

jQuery('#skills').mousedown(function() {	
	if (mutex1 == 0 && mutex2 == 0 && mutex3 == 0)
	{
		mutex4 = 1;
		if (clicked4 == 0){
			starttime = (new Date()).getTime();
			clicktimeout = setTimeout(showSnap4, 200);
			displaytimeout = setTimeout(function(){hideSnap(".tab0")}, displaytime);
			jQuery("#timeleft4").html(parseInt((displaytime)/1000,10));
		}
		else if (clicked4 == 1) {
			clicktimeout = setTimeout(showSnap4, 200);
			displaytimeout = setTimeout(function(){hideSnap(".tab0")}, displaytime-currenttime-starttime);
		}
		else {
			hideSnap(".tab0");
			mutex4 = 0;
		}
	}
}).on('mouseup mouseleave', function() {
	if (mutex1 == 0 && mutex2 == 0 && mutex3 == 0 && mutex4 == 1)
	{
		hideSnap(".tab0");
		if (clicked4 == 0) clicked4 = 1;
		clearTimeout(clicktimeout);
	}
});

var showSnap4 = function() {
	jQuery(".tab0").css("display","block");
	jQuery("#view-home").css("display","none");
	jQuery("#skills div.big").addClass("light");
	jQuery("#skills span").addClass("ion-ios7-speedometer-outline");
	jQuery("#skills span").removeClass("ion-ios7-speedometer");

	var timeleft = setInterval(function(){
		currenttime = (new Date()).getTime();
		jQuery("#timeleft4").html(parseInt((displaytime+1000-(currenttime - starttime))/1000,10));
	}, 1000);
	setTimeout(function(){clearInterval(timeleft);clicked4 = 2;mutex4 = 0;}, displaytime);
};


jQuery('#profile').click(function() {
	toggleClass("#view-home", "hidden2", "active");
	toggleClass("#view-profile", "active", "hidden");
});


jQuery('.ion-camera').click(function() {
	toggleClass("#view-home", "hidden2", "active");
	toggleClass("#view-about", "active", "hidden");
});

jQuery('.ion-gear-b').click(function() {
	toggleClass("#view-home", "hidden2", "active");
	toggleClass("#view-settings", "active", "hidden");
});

jQuery('.about .ion-ios7-arrow-forward').click(function() {
	toggleClass("#view-about", "hidden", "active");
	toggleClass("#view-home", "active", "hidden2");
});

jQuery('.settings .ion-ios7-arrow-back').click(function() {
	toggleClass("#view-settings", "hidden", "active");
	toggleClass("#view-home", "active", "hidden2");
});

jQuery('.profile .ion-ios7-arrow-back').click(function() {
	toggleClass("#view-profile", "hidden", "active");
	toggleClass("#view-home", "active", "hidden2");
	jQuery("#view-home #profile div.big").addClass("light");
	jQuery("#view-home #profile div.big").removeClass("big");
	jQuery("#view-home #profile span").addClass("ion-ios7-information-outline");
	jQuery("#view-home #profile span").removeClass("ion-ios7-information");
});

jQuery('#toggle').click(function(){
	if (this.checked == false)
	{
		jQuery("#timesetter").fadeTo('slow',.6);
		jQuery("#disabler").css({
			  "top": "120px",
			  "filter": "alpha(opacity = 50)",
			  "opacity" : "0.4"
    	});
	}
	if (this.checked == true)
	{
		jQuery("#timesetter").fadeTo('slow',1);
		jQuery("#disabler").css({
			  "top": "150px",
			  "filter": "alpha(opacity = 100)",
			  "opacity" : "1"
    	});
	}
});

jQuery('.control#plus').mouseenter(function(){
	jQuery('.control#plus span').removeClass('ion-ios7-plus-outline');
	jQuery('.control#plus span').addClass('ion-ios7-plus');
});

jQuery('.control#plus').mouseleave(function(){
	jQuery('.control#plus span').removeClass('ion-ios7-plus');
	jQuery('.control#plus span').addClass('ion-ios7-plus-outline');
});

jQuery('.control#minus').mouseenter(function(){
	jQuery('.control#minus span').removeClass('ion-ios7-minus-outline');
	jQuery('.control#minus span').addClass('ion-ios7-minus');
});

jQuery('.control#minus').mouseleave(function(){
	jQuery('.control#minus span').removeClass('ion-ios7-minus');
	jQuery('.control#minus span').addClass('ion-ios7-minus-outline');
});

jQuery('.control#plus').click(function(){
	if (parseInt(jQuery('#timer').val()) < 99)
	{
		jQuery('#timer').val(parseInt(jQuery('#timer').val())+1);
		displaytime = parseInt(jQuery('#timer').val()) * 1000;
		console.log(displaytime);
	}
});

jQuery('.control#minus').click(function(){
	if (parseInt(jQuery('#timer').val()) > 1){
		jQuery('#timer').val(parseInt(jQuery('#timer').val())-1);
		displaytime = parseInt(jQuery('#timer').val()) * 1000;
	}
});

jQuery(document).ready(fixbackgroundsize);
jQuery(window).resize(fixbackgroundsize);

function fixbackgroundsize() {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) == false ) {
	  var height = jQuery(window).height();
	  if (height < 700)
	  {
		  var margin = 100 - (700 - height )/2 + "px";
		  jQuery(".wrapper").css("margin-top",margin);
	  }
  }
  else
  {
  	/* TODO: Add Mobile Support **/
  	jQuery(".ios7").html("<div id='mobile-msg'><img src='../snapchat/img/Snapchat_logo.png' width=100px /><br/><p>Oops! Looks like you're seeing this page on a handheld device. You gotta access it from a desktop browser :(</p><p>For the time being, you can visit my profile at <a href='http://navid.cc'>navid.cc</a></p></div>");
  	jQuery("#mobile-msg").css("height",document.documentElement.clientHeight)
  }
}

function toggleClass(selector, newclass, oldclass) {
  	jQuery(selector).addClass(newclass);
	jQuery(selector).removeClass(oldclass);
}