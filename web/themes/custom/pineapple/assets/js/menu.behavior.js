(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.menu = {
    attach: function (context, settings) {
      $('.menu .hamburger').click(function() {
          $('.menu').toggleClass('responsive');
      });
    }
  }

})(jQuery, Drupal, drupalSettings);
