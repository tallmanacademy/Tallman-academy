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

  // 2. Testimonial carousel. Copies of the cards sit on both sides so the
  // row can slide forward forever. After the last card, the first cards
  // come in from the right, and the position wraps with no rewind.
  var carousel = document.querySelector('.carousel');
  if (carousel) {
    var track = carousel.querySelector('.carousel-track');
    var originals = Array.prototype.slice.call(track.children);
    var count = originals.length;
    var dots = Array.prototype.slice.call(carousel.parentElement.querySelectorAll('.carousel-dots button'));
    var copies = 2;
    var middle = copies * count;
    var offset = middle;
    var target = middle;
    var paused = false;
    var lastTick = 0;
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function cloneCard(card) {
      var copy = card.cloneNode(true);
      copy.classList.add('ts-clone');
      copy.setAttribute('aria-hidden', 'true');
      Array.prototype.forEach.call(copy.querySelectorAll('button'), function (btn) { btn.tabIndex = -1; });
      return copy;
    }
    function addSet(before) {
      var frag = document.createDocumentFragment();
      originals.forEach(function (card) { frag.appendChild(cloneCard(card)); });
      if (before) track.insertBefore(frag, track.firstChild);
      else track.appendChild(frag);
    }
    addSet(true);
    addSet(true);
    addSet(false);
    addSet(false);

    function step() {
      var gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 0;
      return originals[0].getBoundingClientRect().width + gap;
    }
    function wrap() {
      while (target >= middle + count) {
        target -= count;
        offset -= count;
      }
      while (target < middle) {
        target += count;
        offset += count;
      }
    }
    function paint() {
      wrap();
      track.style.transition = 'none';
      track.style.transform = 'translateX(' + (-offset * step()) + 'px)';
      var logical = ((Math.round(target - middle) % count) + count) % count;
      dots.forEach(function (d, n) { d.setAttribute('aria-current', n === logical ? 'true' : 'false'); });
    }
    function shift(delta) {
      if (!delta) return;
      target += delta;
      lastTick = performance.now();
      if (reduceMotion) {
        offset = target;
        paint();
      }
    }
    function goTo(n) {
      var logical = ((Math.round(target - middle) % count) + count) % count;
      var delta = n - logical;
      if (delta > count / 2) delta -= count;
      if (delta < -count / 2) delta += count;
      shift(delta);
    }

    carousel.classList.add('is-ready');
    paint();

    carousel.querySelector('.carousel-arrow--prev').addEventListener('click', function () { shift(-1); });
    carousel.querySelector('.carousel-arrow--next').addEventListener('click', function () { shift(1); });
    dots.forEach(function (d, n) { d.addEventListener('click', function () { goTo(n); }); });
    var x0 = null;
    track.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) shift(dx < 0 ? 1 : -1);
      x0 = null;
    });

    carousel.addEventListener('mouseenter', function () { paused = true; });
    carousel.addEventListener('mouseleave', function () { paused = false; lastTick = performance.now(); });
    carousel.addEventListener('focusin', function () { paused = true; });
    carousel.addEventListener('focusout', function (e) {
      if (!carousel.contains(e.relatedTarget)) {
        paused = false;
        lastTick = performance.now();
      }
    });

    function frame(now) {
      if (!reduceMotion && !paused && !document.hidden && now - lastTick > 4500) {
        target += 1;
        lastTick = now;
      }
      var diff = target - offset;
      if (reduceMotion || Math.abs(diff) < 0.004) offset = target;
      else offset += diff * 0.18;
      paint();
      requestAnimationFrame(frame);
    }
    lastTick = performance.now();
    requestAnimationFrame(frame);
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
