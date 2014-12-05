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
                             
                            $('#link-slider2').removeClass('link-slider-slide-third-level');

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
         
          $('ul#list li').each(function(){
            
            /*  $(this).mouseout(function(){
               
                 var elementClick = this;
                  
              });*/
          

            

             $(this).click(function(){
              
                 var elementClick = this;
                 
                 if($(this).parents('.nav-slider-holder2').length != 0){

                   window.location = $(this).find('a').attr('href');
            
                 }else{

                    $('.active-second').removeClass('active-second');
                     
                    $(elementClick).addClass('active-second');
                     
                     if($(elementClick).children().children('a').hasClass('hasSlider')){
                         
                        var dataSliderID = '#'+$(this).children().children('a').attr('data-slider')+'-slider';
                           
                      
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

                                         $('#link-slider2 .active-slider').removeClass('active-slider');

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
         
         /*var totalLi = Math.floor($('.image-gallery-list li').length / 3);*/
         
         var liwidth = (parentWidth / 3) - 
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
    
         var percentParentWidth = (parentWidth / $('.right-holder').height()) * 100;
         
         var totalLi = Math.ceil($('.image-gallery-list li').length / 3);
         
         var liwidth = (parentWidth / totalLi) - 
             $('.image-gallery-list li').css('marginTop').replace('px', '') - 
             $('.image-gallery-list li').css('marginBottom').replace('px', '') - 22;
         
         var percentwidth = (liwidth / parentWidth) * 100;
        /* $('.image-gallery-container').css({
            
             'height':percentParentWidth+'%'
         });*/
         
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

         var tempShown = {};
    
         var tempShown2 = {};
         
         var totalList = {};

         var arrayCounter = {};

         var temp = 1;

         $(containerID).each(function(){

            event.stopPropagation();
            
            var listId = '#'+$(this).attr('id');

            shown = 1;

            counter = 1;

            $(listId + '>ul#list li').each(function(){
        
                 if(counter <= 6){
                    
                     $(this).addClass('show-list');
                     
                     if(counter === 6){
                         $(this).addClass('no-border-bottom');
                     }
                     shown++;
                     
                 }
                 
                 counter++;
             });

             tempShown[listId] = shown - 1;
        
             tempShown2[listId] = shown - 1;
             
             totalList[listId]= counter;
             
             /*counter = 1;*/

             arrayCounter[listId] = 1;

             $(listId + ' span#down i').stop().click(function(event){
                 
                 $(listId + ' span#up').children().show();
                 
                 var heightNega = ($(listId + ' ul#list li').outerHeight() * -1) * arrayCounter[listId];
            
                 ++tempShown[listId];      
                    

                 if($(listId + ' ul#list li:nth-child('+tempShown[listId]+')').length != 0 ){
                     
                     $(listId + '>ul#list li.show-list').first().removeClass('show-list');
                     
                     $(listId + '>ul#list li.show-list').last().removeClass('no-border-bottom');
                     
                     $(listId + ' ul#list li:nth-child('+tempShown[listId]+')').addClass('show-list no-border-bottom');

                     $(listId + ' ul#list li').each(function(){

                         $(this).stop().animate({

                            top: heightNega+ 'px'

                         },'fast','linear');

                     });

                    

                     if(tempShown[listId] + 1 == totalList[listId]){
                         
                          $(this).hide();
                         
                     }
                     
                 }else{
                     
                      $(this).hide();
                     
                 }
                 
                 
                 arrayCounter[listId]++;
               
             });
            
             
              $(listId + ' span#up i').stop().click(function(event){
                    
                  event.stopPropagation();

                  $(listId + ' span#down').children().show();
                  
                 var height = $(listId + ' ul#list li').position().top + 
                              $(listId + ' ul#list li').outerHeight();
               
                tempShown2[listId] =  $(listId + '>ul#list li.show-list').first().index();
                  
                tempShown[listId]--;
                  
                arrayCounter[listId]--;
                  
                
                 if($(listId + ' ul#list li:nth-child('+tempShown2[listId]+')').length != 0 ){
                     

                     $(listId + '>ul#list li.show-list').last().removeClass('show-list');
                     
                     $(listId + ' ul#list li:nth-child('+tempShown2[listId]+')').addClass('show-list');
                    
                    $(listId + '>ul#list li.show-list').last().addClass('no-border-bottom');

                     $(listId + ' ul#list li').each(function(){
                         
                         $(this).stop().animate({
                             
                            top: height+ 'px'
                             
                         },'fast','linear');

                     });
                     
                     if(tempShown2[listId] === 1){
                         
                          $(this).hide();
                         
                     }
                     
                 }else{
                     
                      $(this).hide();
                     
                 }
                   
             });

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
     
   $.fn.dropHeader = function(){
        
       $('ul.header-option li').each(function(){
       
            $(this).click(function(){
               
                var element = this;
                
                var listId = '#'+$(element).attr('id')+'-drop-holder';
                
                /*$('.header-drop').fadeOut(function(){*/
                    
                    if($(listId).hasClass('active-drop')){
                        
                        $(listId).removeClass('active-drop').fadeOut();
                        
                    }else{
                        
                        $('.active-drop').removeClass('active-drop').fadeOut();
                        
                        setTimeout(function(){
                            
                             $(listId).fadeIn().addClass('active-drop');
                            
                        },200);
                       
                        
                    }
                    
                    
              /*  });*/
                
            });
           
       });
       
   }
     
})(jQuery);