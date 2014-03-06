<?php
/**
 * The template for displaying top bar feature.
 *
 * @package Colégio Assunção
 */
?>

<div class="top-bar">
    <div class="container">
        <div class="wrapper">
            <div class="row">
                <div class="span5">
                    <p class="text-upper text-white"><?php bloginfo('description'); ?></p>
                </div>

                <div class="span3">
                    <ul class="list-inline pull-right">
                        <li><a href="<?php echo home_url(); ?>" class="is-rounded" data-toggle="tooltip" title="Ir para a página inicial"><i class="icon-home"></i></a></li>
                        <li><a href="<?php bloginfo('url'); ?>/fale-conosco/" class="is-rounded" data-toggle="tooltip" title="Entre em contato conosco"><i class="icon-phone"></i></a></li>
                        <li><a href="http://webmail.colegioassuncao.com.br" class="is-rounded" data-toggle="tooltip" title="Acessar o Webmail" target="_blank"><i class="icon-envelope"></i></a></li>
                        <li><a href="#" class="is-rounded" data-action="share" data-toggle="tooltip" title="Compartilhar"><i class="icon-share"></i></a></li>
                    </ul>
                    <div class="box-share has-radius">
                        <?php dynamic_sidebar('social-share'); ?>
                    </div>
                </div>

                <div class="span4">
                    <form method="get" class="form-horizontal pull-right search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
                        <input type="text" class="span3" name="s" id="s" placeholder="pesquisar">
                        <input type="submit" class="btn btn-success text-upper search-submit" value="ok">
                    </form>
                </div>
            </div>

        </div>
    </div>
</div>
