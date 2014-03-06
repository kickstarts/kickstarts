<?php
/**
 * Google Functions and definitions
 *
 * @package Colégio Assunção
 */

 /*
  * Google Analytics
  */
function google_analytics() { ?>

<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-46158523-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

<?php }

add_action('wp_footer', 'google_analytics');


function google_maps() { ?>

    <script type="text/javascript">

        function loadScript() {
            var script  = document.createElement('script');
            script.type = 'text/javascript';
            script.src  = 'https://maps.googleapis.com/maps/api/js?v=3.13&sensor=false&' +
            'callback=initialize';
            document.body.appendChild(script);
        }

        function initialize() {

            var mapPostion = new google.maps.LatLng(-12.984381,-38.512359),
                mapShowType = google.maps.MapTypeId.TERRAIN,
                mapZoomStyle = google.maps.ZoomControlStyle.SMALL;

            var mapOptions = {
                center: mapPostion,
                zoom: 16,
                disableDefaultUI: true,
                mapTypeId: mapShowType,
                zoomControl: true,
                zoomControlOptions: {
                    style: mapZoomStyle
                }
            };

            var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

            var marker = new google.maps.Marker({
                position: mapPostion,
                map: map,
                title:"Colégio Assunção"
            });

            marker.setMap(map);
        }

        window.onload = loadScript;
        google.maps.event.addDomListener(window, 'load', initialize);

    </script>

<?php }

add_action('wp_footer', 'google_maps');
