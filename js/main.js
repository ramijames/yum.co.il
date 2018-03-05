$(document).ready(function() {

  var basicTimeline = anime.timeline();

  // Make sure that a user can't scroll services while playing animation.
  var servicesready = false;

  // Set Services position initial state
    var servicesposition = 'closed';

    $('#services-about .btn').click(function(){
      $('#services-big').addClass('reading');
      servicesposition = 'open';
    });

    $('#services-big .btn').click(function(){
      $('#services-big').removeClass('reading');
      servicesposition = 'closed';
    });

    function setservices(scrolldirection){

      var hasclass = $('#services-big').addClass('reading');

      if((scrolldirection == 'down') && (hasclass)){
        $('#services-big').addClass('reading');
        servicesposition = 'open';
      } else {
        $('#services-big').removeClass('reading');
        servicesposition = 'closed';
      }
    }

    // function detectMouseWheelDirection( e )
    // {
    //     var delta = null,
    //         direction = false
    //     ;
    //     if ( !e ) { // if the event is not provided, we get it from the window object
    //         e = window.event;
    //     }
    //     if ( e.wheelDelta ) { // will work in most cases
    //         delta = e.wheelDelta / 60;
    //     } else if ( e.detail ) { // fallback for Firefox
    //         delta = -e.detail / 2;
    //     }
    //     if ( delta !== null ) {
    //         direction = delta > 0 ? 'up' : 'down';
    //     }

    //     return direction;
    // }

    // function handleMouseWheelDirection( direction )
    // {
    //     // console.log( direction ); // see the direction in the console
    //     if ( direction == 'down' ) {
    //         setservices('down');
    //     } else if ( direction == 'up' ) {
    //         setservices('up');
    //     } else {
    //         // this means the direction of the mouse wheel could not be determined
    //     }
    // }

    // document.onmousewheel = function( e ) {
    //     handleMouseWheelDirection( detectMouseWheelDirection( e ) );
    // };
    // if ( window.addEventListener ) {
    //     document.addEventListener( 'DOMMouseScroll', function( e ) {
    //         handleMouseWheelDirection( detectMouseWheelDirection( e ) );
    //     });
    // }


  // Let's get this party started.
  basicTimeline

    // Fade in wrap to avoid loading paths in an ugly way
    .add({
      targets: '#logo-wrap',
      opacity: {
        value: 1,
        duration: 200,
        delay: 0,
        easing: 'easeInQuart'
      }
    })

    // Draw lines
    .add({
      targets: '#logo-bg .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 900,
      delay: 300,
      direction: 'alternate',
      loop: false
    })

    // Fill white
    .add({
      targets: '#logo-solid',
      scale: {
        value: 1,
        duration: 100,
        delay: 0,
        easing: 'easeInOutQuart'
      },
      opacity: {
        value: 1,
        duration: 500,
        delay: 0,
        easing: 'easeInOutQuart'
      },
      offset: '-=550'
    })

    // Fade out lines
    .add({
      targets: '#logo-bg .lines path',
      opacity: {
        value: 0,
        duration: 200,
        delay: 0,
        easing: 'easeInOutQuart'
      }
    })

    // Boomp back a bit
    .add({
      targets: '#logo-wrap',
      scale: {
        value: 0.8,
        duration: 100,
        delay: 0,
        easing: 'easeOutSine'
      },
      offset: '-=400'
    })

    // Draw shine
    .add({
      targets: '#logo-shine .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 300,
      delay: 00,
      direction: 'alternate',
      loop: false,
      offset: '-=400'
    })

    // Fade shine
    .add({
      targets: '#logo-shine .lines path',
      opacity: {
        value: 0,
        duration: 400,
        delay: 0,
        easing: 'easeOutSine'
      },
      offset: '-=400'
    })

    // Fade Logo
    .add({
      targets: '#logo-section',
      opacity: {
        value: 0,
        duration: 400,
        delay: 1400,
        easing: 'easeOutSine'
      }
    })

    // Intro Section
    .add({
      targets: '#intro-section',
      opacity: {
        value: 1,
        duration: 400,
        delay: 2800,
        easing: 'easeOutSine'
      }
    })

    // Intro Section
    .add({
      targets: '#service-lines .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1800,
      delay: 300,
      direction: 'alternate',
      loop: false,
      offset: '-=3600'
    })

    // Fade in floating Logo
    .add({
      targets: '#floating-logo',
      opacity: {
        value: 1,
        duration: 400,
        delay: 0,
        easing: 'easeOutSine'
      }
    })

    // Intro Section
    .add({
      targets: '#intro-section h1.service-one',
      color: {
        value: '#ffffff',
        duration: 400,
        delay: 0,
        easing: 'easeOutSine'
      },
      offset: '-=3400'
    })

    // Intro Section
    .add({
      targets: '#intro-section h1.service-two',
      color: {
        value: '#ffffff',
        duration: 400,
        delay: 0,
        easing: 'easeOutSine'
      },
      offset: '-=3100'
    })

    // Intro Section
    .add({
      targets: '#intro-section h1.service-three',
      color: {
        value: '#ffffff',
        duration: 400,
        delay: 0,
        easing: 'easeOutSine'
      },
      offset: '-=2600'
    })

    // Intro Section
    .add({
      targets: '#intro-section .service-buttons',
      opacity: {
        value: 1,
        duration: 400,
        delay: 0,
        easing: 'easeOutSine'
      },
      offset: '-=2100'
    });

    // Ok, now we're ready.
    var servicesready = true;

    // Services mechanism
    var services = $('#services-big').find('.service-select');

    $(services).each(function(){
      $(this).click(function(){
        // Means it is open
        if($(this).hasClass('showing')){
          $(services).each(function(){
            $(this).removeClass('showing');
            $(this).removeClass('hide');
          });
        } else {
          $(services).each(function(){
            $(this).removeClass('showing');
            $(this).addClass('hide');
          });
          $(this).removeClass('hide');
          $(this).addClass('showing');
        }

      });
    });



});