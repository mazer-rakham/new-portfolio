function setXcoords() {
    TweenMax.set("#skull-panel", {
        x: jQuery(window).width()
    });
}
setXcoords();
var smController = new ScrollMagic.Controller();

function createSkullSCene() {
    return new ScrollMagic.Scene({
            triggerElement: "#skull-panel",
            duration: 600,
            triggerHook: 0
        })
        .setPin('#skull-panel')
        .setTween('#skull-panel', 1, {
            x: 0
        })
        .addIndicators()
        .addTo(smController);
}
var skullScene = createSkullSCene();
jQuery(window).resize(function () {
    setXcoords();
    skullScene.destroy(true);
    skullScene = createSkullSCene();
});