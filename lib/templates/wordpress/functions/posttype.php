<?php
/**
 * Custom Post Type and Taxonomies configurations
 *
 * @package Colégio Assunção
 */

/*
 * Initialize Custom Post Types
 */

add_action('init', 'init_handler');
function init_handler() {

    configPostTypeBanners();
	configPostTypeAvaliacoes();
	configPostTypeGabaritos();
    // configPostTypeAgenda();
    configPostTypeLivros();
    configPostTypeProfessores();
    configPostTypeAlunos();
    configPostTypeFotos();
    configPostTypeVideos();
    configPostTypeConvenios();

}

/**
 * Register Custom Post Types
 */

/* Banners */
function configPostTypeBanners() {
	$labels = array(
		'name'                => _x('Banners', 'post type general name'),
		'singular_name'       => _x('Banner', 'post type singular name'),
		'add_new'             => __('Adicionar'),
		'all_items'           => __('Listar'),
		'view_item'           => __('Visualizar'),
		'add_new_item'        => __('Adicionar Banner'),
		'edit_item'           => __('Editar'),
		'update_item'         => __('Atualizar'),
		'search_items'        => __('Pesquisar'),
		'not_found'           => __('Banner não encontrado'),
		'not_found_in_trash'  => __('Nada encontrado'),
		'menu_name'           => 'Banners',
		'parent_item_colon'   => ''
	);

	$args = array(
		'label'               => 'Banners',
		'description'         => 'Banners para o Slideshow da Home',
		'labels'              => $labels,
		'supports'            => array( 'title', 'thumbnail' ),
		'taxonomies'          => array( 'category' ),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => true,
		'show_in_admin_bar'   => true,
		'menu_position'       => 5,
		'menu_icon'           => get_bloginfo('template_directory') . '/assets/images/admin/banners.png',
		'can_export'          => true,
		'has_archive'         => true,
		'exclude_from_search' => true,
		'publicly_queryable'  => true,
		'capability_type'     => 'post',
	);

	register_post_type( 'banners', $args );
}

add_action('init', 'banners_add_default_boxes');

function banners_add_default_boxes() {
    register_taxonomy_for_object_type('category', 'banners');
}


/* Avaliações */
function configPostTypeAvaliacoes() {
    $labels = array(
        'name'                => _x('Avaliações', 'post type general name'),
        'singular_name'       => _x('Avaliação', 'post type singular name'),
        'add_new'             => __('Adicionar'),
        'all_items'           => __('Listar'),
        'view_item'           => __('Visualizar'),
        'add_new_item'        => __('Adicionar Avaliação'),
        'edit_item'           => __('Editar'),
        'update_item'         => __('Atualizar'),
        'search_items'        => __('Pesquisar'),
        'not_found'           => __('Avaliação não encontrado'),
        'not_found_in_trash'  => __('Nada encontrado'),
        'menu_name'           => 'Avaliações',
        'parent_item_colon'   => ''
    );

    $args = array(
        'label'               => 'Avaliações',
        'description'         => 'Avaliações dos Cursos',
        'labels'              => $labels,
        'supports'            => array( 'title', 'thumbnail', 'editor'),
        'taxonomies'          => array( 'category' ),
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'menu_position'       => 5,
        'menu_icon'           => get_bloginfo('template_directory') . '/assets/images/admin/avaliacoes.png',
        'can_export'          => true,
        'has_archive'         => true,
        'exclude_from_search' => true,
        'publicly_queryable'  => true,
        'capability_type'     => 'post',
    );

    register_post_type( 'avaliacoes', $args );
}

add_action('init', 'avaliacoes_add_default_boxes');

function avaliacoes_add_default_boxes() {
    register_taxonomy_for_object_type('category', 'avaliacoes');
}


/* Gabaritos */
function configPostTypeGabaritos() {
    $labels = array(
        'name'                => _x('Gabaritos', 'post type general name'),
        'singular_name'       => _x('Gabarito', 'post type singular name'),
        'add_new'             => __('Adicionar'),
        'all_items'           => __('Listar'),
        'view_item'           => __('Visualizar'),
        'add_new_item'        => __('Adicionar Gabarito'),
        'edit_item'           => __('Editar'),
        'update_item'         => __('Atualizar'),
        'search_items'        => __('Pesquisar'),
        'not_found'           => __('Gabarito não encontrado'),
        'not_found_in_trash'  => __('Nada encontrado'),
        'menu_name'           => 'Gabaritos',
        'parent_item_colon'   => ''
    );

    $args = array(
        'label'               => 'Gabaritos',
        'description'         => 'Gabaritos dos Cursos',
        'labels'              => $labels,
        'supports'            => array( 'title', 'thumbnail', 'editor'),
        'taxonomies'          => array( 'category' ),
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'menu_position'       => 5,
        'menu_icon'           => get_bloginfo('template_directory') . '/assets/images/admin/gabaritos.png',
        'can_export'          => true,
        'has_archive'         => true,
        'exclude_from_search' => true,
        'publicly_queryable'  => true,
        'capability_type'     => 'post',
    );

    register_post_type( 'gabaritos', $args );
}

add_action('init', 'gabaritos_add_default_boxes');

function gabaritos_add_default_boxes() {
    register_taxonomy_for_object_type('category', 'gabaritos');
}


/* Agenda */
// function configPostTypeAgenda() {
//     $labels = array(
//         'name'                => _x('Eventos', 'post type general name'),
//         'singular_name'       => _x('Evento', 'post type singular name'),
//         'add_new'             => __('Adicionar'),
//         'all_items'           => __('Listar'),
//         'view_item'           => __('Visualizar'),
//         'add_new_item'        => __('Adicionar Evento'),
//         'edit_item'           => __('Editar'),
//         'update_item'         => __('Atualizar'),
//         'search_items'        => __('Pesquisar'),
//         'not_found'           => __('Evento não encontrado'),
//         'not_found_in_trash'  => __('Nada encontrado'),
//         'menu_name'           => 'Agenda',
//         'parent_item_colon'   => ''
//     );

//     $args = array(
//         'label'               => 'Agenda',
//         'description'         => 'Eventos relacionados ao Colégio Assunção',
//         'labels'              => $labels,
//         'supports'            => array( 'title' ),
//         'taxonomies'          => array( 'category' ),
//         'hierarchical'        => false,
//         'public'              => true,
//         'show_ui'             => true,
//         'show_in_menu'        => true,
//         'show_in_nav_menus'   => true,
//         'show_in_admin_bar'   => true,
//         'menu_position'       => 5,
//         'menu_icon'           => get_bloginfo('template_directory') . '/assets/images/admin/agenda.png',
//         'can_export'          => true,
//         'has_archive'         => true,
//         'exclude_from_search' => true,
//         'publicly_queryable'  => true,
//         'capability_type'     => 'post',
//     );

//     register_post_type( 'agenda', $args );
// }

// add_action('init', 'agenda_add_default_boxes');

// function agenda_add_default_boxes() {
//     register_taxonomy_for_object_type('category', 'agenda');
// }


/* Dicas de Livros */
function configPostTypeLivros() {
    $labels = array(
        'name'                => _x('Livros', 'post type general name'),
        'singular_name'       => _x('Livro', 'post type singular name'),
        'add_new'             => __('Adicionar'),
        'all_items'           => __('Listar'),
        'view_item'           => __('Visualizar'),
        'add_new_item'        => __('Adicionar Livro'),
        'edit_item'           => __('Editar'),
        'update_item'         => __('Atualizar'),
        'search_items'        => __('Pesquisar'),
        'not_found'           => __('Livro não encontrado'),
        'not_found_in_trash'  => __('Nada encontrado'),
        'menu_name'           => 'Livros',
        'parent_item_colon'   => ''
    );

    $args = array(
        'label'               => 'Livros',
        'description'         => 'Dica para Livros',
        'labels'              => $labels,
        'supports'            => array( 'title', 'thumbnail', 'editor'),
        // 'taxonomies'          => array( 'category' ),
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'menu_position'       => 5,
        'menu_icon'           => get_bloginfo('template_directory') . '/assets/images/admin/livros.png',
        'can_export'          => true,
        'has_archive'         => true,
        'exclude_from_search' => true,
        'publicly_queryable'  => true,
        'capability_type'     => 'post',
    );

    register_post_type( 'livros', $args );
}


/* Professores */
function configPostTypeProfessores() {
    $labels = array(
        'name'                => _x('Professores', 'post type general name'),
        'singular_name'       => _x('Professor', 'post type singular name'),
        'add_new'             => __('Adicionar'),
        'all_items'           => __('Listar'),
        'view_item'           => __('Visualizar'),
        'add_new_item'        => __('Adicionar Professor'),
        'edit_item'           => __('Editar'),
        'update_item'         => __('Atualizar'),
        'search_items'        => __('Pesquisar'),
        'not_found'           => __('Professor não encontrado'),
        'not_found_in_trash'  => __('Nada encontrado'),
        'menu_name'           => 'Professores',
        'parent_item_colon'   => ''
    );

    $args = array(
        'label'               => 'Professores',
        'description'         => 'Relação da Equipe Pedagógica',
        'labels'              => $labels,
        'supports'            => array( 'title', 'thumbnail', 'editor'),
        'taxonomies'          => array( 'category' ),
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'menu_position'       => 5,
        'menu_icon'           => get_bloginfo('template_directory') . '/assets/images/admin/professores.png',
        'can_export'          => true,
        'has_archive'         => true,
        'exclude_from_search' => true,
        'publicly_queryable'  => true,
        'capability_type'     => 'post',
    );

    register_post_type( 'professores', $args );
}

add_action('init', 'professores_add_default_boxes');

function professores_add_default_boxes() {
    register_taxonomy_for_object_type('category', 'professores');
}


/* Ex-alunos */
function configPostTypeAlunos() {
    $labels = array(
        'name'                => _x('Ex-alunos', 'post type general name'),
        'singular_name'       => _x('Ex-aluno', 'post type singular name'),
        'add_new'             => __('Adicionar'),
        'all_items'           => __('Listar'),
        'view_item'           => __('Visualizar'),
        'add_new_item'        => __('Adicionar Ex-aluno'),
        'edit_item'           => __('Editar'),
        'update_item'         => __('Atualizar'),
        'search_items'        => __('Pesquisar'),
        'not_found'           => __('Ex-aluno não encontrado'),
        'not_found_in_trash'  => __('Nada encontrado'),
        'menu_name'           => 'Ex-alunos',
        'parent_item_colon'   => ''
    );

    $args = array(
        'label'               => 'Ex-alunos',
        'description'         => 'Registro para Ex-alunos',
        'labels'              => $labels,
        'supports'            => array( 'title', 'thumbnail', 'editor'),
        // 'taxonomies'          => array( 'category' ),
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'menu_position'       => 5,
        'menu_icon'           => get_bloginfo('template_directory') . '/assets/images/admin/ex-alunos.png',
        'can_export'          => true,
        'has_archive'         => true,
        'exclude_from_search' => true,
        'publicly_queryable'  => true,
        'capability_type'     => 'post',
    );

    register_post_type( 'alunos', $args );
}


/* Fotos */
function configPostTypeFotos() {
    $labels = array(
        'name'                => _x('Fotos', 'post type general name'),
        'singular_name'       => _x('Foto', 'post type singular name'),
        'add_new'             => __('Adicionar'),
        'all_items'           => __('Listar'),
        'view_item'           => __('Visualizar'),
        'add_new_item'        => __('Adicionar Foto'),
        'edit_item'           => __('Editar'),
        'update_item'         => __('Atualizar'),
        'search_items'        => __('Pesquisar'),
        'not_found'           => __('Foto não encontrado'),
        'not_found_in_trash'  => __('Nada encontrado'),
        'menu_name'           => 'Fotos',
        'parent_item_colon'   => ''
    );

    $args = array(
        'label'               => 'Fotos',
        'description'         => 'Fotos para o Espaço Multimídia',
        'labels'              => $labels,
        'supports'            => array( 'title', 'thumbnail', 'editor'),
        // 'taxonomies'          => array( 'category' ),
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'menu_position'       => 5,
        'menu_icon'           => get_bloginfo('template_directory') . '/assets/images/admin/fotos.png',
        'can_export'          => true,
        'has_archive'         => true,
        'exclude_from_search' => true,
        'publicly_queryable'  => true,
        'capability_type'     => 'post',
    );

    register_post_type( 'fotos', $args );
}


/* Videos */
function configPostTypeVideos() {
    $labels = array(
        'name'                => _x('Vídeos', 'post type general name'),
        'singular_name'       => _x('Vídeo', 'post type singular name'),
        'add_new'             => __('Adicionar'),
        'all_items'           => __('Listar'),
        'view_item'           => __('Visualizar'),
        'add_new_item'        => __('Adicionar Vídeo'),
        'edit_item'           => __('Editar'),
        'update_item'         => __('Atualizar'),
        'search_items'        => __('Pesquisar'),
        'not_found'           => __('Vídeo não encontrado'),
        'not_found_in_trash'  => __('Nada encontrado'),
        'menu_name'           => 'Vídeos',
        'parent_item_colon'   => ''
    );

    $args = array(
        'label'               => 'Vídeos',
        'description'         => 'Vídeos para o Espaço Multimídia',
        'labels'              => $labels,
        'supports'            => array( 'title', 'thumbnail', 'editor'),
        // 'taxonomies'          => array( 'category' ),
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'menu_position'       => 5,
        'menu_icon'           => get_bloginfo('template_directory') . '/assets/images/admin/videos.png',
        'can_export'          => true,
        'has_archive'         => true,
        'exclude_from_search' => true,
        'publicly_queryable'  => true,
        'capability_type'     => 'post',
    );

    register_post_type( 'videos', $args );
}


/* Convênios */
function configPostTypeConvenios() {
    $labels = array(
        'name'                => _x('Convênios', 'post type general name'),
        'singular_name'       => _x('Convênio', 'post type singular name'),
        'add_new'             => __('Adicionar'),
        'all_items'           => __('Listar'),
        'view_item'           => __('Visualizar'),
        'add_new_item'        => __('Adicionar Convênio'),
        'edit_item'           => __('Editar'),
        'update_item'         => __('Atualizar'),
        'search_items'        => __('Pesquisar'),
        'not_found'           => __('Convênio não encontrado'),
        'not_found_in_trash'  => __('Nada encontrado'),
        'menu_name'           => 'Convênios',
        'parent_item_colon'   => ''
    );

    $args = array(
        'label'               => 'Convênios',
        'description'         => 'Lista de Convênios',
        'labels'              => $labels,
        'supports'            => array( 'title', 'thumbnail'),
        // 'taxonomies'          => array( 'category' ),
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'menu_position'       => 5,
        'menu_icon'           => get_bloginfo('template_directory') . '/assets/images/admin/convenios.png',
        'can_export'          => true,
        'has_archive'         => true,
        'exclude_from_search' => true,
        'publicly_queryable'  => true,
        'capability_type'     => 'post',
    );

    register_post_type( 'convenios', $args );
}
