(function ($, Drupal) {

  Drupal.behaviors.card = {
    attach: function (context, settings) {
      $('[data-card]', context).once('card')
      .each(function eachCard() {
        const $link = $(this).find('a').first();

        if ($link.length === 0 || $(this).data().cardClickable === false) {
          return;
        }

        $(this).css('cursor', 'pointer');

        let down;
        let up;

        $(this).mousedown(() => {
          down = +new Date();
        });

        $(this).mouseup(e => {
          if (e.which !== 1) return;

          up = +new Date();
          if (up - down < 600) {
            window.location.href = $link.attr('href');
          }
        });
      });
    },
  };
}(jQuery, Drupal));
