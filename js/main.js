(function ($) {
    
     $.fn.navigationSlider = function(){
         
         $('.right-container').mouseover(function(){
            
             $('#link-slider').removeClass('link-slider-slide');
                                           
             $('#link-slider2').removeClass('link-slider-slide-third-level');
             
         });
         
         $('ul.link-list li').each(function(){
            
            /*  $(this).mouseout(function(){
               
                 var elementClick = this;
                  
              });*/
            
             $(this).click(function(){
              
                 var elementClick = this;
                 
                 if($(elementClick).children().children('a').hasClass('hasSlider')){
                      
                   
                    var dataSliderID = '#'+$(this).children().children('a').attr('data-slider')+'-slider';
                     
                      $('.active-li').removeClass('active-li');
                         
                         $(elementClick).addClass('active-li');
                     if( $('#link-slider').hasClass('link-slider-slide')){
                         
                        
                         
                         if($(elementClick).hasClass('active-nav-link')){
                             
                             $('#link-slider').removeClass('link-slider-slide');
                
                            $(elementClick).removeClass('active-nav-link');
                             
                              setTimeout(function(){
                                  
                                   $(dataSliderID).removeClass('active-slider');
                                  
                              },600);
                             
                         }else{
                             
                              $('.active-nav-link').removeClass('active-nav-link');
                             
                              $('#link-slider').removeClass('link-slider-slide',function(){

                                 setTimeout(function(){
                                     
                                      $('#link-slider2').removeClass('link-slider-slide-third-level');
                                     
                                     $('.active-slider').removeClass('active-slider');

                                     $(dataSliderID).addClass('active-slider');

                                     $('#link-slider').addClass('link-slider-slide');
                                     
                                      $(elementClick).addClass('active-nav-link');
                                     
                                 },600);  

                             });
                         }

                     }else{
                       
                         $(elementClick).addClass('active-nav-link');
                         
                         $(dataSliderID).addClass('active-slider');

                         setTimeout(function(){
                             
                             $('#link-slider').addClass('link-slider-slide');

                         },100);

                     }

                 }else{
                     
                        $('#link-slider').removeClass('link-slider-slide');
                     
                        $('#link-slider2').removeClass('link-slider-slide-third-level');
                     
                        $(elementClick).removeClass('active-nav-link');

                          setTimeout(function(){

                               $(dataSliderID).removeClass('active-slider');

                          },600);
                     
                 }
                 
             });
             
         });
         
          $('ul#list li a').each(function(){
            
            /*  $(this).mouseout(function(){
               
                 var elementClick = this;
                  
              });*/
           
             $(this).click(function(){
              
                 var elementClick = this;
                 
                 if($(elementClick).hasClass('hasSlider')){
                     
                    var dataSliderID = '#'+$(this).attr('data-slider')+'-slider';
                     
                     
                     if( $('#link-slider2').hasClass('link-slider-slide-third-level')){
                         
                         if($(elementClick).hasClass('active-nav-link')){
                             
                             $('#link-slider2').removeClass('link-slider-slide-third-level');
                
                            $(elementClick).removeClass('active-nav-link');
                             
                              setTimeout(function(){
                                  
                                   $(dataSliderID).removeClass('active-slider');
                                  
                              },600);
                             
                         }else{
                             
                              $('.active-nav-link').removeClass('active-nav-link');
                             
                             $('#link-slider2').removeClass('link-slider-slide-third-level',function(){

                                 setTimeout(function(){

                                     $('.active-slider').removeClass('active-slider');

                                     $(dataSliderID).addClass('active-slider');

                                     $('#link-slider2').addClass('link-slider-slide-third-level');
                                     
                                      $(elementClick).addClass('active-nav-link');
                                     
                                 },600);  

                             });
                         }

                     }else{
                       
                         $(elementClick).addClass('active-nav-link');
                         
                         $(dataSliderID).addClass('active-slider');

                         setTimeout(function(){
                             
                             $('#link-slider2').addClass('link-slider-slide-third-level');

                         },100);

                     }

                 }else{
                     
                        $('#link-slider2').removeClass('link-slider-slide-third-level');
                
                        $(elementClick).removeClass('active-nav-link');

                          setTimeout(function(){

                               $(dataSliderID).removeClass('active-slider');

                          },600);
                     
                 }
                 
             });
             
         });
         
         
     }
     
     $.fn.imageGallery = function(){
         
         var fullWidth = $('.right-container').width() * -1;
        
        var fullWidthPositive = $('.right-container').width();
         
         
         /*WIDTH COMPUTATION*/
         var parentWidth = $('.right-holder').width() - 60;
         
         var percentParentWidth = (parentWidth / $('.right-holder').width()) * 100;
         
         var totalLi = Math.ceil($('.image-gallery-list li').length / 2);
         
         var liwidth = (parentWidth / totalLi) - 
             $('.image-gallery-list li').css('marginLeft').replace('px', '') - 
             $('.image-gallery-list li').css('marginRight').replace('px', '') - 22;
         
         var percentwidth = (liwidth / parentWidth) * 100;
         $('.image-gallery-container').css({
            
             'width':percentParentWidth+'%'
         });
         
         $('.image-gallery-list li').css({
         
            'width':percentwidth+'%'
             
         });
         
        
          /*HEIGHT COMPUTATION*/
         var parentWidth = $('.right-holder').height() - 60;
         
         console.log(parentWidth);
         var percentParentWidth = (parentWidth / $('.right-holder').height()) * 100;
         
         var totalLi = Math.ceil($('.image-gallery-list li').length / 3);
         
         var liwidth = (parentWidth / totalLi) - 
             $('.image-gallery-list li').css('marginTop').replace('px', '') - 
             $('.image-gallery-list li').css('marginBottom').replace('px', '') - 22;
         
         var percentwidth = (liwidth / parentWidth) * 100;
         $('.image-gallery-container').css({
            
             'height':percentParentWidth+'%'
         });
         
         $('.image-gallery-list li').css({
         
            'height':percentwidth+'%'
             
         });
         
         
         $('.image-gallery-full-container').css({
         
             'right': fullWidth + 'px'
             
         });
                 
         $('.image-gallery-list li').each(function(){
         
            $(this).click(function(){
            
                var element = this;
                
                var imgLink = '#'+$(element).attr('data-img-link');
                
                $(imgLink).show(function(){
                    
                    $('.right-holder').addClass('right-holder-slide');
                    
                    setTimeout(function(){
                        
                        $('.image-gallery-full-container')
                        .addClass('image-gallery-full-container-slide');
                        
                    },200);
                
                });
                
            });
               
         });
         
     }
     
     $.fn.scrollList = function(){
         
         var element = this;
         
         var containerID = element.selector;
        
         var counter = 1;
         
         var shown = 1;
         
         $(containerID + ' ul#list li').each(function(){
            
             if(counter <= 9){
                
                 $(this).addClass('show-list');
                 
                 shown++;
                 
             }
             
             counter++;
         });
         
         var tempShown = shown - 1;
        
          var tempShown2 = shown - 1;
         
         var totalList = counter;
         
         counter = 1;
         

         $(containerID + ' span#down').stop().click(function(event){
             
              event.stopPropagation();
             
             $(containerID + ' span#up').children().show();
             
             var heightNega = ($(containerID + ' ul#list li').height() * -1) * counter;
    
             ++tempShown;      
             
             if($(containerID + ' ul#list li:nth-child('+tempShown+')').length != 0 ){
                 
                 $('.show-list').first().removeClass('show-list');
                 
                 $(containerID + ' ul#list li:nth-child('+tempShown+')').addClass('show-list');
                   
                 $(containerID + ' ul#list li').each(function(){
                     
                     $(this).stop().animate({
                         
                        top: heightNega+ 'px'
                         
                     },'fast','linear');

                 });
                 
                 if(tempShown + 1 == totalList){
                     
                      $(this).children().hide();
                     
                 }
                 
             }else{
                 
                  $(this).children().hide();
                 
             }
             
             
             counter++;
           
         });
        
         
          $(containerID + ' span#up').stop().click(function(event){
             
              event.stopPropagation();
              
              $(containerID + ' span#down').children().show();
              
             var height = $(containerID + ' ul#list li').position().top + 
                          $(containerID + ' ul#list li').height();
           
            tempShown2 = $('.show-list').first().index();
              
            tempShown--;
              
            counter--;
              
            
             if($(containerID + ' ul#list li:nth-child('+tempShown2+')').length != 0 ){
                 
                 $('.show-list').last().removeClass('show-list');
                 
                 $(containerID + ' ul#list li:nth-child('+tempShown2+')').addClass('show-list');
                   
                 $(containerID + ' ul#list li').each(function(){
                     
                     $(this).stop().animate({
                         
                        top: height+ 'px'
                         
                     },'fast','linear');

                 });
                 
                 if(tempShown2 === 1){
                     
                      $(this).children().hide();
                     
                 }
                 
             }else{
                 
                  $(this).children().hide();
                 
             }
               
         });
         
         
     }
     
     $.fn.loginForm = function(){
         
         
         $('.login-link').click(function(){
           
             var id = $(this).attr('id');
             
             var idLink = '#'+id+'-login';
             
             if(id === 'home'){
                 
                 $('#forgot-login').fadeOut(function(){
                    
                     $(idLink).fadeIn().removeClass('display-none');   
                     
                     $('#forgot-login').addClass('display-none');
                     
                 });
                 
             }else if(id === 'forgot'){
                 
                   $('#home-login').fadeOut(function(){
                    
                       $(idLink).fadeIn().removeClass('display-none'); 
                       
                       $('#home-login').addClass('display-none');
                   });
             
             }
             
         });
         
     }
     
     $.fn.modalShow = function(){

		var element = this;

		var btnClass = element.selector;

		var containerDiv = "."+btnClass+"Holder";


		$('.'+btnClass).click(function() {

			$(containerDiv).fadeIn("linear");

		});

		$('.closeHolder,.overlay').click(function(){
    
			$(containerDiv).fadeOut("linear");

		});

	}
     
     
})(jQuery);