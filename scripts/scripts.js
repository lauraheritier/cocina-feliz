var v = document.getElementById("video");
      var icon = document.getElementById("icon"); 
$(document).ready(function() {
  AOS.init();  
    $(".nav-item").on("click", function() {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });

    var waypoint = new Waypoint({
        element: document.getElementById('section-info'),
        handler: function() {
         initCounter();
        },
        offset: '50%'
      });
      
      setInterval('updateTimer()', 1000 );
      var mySwiper = new Swiper ('.swiper', {
        // Optional parameters
        slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 10,
            loop: true,
      
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
        breakpoints: {
          // when window width is >= 640px
    992: {
      slidesPerView: 3,
      spaceBetween: 20
    }
        }
            
      });
       
      playPause(v);
      playPause(icon);

});

function playPause(element) {
  element.addEventListener ("click", function () {        
    if($(v).hasClass("stopped")) {
      $(v).removeClass("stopped");
      $(icon).removeClass("fa-play");
      $(icon).removeClass("fa-pause");              
      v.play();                
    } else {
      v.pause();
      $(v).addClass("stopped");
      $(icon).addClass("fa-pause"); 
    }
  }, true); 
}
function initCounter () {
    $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
      
        {      
          duration: 8000,
          easing:'linear',
          step: function() {
            $this.text((Math.floor(this.countNum)).toLocaleString('es-AR'));
          },
          complete: function() {
            $this.text((this.countNum).toLocaleString('es-AR'));
            //alert('finished');
          }
      
        }); 
      });
}

function updateTimer() {
  future  = Date.parse("May 31, 2023 11:30:00");
  now     = new Date();
  diff    = future - now;

  days  = Math.floor( diff / (1000*60*60*24) );
  hours = Math.floor( diff / (1000*60*60) );
  mins  = Math.floor( diff / (1000*60) );
  secs  = Math.floor( diff / 1000 );

  d = days;
  h = hours - days  * 24;
  m = mins  - hours * 60;
  s = secs  - mins  * 60;

  document.getElementById("timer")
    .innerHTML =
      '<div class="timer-count col-3">' + d + '<span class="d-inline-block w-100"> días</span></div>' +
      '<div class="timer-count col-3">' + h + '<span class="d-inline-block w-100"> horas</span></div>' +
      '<div class="timer-count col-3">' + m + '<span class="d-inline-block w-100"> minutos</span></div>' +
      '<div class="timer-count col-3">' + s + '<span class="d-inline-block w-100"> segundos</span></div>' ;
}