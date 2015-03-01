<?php
/**
 * Google Functions and definitions
 *
 * @package Project Name
 */

 /*
  * Google Analytics
  */
function google_analytics() { ?>

    <script>

      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-XXXXXXXX-X', 'auto');
      ga('send', 'pageview');

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

            var mapPostion = new google.maps.LatLng(-99.999999, -99.999999),
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
                title:"Project Name"
            });

            marker.setMap(map);
        }

        window.onload = loadScript;
        google.maps.event.addDomListener(window, 'load', initialize);

    </script>

<?php }

add_action('wp_footer', 'google_maps');
