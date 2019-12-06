$(document).ready(function(){   
	
// main-screen height
	
	function setHeiHeight() {
		$('.login-screen').css({
			height: $(window).height() - 52 + 'px'
		});
	}
	setHeiHeight();
	
	$(window).resize(function(e){
		setHeiHeight();
	});
	
	
	
// accordion
	
	$('.accordion__answer').hide();
	
    $(document).on('click','.accordion__question',function(e){
        $(this).next().slideDown(500);
		$(this).toggleClass('active');
    });
	
	$(document).on('click','.accordion__close',function(){
        $(this).parent().parent().slideUp(500);
		$(this).parent().parent().parent().find('.accordion__question').toggleClass('active');
    });
	
//search
		
	$('.account-search__field').focusin(function(){
		$('.account-search__placeholder').addClass('disabled');
		$(this).closest('.account-search').addClass('active');
	}); 
	
	$(document).on('click','.account-search .fa-times',function(e){
        $('.account-search__placeholder').removeClass('disabled');
		$(this).closest('.account-search').removeClass('active');
		$(this).closest('.account-search')[0].reset();
    });
	
		 
});