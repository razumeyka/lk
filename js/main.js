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
	
	$(document).on('click','.accordion__close_common',function(){
        $(this).parent().slideUp(500);
		$(this).parent().parent().find('.accordion__question').toggleClass('active');
    });
	
	$(document).on('click','.accordion__close_my',function(){
        $(this).parent().parent().slideUp(500);
		$(this).parent().parent().parent().find('.accordion__question').toggleClass('active');
    });
	
		
//tabs
	
	$(document).on('click','.accordion .search-tabs__label',function(){
		$(this).parent().find('.search-tabs__label').removeClass('active');
        $(this).toggleClass('active');
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