(function ($) {
    
    var SHOWNLIGLOBAL=6;
	
	var SCROLLTIMES=1;
	
	var SCROLLTIMES2=1;
	
     $.fn.navigationSlider = function(options){
      
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

                              $('#link-slider2').removeClass('link-slider-slide-third-level');

                              $('#link-slider').removeClass('link-slider-slide',function(){

                                 setTimeout(function(){
                                     
                                     //$('#link-slider2').removeClass('link-slider-slide-third-level');
                                     
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
                    
                    $('#header-container-main, #main-right-holder').addClass('right-holder-slide');
                    
                    setTimeout(function(){
                        
                        $('.image-gallery-full-container')
                        .addClass('image-gallery-full-container-slide');
                        
                    },200);
                
                });
                
            });
               
         });
         
     }
     
     $.fn.scrollList = function(){


        var shownli = settings.shownli;

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

            var listId = '#'+$(this).attr('id');

            shown = 1;

            counter = 1;

           if(SHOWNLIGLOBAL >= $(listId + ' > ul#list li').length){

               
                $(listId + ' span#down i').hide();

                 $(listId + ' > ul#list li').each(function(){
                        
                         if(counter === SHOWNLIGLOBAL){
                             $(this).addClass('no-border-bottom');
                        }
                            
                     counter++;
                 });


           }

            shown = 1;

            counter = 1;

            $(listId + ' > ul#list li').each(function(){
                    
                
                 if(counter <= SHOWNLIGLOBAL){

                     $(this).addClass('show-list');
                    

                     if(counter === SHOWNLIGLOBAL){
                         $(this).addClass('no-border-bottom');
                         
                    }           
                    
                    if($(this).is(":last-child")){

                        $(this).addClass('no-border-bottom');

                   }

                     shown++;
                     
                 }

                   
                    
                 
                
                        
                 counter++;
             });
            
             
           /* $(listId + '>ul').css({

                'height':liheight+'px'

            });*/

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

     $.fn.modalShowThumb = function(){

        var element = this;

        var btnClass = element.selector;

        var containerDiv = "."+btnClass+"Holder";


        $('.'+btnClass).children().each(function() {

            $(this).click(function(){

                var imglink=$(this).attr('data-img-link');

                var imglabel=$(this).attr('data-img-label');

                var img = $('<img>'); 
                    img.attr('src', imglink);
                    img.appendTo('.imgHolder');

                $('.viewname-holder').html(imglabel);

                $(containerDiv).fadeIn("linear");


            });

            
        });

        $('.closeHolder,.overlay').click(function(){
    
            $(containerDiv).fadeOut("linear");

             setTimeout(function(){
            
                $('.imgHolder img').remove();
                
            },300);


        });

    }

    $.fn.modalShowFloorPlan = function(){

        var element = this;

        var btnClass = element.selector;

        var containerDiv = "."+btnClass+"Holder";


        $('.'+btnClass).click(function(){

            var imglink=$(this).attr('data-img-link');

            var img = $('<img>');
                img.attr('src', imglink);
                img.appendTo('.imgHolder');

        
            $(containerDiv).fadeIn("linear");


        });


        $('.closeHolder,.overlay').click(function(){
    
            $(containerDiv).fadeOut("linear");

             setTimeout(function(){
            
                $('.imgHolder img').remove();
                
            },300);
             

        });

    }

     
     $.fn.thumbnailShow = function(){

		var element = this;

		var btnClass = element.selector;

		var containerDiv = "."+btnClass+"Holder";

        var list = "."+btnClass+" li";
         
         var indexLi;
         
         
         
		$('.'+btnClass).children().each(function() {
            
            $(this).click(function(){
                
                indexLi = $(this).index() + 1;
                
                $(this).addClass('enlarge');
                
                var newElement = "<img src='"+$(this).children('img').attr('data-img-lg')+"' />";
              
                $('.imgHolder').append(newElement);
                
                $(containerDiv).fadeIn("linear");
                
            });
            
            
			

		});
          
         $(containerDiv+' .modalContent .messageContainer .nextImg i').click(function(){
            
            var nextLi = indexLi + 1;
             
             if($(list).length >= nextLi){
                 
                 var nextsrc = $('.'+btnClass+' li:nth-child('+nextLi+') img').attr('data-img-lg');
                
                 console.log($(list).length+' '+nextsrc);

                 $('.imgHolder img').attr('src',nextsrc).fadeIn();
                     
                 indexLi = nextLi;
                 
             }else{
                 
                nextLi = 1;
                 
                var nextsrc = $('.'+btnClass+' li:nth-child('+nextLi+') img').attr('data-img-lg');
 
                $('.imgHolder img').attr('src',nextsrc).fadeIn();

                indexLi = 1;
                 
             }
             
         });
         
         $(containerDiv+' .modalContent .messageContainer .prevImg i').click(function(){
            
             var nextLi = indexLi - 1;
             
             console.log($(list).length+ ' '+nextLi );
             
             if(nextLi > 0){
                 
                 var nextsrc = $('.'+btnClass+' li:nth-child('+nextLi+') img').attr('data-img-lg');
                 
                 $('.imgHolder img').attr('src',nextsrc).fadeIn("linear");
                     
                 indexLi = nextLi;
                 
             }else{
                 
                nextLi = $(list).length;
                 
                var nextsrc = $('.'+btnClass+' li:nth-child('+nextLi+') img').attr('data-img-lg');
                 
                $('.imgHolder img').attr('src',nextsrc).fadeIn("linear");
                 
                indexLi = $(list).length;
                 
             }
             
         });
         
		$('.closeHolder,.overlay').click(function(){
            
            $('.enlarge').removeClass('enlarge');
            
           
            
			$(containerDiv).fadeOut("linear");
            
            setTimeout(function(){
            
                $('.imgHolder img').remove();
                
            },300);

		});

	}

    $.fn.thumbnailShow2 = function(){

        var element = this;

        var btnClass = element.selector;

        var containerDiv = "."+btnClass+"Holder";

        var list = "."+btnClass+" li";
         
        var indexLi;
         
        var parentID;
         
        $('.'+btnClass).children().each(function() {
            
            $(this).click(function(){
                
                indexLi = $(this).index() + 1;
                
                $(this).addClass('enlarge');
                
                var newElement = "<img src='"+$(this).children('img').attr('data-img-lg')+"' />";
              
                $('.imgHolder').append(newElement);
                
                $(containerDiv).fadeIn("linear");
                
                parentID=$(this).parents('.image-gallery-full-holder').attr('id');

                console.log(parentID);

            });

        });
          
         $(containerDiv+' .modalContent .messageContainer .nextImg i').click(function(){
            
            var nextLi = indexLi + 1;
              console.log(parentID);
             if($('#'+parentID+' '+list).length >= nextLi){
                 
                 var nextsrc = $('#'+parentID+' .'+btnClass+' li:nth-child('+nextLi+') img').attr('data-img-lg');

                 $('.imgHolder img').attr('src',nextsrc).fadeIn();
                     
                 indexLi = nextLi;
                 
             }else{
                 
                nextLi = 1;
                 
                var nextsrc = $('#'+parentID+' .'+btnClass+' li:nth-child('+nextLi+') img').attr('data-img-lg');
 
                $('.imgHolder img').attr('src',nextsrc).fadeIn();

                indexLi = nextLi;
                 
             }
             
         });
         
         $(containerDiv+' .modalContent .messageContainer .prevImg i').click(function(){
            
             var nextLi = indexLi - 1;
             
             
             if(nextLi > 0){
                 
                 var nextsrc = $('#'+parentID+' .'+btnClass+' li:nth-child('+nextLi+') img').attr('data-img-lg');
                 
                 $('.imgHolder img').attr('src',nextsrc).fadeIn("linear");
                     
                 indexLi = nextLi;
                 
             }else{
                 
                nextLi = $('#'+parentID+' '+list).length;
                 
                var nextsrc = $('#'+parentID+' .'+btnClass+' li:nth-child('+nextLi+') img').attr('data-img-lg');
                 
                $('.imgHolder img').attr('src',nextsrc).fadeIn("linear");
                 
                indexLi = $('#'+parentID+' '+list).length;
                 
             }
             
         });
         
        $('.closeHolder,.overlay').click(function(){
            
            $('.enlarge').removeClass('enlarge');
            
           
            
            $(containerDiv).fadeOut("linear");
            
            setTimeout(function(){
            
                $('.imgHolder img').remove();
                
            },300);

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

        $(document).mouseup(function (e){
            var container = $("div.header-drop");

            if (!container.is(e.target) // if the target of the click isn't the container...
                && container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                container.fadeOut();
            }
        });
       
   }
   
    $.fn.switchImage = function(){
        
        $('.imageswitch').each(function(){
        
            $(this).click(function(){
                
                var element = this;
                
                var id = $(element).attr('class').split(' ')[1].split('-')[1];
                
                var src = $('img.imageswitch-'+id).attr('src');
                
                
                if(id === 1){
                    
                    var oldid = id;
                    id = oldid + 1;
                    
                    var newsrc = $('img.imageswitch-'+id).attr('src');
                    
                    $('img.imageswitch-'+id).attr('src',src);
                    
                    $('img.imageswitch-'+oldid).attr('src',newsrc);
                    
                    
                }else{
                    
                     var oldid = id;
                    id = oldid - 1;
                    
                    var newsrc = $('img.imageswitch-'+id).attr('src');
                    
                    $('img.imageswitch-'+id).attr('src',src);
                    
                    $('img.imageswitch-'+oldid).attr('src',newsrc);
                    
                }
                
            });
            
        });
        
    }
    
     $.fn.dropShow = function(){
         
         var element = this;
         
         var selectorClass = "."+element.selector;
         
         $(selectorClass).each(function(){
         
            $(this).change(function(){
                
                var elementchild = this;

                var datafor = $(elementchild).attr('data-drop-for');
                
                var textbox = "#"+datafor+"-textbox";

                var row = "#"+datafor+"-row";

                if($("option:selected", elementchild).hasClass('multiple')){

                    $(row+" .multiple-drop-field").hide();

                    $(row+" .multiple-text-field").hide();

                    if($("option:selected", elementchild).hasClass('multiple-text')){

                        $(row).fadeIn("linear");

                        $(row+" .multiple-text-field").fadeIn("linear");

                    }else if($("option:selected", elementchild).hasClass('multiple-drop')){

                        var dropclass='.'+$("option:selected", elementchild).attr('class').split(' ')[2]+'-field';

                        $(row).fadeIn("linear");
                      
                        $(row + ' '+ dropclass).fadeIn("linear");
                        
                    }
                    
                }else{

                   
                     $(row+" .multiple-text-field").hide();

                     $(row+" .multiple-drop-field").hide();
                     
                     if($(this)[0].selectedIndex == 1){
                
                        $(textbox).fadeIn("linear");

                        $(row).fadeIn("linear");

                    }else{
                        
                        $(textbox).fadeOut("linear");

                        $(row).fadeOut("linear");
                        
                    }

                }
                
               
            
                
            });
             
         });
         
     }

     var CHECKINGGLOBAL;

    $.fn.checkFields = function(){

        var element = this;

        var btnClass = '.'+element.selector;

        var fieldClass = btnClass + '-check';

        var validate = true;

        CHECKINGGLOBAL=setInterval(function(){

            validate = true;

            $(fieldClass).each(function(){

                 if ($.trim($(this).val()).length == 0){

                    validate = false;
                   
                    return false;
                 }

            });
           
           if(validate == true){

                $(btnClass).removeClass('btn-disable').prop('disabled', false);
         
           }else{

                $(btnClass).addClass('btn-disable').prop('disabled', true);
          
           }

        },500);
        

    }

   

    $.fn.uploadFile = function(){

      
        $('.uploadbtn').click(function(){

            $('.raform-holder input[type="file"]').each(function(){

                var id='#filename-'+$(this).attr('id');

                var path = $(this).val(),
                    file = path.substr(path.lastIndexOf('\\') + 1);

                $(id).text(file);

            });

        
            $('.uploadHolder').fadeOut("linear",function(){

              $('.print-details-holder').fadeIn();

               $('.proceedbtn').removeClass('btn-disable').prop('disabled', false);

            });
            
            $('.file-holder i').each(function(){

                $(this).click(function(){

                     var fileid = '#'+$(this).attr('data-file-id');

                     var labelid = '#filename-'+$(this).attr('data-file-id');

                    $(fileid).wrap('<form>').parent('form').trigger('reset');
                    
                    $(fileid).unwrap();
                    
                    $(labelid).text('<empty>');

                    $('.proceedbtn').addClass('btn-disable').prop('disabled', true);

                });

            });

         });



    }

     $.fn.excelFile = function(){

        $(".payment-scheme-holder span input[name='paymentscheme']").click(function(){
            
            if($('input:radio[name=paymentscheme]:checked').attr('id') === "standard"){

                $('.btn-download').addClass('btn-disable').prop('disabled', true);

            }else if($('input:radio[name=paymentscheme]:checked').attr('id') === "nonstandard"){

                $('.btn-download').removeClass('btn-disable').prop('disabled', false);

            }

           $('.btn-next').removeClass('btn-disable').prop('disabled', false);

        }); 

         $(".col12  input[name='paymentscheme']").click(function(){
            
           if($('input:radio[name=paymentscheme]:checked').attr('id') === "card"){

                 $('.btn-next').removeClass('btn-disable').prop('disabled', false);

                 $('.upload-col').fadeOut();

                 clearInterval(CHECKINGGLOBAL);
            
            }else if($('input:radio[name=paymentscheme]:checked').attr('id') === "check"){

                 $('.btn-next').addClass('btn-disable').prop('disabled', true);

                 $('.upload-col').fadeIn();

                 CHECKINGGLOBAL=setInterval(function(){

                        validate = true;

                        $('.btn-next-check').each(function(){

                             if ($.trim($(this).val()).length == 0){

                                validate = false;
                               
                                return false;
                             }

                        });
                       
                       if(validate == true){

                            $('.btn-next').removeClass('btn-disable').prop('disabled', false);
                     
                       }else{

                            $('.btn-next').addClass('btn-disable').prop('disabled', true);
                      
                       }

                    },500);

            }


        });

     }

    $.fn.newNavigation = function(){
		
		 $('.right-container').mouseover(function(event){
			
			event.preventDefault();
			
            SCROLLTIMES = 1;
					
			SCROLLTIMES2 = 1;
			
			$('span#down i').off();
			
			$('span#up i').off();
			
			$('.slider-container').removeClass('slider-active');
			
			$('.link-slider-slide-third-level').removeClass('link-slider-slide-third-level');
			
			setTimeout(function(){
				
				if(!$('.slider-container').hasClass('slider-active') && !$('.link-slider-slide-third-level').hasClass('link-slider-slide-third-level')){
				
					$("div.slider-container .nav-slider-holder .list-scroll ul#list").remove();
	
					$("div.nav-slider-container .nav-slider-holder2 .list-scroll2 ul#list2").remove();
					
					console.log('remove');
				}


			},300);
			
             
         });
		 
        var element = this;

        var elementSelector = '.'+element.selector;
		
		var slidercontainer = $('<div>',{class: "slider-container"});
		
		var navsliderholder = $('<div>',{class: "nav-slider-holder make-table"});
		
		var listscroll = $('<div>',{class: "list-scroll"});

		var spanup = $('<span>',{id: "up"});
		
		var arrowup = $('<i>',{class: "fa fa-sort-asc"});
		
		var spandown = $('<span>',{id: "down"});
		
		var arrowdown = $('<i>',{class: "fa fa-sort-desc"});
		
		$('nav.left-container').append(slidercontainer);
		
		$('nav.left-container > div.slider-container').append(navsliderholder);
		
		$('nav.left-container > div.slider-container > div.nav-slider-holder').append(listscroll);
		
		$('nav.left-container > div.slider-container > div.nav-slider-holder > div.list-scroll').append(spanup,spandown);

		$('nav.left-container > div.slider-container > div.nav-slider-holder > div.list-scroll > span#up').append(arrowup);
		
		$('nav.left-container > div.slider-container > div.nav-slider-holder > div.list-scroll > span#down').append(arrowdown);
		
		var navslidercontainer = $('<div>',{class: "nav-slider-container"});
						
		var navsliderholder2 = $('<div>',{class: "nav-slider-holder2"});
		
		var listscroll2 = $('<div>',{class: "list-scroll2"});

		var spanup = $('<span>',{id: "up"});
		
		var arrowup = $('<i>',{class: "fa fa-sort-asc"});
		
		var spandown = $('<span>',{id: "down"});
		
		var arrowdown = $('<i>',{class: "fa fa-sort-desc"});

		$('div.slider-container').append(navslidercontainer);

		$('div.slider-container > div.nav-slider-container').append(navsliderholder2);
		
		$('div.slider-container > div.nav-slider-container > div.nav-slider-holder2').append(listscroll2);
		
		$('div.slider-container > div.nav-slider-container > div.nav-slider-holder2 > div.list-scroll2').append(spanup,spandown);

		$('div.slider-container > div.nav-slider-container > div.nav-slider-holder2 > div.list-scroll2 > span#up').append(arrowup);
		
		$('div.slider-container > div.nav-slider-container > div.nav-slider-holder2 > div.list-scroll2 > span#down').append(arrowdown);
			
        $(elementSelector+' li').each(function(){
		
            $(this).click(function(event){
				
				event.preventDefault();
				
				var lielement = this;
				
                if($('.slider-container').hasClass('slider-active')){
					
					SCROLLTIMES = 1;
					
					SCROLLTIMES2 = 1;
					
					$('span#down i').off();
					
					$('span#up i').off();
					
                    $('.slider-container').removeClass('slider-active');
					
					$('.link-slider-slide-third-level').removeClass('link-slider-slide-third-level');
					
					setTimeout(function(){
						
						$("div.slider-container .nav-slider-holder .list-scroll ul#list").remove();
						
						$("div.nav-slider-container .nav-slider-holder2 .list-scroll2 ul#list2").remove();
					
					},350);
					
					if(!$(lielement).hasClass('active-li')){
						
						 $('.active-li').removeClass('active-li');

						 $(lielement).addClass('active-li');
						 
						setTimeout(function(){
							
							$("div.slider-container .nav-slider-holder .list-scroll ul#list").remove();

							if($(lielement).children('ul.second-level-list').length > 0){

								$(lielement).children('ul.second-level-list').clone().insertAfter( "div.slider-container .nav-slider-holder .list-scroll span#up").removeClass('hide').attr('id','list');

								$("div.slider-container .nav-slider-holder .list-scroll ul#list li").each(function(){

									if($(this).children('a').length > 0){

										$(this).wrapInner('<span></span>').children();

									}else{

										$(this).wrapInner('<span><a href="#"></a></span>').children();

									}
									 

									if($(this).hasClass('has-level-three-slider')){

										$(this).children().append('<i class="fa fa-angle-right company-caret2"></i>');
										
										$(this).find("ul.third-level-list").insertAfter($(this).children('span'));
										

									}

									setTimeout(function(){

										$('.slider-container').addClass('slider-active');
										
										if(SCROLLTIMES===1){
											
											$(".list-scroll").scrollList2();
											
											SCROLLTIMES++;
											
										}
										
									},200);
								 
								
							   });

							}

						},500);
					
						
					}
                    

                }else{
					
					 $('.active-li').removeClass('active-li');

					 $(lielement).addClass('active-li');
				
                    if($(lielement).children('ul.second-level-list').length > 0){

                        $(lielement).children('ul.second-level-list').clone().insertAfter( "div.slider-container .nav-slider-holder .list-scroll span#up").removeClass('hide').attr('id','list');

							
                        $("div.slider-container .nav-slider-holder .list-scroll ul#list li").each(function(){

							if($(this).children('a').length > 0){

								$(this).wrapInner('<span></span>').children();

							}else{
										
								$(this).wrapInner('<span><a href="#"></a></span>').children();
							
							}
							 

							if($(this).hasClass('has-level-three-slider')){

								$(this).children().append('<i class="fa fa-angle-right company-caret2"></i>');
							
								$(this).find("ul.third-level-list").insertAfter($(this).children('span'));
							}                     
                        
                       });
					   
					   setTimeout(function(){

						$('.slider-container').addClass('slider-active');
						
						if(SCROLLTIMES===1){
							
							$(".list-scroll").scrollList2();
							
							SCROLLTIMES++;
							
						}   

					},200);

                    }

 
                }

            });

        });    

    }

    $.fn.scrollList2 = function(){

         var element = this;
         
         var containerClass = element.selector;
        
         var counter = 1;
         
         var shown = 1;

         var tempShown;
    
         var tempShown2;
         
         var totalList ;

         var arrayCounter;

         var temp = 1;

      
		var listId = containerClass;

		shown = 1;

		counter = 1;
		
		$(listId + ' > span#up > i').hide();
		
	   if(SHOWNLIGLOBAL >= $(listId + ' > ul#list > li').length){
		   
			$(listId + ' > span#down > i').hide();

	   }else{

			$(listId + ' > span#down > i').show();

	   }

		shown = 1;

		counter = 1;

		$(listId + ' > ul#list > li').each(function(){
				  
			 if(counter <= SHOWNLIGLOBAL){

				 $(this).addClass('show-list');
				

				 if(counter === SHOWNLIGLOBAL){
					 
					 $(this).addClass('no-border-bottom');
					 
				}           
				
				if($(this).is(":last-child")){

					$(this).addClass('no-border-bottom');

			   }

				 shown++;
				 
			 }

			 counter++;
			 
			 $(this).click(function(){
				
				var thirdelement = this;
				
				$('.active-second').removeClass('active-second');
				
				$(this).addClass('active-second');
				
				if($(this).hasClass('has-level-three-slider')){
					
					
					if($('.nav-slider-container').hasClass('link-slider-slide-third-level')){
	
						$('.link-slider-slide-third-level').removeClass('link-slider-slide-third-level');
						
						$('.list-scroll2 > span#down > i').off();
					
						$('.list-scroll2 > span#up > i').off();
						
						setTimeout(function(){
							
							$("div.nav-slider-container > .nav-slider-holder2 > .list-scroll2 > ul#list2").remove();
						
						},400);
						
						setTimeout(function(){
							
							
							$(thirdelement).children('ul.third-level-list').clone()
							.insertAfter( "div.nav-slider-container > .nav-slider-holder2 > .list-scroll2 > span#up")
							.removeClass('hide').attr('id','list2');
							
							$(".list-scroll2").scrollList3();
								
							$('div.nav-slider-container').addClass('link-slider-slide-third-level');
							
						},600);

					}else{
						
						$(this).children('ul.third-level-list').clone()
						.insertAfter( "div.nav-slider-container > .nav-slider-holder2 > .list-scroll2 > span#up")
						.removeClass('hide').attr('id','list2');
							
						
						$(".list-scroll2").scrollList3();	
						
						$('div.nav-slider-container').addClass('link-slider-slide-third-level');
					
					}
						
					setTimeout(function(){
							
						//$(".list-scroll2").scrollList3();
					
					},600);
						console.log('hello');
						
						

				}

			 });
			 
		});
		
		 tempShown = shown - 1;
	
		 tempShown2 = shown - 1;
		 
		 totalList= counter;

		 arrayCounter = 1;
	
		 $(listId + ' > span#down > i').stop().click(function(event){
			 
			 $(listId + ' > span#up').children().show();
			 
			 var heightNega = ($(listId + ' > ul#list > li').outerHeight() * -1) * arrayCounter;
		   
			 ++tempShown;      

			 if($(listId + ' > ul#list > li:nth-child('+tempShown+')').length != 0 ){

				$(listId + '> ul#list > li.show-list').first().removeClass('show-list');
				 
				$(listId + '> ul#list > li.show-list').last().removeClass('no-border-bottom');
				 
				$(listId + '> ul#list > li:nth-child('+tempShown+')').addClass('show-list no-border-bottom');

				$(listId + '> ul#list > li:nth-child('+tempShown+')').addClass('show-list');

				$(listId + '> ul#list > li').each(function(){

					$(this).stop().animate({

					   top: heightNega+ 'px'

					},'fast','linear');

				});

				

				 if(tempShown + 1 == totalList){
					 
					  $(this).hide();
					 
				 }
				 
			 }else{
				 
				  $(this).hide();
				 
			 }

			 arrayCounter++;
		   
		 });
		
		 
		  $(listId + ' > span#up > i').stop().click(function(event){
				
			  event.stopPropagation();

			  $(listId + '> span#down').children().show();
			  
			 var height = $(listId + ' > ul#list > li').position().top + 
						  $(listId + ' > ul#list > li').outerHeight();
		   
			tempShown2 =  $(listId + ' > ul#list > li.show-list').first().index();
			  
			tempShown--;
			  
			arrayCounter--;
			
			 if($(listId + '> ul#list > li:nth-child('+tempShown2+')').length != 0 ){

				 $(listId + '> ul#list > li.show-list').last().removeClass('show-list');
				 
				 $(listId + '> ul#list > li:nth-child('+tempShown2+')').addClass('show-list');
				
				$(listId + '> ul#list > li.show-list').last().addClass('no-border-bottom');

				 $(listId + '> ul#list > li').each(function(){
					 
					 $(this).stop().animate({
						 
						top: height+ 'px'
						 
					 },'fast','linear');

				 });
				 
				 if(tempShown2 === 1){
					 
					  $(this).hide();
					 
				 }
				 
			 }else{
				 
				  $(this).hide();
				 
			 }
			   
		 });
			 
     }
	 
	  $.fn.scrollList3 = function(){

         var element = this;
         
         var containerClass = element.selector;
        
         var counter = 1;
         
         var shown = 1;

         var tempShown;
    
         var tempShown2;
         
         var totalList ;

         var arrayCounter;

         var temp = 1;

            var listId = containerClass;

            shown = 1;

            counter = 1;
            
			$(listId + '> span#up > i').hide();
			
           if(SHOWNLIGLOBAL >= $(listId + ' > ul#list2 > li').length){
			   
                $(listId + '> span#down > i').hide();

           }else{

                $(listId + '> span#down > i').show();

           }

            shown = 1;

            counter = 1;

            $(listId + ' > ul#list2 > li').each(function(){
                      
                 if(counter <= SHOWNLIGLOBAL){

                     $(this).addClass('show-list');
                    

                     if(counter === SHOWNLIGLOBAL){
						 
                         $(this).addClass('no-border-bottom');
                         
                    }           
                    
                    if($(this).is(":last-child")){

                        $(this).addClass('no-border-bottom');

                   }

                     shown++;
                     
                 }

                 counter++;
				 
            });
            
             tempShown = shown - 1;
        
             tempShown2 = shown - 1;
             
             totalList= counter;

             arrayCounter = 1;
		
             $(listId + '> span#down > i').stop().click(function(event){
                 
                 $(listId + '> span#up').children().show();
                 
                 var heightNega = ($(listId + '> ul#list2 > li').outerHeight() * -1) * arrayCounter;
				
				console.log(heightNega);
                 ++tempShown;      

                 if($(listId + '> ul#list2 > li:nth-child('+tempShown+')').length != 0 ){

                    $(listId + '> ul#list2 > li.show-list').first().removeClass('show-list');
                     
                    $(listId + '> ul#list2 > li.show-list').last().removeClass('no-border-bottom');
                     
                    $(listId + '> ul#list2 > li:nth-child('+tempShown+')').addClass('show-list no-border-bottom');

                    $(listId + '> ul#list2 > li:nth-child('+tempShown+')').addClass('show-list');

                    $(listId + '> ul#list2 > li').each(function(){

                        $(this).stop().animate({

                           top: heightNega+ 'px'

                        },'fast','linear');

                    });

                    

                     if(tempShown + 1 == totalList){
                         
                          $(this).hide();
                         
                     }
                     
                 }else{
                     
                      $(this).hide();
                     
                 }

                 arrayCounter++;
               
             });
            
             
              $(listId + '> span#up > i').stop().click(function(event){
                    
                  event.stopPropagation();

                  $(listId + '> span#down').children().show();
                  
                 var height = $(listId + '> ul#list2 > li').position().top + 
                              $(listId + '> ul#list2 > li').outerHeight();
               
                tempShown2 =  $(listId + '> ul#list2 > li.show-list').first().index();
                  
                tempShown--;
                  
                arrayCounter--;
                
                 if($(listId + '> ul#list2 > li:nth-child('+tempShown2+')').length != 0 ){
 
                     $(listId + '> ul#list2 > li.show-list').last().removeClass('show-list');
                     
                     $(listId + '> ul#list2 > li:nth-child('+tempShown2+')').addClass('show-list');
                    
                    $(listId + '> ul#list2 > li.show-list').last().addClass('no-border-bottom');

                     $(listId + '> ul#list2 > li').each(function(){
                         
                         $(this).stop().animate({
                             
                            top: height+ 'px'
                             
                         },'fast','linear');

                     });
                     
                     if(tempShown2 === 1){
                         
                          $(this).hide();
                         
                     }
                     
                 }else{
                     
                      $(this).hide();
                     
                 }
                   
             });

     }
     
})(jQuery);