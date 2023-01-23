$('.phone').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});






!(function (e, t) {
  var i = t.documentElement;
  function n() {
    var t = i.clientWidth || 320,
      n = (t > 720 ? 720 : t < 320 ? 320 : t) / 22.5;
    (i.style.fontSize = n + "px"), (e.rootFontSize = n);
  }
  if (
    ((e.oriRootFontSize = 48),
    e.addEventListener(
      "resize",
      function () {
        n();
      },
      !1
    ),
    e.addEventListener(
      "pageshow",
      function (e) {
        e.persisted && n();
      },
      !1
    ),
    n(),
    e.devicePixelRatio && e.devicePixelRatio >= 2)
  ) {
    var o = t.createElement("div"),
      d = t.createElement("body");
    (o.style.border = "0.5px solid transparent"),
      d.appendChild(o),
      i.appendChild(d),
      1 === o.offsetHeight && i.classList.add("hairlines"),
      i.removeChild(d);
  }
})(window, document);
