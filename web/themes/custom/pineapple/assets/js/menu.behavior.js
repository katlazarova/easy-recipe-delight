(function ($, Drupal, drupalSettings) {

    'use strict';

    Drupal.behaviors.menu = {
      attach: function (context, settings) {
        var menu = $('.navigation .menu');
        $('.menu .hamburger').click(function () {
          $(menu).toggleClass('responsive');
        });
        $(window).on('debouncedresize', function () {
          var win = $(window);
          if (win.width() > 768 && $(menu).hasClass('responsive')) {
            $(menu).removeClass('responsive');
          }
        });
      }
    }
  }
)(jQuery, Drupal, drupalSettings);
