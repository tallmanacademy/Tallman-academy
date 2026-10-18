/* Tallman Academy: small progressive-enhancement script.
   1) Mobile menu toggle  2) Testimonial carousel  3) "Read more" dialog */
(function () {
  // 1. Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // 2. Testimonial carousel (loops; 3 cards visible on desktop, 1 + peek on mobile)
  var carousel = document.querySelector('.carousel');
  if (carousel) {
    var track = carousel.querySelector('.carousel-track');
    var cards = Array.prototype.slice.call(track.children);
    var dots = Array.prototype.slice.call(carousel.parentElement.querySelectorAll('.carousel-dots button'));
    var index = 0;
    function step() {
      var gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 0;
      return cards[0].getBoundingClientRect().width + gap;
    }
    function go(i) {
      index = (i + cards.length) % cards.length;
      track.style.transform = 'translateX(' + (-index * step()) + 'px)';
      dots.forEach(function (d, n) { d.setAttribute('aria-current', n === index ? 'true' : 'false'); });
    }
    carousel.querySelector('.carousel-arrow--prev').addEventListener('click', function () { go(index - 1); });
    carousel.querySelector('.carousel-arrow--next').addEventListener('click', function () { go(index + 1); });
    dots.forEach(function (d, n) { d.addEventListener('click', function () { go(n); }); });
    // swipe on touch screens
    var x0 = null;
    track.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
      x0 = null;
    });
    window.addEventListener('resize', function () { go(index); });
  }

  // 3. Testimonial "Read more" dialog
  var dialog = document.querySelector('.ts-dialog');
  if (dialog) {
    document.querySelectorAll('.ts-more').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var card = btn.closest('.ts-card');
        dialog.querySelector('h3').textContent = card.querySelector('.ts-name').textContent;
        dialog.querySelector('p').textContent = card.getAttribute('data-quote');
        dialog.showModal();
      });
    });
    dialog.querySelector('.close').addEventListener('click', function () { dialog.close(); });
    dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });
  }
})();
