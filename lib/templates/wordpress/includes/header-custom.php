<?php
/**
 * The template for displaying primary header.
 *
 * @package Colégio Assunção
 */
?>

<div class="span4">
    <h1 class="logo">
        <a href="<?php echo home_url(); ?>" title="<?php echo get_bloginfo("name"); ?>" rel="home"><?php bloginfo("name"); ?></a>
    </h1>
</div>

<div class="span4">
    <nav>
        <div class="menu">
            <li class="dropdown">
                <a href="<?php bloginfo("url"); ?>/colegio/"><img src="<?php echo WP_IMAGE_URL ?>/menu/menu-insa_01.png" alt=""><br>Colégio</a>
                <?php
                    wp_nav_menu(array(
                        "theme_location" => "colegio-menu",
                        "container"      => "ul",
                        "menu_class"     => "sub-menu",
                        "depth"          => 1
                    ));
                ?>
            </li>
            <li class="dropdown">
                <a href="#" data-action="none"><img src="<?php echo WP_IMAGE_URL ?>/menu/menu-insa_02.png" alt=""><br>Cursos</a>
                <?php
                    wp_nav_menu(array(
                        "theme_location" => "cursos-menu",
                        "container"      => "ul",
                        "menu_class"     => "sub-menu",
                        "depth"          => 1
                    ));
                ?>
            </li>
            <li class="dropdown">
                <a href="<?php bloginfo("url"); ?>/matriculas/"><img src="<?php echo WP_IMAGE_URL ?>/menu/menu-insa_03.png" alt=""><br>Matrículas</a>
                <?php
                    wp_nav_menu(array(
                        "theme_location" => "matriculas-menu",
                        "container"      => "ul",
                        "menu_class"     => "sub-menu",
                        "depth"          => 1
                    ));
                ?>
            </li>
            <li>
                <a href="<?php bloginfo("url"); ?>/convenios/"><img src="<?php echo WP_IMAGE_URL ?>/menu/menu-insa_04.png" alt=""><br>Convênios</a>
            </li>
        </div>
    </nav>
</div>

<div class="span4">
    <div class="online pull-right">
        <h4>Assunção Online</h4>
        <p>Acesso exclusivo para Pais e Alunos</p>
        <form action="http://www.colegioassuncao.prodadosbahia.com.br/Aplicacao/03611577/ProWeb/Login.aspx" method="POST" target="_blank" class="form-inline">
            <input type="text" name="login" class="input-online" placeholder="usuário">
            <input type="password" name="senha" class="input-online" placeholder="senha">
            <input type="submit" name="acesso" class="btn btn-alternative text-upper" value="ok">
        </form>
    </div>
</div>