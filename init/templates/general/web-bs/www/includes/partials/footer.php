
    <footer class="footer">
        <p class="text-center">Copyright to ...</p>
    </footer>

    <script src='assets/scripts/main.min.js'></script>
    <!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/tota11y/0.1.5/tota11y.min.js"></script> -->

    <?php if ('localhost' === $_SERVER['SERVER_NAME']): ?>
    <!-- Live Reload - DEVELOPMENT ONLY -->
    <script type='text/javascript' id="__bs_script__">//<![CDATA[
    document.write("<script async src='//HOST:3000/browser-sync/browser-sync-client.1.9.1.js'><\/script>".replace(/HOST/g, location.hostname).replace(/PORT/g, location.port));
//]]></script>
    <?php endif;?>


</body>
</html>
