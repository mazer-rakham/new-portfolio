<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width" />
    <link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_uri(); ?>" />
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php get_sidebar(); ?>
    <div id="whole-main-content-wrapper">
        <div id="wrapper" class="hfeed container-fluid">
            <header id="header" role="banner">
                <!-- <div class="row">
                    <img src="<?php echo mazer_image_path; ?>/thomas-flock-logo.png" class="img-responsive center-block" />
                </div> -->
                <nav id="menu" role="navigation">
                    <?php
                wp_nav_menu(array(
                    'theme_location' => 'animated-menu',
                    'container_id' => 'animated-menu',
                ));
                ?>
                </nav>
            </header>
            <div id="container">