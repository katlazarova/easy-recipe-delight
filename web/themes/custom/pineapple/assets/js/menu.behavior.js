(function ($, Drupal, drupalSettings) {

    'use strict';

    Drupal.behaviors.menu = {
      attach: function (context, settings) {
        var win = $(window);
        var menu = $('.region-header .navigation .menu');
        $('.region-header .menu .hamburger').click(function () {
          $(menu).toggleClass('responsive');
        });
        function calculateLayout() {
          var footerHeight = $('.footer').height();
          $('.layout-container').css('padding-bottom', footerHeight);
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
