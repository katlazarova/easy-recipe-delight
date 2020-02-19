(function ($, Drupal) {

  Drupal.behaviors.clickable_card = {
    attach: function (context, settings) {
      clickableElement($('.collection-row'));

      function clickableElement($cElement) {
        // Inside cElement, find clickable class.
        $cElement.find('.clickable').click(function () {
          var $item = $('.clickable');
          // If there is an anchor inside this item, go to new page using URL from first anchor.
          if ($item.find('a').length) {
            window.location = $(this).find('a:first').attr('href');
          }
        });
      }
    }
  };

}(jQuery, Drupal));
