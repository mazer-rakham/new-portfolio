<?php /* Template Name: NewMainPage  */
get_header('secondary'); ?>





<div class="container-fluid">
  
</div>
<section id="branding">
    <div id="site-title">
        <?php 
        if (is_front_page() || is_home() || is_front_page() && is_home()) {
            echo '<h1>';
        }
        ?>
        <a href="<?php echo esc_url(home_url('/')); ?>" title="<?php echo esc_html(get_bloginfo('name')); ?>" rel="home">
            <?php 
            echo esc_html(get_bloginfo('name'));
            ?>
        </a>
        <?php 
        if (is_front_page() || is_home() || is_front_page() && is_home()) {
            echo '</h1>';
        }
        ?>
    </div>
    <!-- <div id="site-description"><?php bloginfo('description'); ?></div>  -->
    <h1>My website is as sporadic as my mind</h1>
  
</section>
<section id="content" role="main">
        <?php 
        if (have_posts()) : while (have_posts()) : the_post();
        ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <header class="header">
                <h1 class="entry-title">
                    <?php 
                    the_title();
                    ?>
                </h1> 
                <?php 
                edit_post_link();
                ?>
            </header>
            <section class="entry-content">
                <?php 
                if (has_post_thumbnail()) {
                    the_post_thumbnail();
                }
                the_content();
                ?>
                <div class="entry-links">
                    <?php 
                    wp_link_pages();
                    ?>
                </div>
            </section>
        </article>
    <?php if (!post_password_required()) comments_template('', true); ?>
    <?php endwhile;
    endif; ?>

<?php

get_footer(); ?>