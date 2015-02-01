<?php
/**
 * The template for displaying the footer.
 *
 * @package Project Name
 */
?>

        </main>
        <!-- /.main -->

    </div>
    <!-- /.container -->

    <!-- .footer -->
    <footer class="footer">

    </footer>
    <!-- /.footer -->

    <?php wp_footer(); ?>


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

</body>
</html>
