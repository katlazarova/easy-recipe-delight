(function ($, Drupal) {

  Drupal.behaviors.accordion = {
    attach: function (context, settings) {
      $('.accordion-item .accordion-title').once('click-once').each(function () {
        $(this).click(function () {
          // Toggle the panel content on click.
          $(this).next('.accordion-content').slideToggle();
          // With each click on the accordion, toggle the active class.
          $(this).toggleClass('is-open');
        });
      });
    },
  };
}(jQuery, Drupal));
