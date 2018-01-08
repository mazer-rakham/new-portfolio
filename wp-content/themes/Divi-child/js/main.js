
var horizontalController = new ScrollMagic.Controller({
    vertical: false
});
var loadingTimeline = new TimelineMax();
Math.randMinMax5 = function (t5, n5, a5) {
    var r5 = t5 + Math.random() * (n5 - t5)
    return a5 && (r5 = Math.round(r5)), r5
}
var w5 = window.innerWidth,
    h5 = window.innerHeight,
    numberOfStars5 = 100,
    PosX5 = 0,
    PosY5 = 0;
for (i5 = 0; i5 < numberOfStars5; i5++) {
    loadingStar = jQuery('<div class="loading-background" />'),
        PosX5 = Math.floor(Math.random() * w5);
    PosY5 = -500;
    var size5 = Math.floor(Math.random() * 30);
    jQuery('#loading-screen').append(loadingStar);
    TweenLite.set(loadingStar, {
        x: PosX5,
        y: PosY5 - (size5 * 5),
        width: size5 + 200,
        height: size5 + 50
    })
    loadingTimeline.to(loadingStar, Math.randMinMax5(5, 7), {
            x: PosX5,
            y: h5 + (size5 * 2),
            opacity: 1,
            repeat: -1,
            repeatDelay: Math.randMinMax5(0, 1),
            ease: Linear.easeNone
        },
        Math.randMinMax5(0, 4));
}




TweenMax.set('.fullHeight', {
    position: 'absolute',
    width: "100%"
});

//set position for article1 and its return
TweenMax.set('#article1', {
    left: '50%',
    rotation: '60deg',
    autoAlpha: 0
});

function returnArticle1() {
    TweenMax.to('#article1', 0.5, {
        left: '50%',
        rotation: '60deg',
        autoAlpha: 0
    });
    jQuery('#main-index-template-body').css('overflow-y', 'hidden');
    jQuery('#main-index-template-body').css('overflow-x', 'hidden');
}


// setting the position for article 2 and its return
TweenMax.set('#article2', {
    left: '-50%',
    rotation: '180deg',
    autoAlpha: 0
});

function returnArticle2() {
    TweenMax.to('#article2', 0.5, {
        left: '-50%',
        rotation: '180deg',
        autoAlpha: 0
    });
    jQuery('#main-index-template-body').css('overflow-y', 'hidden');
    jQuery('#main-index-template-body').css('overflow-x', 'hidden');
}
//   set position for article 3 and it's return
TweenMax.set('#article3', {
    rotationX: '90deg',
    autoAlpha: 0
});

function returnArticle3() {
    TweenMax.to('#article3', 0.5, {
        rotationX: '90deg',
        autoAlpha: 0
    });
    jQuery('#main-index-template-body').css('overflow-y', 'hidden');
    jQuery('#main-index-template-body').css('overflow-x', 'hidden');
}

// set position for artice 4 and return
TweenMax.set('#article4', {
    rotationY: '90deg',
    left: '50%',
    transformOrigin: "0% 100%",
    autoAlpha: 0
});

function returnArticle4() {
    TweenMax.to('#article4', 0.5, {
        rotationY: '90deg',
        left: '50%',
        autoAlpha: 0
    });
    jQuery('#main-index-template-body').css('overflow-y', 'hidden');
    jQuery('#main-index-template-body').css('overflow-x', 'hidden');
}
// set position article 5 and return
TweenMax.set('#article5', {
    top: '-100%',
    autoAlpha: 0
});

function returnArticle5() {
    TweenMax.to('#article5', 0.5, {
        top: '-100%',
        autoAlpha: 0
    });
    jQuery('#main-index-template-body').css('overflow-y', 'hidden');
    jQuery('#main-index-template-body').css('overflow-x', 'hidden');
}

function removeHomePanel() {
    TweenMax.to('#article6', 0.5, {
        rotationX: '180deg',
        z: -1500,
        autoAlpha: 0
    });
}


function articleHeight() {
    var windowHeight = jQuery(window).height();
    jQuery('.fullHeight').css('min-height', windowHeight + 'px');
};


jQuery(document).ready(function () {
    // calls the function to make the articles the same height as viewpost
    articleHeight();
    jQuery('#loading-screen').css("display","none");
    // the recent posts slideshow -------------------------------------------------
    jQuery(function () {

        var $slides = jQuery(".recent-posts-wrapper-main");
        var currentSlide = 0;
        var stayTime = 4;
        var slideTime = 1.5;
        var numberOfSlides = $slides.length - 1;

        TweenLite.set($slides.filter(":gt(0)"), {
            autoAlpha: 0
        });
        TweenLite.delayedCall(stayTime, nextSlide);

        function nextSlide() {
            TweenLite.to($slides.eq(currentSlide), slideTime, {
                autoAlpha: 0
            });
            currentSlide = ++currentSlide % $slides.length;
            TweenLite.to($slides.eq(currentSlide), slideTime, {
                autoAlpha: 1
            });
            TweenLite.delayedCall(stayTime, nextSlide);
        }

        jQuery('#next-blog-post').click(function () {

            TweenLite.to($slides.eq(currentSlide), slideTime, {
                autoAlpha: 0
            });
            currentSlide = ++currentSlide % $slides.length;
            TweenLite.to($slides.eq(currentSlide), slideTime, {
                autoAlpha: 1
            });
        });

        jQuery('#previous-blog-post').click(function () {

            TweenLite.to($slides.eq(currentSlide), slideTime, {
                autoAlpha: 0
            });
            currentSlide = --currentSlide % $slides.length;
            TweenLite.to($slides.eq(currentSlide), slideTime, {
                autoAlpha: 1
            });
        });
        jQuery('.recent-posts-wrapper-main').mouseenter(function () {
            TweenLite.killDelayedCallsTo(nextSlide);
        });
        jQuery('.recent-posts-wrapper-main').mouseleave(function () {
            TweenLite.delayedCall(stayTime, nextSlide);
        });

        for (i = -1; i < numberOfSlides; i++) {
            (function () {
                var slideIndex = i;
                var slideLabel = i + 1;
                var x = jQuery('<a id="slide' + slideLabel + '"href="#" class="paginatorLink">' + '<i class="material-icons">brightness_1</i>' + '</a>');
                x.click(function () {



                    TweenLite.killDelayedCallsTo(nextSlide);
                    TweenLite.to($slides.eq(currentSlide), slideTime, {
                        opacity: 0,
                        display: 'none'
                    });
                    currentSlide = slideLabel;
                    TweenLite.to($slides.eq(currentSlide), slideTime, {
                        opacity: 1,
                        display: 'block'
                    });


                });
                jQuery('.pagination').append(x);
            })();
        }

    });
    // end of recent posts


    // the menu navigation animations   --------------------------------------------------------
    jQuery('.main-hacker').click(function () {
        returnArticle2();
        returnArticle3();
        returnArticle4();
        returnArticle5();
        removeHomePanel();
        TweenMax.to('#article1', 0.5, {
            left: '0%',
            rotation: '0deg',
            autoAlpha: 1
        });
    });
    jQuery('.main-about').click(function () {
        returnArticle1();
        returnArticle3();
        returnArticle4();
        returnArticle5();
        removeHomePanel();
        TweenMax.to('#article2', 0.5, {
            left: '0%',
            rotation: '0deg',
            autoAlpha: 1
        });
    });
    jQuery('.main-skills').click(function () {
        returnArticle1();
        returnArticle2();
        returnArticle4();
        returnArticle5();
        removeHomePanel();
        TweenMax.to('#article3', 0.5, {
            left: '0%',
            rotationX: '0deg',
            autoAlpha: 1
        });
        jQuery('#main-index-template-body').css('overflow-y', 'auto');
    });
    jQuery('.main-hobbies').click(function () {
        returnArticle1();
        returnArticle2();
        returnArticle3();
        returnArticle5();
        removeHomePanel();
        TweenMax.to('#article4', 0.5, {
            left: '0%',
            rotationY: '0deg',
            autoAlpha: 1
        });
        jQuery('#main-index-template-body').css('overflow-x', 'auto');
    });
    jQuery('.main-come-find-me').click(function () {
        returnArticle1();
        returnArticle2();
        returnArticle3();
        returnArticle4();
        removeHomePanel();
        TweenMax.to('#article5', 0.5, {
            top: '0%',
            autoAlpha: 1
        });
    });
    jQuery('.goHome').click(function () {
        returnArticle1();
        returnArticle2();
        returnArticle3();
        returnArticle4();
        returnArticle5();
        TweenMax.to('#article6', 0.5, {
            rotationX: '0deg',
            z: 0,
            autoAlpha: 1
        });
    });

    // end of menu navigation 
    // animations in the skills area ------------------------------------------------------------

    var htmlTL = new TimelineMax({
            delay: 0.5,
            repeat: -1,
            repeatDelay: 5
        })
        .staggerTo('#htmlSkills span:nth-child(-n+14)', 0.05, {
            y: -5,
            boxShadow: ' 2px 2px 5px 0px rgba(0,0,0,0.75)'
        }, 0.05, "bounce1")
        .staggerTo('#htmlSkills span:nth-child(-n+14)', 0.05, {
            y: 0,
            boxShadow: 'none',
            delay: 0.05
        }, 0.05, "bounce1");
    var cssTL = new TimelineMax({
            delay: 1,
            repeat: -1,
            repeatDelay: 3
        })
        .staggerTo('#cssSkills span:nth-child(-n+13)', 0.05, {
            y: -5,
            boxShadow: ' 2px 2px 5px 0px rgba(0,0,0,0.75)'
        }, 0.05, "bounce1")
        .staggerTo('#cssSkills span:nth-child(-n+13)', 0.05, {
            y: 0,
            boxShadow: 'none',
            delay: 0.05
        }, 0.05, "bounce1");
    var jsTL = new TimelineMax({
            repeat: -1,
            repeatDelay: 4
        })
        .staggerTo('#jsSkills span:nth-child(-n+11)', 0.05, {
            y: -5,
            boxShadow: ' 2px 2px 5px 0px rgba(0,0,0,0.75)'
        }, 0.05, "bounce1")
        .staggerTo('#jsSkills span:nth-child(-n+11)', 0.05, {
            y: 0,
            boxShadow: 'none',
            delay: 0.05
        }, 0.05, "bounce1");
    var phpTL = new TimelineMax({
            delay: 2,
            repeat: -1,
            repeatDelay: 1
        })
        .staggerTo('#phpSkills span:nth-child(-n+10)', 0.05, {
            y: -5,
            boxShadow: ' 2px 2px 5px 0px rgba(0,0,0,0.75)'
        }, 0.05, "bounce1")
        .staggerTo('#phpSkills span:nth-child(-n+10)', 0.05, {
            y: 0,
            boxShadow: 'none',
            delay: 0.05
        }, 0.05, "bounce1");
    var sqlTL = new TimelineMax({
            delay: 0.5,
            repeat: -1,
            repeatDelay: 5
        })
        .staggerTo('#sqlSkills span:nth-child(-n+9)', 0.05, {
            y: -5,
            boxShadow: ' 2px 2px 5px 0px rgba(0,0,0,0.75)'
        }, 0.05, "bounce1")
        .staggerTo('#sqlSkills span:nth-child(-n+9)', 0.05, {
            y: 0,
            boxShadow: 'none',
            delay: 0.05
        }, 0.05, "bounce1");
    var jqueryTL = new TimelineMax({
            delay: 0.5,
            repeat: -1,
            repeatDelay: 5
        })
        .staggerTo('#jquerySkills span:nth-child(-n+12)', 0.05, {
            y: -5,
            boxShadow: ' 2px 2px 5px 0px rgba(0,0,0,0.75)'
        }, 0.05, "bounce1")
        .staggerTo('#jquerySkills span:nth-child(-n+12)', 0.05, {
            y: 0,
            boxShadow: 'none',
            delay: 0.05
        }, 0.05, "bounce1");
    var gsapTL = new TimelineMax({
            delay: 0.5,
            repeat: -1,
            repeatDelay: 5
        })
        .staggerTo('#gsapSkills span:nth-child(-n+8)', 0.05, {
            y: -5,
            boxShadow: ' 2px 2px 5px 0px rgba(0,0,0,0.75)'
        }, 0.05, "bounce1")
        .staggerTo('#gsapSkills span:nth-child(-n+8)', 0.05, {
            y: 0,
            boxShadow: 'none',
            delay: 0.05
        }, 0.05, "bounce1");
    var bootstrapTL = new TimelineMax({
            delay: 0.5,
            repeat: -1,
            repeatDelay: 5
        })
        .staggerTo('#bootstrapSkills span', 0.05, {
            y: -5,
            boxShadow: ' 2px 2px 5px 0px rgba(0,0,0,0.75)'
        }, 0.05, "bounce1")
        .staggerTo('#bootstrapSkills span', 0.05, {
            y: 0,
            boxShadow: 'none',
            delay: 0.05
        }, 0.05, "bounce1");
    var mongoTL = new TimelineMax({
            delay: 0.5,
            repeat: -1,
            repeatDelay: 5
        })
        .staggerTo('#mongoSkills span:nth-child(-n+7)', 0.05, {
            y: -5,
            boxShadow: ' 2px 2px 5px 0px rgba(0,0,0,0.75)'
        }, 0.05, "bounce1")
        .staggerTo('#mongoSkills span:nth-child(-n+7)', 0.05, {
            y: 0,
            boxShadow: 'none',
            delay: 0.05
        }, 0.05, "bounce1");
    var gimpTL = new TimelineMax({
            delay: 0.7,
            repeat: -1,
            repeatDelay: 2
        })
        .staggerTo('#gimpSkills span:nth-child(-n+9)', 0.05, {
            y: -5,
            boxShadow: ' 2px 2px 5px 0px rgba(0,0,0,0.75)'
        }, 0.05, "bounce1")
        .staggerTo('#gimpSkills span:nth-child(-n+9)', 0.05, {
            y: 0,
            boxShadow: 'none',
            delay: 0.05
        }, 0.05, "bounce1");
    var illustratorTL = new TimelineMax({
            delay: 0.5,
            repeat: -1,
            repeatDelay: 2
        })
        .staggerTo('#illustratorSkills span:nth-child(-n+8)', 0.05, {
            y: -5,
            boxShadow: ' 2px 2px 5px 0px rgba(0,0,0,0.75)'
        }, 0.05, "bounce1")
        .staggerTo('#illustratorSkills span:nth-child(-n+8)', 0.05, {
            y: 0,
            boxShadow: 'none',
            delay: 0.05
        }, 0.05, "bounce1");
    var inkscapeTL = new TimelineMax({
            delay: 0.1,
            repeat: -1,
            repeatDelay: 4
        })
        .staggerTo('#inkscapeSkills span:nth-child(-n+7)', 0.05, {
            y: -5,
            boxShadow: ' 2px 2px 5px 0px rgba(0,0,0,0.75)'
        }, 0.05, "bounce1")
        .staggerTo('#inkscapeSkills span:nth-child(-n+7)', 0.05, {
            y: 0,
            boxShadow: 'none',
            delay: 0.05
        }, 0.05, "bounce1");


});

function makeParticles() {
    var twitterTimeline = new TimelineMax();
    var linkedinTimeline = new TimelineMax();
    var gradumTimeline = new TimelineMax();
    var enacTimeline = new TimelineMax();
   
    Math.randMinMax = function (t, n, a) {
        var r = t + Math.random() * (n - t)
        return a && (r = Math.round(r)), r
    }
    var w = window.innerWidth,
        h = window.innerHeight,
        numberOfStars = 10,
        PosX = 0,
        PosY = 0;
    for (i = 0; i < numberOfStars; i++) {
        twitterStar = jQuery('<div class="twitterBackground" />'),
            PosX = Math.floor(Math.random() * w);
        PosY = -500;
        var size = Math.floor(Math.random() * 30);
        jQuery('#article5').append(twitterStar);
        TweenLite.set(twitterStar, {
            x: PosX,
            y: PosY - (size * 5),
            width: size,
            height: size
        })
        twitterTimeline.to(twitterStar, Math.randMinMax(5, 7), {
                x: PosX,
                y: h + (size * 2),
                opacity: 1,
                repeat: -1,
                repeatDelay: Math.randMinMax(0, 1),
                ease: Linear.easeNone
            },
            Math.randMinMax(0, 4));
    }
    Math.randMinMax2 = function (t2, n2, a2) {
        var r2 = t2 + Math.random() * (n2 - t2)
        return a2 && (r2 = Math.round(r2)), r2
    }
    var w2 = window.innerWidth,
        h2 = window.innerHeight,
        numberOfStars2 = 10,
        PosX2 = 0,
        PosY2 = 0;
    for (i2 = 0; i2 < numberOfStars2; i2++) {
        linkedinStar = jQuery('<div class="linkedinBackground" />'),
            PosX2 = Math.floor(Math.random() * w2);
        PosY2 = -500;
        var size2 = Math.floor(Math.random() * 30);
        jQuery('#article5').append(linkedinStar);
        TweenLite.set(linkedinStar, {
            x: PosX2,
            y: PosY2 - (size2 * 5),
            width: size2,
            height: size2
        })
        linkedinTimeline.to(linkedinStar, Math.randMinMax2(5, 7), {
                x: PosX2,
                y: h2 + (size2 * 2),
                opacity: 1,
                repeat: -1,
                repeatDelay: Math.randMinMax2(0, 1),
                ease: Linear.easeNone
            },
            Math.randMinMax2(0, 4));
    }
    Math.randMinMax3 = function (t3, n3, a3) {
        var r3 = t3 + Math.random() * (n3 - t3)
        return a3 && (r3 = Math.round(r3)), r3
    }
    var w3 = window.innerWidth,
        h3 = window.innerHeight,
        numberOfStars3 = 10,
        PosX3 = 0,
        PosY3 = 0;
    for (i3 = 0; i3 < numberOfStars3; i3++) {
        gradumStar = jQuery('<div class="gradumBackground" />'),
            PosX3 = Math.floor(Math.random() * w3);
        PosY3 = -500;
        var size3 = Math.floor(Math.random() * 30);
        jQuery('#article5').append(gradumStar);
        TweenLite.set(gradumStar, {
            x: PosX3,
            y: PosY3 - (size3 * 5),
            width: size3,
            height: size3
        })
        gradumTimeline.to(gradumStar, Math.randMinMax3(5, 7), {
                x: PosX3,
                y: h3 + (size3 * 2),
                opacity: 1,
                repeat: -1,
                repeatDelay: Math.randMinMax3(0, 1),
                ease: Linear.easeNone
            },
            Math.randMinMax3(0, 4));
    }
    Math.randMinMax4 = function (t4, n4, a4) {
        var r4 = t4 + Math.random() * (n4 - t4)
        return a4 && (r4 = Math.round(r4)), r4
    }
    var w4 = window.innerWidth,
        h4 = window.innerHeight,
        numberOfStars3 = 10,
        PosX4 = 0,
        PosY4 = 0;
    for (i4 = 0; i4 < numberOfStars3; i4++) {
        enacstar = jQuery('<div class="enacBackground" />'),
            PosX4 = Math.floor(Math.random() * w4);
        PosY4 = -500;
        var size4 = Math.floor(Math.random() * 30);
        jQuery('#article5').append(enacstar);
        TweenLite.set(enacstar, {
            x: PosX4,
            y: PosY4 - (size4 * 5),
            width: size4,
            height: size4
        })
        gradumTimeline.to(enacstar, Math.randMinMax4(5, 7), {
                x: PosX4,
                y: h4 + (size4 * 2),
                opacity: 1,
                repeat: -1,
                repeatDelay: Math.randMinMax4(0, 1),
                ease: Linear.easeNone
            },
            Math.randMinMax4(0, 4));
    }


}
makeParticles();
jQuery(window).resize(articleHeight);