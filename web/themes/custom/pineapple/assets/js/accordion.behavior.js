(function ($, Drupal) {

  Drupal.behaviors.accordion = {
    attach: function (context, settings) {
      $('.paragraph--type--accordion .accordion-title').once('click-once').each(function () {
        $(this).click(function () {
          // Toggle the panel content on click.
          $(this).next('.accordion-content').slideToggle();
          // With each click on the accordion, toggle the active class.
          console.log(this);
          $(this).toggleClass('is-open');
        });
      });
    },
  };
}(jQuery, Drupal));
