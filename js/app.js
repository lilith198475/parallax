//Preset for image loading and window resize//


(function($){
	
  var $window = $(window);	
  var $body = $('body');
  var $slider = $('.homeSlide');
  
  $body.imagesLoaded(function(){
	  setTimeout(function(){
	   
	  // Resize sections
		 adjustWindow();   
	   	  
	  $body.removeClass('loading').addClass('loaded');
	  
	  },800)
  
  });
  
  
  
  function adjustWindow(){

		// Get window size
	    winH = $window.height();
		winW = $window.width();
	  	
		  // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 
		
	 if( winW >= 768){
		 
	  //Init the Skrollr
		  var s = skrollr.init(
		  { 
			forceHeight: false
		  });		  
		  
		// Resize our slides
	    $slider.height(winH);
	    s.refresh($('.homeSlide'));
	    // Refresh Skrollr after resizing our sections

	 }else{
		 //Init the Skrollr
		  var s = skrollr.init();
		  s.destroy();
	 }
	  
	 //Check if it works on a touchscreen
	 
	 if(Modernizr.touch) {
	    
		//Init the Skrollr
		  var s = skrollr.init();
		  s.destroy();
	 }
	}
		
 
})(jQuery);