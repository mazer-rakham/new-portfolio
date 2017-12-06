// function setXcoords() {
//     TweenMax.set("#skull-panel", {
//         x: jQuery(window).width()
//     });
// }
// setXcoords();
var smController = new ScrollMagic.Controller();

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
    articleHeight();

    jQuery('#main-hacker').click(function () {
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
    jQuery('#main-about').click(function () {
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
    jQuery('#main-skills').click(function () {
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
    });
    jQuery('#main-hobbies').click(function () {
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
    });
    jQuery('#main-come-find-me').click(function () {
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
    jQuery('#goHome').click(function () {
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

});
jQuery(window).resize(articleHeight);