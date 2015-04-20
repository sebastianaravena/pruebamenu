var jQuery = jQuery.noConflict();
(function($){jQuery(document).ready(function($){
     $('.hassub').parent().mouseover(function(){
        $('ul.wah-ul').addClass('subactivated');
         $(this).find('.sub').addClass('opened');
         $(this).addClass('active');
     });
    $('.hassub').parent().mouseleave(function(){
        $('ul.wah-ul').removeClass('subactivated');
        $(this).find('.sub').removeClass('opened');
        $(this).removeClass('active');
     });

     $('.hide').on('click' , function(){
        $(this).find('span').toggleClass('hideicon');
        $('.wah-ul').toggleClass('minimized');
        $('.wah-ul a').powerTip('destroy');
       $('.wah-ul.minimized a').powerTip({
	placement: 'e' // north-east tooltip position
});
    });
 $('.wah-menu').imagesLoaded( function(){   $(".sidebar-scroll").mCustomScrollbar({
     	  scrollInertia:600,
     	  set_height:"75%",
					scrollButtons:{
						enable:true
					},
					theme:"dark-thin"
				});
           });
  $('.wah-ul.minimized a').powerTip({
	placement: 'e' // north-east tooltip position
});

});
})(jQuery);
