$(document).ready(function(){
	
	var height = $('#valentineBirds').height();
	$('#svgWrap').css('height',height);
	
	$('#wrapper').velocity('transition.slideLeftIn', { stagger: 250 });
	
	$('#valentineBirds')
	.velocity({'stroke-dashoffset': '0'}, {duration: 2800})
	.velocity({'opacity': '0'});
	
	$('#valentineBirdsColour').velocity('fadeIn', { delay: 2700, duration: 300 });
	
	$('#submit').click(function(e){
		var name = $('#name').val();
		if( !$('#name').val() ) {
			$('p').velocity('fadeIn', {duration:300});
		} else {
			$(this).attr('href', 'http://twitter.com/home?status=Just wanted to say I love you @'+ name +'! Say I love you http://www.teodora-dev.com/valentine/ Created by @teodora76279859');
			$('#msg').css('display', 'none')
		}
	});

setTimeout(function(){
	
  for(i = 0; i < 18; i++) {
	  var hearts = $('<svg version="1.1" class="hearts" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 51.007 47.811" enable-background="new 0 0 51.007 47.811" xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke-width="2" stroke-miterlimit="10" d="M25.321,12.563C19.541-1.025,3.109,2.146,3,17.917c-0.06,8.662,7.825,11.899,13.074,15.362c5.09,3.359,8.713,7.953,9.28,9.909 c0.487-1.916,4.522-6.64,9.234-10.002c5.152-3.676,13.134-6.701,13.074-15.363C47.554,2.012,30.836-0.483,25.321,12.563z"/></svg>');
    $('body').append(hearts);
	
	$.each(hearts, function () {

		var path = $(this).find('path').get(0);
		var total_length = path.getTotalLength();
		var randomSpeed = Math.floor((Math.random() * 3500) + 1000);

		$(this)
			.css({
				'stroke-dasharray': total_length, 
				'stroke-dashoffset': total_length,
				'position':'fixed',
				'top': function() { return Math.random()* $(window).height() },
				'left': function() { return Math.random()* $(window).width() },
				'width': function() { return Math.floor(Math.random()* 65) + 'px' },
				'height': 'auto'
				})
			.velocity({
				'stroke-dashoffset': '0',
				'stroke': function() { return '#'+ Math.round(0xffffff * Math.random()).toString(16) },
				 translateX: function() { return Math.floor(Math.random()* 25) + 'px' },
				 translateY: function() { return Math.floor(Math.random()* 25) + 'px' },
				}
				,{loop:true}, randomSpeed)
			.velocity('reverse', randomSpeed)
	});
  }//end loop hearts
}, 6000);

setTimeout(function(){ 
  for(i = 0; i < 25; i++) {
	  var stars = $('<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24.214px" height="23.023px" viewBox="0 0 24.214 23.023" enable-background="new 0 0 24.214 23.023" xml:space="preserve"><polygon fill="#FC9F0B" points="12.106,0 15.847,7.576 24.214,8.794 18.158,14.695 19.586,23.023 12.106,19.09 4.628,23.023 6.056,14.695 0,8.794 8.367,7.576 "/></svg>');
    $('body').append(stars);
	
	$.each(stars, function () {
		var randomSpeed = Math.floor((Math.random() * 3500) + 1000);
		$(this)
			.css({
				'position':'fixed',
				'top': function() { return Math.random()* $(window).height() },
				'left': function() { return Math.random()* $(window).width() },
				'width': function() { return Math.floor(Math.random()* 15) + 'px' },
			})
			.velocity({
				'opacity':'0'
			},{loop:true}, randomSpeed)
			.velocity('reverse', randomSpeed);
	});
	
  } //end loop stars

}, 4000);

});