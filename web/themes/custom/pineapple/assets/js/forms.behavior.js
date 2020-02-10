(function ($, Drupal) {

  Drupal.behaviors.forms = {
    attach: function (context, settings) {
      // Code runs on filter form submit.
      $('.view-recipes #browse-recipes').once('click-once').click(function () {
        var url = window.location.href;
        var elementId = 'browse-recipes';
        // If url has parameters, run function.
        if (url.includes('?')) {
          // If the url does not contain element ID, append it.
          if (!window.location.href.indexOf(elementId) > -1) {
            window.location.href = window.location.href + '#'+ elementId;
          }
        }
      });

      // Trigger the click function above 1 second after page loads.
      setTimeout(function() {
        $( ".view-recipes #browse-recipes" ).once('fake-click-trigger').trigger( 'click' );
      }, 1000);
    }
  };

}(jQuery, Drupal));
