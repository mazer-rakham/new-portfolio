var bt = jQuery('.button');
var turbVal = { val: 0.000001 };
var turb = jQuery('#filter feTurbulence');
var btTl = new TimelineMax({
    paused: true, onUpdate: function () {
        turb.setAttribute('baseFrequency', '0 ' + turbVal.val);
    }
});

btTl.to(turbVal, 0.2, { val: 0.3 });
btTl.to(turbVal, 0.2, { val: 0.000001 });

bt.addEventListener('click', function () {
    btTl.restart();
});