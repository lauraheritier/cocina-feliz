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