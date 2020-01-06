(function ($, Drupal, drupalSettings) {

    'use strict';

    Drupal.behaviors.swiper = {
      attach: function (context, settings) {
        var swiper = new Swiper('.paragraph--type--slideshow .swiper-container', {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            clickable: true,
            el: '.paragraph--type--slideshow .swiper-pagination',
          },
        });
      }
    }
  }
)(jQuery, Drupal, drupalSettings);
