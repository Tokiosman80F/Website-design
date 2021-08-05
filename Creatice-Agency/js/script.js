
$(document).ready(function(){
    
  // slick slider
$('.banner-slider').slick({
    infinite: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    dots:true,
    fade:true,
    autoplay:true,
  });

  // venobox you vedio
  $('.venobox').venobox({
    framewidth : '853px',                          
    frameheight: '505px',                                                    
    titleattr  : 'data-title',                      
    //numeratio  : true,                              
    //infinigall : true,
    spinner:     'wave',                          
    share      : ['facebook', 'twitter', 'download'] // default: []
});


  });