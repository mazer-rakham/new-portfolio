<aside id="sidebar" role="complementary">
    <?php if ( is_active_sidebar( 'primary-widget-area' ) ) : ?>
        <div id="primary" class="widget-area">
            <ul class="xoxo">
                <?php dynamic_sidebar( 'primary-widget-area' ); ?>
            </ul>
        </div>
    <?php endif; ?>
    <h4 id="slide-out-menu-tag">MENU</h4>
</aside>