<?php get_header(); ?>
<section id="content" role="main">
    <?php 
        if (have_posts()) : while (have_posts()) : the_post(); 
        get_template_part('entry'); 
        comments_template(); 
          endwhile;
        endif; 
        get_template_part('nav', 'below'); 
    ?>
</section>
<?php get_sidebar(); ?>
<?php get_footer(); ?>