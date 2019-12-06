(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.menu = {
    attach: function (context, settings) {
      $('.menu .hamburger').once('menu-functionality').each(function() {
        $(this).click(function() {
          $('.menu').toggleClass('responsive');
        });
      });
    }
  }

})(jQuery, Drupal, drupalSettings);
