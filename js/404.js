(function() {
  "use strict";

  var _404_4 = document.getElementById("_404_4");
  var _404_40 = document.getElementById("_404_40");
  var _404_404 = document.getElementById("_404_404");

  var tl_4 = animate4(_404_4);
  var tl_40 = animate0(_404_40);
  var tl_404 = animate4(_404_404);

  var tl = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:3});
  tl.add(tl_4, 0);
  tl.add(tl_40, "-=1.5");
  tl.add(tl_404, "-=1.5");

  function animate4(el) {
    var top4 = el.getElementsByClassName("_4_top")[0];
    var hz4 = el.getElementsByClassName("_4_hz")[0];
    var slant4 = el.getElementsByClassName("_4_slant")[0];
    var tl = new TimelineMax();
    TweenLite.defaultEase = Power2.easeInOut;
    tl.fromTo(top4, 1, {yPercent: 100}, {yPercent: 0}, 0);
    tl.fromTo(hz4, 1, {yPercent: 100, scaleX: 0.5, transformOrigin: "right center"}, {yPercent: 0, scaleX: 0.5, transformOrigin: "right center"}, 0);
    tl.fromTo(hz4, 1, {scaleX: 0.5, transformOrigin: "right center"}, {scaleX: 1, transformOrigin: "right center"}, 0.8);
    tl.fromTo(slant4, 0.6, {scale: 0, transformOrigin: "right bottom"}, {scale: 1, transformOrigin: "right bottom"}, 1.2);
    return tl
  }

  function animate0(el) {
    var circle0 = el.getElementsByClassName("_0_circle")[0];
    var highlight0 = el.getElementsByClassName("_0_hightlight")[0];
    var tl = new TimelineMax();
    TweenLite.defaultEase = Power2.easeInOut;
    tl.fromTo(circle0, 1.5, {scale: 0.5, transformOrigin: "right bottom"}, {scale: 1, transformOrigin: "right bottom"}, 0);
    tl.fromTo(highlight0, 1, {scale: 0, transformOrigin: "right bottom"}, {scale: 1, transformOrigin: "right bottom"}, 1);
    return tl
  }

})();
