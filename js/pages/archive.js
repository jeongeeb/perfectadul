/*
  [아카이브 페이지 구조]
  - ORKR projects 페이지처럼 작은 필터/메타와 2열 프로젝트 그리드로 구성합니다.
  - 기존 큰 이미지 아카이브는 about.html로 이동했습니다.
*/
function archiveProjectCard(product, projectIndex) {
  const firstLook = archiveLooks.find((look) => look.product.id === product.id);
  const imageSrc = versionMainImage(firstLook ? firstLook.src : product.image);
  const productIndex = products.indexOf(product);
  const completionMonth = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May.",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ][projectIndex % 12];

  return `
    <article class="archive-card">
      <a class="archive-card-link" href="product.html?id=${product.id}" aria-label="${productDisplayName(product)} 상세페이지">
        <figure class="archive-card-image-wrap">
          <img class="archive-card-image" src="${imageSrc}" alt="${productDisplayName(product)} archive image">
        </figure>
        <div class="archive-card-copy">
          <div class="archive-card-heading">
            <h2>${product.name}</h2>
            <p>${productDisplayName(product)}</p>
          </div>
          <dl class="archive-card-meta">
            <div>
              <dt>Task scope :</dt>
              <dd>Product system design</dd>
            </div>
            <div>
              <dt>Sub task :</dt>
              <dd>Object design, Styling, Manual text</dd>
            </div>
            <div>
              <dt>Category :</dt>
              <dd>Perfect Adult Collection</dd>
            </div>
            <div>
              <dt>Date of completion :</dt>
              <dd>${completionMonth} 2026</dd>
            </div>
            <div>
              <dt>Product no. :</dt>
              <dd>${formatProductNumber(product, productIndex)}</dd>
            </div>
          </dl>
        </div>
      </a>
    </article>`;
}

function renderArchive() {
  document.body.classList.add("menus-hidden");

  const archiveProducts = products.filter((product) =>
    archiveLooks.some((look) => look.product.id === product.id),
  );
  const cards = archiveProducts
    .map((product, index) => archiveProjectCard(product, index))
    .join("");

  renderShell(`
    <main class="archive-page">
      <aside class="archive-filter" aria-label="Archive filters">
        <nav class="archive-section-nav">
          <a href="archive.html" aria-current="page">Archive</a>
          <a href="about.html">About</a>
          <a href="manual.html">Manual</a>
        </nav>
        <div class="archive-filter-group">
          <p>2026</p>
          <p>Type of product</p>
          <a href="archive.html">Expression</a>
          <a href="archive.html">Responsibility</a>
          <a href="archive.html">Independence</a>
          <a href="archive.html">Dignity</a>
          <a href="archive.html">Silence</a>
          <a href="archive.html">Full system</a>
        </div>
      </aside>
      <section class="archive-index" aria-labelledby="archive-title">
        <header class="archive-index-header">
          <h1 id="archive-title">Perfect Adult Product Archive</h1>
          <p>Worn product images and product systems arranged as a project index.</p>
          <p>01—${String(archiveProducts.length).padStart(2, "0")}</p>
        </header>
        <div class="archive-grid">${cards}</div>
      </section>
    </main>`);
}


renderArchive();
fitToMonitor();
bindMenuToggle();
window.addEventListener("resize", fitToMonitor);
