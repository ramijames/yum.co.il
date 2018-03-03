$(document).ready(function() {

  var basicTimeline = anime.timeline();

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
        delay: 2000,
        easing: 'easeOutSine'
      }
    });

});