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
//             .to('.hobby52',1,{x:200,opacity:0},'hplay52');
// var hobbiesScene = new ScrollMagic.Scene({
//     triggerElement:'#hobbies-trigger'
// })
// .setTween(hobbyTimeline)
// .addIndicators()
// .addTo(smController);