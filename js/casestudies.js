$(document).ready(function() {

  var basicTimeline = anime.timeline();

  // Let's get this party started.
  basicTimeline

    // Drop down the header
    .add({
      targets: '#template-logo',
      margin: {
        value: 0,
        duration: 400,
        delay: 0,
        easing: 'easeOutSine'
      }
    })

    // Case Studies enter
    .add({
      targets: '#casestudies-one',
      top: {
        value: 0,
        duration: 200,
        delay: 0,
        easing: 'easeOutSine'
      },
      offset: '-=400'
    })

    .add({
      targets: '#casestudies-two',
      top: {
        value: '20%',
        duration: 200,
        delay: 0,
        easing: 'easeOutSine'
      },
      offset: '-=400'
    })

    .add({
      targets: '#casestudies-three',
      top: {
        value: '40%',
        duration: 200,
        delay: 0,
        easing: 'easeOutSine'
      },
      offset: '-=400'
    })

    .add({
      targets: '#casestudies-four',
      top: {
        value: '60%',
        duration: 200,
        delay: 0,
        easing: 'easeOutSine'
      },
      offset: '-=400'
    })

    .add({
      targets: '#casestudies-five',
      top: {
        value: '80%',
        duration: 200,
        delay: 0,
        easing: 'easeOutSine'
      },
      offset: '-=400'
    })


    // Case Studies mechanism
    var services = $('#casestudies-big').find('.study-select');

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