(function () {
  const nav = [
    ["../index.html", "トップページ"],
    ["shinkan.html", "新歓情報"],
    ["equipment.html", "地図・備品"],
    ["club.html", "クラブについて"],
    ["links.html", "リンク集"]
  ];

  const homeNav = nav.map(([href, text]) => [href.replace("../", ""), text]);

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function header(prefix, links) {
    return `
      <header id="header">
        <a href="${prefix}index.html" class="logo"><strong>Kyoto Univ. OLC</strong><span>Orienteering Club</span></a>
        <nav><a href="#menu" data-open-menu>Menu</a></nav>
      </header>
      <nav id="menu" aria-hidden="true">
        <div class="inner">
          <button class="close" type="button" data-close-menu aria-label="メニューを閉じる">x</button>
          <ul>${links.map(([href, text]) => `<li><a href="${href}">${text}</a></li>`).join("")}</ul>
        </div>
      </nav>`;
  }

  function footer(prefix) {
    return `
      <footer class="footer">
        <div class="inner footer-grid">
          <section><h3>トップページ</h3><ul><li><a href="${prefix}index.html">Home</a></li><li><a href="https://kuolc.pgw.jp/">旧サイト</a></li><li><a href="https://x.com/ku_olc">公式X</a></li></ul></section>
          <section><h3>新歓情報</h3><ul><li><a href="${prefix}pages/shinkan-schedule.html">新歓日程</a></li><li><a href="${prefix}pages/orienteering.html">オリエンテーリングとは</a></li><li><a href="${prefix}pages/circle.html">サークル紹介</a></li></ul></section>
          <section><h3>地図・備品</h3><ul><li><a href="${prefix}pages/equipment.html#rental">備品レンタル</a></li><li><a href="${prefix}pages/equipment.html#maps">地図販売</a></li><li><a href="mailto:kuolccontact@gmail.com">渉外担当</a></li></ul></section>
          <section><h3>クラブについて</h3><ul><li><a href="${prefix}pages/history.html">概要</a></li><li><a href="${prefix}pages/kucomp.html">京大京女立命館大会</a></li><li><a href="${prefix}pages/box.html">BOX</a></li></ul></section>
        </div>
      </footer>`;
  }

  function block(block) {
    if (block.type === "lead") return `<p class="lead">${esc(block.text)}</p>`;
    if (block.type === "p") return `<p>${esc(block.text)}</p>`;
    if (block.type === "note") return `<div class="note">${block.html || esc(block.text)}</div>`;
    if (block.type === "h2") return `<h2>${esc(block.text)}</h2>`;
    if (block.type === "h3") return `<h3>${esc(block.text)}</h3>`;
    if (block.type === "h4") return `<h4>${esc(block.text)}</h4>`;
    if (block.type === "list") return `<ul>${block.items.map(item => `<li>${esc(item)}</li>`).join("")}</ul>`;
    if (block.type === "cards") return `<div class="cards">${block.items.map(item => `<a class="card" href="${esc(item.href)}"><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p></a>`).join("")}</div>`;
    if (block.type === "links") return `<div class="link-grid">${block.items.map(item => `<a class="link-card" href="${esc(item.href)}"><h3>${esc(item.title)}</h3><p>${esc(item.text || item.href)}</p></a>`).join("")}</div>`;
    if (block.type === "table") return `<div class="table-wrap"><table><thead><tr>${block.headers.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${block.rows.map(row => `<tr>${row.map(cell => `<td>${esc(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
    if (block.type === "events") return `<div class="cards">${block.items.map(event => `<section class="card"><h3>${esc(event.title)}</h3>${event.place ? `<p><strong>集合場所・時間:</strong> ${esc(event.place)}</p>` : ""}<p>${esc(event.body)}</p></section>`).join("")}</div>`;
    if (block.type === "maps") return `<div class="cards">${block.items.map(item => `<section class="card"><h3>${esc(item.name)}</h3><p><strong>${esc(item.price)}</strong></p>${item.note ? `<p>${esc(item.note)}</p>` : ""}</section>`).join("")}</div>`;
    return "";
  }

  function renderPage(page) {
    document.title = `${page.title} | 京都大学オリエンテーリングクラブ`;
    const root = document.querySelector("[data-page]");
    root.innerHTML = `
      ${header("../", nav)}
      <section class="banner compact" style="--banner-image:url('${esc(page.image || "")}')">
        <div class="inner">
          <header class="major"><h1>${esc(page.title)}</h1></header>
          <div class="content"><p>${esc(page.summary || "")}</p></div>
        </div>
      </section>
      <main id="main" class="page-body">
        <div class="inner">
          ${page.subnav ? `<nav class="subnav">${page.subnav.map(item => `<a href="${esc(item.href)}">${esc(item.text)}</a>`).join("")}</nav>` : ""}
          ${(page.sections || []).map(section => `<section class="section" id="${esc(section.id || "")}">${section.title ? `<h2>${esc(section.title)}</h2>` : ""}${section.blocks.map(block).join("")}</section>`).join("")}
        </div>
      </main>
      ${footer("../")}`;
  }

  const pageRoot = document.querySelector("[data-page]");
  if (pageRoot && window.KUOLC_PAGES) renderPage(window.KUOLC_PAGES[pageRoot.dataset.page]);

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
  });

  window.KUOLC_SHARED = { header, footer, homeNav };
})();
