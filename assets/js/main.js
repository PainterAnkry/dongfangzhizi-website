/* 东方栀子同人音源 · 站点脚本 */
(function () {
  "use strict";

  /* ---------- 导航：滚动加深 + 移动端开合 ---------- */
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  function onScroll() {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.classList.remove("open");
      });
    });
  }

  /* ---------- 英雄轮播 ---------- */
  var hero = document.querySelector(".hero");
  if (hero) {
    var slides = Array.prototype.slice.call(hero.querySelectorAll(".hero-slide"));
    var dots = Array.prototype.slice.call(document.querySelectorAll(".hero-dots button"));
    var caption = document.querySelector(".hero-caption");
    var idx = 0, timer = null;

    function show(i) {
      idx = (i + slides.length) % slides.length;
      slides.forEach(function (s, k) { s.classList.toggle("on", k === idx); });
      dots.forEach(function (d, k) { d.classList.toggle("on", k === idx); });
      if (caption) {
        var cur = slides[idx];
        caption.textContent = cur.getAttribute("data-caption") || "";
        var href = cur.getAttribute("href");
        if (href) caption.setAttribute("href", href);
      }
    }
    function play() { stop(); timer = setInterval(function () { show(idx + 1); }, 5200); }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }

    dots.forEach(function (d, k) {
      d.addEventListener("click", function () { show(k); play(); });
    });
    hero.addEventListener("mouseenter", stop);
    hero.addEventListener("mouseleave", play);

    /* 触摸滑动 */
    var sx = null;
    hero.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; }, { passive: true });
    hero.addEventListener("touchend", function (e) {
      if (sx === null) return;
      var dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 48) show(idx + (dx < 0 ? 1 : -1));
      sx = null; play();
    }, { passive: true });

    show(0); play();
  }

  /* ---------- 下载页选项卡 ---------- */
  var tabBtns = document.querySelectorAll(".tab-btn");
  var panels = document.querySelectorAll(".tab-panel");
  tabBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var key = btn.getAttribute("data-tab");
      tabBtns.forEach(function (b) { b.classList.toggle("on", b === btn); });
      panels.forEach(function (p) { p.classList.toggle("on", p.id === "panel-" + key); });
    });
  });

  /* ---------- 提取码复制 ---------- */
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy");
      function done() {
        btn.classList.add("done");
        btn.textContent = "已复制 ✓";
        setTimeout(function () { btn.classList.remove("done"); btn.textContent = "复制"; }, 1800);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, done);
      } else {
        var ta = document.createElement("textarea");
        ta.value = text; document.body.appendChild(ta);
        ta.select(); try { document.execCommand("copy"); } catch (e) {}
        document.body.removeChild(ta); done();
      }
    });
  });

  /* ---------- 滚动显现 ---------- */
  var io = null;
  if ("IntersectionObserver" in window) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- 花瓣生成 ---------- */
  var petalHost = document.querySelector("[data-petals]");
  if (petalHost) {
    var n = window.innerWidth < 720 ? 8 : 14;
    for (var i = 0; i < n; i++) {
      var p = document.createElement("span");
      p.className = "petal";
      p.style.left = Math.random() * 100 + "vw";
      p.style.animationDuration = 9 + Math.random() * 10 + "s";
      p.style.animationDelay = -Math.random() * 14 + "s";
      var s = 8 + Math.random() * 10;
      p.style.width = s + "px"; p.style.height = s + "px";
      petalHost.appendChild(p);
    }
  }
})();
