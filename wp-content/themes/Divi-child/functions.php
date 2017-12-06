<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

if ( !function_exists( 'chld_thm_cfg_parent_css' ) ):
    function chld_thm_cfg_parent_css() {
        wp_enqueue_style( 'fonts', 'https://fonts.googleapis.com/css?family=Amatic+SC|Berkshire+Swash|Bigelow+Rules|Bungee+Shade|Cabin+Sketch|Crushed|Freckle+Face|Give+You+Glory|Homemade+Apple|Indie+Flower|Love+Ya+Like+A+Sister|Neucha|Poiret+One|Rock+Salt|Zilla+Slab+Highlight', array(  ) );
        wp_enqueue_style( 'chld_thm_cfg_parent', trailingslashit( get_template_directory_uri() ) . 'style.css', array(  ) );
        wp_enqueue_script('gsap', get_stylesheet_directory_uri() . '/js/TweenMax.min.js',array('jquery'),1.1,true);
        wp_enqueue_script('scrollmagic', get_stylesheet_directory_uri() . '/js/ScrollMagic.min.js','',1.1,true);
        wp_enqueue_script('gsap-sm-animation', get_stylesheet_directory_uri() . '/js/plugins/animation.gsap.min.js','',1.1,true);
        wp_enqueue_script('debug-scroll-magic', get_stylesheet_directory_uri() . '/js/plugins/debug.addIndicators.min.js',array('jquery'),1.1,true);
        // wp_enqueue_script('matter-js', get_stylesheet_directory_uri() . '/js/matter.min.js','',1.1,true);
        wp_enqueue_script('main-javascript', get_stylesheet_directory_uri() . '/js/main.js',array('jquery'),1.1,true);
    }
endif;
add_action( 'wp_enqueue_scripts', 'chld_thm_cfg_parent_css', 10 );


