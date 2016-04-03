
    <footer class="footer">
        <p class="text-center">Copyright to ...</p>
    </footer>

    <?php if ('localhost' === $_SERVER['SERVER_NAME']): ?>
    <script src="../jspm_modules/system.js"></script>
    <script src='../config.js'></script>
    <script type="module">
        System.import('assets/scripts/main')
    </script>
    <?php else: ?>
        <script src='assets/scripts/main.min.js'></script>
    <?php endif; ?>

    <?php if ('localhost' === $_SERVER['SERVER_NAME']): ?>
    <!-- Live Reload - DEVELOPMENT ONLY -->
    <script type='text/javascript' id="__bs_script__">//<![CDATA[
    document.write("<script async src='//HOST:3000/browser-sync/browser-sync-client.1.9.1.js'><\/script>".replace(/HOST/g, location.hostname).replace(/PORT/g, location.port));
//]]></script>
    <?php endif;?>


</body>
</html>
