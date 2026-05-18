(function () {
  const socialLinks = [
    {
      href: "https://github.com/KyotoUolc/kyotouolc.github.io",
      label: "GitHub",
      icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.41-4.04-1.41-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.82 1.31 3.51 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 5.8c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"/></svg>`
    },
    {
      href: "https://x.com/ku_olc",
      label: "公式X",
      icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2.2h3.3l-7.2 8.2 8.4 11.4h-6.6l-5.2-6.9-6 6.9H2.3l7.7-8.8-8-10.8h6.8l4.7 6.3 5.4-6.3Zm-1.2 17.6h1.8L7.8 4.1H5.9l11.8 15.7Z"/></svg>`
    },
    {
      href: "https://www.instagram.com/kyoto.u_olc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      label: "公式Instagram",
      icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 2.2h8.4A5.6 5.6 0 0 1 21.8 7.8v8.4a5.6 5.6 0 0 1-5.6 5.6H7.8a5.6 5.6 0 0 1-5.6-5.6V7.8a5.6 5.6 0 0 1 5.6-5.6Zm8.4 17.6a3.6 3.6 0 0 0 3.6-3.6V7.8a3.6 3.6 0 0 0-3.6-3.6H7.8a3.6 3.6 0 0 0-3.6 3.6v8.4a3.6 3.6 0 0 0 3.6 3.6h8.4ZM12 7.3a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 7.4a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4Zm5-8.4a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"/></svg>`
    }
  ];

  function menuGroups(prefix) {
    return [
      {
        href: `${prefix}index.html`,
        text: "トップページ",
        children: [
          { href: `${prefix}pages/shinkan.html`, text: "新歓情報" },
          { href: `${prefix}pages/equipment.html`, text: "地図・備品" },
          { href: `${prefix}pages/club.html`, text: "クラブについて" },
          { href: `${prefix}pages/links.html`, text: "リンク集" }
        ]
      },
      {
        href: `${prefix}pages/shinkan.html`,
        text: "新歓情報",
        children: [
          { href: `${prefix}pages/shinkan-schedule.html`, text: "新歓日程" },
          { href: `${prefix}pages/orienteering.html`, text: "オリエンテーリングとは" },
          { href: `${prefix}pages/circle.html`, text: "サークル紹介" },
          { href: `${prefix}pages/activity.html`, text: "1年の活動" },
          { href: `${prefix}pages/appeal.html`, text: "オリエンテーリングの魅力" }
        ]
      },
      {
        href: `${prefix}pages/equipment.html`,
        text: "地図・備品",
        children: [
          { href: `${prefix}pages/equipment.html#rental`, text: "備品レンタル" },
          { href: `${prefix}pages/equipment.html#maps`, text: "地図販売" },
          { href: `${prefix}pages/equipment.html#unit`, text: "ユニット" },
          { href: `${prefix}pages/equipment.html#ecard`, text: "E-card" }
        ]
      },
      {
        href: `${prefix}pages/club.html`,
        text: "クラブについて",
        children: [
          { href: `${prefix}pages/history.html`, text: "概要" },
          { href: `${prefix}pages/kucomp.html`, text: "京大京女立命館大会" },
          { href: `${prefix}pages/box.html`, text: "BOX" }
        ]
      },
      { href: `${prefix}pages/links.html`, text: "リンク集" }
    ];
  }

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function menuMarkup(prefix) {
    return menuGroups(prefix).map(group => `
      <li>
        <a href="${esc(group.href)}">${esc(group.text)}</a>
        ${group.children ? `<ul class="menu-children">${group.children.map(child => `<li><a href="${esc(child.href)}">${esc(child.text)}</a></li>`).join("")}</ul>` : ""}
      </li>`).join("");
  }

  function socialIcons() {
    return socialLinks.map(item => `<li><a class="icon-circle" href="${esc(item.href)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(item.label)}">${item.icon}<span class="label">${esc(item.label)}</span></a></li>`).join("");
  }

  function header(prefix) {
    return `
      <header id="header">
        <a href="${prefix}index.html" class="logo"><strong>Kyoto Univ. OLC</strong><span>Orienteering Club</span></a>
        <nav><a href="#menu" data-open-menu>Menu</a></nav>
      </header>
      <nav id="menu" aria-hidden="true">
        <ul class="links">${menuMarkup(prefix)}</ul>
      </nav>`;
  }

  function footer(prefix) {
    return `
      <footer class="footer">
        <div class="inner footer-grid">
          <section><h3><a href="${prefix}index.html">トップページ</a></h3><ul><li><a href="${prefix}pages/shinkan.html">新歓情報</a></li><li><a href="${prefix}pages/equipment.html">地図・備品</a></li><li><a href="${prefix}pages/club.html">クラブについて</a></li><li><a href="${prefix}pages/links.html">リンク集</a></li></ul></section>
          <section><h3><a href="${prefix}pages/shinkan.html">新歓情報</a></h3><ul><li><a href="${prefix}pages/shinkan-schedule.html">新歓日程</a></li><li><a href="${prefix}pages/orienteering.html">オリエンテーリングとは</a></li><li><a href="${prefix}pages/circle.html">サークル紹介</a></li><li><a href="${prefix}pages/activity.html">1年の活動</a></li><li><a href="${prefix}pages/appeal.html">オリエンテーリングの魅力</a></li></ul></section>
          <section><h3><a href="${prefix}pages/equipment.html">地図・備品</a></h3><ul><li><a href="${prefix}pages/equipment.html#rental">備品レンタル</a></li><li><a href="${prefix}pages/equipment.html#maps">地図販売</a></li><li><a href="${prefix}pages/equipment.html#unit">ユニット</a></li><li><a href="${prefix}pages/equipment.html#ecard">E-card</a></li></ul></section>
          <section><h3><a href="${prefix}pages/club.html">クラブについて</a></h3><ul><li><a href="${prefix}pages/history.html">概要</a></li><li><a href="${prefix}pages/kucomp.html">京大京女立命館大会</a></li><li><a href="${prefix}pages/box.html">BOX</a></li></ul></section>
        </div>
        <div class="inner footer-bottom">
          <ul class="social-icons" aria-label="外部リンク">
            ${socialIcons()}
          </ul>
        </div>
      </footer>`;
  }

  function pageTopLink() {
    return `<div class="page-top"><a class="button page-top-button" href="#page-top" aria-label="ページ上部へ戻る">ページ上部へ戻る</a></div>`;
  }

  function paragraphList(text) {
    const paragraph = item => `<p>${item?.html || esc(item?.text || item)}</p>`;
    if (Array.isArray(text)) return text.map(paragraph).join("");
    return text ? paragraph(text) : "";
  }

  function block(block) {
    if (block.type === "lead") return `<p class="lead">${esc(block.text)}</p>`;
    if (block.type === "p") return `<p>${block.html || esc(block.text)}</p>`;
    if (block.type === "note") return `<div class="note">${block.html || esc(block.text)}</div>`;
    if (block.type === "h2") return `<h2>${esc(block.text)}</h2>`;
    if (block.type === "h3") return `<h3>${esc(block.text)}</h3>`;
    if (block.type === "h4") return `<h4>${esc(block.text)}</h4>`;
    if (block.type === "list") return `<ul>${block.items.map(item => `<li>${esc(item)}</li>`).join("")}</ul>`;
    if (block.type === "image") return `<figure class="figure ${block.wide ? "wide" : ""}"><img src="${esc(block.src)}" alt="${esc(block.alt || "")}" loading="lazy">${block.caption ? `<figcaption>${esc(block.caption)}</figcaption>` : ""}</figure>`;
    if (block.type === "media") return `
      <section class="media-row ${block.imagePosition === "left" ? "image-left" : ""}" ${block.id ? `id="${esc(block.id)}"` : ""}>
        <figure><img src="${esc(block.src)}" alt="${esc(block.alt || "")}" loading="lazy">${block.caption ? `<figcaption>${esc(block.caption)}</figcaption>` : ""}</figure>
        <div class="media-copy">${block.title ? `<h3>${esc(block.title)}</h3>` : ""}${paragraphList(block.text)}</div>
      </section>`;
    if (block.type === "gallery") return `<div class="gallery ${esc(block.variant || "")} ${block.compact ? "compact" : ""}">${block.items.map(item => `<figure><img src="${esc(item.src)}" alt="${esc(item.alt || "")}" loading="lazy">${item.caption ? `<figcaption>${esc(item.caption)}</figcaption>` : ""}</figure>`).join("")}</div>`;
    if (block.type === "cards") return `<div class="cards">${block.items.map(item => `<a class="card" href="${esc(item.href)}"><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p></a>`).join("")}</div>`;
    if (block.type === "links") return `<div class="link-grid">${block.items.map(item => `<a class="link-card" href="${esc(item.href)}"><h3>${esc(item.title)}</h3><p>${esc(item.text || item.href)}</p></a>`).join("")}</div>`;
    if (block.type === "contact") return `<div class="contact-panel"><span class="eyebrow">${esc(block.label)}</span><h3>${esc(block.title)}</h3><p>${esc(block.text)}</p><a class="button" href="${esc(block.href)}">${esc(block.linkText)}</a></div>`;
    if (block.type === "table") return `<div class="table-wrap"><table><thead><tr>${block.headers.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${block.rows.map(row => `<tr>${row.map(cell => `<td>${esc(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
    if (block.type === "events") return `<div class="cards">${block.items.map(event => `<section class="card"><h3>${esc(event.title)}</h3>${event.place ? `<p><strong>集合場所・時間:</strong> ${esc(event.place)}</p>` : ""}<p>${esc(event.body)}</p></section>`).join("")}</div>`;
    if (block.type === "maps") return `<div class="cards">${block.items.map(item => {
      const note = item.noteHtml || (item[2] || item.note ? esc(item[2] || item.note) : "");
      return `<section class="card" ${item.id ? `id="${esc(item.id)}"` : ""}><h3>${esc(item[0] || item.name)}</h3><p><strong>${esc(item[1] || item.price)}</strong></p>${note ? `<p>${note}</p>` : ""}</section>`;
    }).join("")}</div>`;
    return "";
  }

  function renderPage(page) {
    if (!page) return;
    document.title = `${page.title} | 京都大学オリエンテーリングクラブ`;
    const root = document.querySelector("[data-page]");
    root.innerHTML = `
      ${header("../")}
      <section id="page-top" class="banner compact" style="--banner-image:url('${esc(page.image || "")}')">
        <div class="inner">
          <header class="major"><h1>${esc(page.title)}</h1></header>
          <div class="content"><p>${esc(page.summary || "")}</p></div>
        </div>
      </section>
      <main id="main" class="page-body">
        <div class="inner">
          ${page.subnav ? `<nav class="subnav">${page.subnav.map(item => `<a href="${esc(item.href)}">${esc(item.text)}</a>`).join("")}</nav>` : ""}
          ${(page.sections || []).map(section => `<section class="section" id="${esc(section.id || "")}">${section.title ? `<h2>${esc(section.title)}</h2>` : ""}${(section.blocks || []).map(block).join("")}</section>`).join("")}
          ${pageTopLink()}
        </div>
      </main>
      ${footer("../")}`;
    setupMotion();
  }

  function setupMotion() {
    const targets = document.querySelectorAll(".aisore-guide, .aisore-stage, .tile, .spotlights > section, .section, .media-row, .card, .link-card, .contact-panel, .page-top, .footer");
    if (!targets.length) return;
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach(target => target.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    targets.forEach((target, index) => {
      target.classList.add("motion-item");
      target.style.transitionDelay = `${Math.min(index % 6, 5) * 35}ms`;
      observer.observe(target);
    });
    document.body.classList.add("motion-ready");
  }

  function setupPageTopSwipe() {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    let animationFrame = 0;
    let cue = null;

    function ensureCue() {
      if (cue) return cue;
      cue = document.createElement("span");
      cue.className = "scroll-swipe-cue";
      cue.setAttribute("aria-hidden", "true");
      document.body.append(cue);
      return cue;
    }

    function easeOutQuart(value) {
      return 1 - Math.pow(1 - value, 4);
    }

    function swipeToTop(target) {
      const targetTop = Math.max(0, Math.round(target.getBoundingClientRect().top + window.scrollY));
      const start = window.scrollY;
      const distance = targetTop - start;
      if (!distance) return;
      if (reduceMotion) {
        window.scrollTo(0, targetTop);
        return;
      }

      window.cancelAnimationFrame(animationFrame);
      ensureCue();
      document.body.classList.remove("is-swiping-to-top");
      void document.body.offsetWidth;
      document.body.classList.add("is-swiping-to-top");

      const duration = Math.min(1100, Math.max(520, Math.abs(distance) * .42));
      const started = performance.now();
      function tick(now) {
        const elapsed = Math.min(1, (now - started) / duration);
        const next = start + distance * easeOutQuart(elapsed);
        window.scrollTo(0, next);
        if (elapsed < 1) {
          animationFrame = window.requestAnimationFrame(tick);
          return;
        }
        window.scrollTo(0, targetTop);
        window.setTimeout(() => document.body.classList.remove("is-swiping-to-top"), 120);
      }
      animationFrame = window.requestAnimationFrame(tick);
    }

    document.addEventListener("click", event => {
      const trigger = event.target.closest(".page-top-button");
      if (!trigger) return;
      const href = trigger.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      swipeToTop(target);
      history.replaceState(null, "", window.location.pathname + window.location.search);
    });
  }

  function setupAisoreMap() {
    const map = document.querySelector("[data-aisore-map]");
    if (!map || map.dataset.aisoreReady) return;
    map.dataset.aisoreReady = "true";

    const popup = map.querySelector("[data-aisore-popup]");
    const popupTitle = popup?.querySelector("[data-popup-title]");
    const popupText = popup?.querySelector("[data-popup-text]");
    const popupLink = popup?.querySelector("[data-popup-link]");
    const popupImage = popup?.querySelector("[data-popup-image]");
    const hotspots = [...map.querySelectorAll(".aisore-hotspot")];
    const coarsePointer = window.matchMedia?.("(hover: none), (pointer: coarse)");
    let active = null;
    let hideTimer = null;
    let tapStart = null;
    let tapMoved = false;

    function isCoarse() {
      return Boolean(coarsePointer?.matches);
    }

    function clearHide() {
      if (!hideTimer) return;
      window.clearTimeout(hideTimer);
      hideTimer = null;
    }

    function scheduleHide() {
      if (isCoarse()) return;
      clearHide();
      hideTimer = window.setTimeout(hidePopup, 140);
    }

    function noteTapStart(event) {
      if (!isCoarse()) return;
      tapStart = { x: event.clientX, y: event.clientY };
      tapMoved = false;
    }

    function noteTapMove(event) {
      if (!tapStart || !isCoarse()) return;
      const dx = event.clientX - tapStart.x;
      const dy = event.clientY - tapStart.y;
      if ((dx * dx) + (dy * dy) > 256) tapMoved = true;
    }

    function positionPopup(hotspot) {
      if (!popup) return;
      if (window.matchMedia?.("(max-width: 560px)")?.matches) return;
      const mapRect = map.getBoundingClientRect();
      const rect = hotspot.getBoundingClientRect();
      const popupWidth = popup.offsetWidth || 352;
      const popupHeight = popup.offsetHeight || 160;
      const center = rect.left - mapRect.left + rect.width / 2;
      const minLeft = popupWidth / 2 + 12;
      const maxLeft = mapRect.width - popupWidth / 2 - 12;
      const left = Math.max(minLeft, Math.min(center, maxLeft));
      const topEdge = rect.top - mapRect.top;
      const bottomEdge = rect.bottom - mapRect.top;
      const placeBelow = topEdge < popupHeight + 24;
      popup.classList.toggle("is-below", placeBelow);
      popup.style.left = `${left}px`;
      popup.style.top = `${placeBelow ? bottomEdge : topEdge}px`;
    }

    function showPopup(hotspot) {
      if (!popup) return;
      clearHide();
      active?.classList.remove("is-active");
      active?.setAttribute("aria-expanded", "false");
      active = hotspot;
      hotspot.classList.add("is-active");
      hotspot.setAttribute("aria-expanded", "true");
      if (popupTitle) popupTitle.textContent = hotspot.dataset.title || hotspot.textContent.trim();
      if (popupText) popupText.textContent = hotspot.dataset.description || "";
      const href = hotspot.getAttribute("href");
      if (popupLink) {
        if (href) {
          popupLink.hidden = false;
          popupLink.href = href;
          popupLink.textContent = hotspot.dataset.linkLabel || "ページを開く";
        } else {
          popupLink.hidden = true;
          popupLink.removeAttribute("href");
          popupLink.textContent = "";
        }
      }
      if (popupImage && hotspot.dataset.image) {
        popup.classList.remove("no-photo");
        popupImage.src = hotspot.dataset.image;
        popupImage.alt = hotspot.dataset.imageAlt || "";
      } else {
        popup.classList.add("no-photo");
        if (popupImage) {
          popupImage.removeAttribute("src");
          popupImage.alt = "";
        }
      }
      popup.setAttribute("aria-hidden", "false");
      map.classList.add("has-popup");
      positionPopup(hotspot);
    }

    function hidePopup() {
      if (!popup) return;
      active?.classList.remove("is-active");
      active?.setAttribute("aria-expanded", "false");
      active = null;
      popup.setAttribute("aria-hidden", "true");
      popup.classList.remove("is-below");
      map.classList.remove("has-popup");
    }

    hotspots.forEach(hotspot => {
      hotspot.setAttribute("aria-expanded", "false");
      hotspot.addEventListener("pointerenter", () => {
        if (!isCoarse()) showPopup(hotspot);
      });
      hotspot.addEventListener("focus", () => showPopup(hotspot));
      hotspot.addEventListener("pointerleave", scheduleHide);
      hotspot.addEventListener("blur", () => {
        if (!isCoarse()) scheduleHide();
      });
      hotspot.addEventListener("pointerdown", noteTapStart);
      hotspot.addEventListener("pointermove", noteTapMove);
      hotspot.addEventListener("pointercancel", () => {
        tapMoved = true;
        tapStart = null;
      });
      hotspot.addEventListener("click", event => {
        if (!isCoarse()) return;
        if (tapMoved) {
          tapStart = null;
          event.preventDefault();
          return;
        }
        if (active === hotspot && hotspot.getAttribute("href")) return;
        event.preventDefault();
        showPopup(hotspot);
        tapStart = null;
      });
    });

    popup?.addEventListener("pointerenter", clearHide);
    popup?.addEventListener("pointerleave", scheduleHide);

    document.addEventListener("click", event => {
      if (!isCoarse()) return;
      if (!map.contains(event.target)) hidePopup();
    });

    window.addEventListener("resize", () => {
      if (active) positionPopup(active);
    });
  }

  function setupPvModal() {
    const modal = document.querySelector("[data-pv-modal]");
    if (!modal) return;
    const video = modal.querySelector("video");
    const openButtons = document.querySelectorAll("[data-open-pv]");
    const closeButtons = modal.querySelectorAll("[data-close-pv]");

    function openModal() {
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("pv-modal-open");
      video?.focus?.();
      const playAttempt = video?.play?.();
      if (playAttempt?.catch) playAttempt.catch(() => {});
    }

    function closeModal() {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("pv-modal-open");
      video?.pause?.();
    }

    openButtons.forEach(button => {
      button.addEventListener("click", event => {
        event.preventDefault();
        openModal();
      });
    });
    closeButtons.forEach(button => {
      button.addEventListener("click", closeModal);
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
    });
  }

  const pageRoot = document.querySelector("[data-page]");
  if (pageRoot && window.KUOLC_PAGES) renderPage(window.KUOLC_PAGES[pageRoot.dataset.page]);
  else setupMotion();
  setupAisoreMap();
  setupPvModal();
  setupPageTopSwipe();

  document.addEventListener("click", event => {
    if (event.target.closest("[data-open-menu]")) {
      event.preventDefault();
      document.body.classList.add("menu-visible");
      document.querySelector("#menu")?.setAttribute("aria-hidden", "false");
    }
    if (event.target.closest("[data-close-menu]") || event.target.id === "menu") {
      document.body.classList.remove("menu-visible");
      document.querySelector("#menu")?.setAttribute("aria-hidden", "true");
    }
    if (event.target.closest("#menu a")) {
      document.body.classList.remove("menu-visible");
      document.querySelector("#menu")?.setAttribute("aria-hidden", "true");
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      document.body.classList.remove("menu-visible");
      document.querySelector("#menu")?.setAttribute("aria-hidden", "true");
    }
  });

  window.KUOLC_SHARED = { header, footer, menuMarkup, socialIcons };
})();
