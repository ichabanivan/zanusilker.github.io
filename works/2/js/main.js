'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {

  "use strict";

  $(function () {

    //START MAPS
    if (jQuery('#contact_map').length) {
      var init = function init() {
        /*map latitude and longitude*/

        var contactLatlng = { lat: 49.989406, lng: 36.222126 };

        /*map style*/
        var styleMap = [{ "featureType": "all", "elementType": "all", "stylers": [{ "visibility": "on" }] }, { "featureType": "all", "elementType": "geometry", "stylers": [{ "color": "#f7a50b" }, { "visibility": "on" }] }, { "featureType": "all", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#f7a50b" }] }, { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#444444" }] }, { "featureType": "administrative.country", "elementType": "geometry.fill", "stylers": [{ "color": "#ff0000" }] }, { "featureType": "administrative.country", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "administrative.province", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.province", "elementType": "labels.text", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.locality", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.locality", "elementType": "labels.text", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.locality", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.neighborhood", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "visibility": "on" }] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [{ "color": "#f7a50b" }, { "visibility": "on" }] }, { "featureType": "landscape.man_made", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape.man_made", "elementType": "labels.text", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape.man_made", "elementType": "labels.text.fill", "stylers": [{ "color": "#ff0000" }, { "visibility": "off" }] }, { "featureType": "landscape.man_made", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "color": "#da8900" }] }, { "featureType": "landscape.natural", "elementType": "labels.text", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "labels.text", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#ff8a00" }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels.text", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "labels.text", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "labels.icon", "stylers": [{ "visibility": "on" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.local", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#f2ba40" }, { "visibility": "on" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "water", "elementType": "labels.text", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }];
        /*map options*/
        var zoomMap;
        if ($(window).width() > 1200) {
          zoomMap = 17;
        } else {
          zoomMap = 17;
        }
        /*map options*/
        var contactOptions = _defineProperty({
          zoom: zoomMap,
          center: contactLatlng,
          styles: styleMap,
          scrollwheel: false,
          mapTypeControl: false,
          draggable: false
        }, 'center', { lat: 49.989406, lng: 36.222126 });

        var x;
        var y;
        if ($(window).width() > 1200) {
          x = 150;
          y = 100;
        } else if ($(window).width() <= 1200 && $(window).width() > 500) {
          x = -50;
          y = 100;
        } else {
          x = -50;
          y = 20;
        }
        if ($('#contact_map').length) {
          var contact = document.getElementById('contact_map');
          var contact_map = new google.maps.Map(contact, contactOptions);
          var markerContact = new google.maps.Marker({
            position: contactLatlng,
            map: contact_map,
            title: 'ALevel',
            icon: '../img/marker.png'
          });
          contact_map.panBy(x, y);
        }
      };

      google.maps.event.addDomListener(window, 'load', init);
    }
    //END MAPS
    var slider_width = $(document).width();
    var elements;

    if (slider_width <= 768 && slider_width > 520) {
      elements = 3;
      $('.filtering').slick({
        slidesToShow: elements,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
      });
      $('.filtering1').slick({
        slidesToShow: elements,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        initialSlide: 4
      });
    } else if (slider_width <= 520) {
      elements = 2;
      $('.filtering').slick({
        slidesToShow: elements,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
      });
      $('.filtering1').slick({
        slidesToShow: elements,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        initialSlide: 4
      });
    } else {
      elements = 4;
    }

    var filtered = false;

    $('.js-filter').on('click', function () {
      if (filtered === false) {
        $('.filtering').slick('slickFilter', ':even');
        $(this).text('Unfilter Slides');
        filtered = true;
      } else {
        $('.filtering').slick('slickUnfilter');
        $(this).text('Filter Slides');
        filtered = false;
      }
    });

    //  slider 2
  });
})();