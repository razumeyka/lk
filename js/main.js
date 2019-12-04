$(document).ready(function(){    
    $('.learn').click(function(event) { 
        event.preventDefault();
        $(".form_screen .wpcf7-form").addClass('active');
    });
    
    $('.back').click(function(event) { 
        event.preventDefault();
        $(".form_screen .wpcf7-form").removeClass('active');
    }); 
	
// accordion
	
	$('.accordion__answer').hide();
	
    $(document).on('click','.accordion__question',function(){
        $(this).next().slideDown(500);
    });
	
	$(document).on('click','.accordion__close',function(){
        $(this).parent().slideUp(500);
    });
		 
});