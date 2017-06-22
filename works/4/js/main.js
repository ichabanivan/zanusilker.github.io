'use strict';

(function () {

  "use strict";

  $(function () {

    $(function () {
      $('.web').easyPieChart({
        scaleColor: false,
        lineWidth: 13,
        lineCap: 'butt',
        barColor: '#30bae7',
        size: 160,
        animate: 500
      });
    });

    $(function () {
      $('.html').easyPieChart({
        scaleColor: false,
        lineWidth: 13,
        lineCap: 'butt',
        barColor: '#d74680',
        size: 160,
        animate: 500
      });
    });

    $(function () {
      $('.design').easyPieChart({
        scaleColor: false,
        lineWidth: 13,
        lineCap: 'butt',
        barColor: '#15c7a8',
        size: 160,
        animate: 500
      });
    });

    $(function () {
      $('.ui').easyPieChart({
        scaleColor: false,
        lineWidth: 13,
        lineCap: 'butt',
        barColor: '#eb7d4b',
        size: 160,
        animate: 500
      });
    });

    $.fn.responsiveTabs = function () {

      return this.each(function () {
        var el = $(this),
            tabs = el.find('dt'),
            content = el.find('dd'),
            placeholder = $('<div class="responsive-tabs-placeholder"></div>').insertAfter(el);

        tabs.on('click', function () {
          var tab = $(this);

          tabs.not(tab).removeClass('active');
          tab.addClass('active');

          placeholder.html(tab.next().html());
        });

        tabs.filter(':first').trigger('click');
      });
    };

    $('.responsive-tabs').responsiveTabs();
  });
})();