<?php 
/* Template Name: main-index-template-1 */
get_header('index');
?>
<div id="main-article-wrapper" class="fullHeight">
    <article class="fullHeight" id="article1">
        <h1>HAcker</h1>

    </article>
    <article class="fullHeight" id="article2">
        <h1>About</h1>
    </article>
    <article class="fullHeight" id="article3">
        <h1>Skills</h1>
    </article>

    <article class="fullHeight" id="article4">
        <h1>Hobbies</h1>
    </article>

    <article class="fullHeight" id="article5">
        <h1>Where to find me</h1>
    </article>

    <article class="fullHeight" id="article6">
       <h1>Welcome to..</h1>
        <div id="welcomeLeft">
            <h1>to the portfolio of a hacker.</h1>
        </div>
        <div id="welcomeRight">
            <a href="#" id="main-hacker">
                <p>Hacker?</p>
            </a>
            <a href="#" id="main-about">
                <p>About</p>
            </a>
            <a href="#" id="main-skills">
                <p>Skills</p>
            </a>
            <a href="#" id="main-hobbies">
                <p>Hobbies</p>
            </a>
            <a href="#" id="main-come-find-me">
                <p>Where to find me</p>
            </a>
        </div>
        <div id="blog-previews">
            <a href="#" id="previous-blog-post"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/leftChevron.png" alt=""></a>
            <?php
            $recent_posts = wp_get_recent_posts();
            foreach ($recent_posts as $recent) {
                echo '<div class="recent-posts-wrapper-main"><h3><a href="' . get_permalink($recent["ID"]) . '">' . $recent["post_title"] . '</a></h3><p>' . wp_trim_words($recent['post_content']) . '</p></div>';
            }
            wp_reset_query();
            ?>
            <a href="#" id="next-blog-post"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/rightChevron.png" alt="" ></a>
        </div>
    </article>
</div>
<?php
get_footer('index');
?>