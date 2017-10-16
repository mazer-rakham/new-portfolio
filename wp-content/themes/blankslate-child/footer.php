<div class="clear">

            </div>
        </div>
        <footer id="footer" role="contentinfo">
            <div id="copyright">
            </div>
        </footer>
    </div>
    <?php wp_footer(); ?>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-filters">
        <defs>
            <filter id="filter">
                <feTurbulence type="fractalNoise" baseFrequency="0.00001 0.00001" numOctaves="1" result="warp"></feTurbulence>
                <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warpOffset" />
            </filter>
        </defs>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-filters">
        <defs>
            <filter id="filter2">
                <feTurbulence type="fractalNoise" baseFrequency="0.00001 0.00001" numOctaves="1" result="warp"></feTurbulence>
                <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warpOffset" />
            </filter>
        </defs>
    </svg>
</body>

</html>