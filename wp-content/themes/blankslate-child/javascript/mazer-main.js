jQuery(document).ready(function () {
    var turbVal = { val: 0.000001 };
    var turb = jQuery('#filter feTurbulence')[0];
    var btTl = new TimelineLite({
        paused: true, onUpdate: function () {
            turb.setAttribute('baseFrequency', '0 ' + turbVal.val);
        }
    });

    btTl.to(turbVal, 0.2, { val: 0.3 });
    btTl.to(turbVal, 0.2, { val: 0.000001 });

    setInterval(function () {
        btTl.restart();
    }, 2000);

    var turbVal2 = { val: 0.000001 };
    var turb2 = jQuery('#filter2 feTurbulence')[0];
    var btTl2 = new TimelineLite({
        paused: true, onUpdate: function () {
            turb2.setAttribute('baseFrequency', '0 ' + turbVal2.val);
        }
    });

    btTl2.to(turbVal2, 0.2, { val: 0.3 });
    btTl2.to(turbVal2, 0.2, { val: 0.000001 });

    setInterval(function () {
        btTl2.restart();
    }, 2500);
});