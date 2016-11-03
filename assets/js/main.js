jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
	
	/*var calculate_exp = function(){
		var start = new Date("2010-04-01"),
    end   = new Date(),
    diff  = new Date(end - start),
    days  = diff/1000/60/60/24;

	days; //=> 8.525845775462964
		
	}*/
   
    

});