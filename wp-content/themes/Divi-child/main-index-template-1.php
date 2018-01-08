<?php 
/* Template Name: main-index-template-1 */
get_header('index');
?>
<div id="main-article-wrapper" class="fullHeight">
    <article class="fullHeight" id="article1">
       <?php require('hacker.php'); ?>
    </article>
    <article class="fullHeight" id="article2">
    <?php require('about-this-guy.php'); ?>
    </article>
    <article class="fullHeight" id="article3">
    <?php require('my-skills.php'); ?>
    </article>

    <article class="fullHeight" id="article4">
       <?php  require('fun-hobby-time.php');  ?>
    </article>

    <article class="fullHeight" id="article5">
        <?php require('come-find-me.php');  ?>
    </article>

    <article class="fullHeight" id="article6">
        <h1>Welcome to..</h1>
        <div id="welcomeLeft">
            <h1>to the portfolio of a hacker.<br />this splash page is a test/showoff, see my portfolio <a href="http://www.mazer-rakham.com/portfolio/">here</a></h1>
        </div>
        <div id="welcomeRight">           
            <?php require('main-template-navigation.php'); ?>
        </div>
        <div id="blog-previews">
            <a href="#" id="previous-blog-post">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/leftChevron.png" alt="">
            </a>
            <?php
            $recent_posts = wp_get_recent_posts();
            foreach ($recent_posts as $recent) {
                echo '<div class="recent-posts-wrapper-main"><h3><a href="' . get_permalink($recent["ID"]) . '">' . $recent["post_title"] . '</a></h3><p>' . wp_trim_words($recent['post_content']) . '</p></div>';
            }
            wp_reset_query();
            ?>
                <a href="#" id="next-blog-post">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/rightChevron.png" alt="">
                </a>
        </div>
    </article>
</div>
<?php
get_footer('index');
?>