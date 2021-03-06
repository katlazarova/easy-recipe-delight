(function ($, Drupal, drupalSettings) {

    'use strict';

    Drupal.behaviors.menu = {
      attach: function (context, settings) {
        var menu = $('.header .navigation .menu');
        $('.navigation .menu .hamburger').once('burger-click').click(function () {
          $(menu).toggleClass('responsive');
        });

        function calculateLayout() {
          var footerHeight = $('.footer').height();
          $('.layout-container').css('padding-bottom', footerHeight);

          var win = $(window);
          if (win.width() > 768 && $(menu).hasClass('responsive')) {
            $(menu).removeClass('responsive');
          }
        }
        $(window).on('resize', _.debounce(calculateLayout, 150));
        calculateLayout();
      }
    }
  }
)(jQuery, Drupal, drupalSettings);
