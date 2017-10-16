<?php /* Template Name: NewMainPage  */
get_header('secondary'); ?>
<div class="container-fluid">
    <div class="row">
        <img src="<?php echo mazer_image_path; ?>/thomas-flock-logo.png" class="img-responsive center-block" />
    </div>
</div>
<section id="branding">
    <div id="site-title">
        <?php 
            if ( is_front_page() || is_home() || is_front_page() && is_home() ) { 
                echo '<h1>';
                } 
        ?>
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_html( get_bloginfo( 'name' ) ); ?>" rel="home">
            <?php 
             echo esc_html( get_bloginfo( 'name' ) );
        ?>
        </a>
        <?php 
            if ( is_front_page() || is_home() || is_front_page() && is_home() ) { 
                  echo '</h1>';
                } 
        ?>
    </div>
    <!-- <div id="site-description"><?php bloginfo( 'description' ); ?></div>  -->
    <h1>My website is as sparadic as my mind</h1>
</section>
<?php
get_sidebar();
get_footer(); ?>