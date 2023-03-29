$(document).ready(function() {
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
});

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
      '<div class="timer-count col-lg-3">' + d + '<span> días</span></div>' +
      '<div class="timer-count col-lg-3">' + h + '<span> horas</span></div>' +
      '<div class="timer-count col-lg-3">' + m + '<span> minutos</span></div>' +
      '<div class="timer-count col-lg-3">' + s + '<span> segundos</span></div>' ;
}
