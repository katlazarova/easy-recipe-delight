(function card($, Drupal) {
  Drupal.behaviors.ClickableCard = {
    attach: function attach(context) {
      $('[data-card]', context).once('clickable-card').each(function eachCard() {
        // https://inclusive-components.design/cards/
        var $link = $(this).find('a').first();
        if ($link.length === 0 || $(this).data().cardClickable === false) {
          return;
        }
        $(this).css('cursor', 'pointer');
        var down;
        var up;
        $(this).mousedown(function () {
          down = +new Date();
        });
        $(this).mouseup(function (e) {
          // Bail if this was a middle or secondary mouse button event.
          if (e.which !== 1) return;
          up = +new Date();
          if (up - down < 200) {
            // Use the time difference between mouse down and mouse up to
            // guess whether the user is clicking, or trying to select text.
            // Only redirect if it looks like a click not text selection.
            window.location.href = $link.attr('href');
          }
        });
      });
    }
  };
})(jQuery, Drupal);
