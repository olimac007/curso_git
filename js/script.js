  var divId;

  $('.link-scroll').click(function(){    
    divId = $(this).attr('href');
     $('html, body').animate({
      scrollTop: $(divId).offset().top - 60
    }, 100);
  });