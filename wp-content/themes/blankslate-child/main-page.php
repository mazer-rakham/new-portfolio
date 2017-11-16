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
    <div id="a-bit-bout-me">
        <h1>Who am I?</h1>
        <h2>Well I am Thomas Flock Junior, and I make websites. (I think)</h2>
        <p>I took an interest in web design when I was about 17 year old I was working as an TCP/IP tester
            at NAS in Herndon Virginia in the late 90's. I designed a website for a coworker and wrote some simple HTML 
            for his kids little leauge baseball team.
        </p>
    </div>
    <div id="portfolioTest">
        <h1>My Art</h1>
        <div class="grid">
            <figure class="effect-julia">
                <img src="<?php echo mazer_image_path; ?>/shape-date-preview.jpg" alt="img21" />
                <figcaption>
                    <h2>
                        <span>ShapeDate</span>
                    </h2>
                    <div>
                        <p>PHP, JQUERY</p><br />
                        <p>MySQL, BootStrap</p><br />
                        <p>I built everything by myself.<br />Designed the database, wrote all code<br />and styled everything.</p>
                    </div>
                    <a href="#">View more</a>
                </figcaption>
            </figure>
            <figure class="effect-julia">
                <img src="<?php echo mazer_image_path; ?>/navica-mls-preview.jpg" alt="img22" />
                <figcaption>
                    <h2>NAVICA
                        <span>MLS</span>
                    </h2>
                    <div>
                        <p>ASP.NET 4.5, Razor, jQuery</p><br />
                        <p>SQL, JSON, CSS3</p><br />
                        <p>NAVICA is an MLS system<br /> with over 38k clients.<br /> I was in charge of all ajax, jQuery, <br /> and styling.</p>
                    </div>
                    <a href="#">View more</a>
                </figcaption>
            </figure>
            <figure class="effect-julia">
                <img src="<?php echo mazer_image_path; ?>/adcock-realty-preview.jpg" alt="img21" />
                <figcaption>
                    <h2>adcock
                        <span>realty</span>
                    </h2>
                    <div>
                        <p>ASP CLASSIC, jQuery, BootStrap</p>
                        <p>I was in charge of incorporating bootstrap <br /> into an older site.</p>
                    </div>
                    <a href="#">View more</a>
                </figcaption>
            </figure>
            <figure class="effect-julia">
                <img src="<?php echo mazer_image_path; ?>/22.jpg" alt="img22" />
                <figcaption>
                    <h2>Passionate
                        <span>Julia</span>
                    </h2>
                    <div>
                        <p>Julia dances in the deep dark</p>
                        <p>She loves the smell of the ocean</p>
                        <p>And dives into the morning light</p>
                    </div>
                    <a href="#">View more</a>
                </figcaption>
            </figure>
            <figure class="effect-julia">
                <img src="<?php echo mazer_image_path; ?>/21.jpg" alt="img21" />
                <figcaption>
                    <h2>Passionate
                        <span>Julia</span>
                    </h2>
                    <div>
                        <p>Julia dances in the deep dark</p>
                        <p>She loves the smell of the ocean</p>
                        <p>And dives into the morning light</p>
                    </div>
                    <a href="#">View more</a>
                </figcaption>
            </figure>
            <figure class="effect-julia">
                <img src="<?php echo mazer_image_path; ?>/22.jpg" alt="img22" />
                <figcaption>
                    <h2>Passionate
                        <span>Julia</span>
                    </h2>
                    <div>
                        <p>Julia dances in the deep dark</p>
                        <p>She loves the smell of the ocean</p>
                        <p>And dives into the morning light</p>
                    </div>
                    <a href="#">View more</a>
                </figcaption>
            </figure>
        </div>
        
    </div>
    <?php
get_footer(); ?>