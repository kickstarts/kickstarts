
    <footer class="footer">
        <p class="text-center">Copyright to ...</p>
    </footer>

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script>
        window.jQuery || document.write('<script src="assets/scripts/vendor/jquery-1.10.2.min.js"><\/script>')
    </script>

    <script src="assets/scripts/main.min.js"></script>

    <!-- Google Analytics: change UA-XXXXXXXX-X to be your site's ID. -->
    <script>

      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-XXXXXXXX-X', 'auto');
      ga('send', 'pageview');

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
