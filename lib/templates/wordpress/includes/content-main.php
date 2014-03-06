<?php
/**
 * The template for displaying home content.
 *
 * @package Colégio Assunção
 */
?>

<div class="main">
    <div class="span4">
        <section class="box box-home">
            <header>
                <h3 class="text-upper normal-title line-bottom font-bold">Facebook</h3>
            </header>
            <div class="fb-like-box box-home" data-href="http://www.facebook.com/ColegioAssuncao" data-width="300" data-height="365" data-colorscheme="light" data-show-faces="true" data-header="false" data-stream="false" data-show-border="false"></div>
        </section>
    </div>
    <div class="span4">
        <section class="box box-home">
            <header>
                <h3 class="text-upper normal-title line-bottom font-bold">Últimas Notícias</h3>
            </header>
            <?php
                $args = array(
                    'order'          => 'DESC',
                    'meta_key'       => 'highlight',
                    'meta_value'     => true,
                    'posts_per_page' => 5
                );
                query_posts( $args );
                if ( have_posts() ) : while ( have_posts() ) : the_post();
            ?>
            <article <?php post_class(); ?>>
                <a href="<?php the_permalink(); ?>" title="<?php echo get_the_title(); ?>">
                    <h5 class="text-upper font-bold"><?php the_title(); ?></h5>
                    <p><?php $resumo = get_field('resumo', $post->ID); echo $resumo; ?>...</p>
                </a>
            </article>
            <div class="line-bottom"></div>
            <?php endwhile; ?>

            <footer>
                <a href="<?php bloginfo('url'); ?>/informativos/" rel="bookmark" class="btn btn-small btn-primary btn-more">clique aqui para ver mais <span>+</span></a>
            </footer>

            <?php else : ?>
            <p class="text-center text-upper">Sem publicações até o momento.</p>
            <?php endif; wp_reset_query(); ?>
        </section>
    </div>
    <div class="span4">
        <section class="box box-home">
            <header>
                <h3 class="text-upper normal-title line-bottom font-bold">Twitter</h3>
                <a class="twitter-timeline" height="360" data-chrome="nofooter transparent" data-dnt="false" href="https://twitter.com/insa_assuncao" data-widget-id="394654481859608576">Tweets de @insa_assuncao</a>
            </header>
        </section>
    </div>
</div>
