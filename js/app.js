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
	  
	  //Init the Skrollr
	  var s = skrollr.init(
	  { 
	  	forceHeight: false
	  });
	  
	// Get window size
	    winH = $window.height();
	    
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 
	    
	    // Resize our slides
	    $slider.height(winH);
	    s.refresh($('.homeSlide'));
	    // Refresh Skrollr after resizing our sections
	    
	    
	}
		
 
})(jQuery);