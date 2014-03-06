<?php
/**
 * Setup theme features
 *
 * @package Colégio Assunção
 */

function after_setup_theme_handler(){

	/**
     * Register nav menus.
     */
    register_nav_menus(
        array(
            'colegio-menu'    => 'Colégio',
            'cursos-menu'     => 'Cursos',
            'matriculas-menu' => 'Matrículas'
        )
    );

    /**
     * Register sidebars.
     */

    // Compartilhar nas Redes Sociais
    register_sidebar(
        array(
            'name'          => 'Compartilhar nas Redes Sociais',
            'id'            => 'social-share',
            'description'   => 'Botões para compartilhar nas redes sociais',
            'before_widget' => '<aside id="%1$s" class="widget %2$s">',
            'after_widget'  => '</aside>',
            'before_title'  => '',
            'after_title'   => ''
        )
    );

    // Calendário para Eventos
    register_sidebar(
        array(
            'name'          => 'Calendário - Eventos',
            'id'            => 'calendar-events',
            'description'   => 'Calendário para as datas comemorativas',
            'before_widget' => '<aside id="%1$s" class="widget %2$s">',
            'after_widget'  => '</aside>',
            'before_title'  => '<h5 class="widgettitle widget-title text-upper font-bold">',
            'after_title'   => '</h5>'
        )
    );

    // Lista de Eventos
    register_sidebar(
        array(
            'name'          => 'Lista - Eventos',
            'id'            => 'list-events',
            'description'   => 'Lista das datas comemorativas',
            'before_widget' => '<aside id="%1$s" class="widget %2$s">',
            'after_widget'  => '</aside>',
            'before_title'  => '<h5 class="widgettitle widget-title text-upper font-bold">',
            'after_title'   => '</h5>'
        )
    );

    // Agenda - Educação Infantil
    register_sidebar(
        array(
            'name'          => 'Agenda - Educação Infantil',
            'id'            => 'calendar-infantil',
            'description'   => 'Agenda Escolar da Educação Infantil',
            'before_widget' => '<aside id="%1$s" class="widget %2$s">',
            'after_widget'  => '</aside>',
            'before_title'  => '<h5 class="widgettitle widget-title text-upper font-bold">',
            'after_title'   => '</h5>'
        )
    );

    // Agenda - Ensino Fundamental I
    register_sidebar(
        array(
            'name'          => 'Agenda - Ensino Fundamental 1',
            'id'            => 'calendar-fundamental-1',
            'description'   => 'Agenda Escolar da Ensino Fundamental I',
            'before_widget' => '<aside id="%1$s" class="widget %2$s">',
            'after_widget'  => '</aside>',
            'before_title'  => '<h5 class="widgettitle widget-title text-upper font-bold">',
            'after_title'   => '</h5>'
        )
    );

    // Agenda - Ensino Fundamental II
    register_sidebar(
        array(
            'name'          => 'Agenda - Ensino Fundamental 2',
            'id'            => 'calendar-fundamental-2',
            'description'   => 'Agenda Escolar da Ensino Fundamental II',
            'before_widget' => '<aside id="%1$s" class="widget %2$s">',
            'after_widget'  => '</aside>',
            'before_title'  => '<h5 class="widgettitle widget-title text-upper font-bold">',
            'after_title'   => '</h5>'
        )
    );

    // Agenda - Ensino Médio
    register_sidebar(
        array(
            'name'          => 'Agenda - Ensino Médio',
            'id'            => 'calendar-medio',
            'description'   => 'Agenda Escolar da Ensino Médio',
            'before_widget' => '<aside id="%1$s" class="widget %2$s">',
            'after_widget'  => '</aside>',
            'before_title'  => '<h5 class="widgettitle widget-title text-upper font-bold">',
            'after_title'   => '</h5>'
        )
    );

    /*
     * Add post_thumbnails suport.
     */
    add_theme_support('post-thumbnails');
    add_image_size('thumb-convenios', 50, 50, true);

}

add_action('after_setup_theme', 'after_setup_theme_handler');
