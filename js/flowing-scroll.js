document.addEventListener('DOMContentLoaded', function() {
  $('.flowing-scroll').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({ 
          scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
        }, 1100 // скорость прокрутки
        );
    }
    return false;
  });

  if (innerWidth <= 725) {
    $('.tabs-artist-btn').on( 'click', function(){ 
      var el = $(this);
      var dest = el.attr('href'); // получаем направление
      if(dest !== undefined && dest !== '') { // проверяем существование
          $('html').animate({ 
            scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
          }, 1100 // скорость прокрутки
          );
      }
      return false;
    });
  }

if (innerWidth > 725) {
  $('.tabs-artist-btn').on( 'click', function(){ 
    return false;
  });
  }

  $('.events__link').on( 'click', function(){ 
    return false;
  });
  

})