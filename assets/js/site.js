(function () {
  const root = document.querySelector("[data-page]");
  const isPage = Boolean(root);

  const navLinks = [
    ["../index.html", "トップページ"],
    ["shinkan.html", "新歓情報"],
    ["equipment.html", "地図・備品"],
    ["history.html", "クラブについて"],
    ["links.html", "リンク"],
    ["assets-needed.html", "必要な素材"]
  ];

  function menuHtml(prefix) {
    const links = isPage ? navLinks : navLinks.map(([href, text]) => [href.replace("../", ""), text]);
    return `
      <header class="site-header">
        <a class="brand" href="${prefix}index.html" aria-label="京都大学オリエンテーリングクラブ ホーム">
          <span class="brand-mark">OLC</span>
          <span><strong>Kyoto Univ. OLC</strong><small>京大オリエンテーリングクラブ</small></span>
        </a>
        <button class="menu-button" type="button" data-menu-button aria-expanded="false" aria-controls="site-menu">Menu</button>
      </header>
      <nav class="site-menu" id="site-menu" data-menu hidden>
        ${links.map(([href, text]) => `<a href="${href}">${text}</a>`).join("")}
      </nav>
    `;
  }

  function footerHtml(prefix) {
    return `
      <footer class="site-footer">
        <div><strong>Kyoto Univ. OLC</strong><p>Copyright(C) Kyoto Univ. OLC All rights reserved.</p></div>
        <div class="footer-links">
          <a href="https://x.com/ku_olc">公式X</a>
          <a href="http://kyotounivolc.blog41.fc2.com/">ブログ</a>
          <a href="${prefix}pages/assets-needed.html">必要な素材</a>
        </div>
      </footer>
    `;
  }

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderBlocks(blocks) {
    return blocks.map(block => {
      if (block.type === "lead") return `<p class="lead">${esc(block.text)}</p>`;
      if (block.type === "p") return `<p>${esc(block.text)}</p>`;
      if (block.type === "note") return `<div class="note">${block.html || esc(block.text)}</div>`;
      if (block.type === "h2") return `<h2>${esc(block.text)}</h2>`;
      if (block.type === "h3") return `<h3>${esc(block.text)}</h3>`;
      if (block.type === "h4") return `<h4>${esc(block.text)}</h4>`;
      if (block.type === "list") return `<ul>${block.items.map(item => `<li>${esc(item)}</li>`).join("")}</ul>`;
      if (block.type === "raw") return `<pre class="raw-text">${esc(block.text)}</pre>`;
      if (block.type === "events") {
        return `<div class="event-list">${block.items.map(event => `
          <section class="event">
            <h4>${esc(event.title)}</h4>
            ${event.place ? `<p><strong>集合場所・時間:</strong> ${esc(event.place)}</p>` : ""}
            <p>${esc(event.body)}</p>
          </section>`).join("")}</div>`;
      }
      if (block.type === "maps") {
        return `<div class="map-list">${block.items.map(item => `
          <section class="map-item">
            <h4>${esc(item.name)}</h4>
            <p><strong>${esc(item.price)}</strong></p>
            ${item.note ? `<p>${esc(item.note)}</p>` : ""}
          </section>`).join("")}</div>`;
      }
      if (block.type === "links") {
        return `<div class="link-grid">${block.items.map(item => `
          <section class="link-list">
            <h4>${esc(item.label)}</h4>
            <p><span class="status ${esc(item.statusClass)}">${esc(item.status)}</span></p>
            ${item.href ? `<p><a href="${esc(item.href)}">${esc(item.href)}</a></p>` : ""}
            ${item.note ? `<p>${esc(item.note)}</p>` : ""}
          </section>`).join("")}</div>`;
      }
      if (block.type === "needs") {
        return `<div class="need-list">${block.items.map(item => `
          <section class="need-item">
            <h4>${esc(item.title)}</h4>
            <p>${esc(item.detail)}</p>
          </section>`).join("")}</div>`;
      }
      return "";
    }).join("");
  }

  function renderPage(page) {
    const prefix = "../";
    document.title = `${page.title} | 京都大学オリエンテーリングクラブ`;
    root.innerHTML = `
      ${menuHtml(prefix)}
      <main>
        <section class="page-hero">
          <div>
            <p class="eyebrow">${esc(page.category || "Kyoto Univ. OLC")}</p>
            <h1>${esc(page.title)}</h1>
            <p>${esc(page.summary)}</p>
            ${page.source ? `<p class="status status-ok">旧サイト資料: ${esc(page.source)}</p>` : ""}
          </div>
          <figure>
            <img src="${esc(page.image.src)}" alt="${esc(page.image.alt)}">
            <figcaption class="image-credit">${esc(page.image.credit)}</figcaption>
          </figure>
        </section>
        <nav class="subnav" aria-label="関連ページ">
          ${(page.related || []).map(item => `<a href="${esc(item.href)}">${esc(item.text)}</a>`).join("")}
        </nav>
        <div class="content-layout">
          <article class="prose">${renderBlocks(page.blocks)}</article>
          <aside class="panel side-nav">
            <h2>ページ案内</h2>
            ${(page.related || []).map(item => `<a href="${esc(item.href)}">${esc(item.text)}</a>`).join("")}
          </aside>
        </div>
      </main>
      ${footerHtml(prefix)}
    `;
  }

  if (isPage && window.KUOLC_PAGES) {
    renderPage(window.KUOLC_PAGES[root.dataset.page]);
  }

  document.addEventListener("click", event => {
    const button = event.target.closest("[data-menu-button]");
    if (!button) return;
    const menu = document.querySelector("[data-menu]");
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    menu.hidden = expanded;
  });
})();
