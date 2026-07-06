(function () {
  var header = document.querySelector('.site-header');
  var navToggle = document.querySelector('.nav-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  var navOverlay = document.querySelector('.nav-overlay');

  function setNavOpen(open) {
    navToggle.classList.toggle('open', open);
    mobileNav.classList.toggle('open', open);
    navOverlay.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  navToggle.addEventListener('click', function () {
    setNavOpen(!mobileNav.classList.contains('open'));
  });
  navOverlay.addEventListener('click', function () { setNavOpen(false); });
  document.querySelectorAll('.mobile-nav a').forEach(function (a) {
    a.addEventListener('click', function () { setNavOpen(false); });
  });

  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 30);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Before/After Image Slider Control
  var sliderRange = document.getElementById('before-after-range');
  var afterImg = document.querySelector('.after-img');
  var sliderHandle = document.querySelector('.slider-handle');

  if (sliderRange && afterImg && sliderHandle) {
    sliderRange.addEventListener('input', function (e) {
      var value = e.target.value;
      afterImg.style.clipPath = 'inset(0 ' + (100 - value) + '% 0 0)';
      afterImg.style.webkitClipPath = 'inset(0 ' + (100 - value) + '% 0 0)';
      sliderHandle.style.left = value + '%';
    });
  }
})();
