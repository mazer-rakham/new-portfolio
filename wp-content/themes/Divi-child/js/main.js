// function setXcoords() {
//     TweenMax.set("#skull-panel", {
//         x: jQuery(window).width()
//     });
// }
// setXcoords();
var horizontalController = new ScrollMagic.Controller({vertical:false});

// function createSkullSCene() {
//     return new ScrollMagic.Scene({
//             triggerElement: "#skull-panel",
//             duration: 600,
//             triggerHook: 0
//         })
//         .setPin('#skull-panel')
//         .setTween('#skull-panel', 1, {
//             x: 0
//         })
//         .addIndicators()
//         .addTo(smController);
// }
// var skullScene = createSkullSCene();
// jQuery(window).resize(function () {
//     setXcoords();
//     skullScene.destroy(true);
//     skullScene = createSkullSCene();
// });
// var jeepVideo = jQuery('.hobby3 video');
// jeepVideo[0].muted = true;
// jeepVideo.removeAttr( 'controls' );
// function playJeepVideo(){
//     jeepVideo[0].play();
// }
// TweenMax.set('#skull-panel',{minHeight:'600px'});
// TweenMax.set('.hobby1, .hobby2, .hobby3, .hobby4, .hobby5',{x:-200, opacity:0, position:'absolute'});
// TweenMax.set('.hobby12, .hobby22, .hobby32, .hobby42, .hobby52',{x:700,opacity:0,position:'absolute'});
// TweenLite.defaultEase = Linear.easeNone;
// var hobbyTimeline = new TimelineMax()
//             .to('.hobby1',1,{x:0, opacity:1},'hplay1')
//             .to('.hobby1',1,{x:200,opacity:0},'hplay12')
//             .to('.hobby12',1,{x:500, opacity:1},'hplay1')
//             .to('.hobby12',1,{x:200,opacity:0},'hplay12')
//             .to('.hobby2',1,{x:0, opacity:1},'hplay2')
//             .to('.hobby2',1,{x:200,opacity:0},'hplay22')
//             .to('.hobby22',1,{x:500, opacity:1},'hplay2')
//             .to('.hobby22',1,{x:200,opacity:0},'hplay22')
//             .add(playJeepVideo)
//             .to('.hobby3',1,{x:0, opacity:1},'hplay3')
//             .to('.hobby3',1,{x:200,opacity:0},'hplay32')
//             .to('.hobby32',1,{x:500, opacity:1},'hplay3')
//             .to('.hobby32',1,{x:200,opacity:0},'hplay32')
//             .to('.hobby4',1,{x:0, opacity:1},'hplay4')
//             .to('.hobby4',1,{x:200,opacity:0},'hplay42')
//             .to('.hobby42',1,{x:500, opacity:1},'hplay4')
//             .to('.hobby42',1,{x:200,opacity:0},'hplay42')
//             .to('.hobby5',1,{x:0, opacity:1},'hplay5')
//             .to('.hobby5',1,{x:200,opacity:0},'hplay52')
//             .to('.hobby52',1,{x:500, opacity:1},'hplay5')
//             .to('.hobby52',1,{x:200,opacity:0},'hplay52')
//             .to('#work-all-the-time',1,{opacity:1})
// var hobbiesScene = new ScrollMagic.Scene({
//     triggerElement:'#hobbies-trigger',
//     reverse: false
// })
// .setTween(hobbyTimeline)

// .addTo(smController);
var hobbyFunTime = new ScrollMagic.Scene({
    triggerElement: '#hobby-scene-wrapper',
    triggerHook:0
})
.setTween('#hobby-scene-wrapper',1,{y:-100})
.addIndicators()
.addTo(horizontalController);


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
    jQuery('#main-index-template-body').css('overflow-y','hidden');
    jQuery('#main-index-template-body').css('overflow-x','hidden');
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
    jQuery('#main-index-template-body').css('overflow-y','hidden');
    jQuery('#main-index-template-body').css('overflow-x','hidden');
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
    jQuery('#main-index-template-body').css('overflow-y','hidden');
    jQuery('#main-index-template-body').css('overflow-x','hidden');
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
    jQuery('#main-index-template-body').css('overflow-y','hidden');
    jQuery('#main-index-template-body').css('overflow-x','hidden');
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
    jQuery('#main-index-template-body').css('overflow-y','hidden');
    jQuery('#main-index-template-body').css('overflow-x','hidden');
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

    // the recent posts slideshow -------------------------------------------------
    jQuery(function () {

        var $slides = jQuery(".recent-posts-wrapper-main");
        var currentSlide = 0;
        var stayTime = 4;
        var slideTime = 1.5;
        var numberOfSlides = $slides.length - 1;

        TweenLite.set($slides.filter(":gt(0)"), {
            autoAlpha:0
        });
        TweenLite.delayedCall(stayTime, nextSlide);

        function nextSlide() {
            TweenLite.to($slides.eq(currentSlide), slideTime, {
                autoAlpha:0
            });
            currentSlide = ++currentSlide % $slides.length;
            TweenLite.to($slides.eq(currentSlide), slideTime, {
                autoAlpha:1
            });
            TweenLite.delayedCall(stayTime, nextSlide);
        }

        jQuery('#next-blog-post').click(function () {
           
            TweenLite.to($slides.eq(currentSlide), slideTime, {
                autoAlpha:0
            });
            currentSlide = ++currentSlide % $slides.length;
            TweenLite.to($slides.eq(currentSlide), slideTime, {
                autoAlpha:1
            });
        });

        jQuery('#previous-blog-post').click(function () {
            
            TweenLite.to($slides.eq(currentSlide), slideTime, {
                autoAlpha:0
            });
            currentSlide = --currentSlide % $slides.length;
            TweenLite.to($slides.eq(currentSlide), slideTime, {
                autoAlpha:1
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
        jQuery('#main-index-template-body').css('overflow-y','auto');
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
        jQuery('#main-index-template-body').css('overflow-x','auto');
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

    var htmlTL = new TimelineMax({delay:0.5, repeat: -1, repeatDelay:5 })
                .staggerTo('#htmlSkills span:nth-child(-n+14)',0.05,{y:-5,boxShadow:' 2px 2px 5px 0px rgba(0,0,0,0.75)'},0.05,"bounce1")
                .staggerTo('#htmlSkills span:nth-child(-n+14)',0.05,{y:0,boxShadow:'none', delay:0.05},0.05,"bounce1");
    var cssTL = new TimelineMax({delay:1, repeat: -1, repeatDelay:3 })
                .staggerTo('#cssSkills span:nth-child(-n+13)',0.05,{y:-5,boxShadow:' 2px 2px 5px 0px rgba(0,0,0,0.75)'},0.05,"bounce1")
                .staggerTo('#cssSkills span:nth-child(-n+13)',0.05,{y:0,boxShadow:'none', delay:0.05},0.05,"bounce1");
    var jsTL = new TimelineMax({ repeat: -1, repeatDelay:4 })
                .staggerTo('#jsSkills span:nth-child(-n+11)',0.05,{y:-5,boxShadow:' 2px 2px 5px 0px rgba(0,0,0,0.75)'},0.05,"bounce1")
                .staggerTo('#jsSkills span:nth-child(-n+11)',0.05,{y:0,boxShadow:'none', delay:0.05},0.05,"bounce1");
    var phpTL = new TimelineMax({delay:2, repeat: -1, repeatDelay:1 })
                .staggerTo('#phpSkills span:nth-child(-n+10)',0.05,{y:-5,boxShadow:' 2px 2px 5px 0px rgba(0,0,0,0.75)'},0.05,"bounce1")
                .staggerTo('#phpSkills span:nth-child(-n+10)',0.05,{y:0,boxShadow:'none', delay:0.05},0.05,"bounce1");
    var sqlTL = new TimelineMax({delay:0.5, repeat: -1, repeatDelay:5 })
                .staggerTo('#sqlSkills span:nth-child(-n+9)',0.05,{y:-5,boxShadow:' 2px 2px 5px 0px rgba(0,0,0,0.75)'},0.05,"bounce1")
                .staggerTo('#sqlSkills span:nth-child(-n+9)',0.05,{y:0,boxShadow:'none', delay:0.05},0.05,"bounce1");
    var jqueryTL = new TimelineMax({delay:0.5, repeat: -1, repeatDelay:5 })
                .staggerTo('#jquerySkills span:nth-child(-n+12)',0.05,{y:-5,boxShadow:' 2px 2px 5px 0px rgba(0,0,0,0.75)'},0.05,"bounce1")
                .staggerTo('#jquerySkills span:nth-child(-n+12)',0.05,{y:0,boxShadow:'none', delay:0.05},0.05,"bounce1");
    var gsapTL = new TimelineMax({delay:0.5, repeat: -1, repeatDelay:5 })
                .staggerTo('#gsapSkills span:nth-child(-n+8)',0.05,{y:-5,boxShadow:' 2px 2px 5px 0px rgba(0,0,0,0.75)'},0.05,"bounce1")
                .staggerTo('#gsapSkills span:nth-child(-n+8)',0.05,{y:0,boxShadow:'none', delay:0.05},0.05,"bounce1");
    var bootstrapTL = new TimelineMax({delay:0.5, repeat: -1, repeatDelay:5 })
                .staggerTo('#bootstrapSkills span',0.05,{y:-5,boxShadow:' 2px 2px 5px 0px rgba(0,0,0,0.75)'},0.05,"bounce1")
                .staggerTo('#bootstrapSkills span',0.05,{y:0,boxShadow:'none', delay:0.05},0.05,"bounce1");
    var mongoTL = new TimelineMax({delay:0.5, repeat: -1, repeatDelay:5 })
                .staggerTo('#mongoSkills span:nth-child(-n+7)',0.05,{y:-5,boxShadow:' 2px 2px 5px 0px rgba(0,0,0,0.75)'},0.05,"bounce1")
                .staggerTo('#mongoSkills span:nth-child(-n+7)',0.05,{y:0,boxShadow:'none', delay:0.05},0.05,"bounce1");
    var gimpTL = new TimelineMax({delay:0.7, repeat: -1, repeatDelay:2 })
                .staggerTo('#gimpSkills span:nth-child(-n+9)',0.05,{y:-5,boxShadow:' 2px 2px 5px 0px rgba(0,0,0,0.75)'},0.05,"bounce1")
                .staggerTo('#gimpSkills span:nth-child(-n+9)',0.05,{y:0,boxShadow:'none', delay:0.05},0.05,"bounce1");
    var illustratorTL = new TimelineMax({delay:0.5, repeat: -1, repeatDelay:2 })
                .staggerTo('#illustratorSkills span:nth-child(-n+8)',0.05,{y:-5,boxShadow:' 2px 2px 5px 0px rgba(0,0,0,0.75)'},0.05,"bounce1")
                .staggerTo('#illustratorSkills span:nth-child(-n+8)',0.05,{y:0,boxShadow:'none', delay:0.05},0.05,"bounce1");
    var inkscapeTL = new TimelineMax({delay:0.1, repeat: -1, repeatDelay:4 })
                .staggerTo('#inkscapeSkills span:nth-child(-n+7)',0.05,{y:-5,boxShadow:' 2px 2px 5px 0px rgba(0,0,0,0.75)'},0.05,"bounce1")
                .staggerTo('#inkscapeSkills span:nth-child(-n+7)',0.05,{y:0,boxShadow:'none', delay:0.05},0.05,"bounce1");

   jQuery('#article4').scroll(function(){
        alert('article4 scrolled');
   });

});
jQuery(window).resize(articleHeight);