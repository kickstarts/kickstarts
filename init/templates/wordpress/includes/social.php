<?php

if (!function_exists('theme_social_share')) {

    /**
     * Social component for share entry posts.
     */

    global $post;
    $html  = '';
    $link  = get_permalink($post->ID);
    $image = get_post_thumbnail_id($post->ID);
    $text  = rawurlencode($post->post_title);
    $email = 'enteryour@addresshere.com';

    $html .= '
    <ul class="social-list">
        <li class="social">
        <a href="http://www.facebook.com/sharer.php?u='.$link.'&amp;images='.$image.'" target="_blank"><span class="icon-facebook"></span></a>
        </li>
        <li class="social-item">
            <a href="https://twitter.com/share?url='.$link.'&text='.$text.'" target="_blank"><span class="icon-twitter"></span></a>
        </li>
        <li class="social-item">
            <a href="mailto:'.$email.'?subject='.$text.'&amp;body=Confira:'.$link.'"><span class="icon-envelope"></span></a>
        </li>
        <li class="social-item">
            <a href="http://pinterest.com/pin/create/button/?url='.$link.'&amp;media='.$image.'&amp;description='.$post_title.'" target="_blank"><span class="icon-pinterest"></span></a>
        </li>
        <li class="social-item">
            <a href="http://plus.google.com/share?url='.$link.'&title='.$text.'" target="_blank"><span class="icon-google-plus"></span></a>
        </li>
    </ul>
    ';

    return $html;

}
