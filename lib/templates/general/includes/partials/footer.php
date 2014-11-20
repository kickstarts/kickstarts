
    <footer class="footer">
        <p class="text-center">Copyright to ...</p>
    </footer>

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script>
        window.jQuery || document.write('<script src="assets/scripts/vendor/jquery-1.10.2.min.js"><\/script>')
    </script>

    <script src="assets/scripts/main.min.js"></script>

    <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
    <script>
        var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
        (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
        g.src='//www.google-analytics.com/ga.js';
        s.parentNode.insertBefore(g,s)}(document,'script'));
    </script>

    <?php
        $localhost = $_SERVER['SERVER_NAME'];
        if ($localhost === 'localhost') :
    ?>
    <!-- Browser Sync -->
    <script type='text/javascript' id="__bs_script__">
    //<![CDATA[
    document.write("<script async src='//HOST:3000/browser-sync/browser-sync-client.1.7.0.js'><\/script>".replace(/HOST/g, location.hostname).replace(/PORT/g, location.port));
    //]]>
    </script>
    <?php endif; ?>


</body>
</html>
