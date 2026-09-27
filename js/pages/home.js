// 메인페이지 출력과 마우스 오버 기능
function renderShop() {
  const params = new URLSearchParams(window.location.search);
  const activeCollection = params.get("collection");
  const selectedGroup = collectionGroups[activeCollection];
  const selectedProducts = selectedGroup
    ? products.filter((product) => selectedGroup.productIds.includes(product.id))
    : products;

  document.body.classList.add("menus-hidden");

  const englishParagraphs = homeIntro.english
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
  const koreanParagraphs = homeIntro.korean
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
  const tiles = productTilesMarkup(selectedProducts);

  renderShell(`
    <main class="shop-page">
      <section class="home-intro" id="brand-intro" aria-label="Brand introduction">
        <div class="intro-copy intro-copy-english" lang="en">
          <h2>${homeIntro.englishTitle}</h2>
          ${englishParagraphs}
        </div>
        <img class="intro-hero-person" src="${versionMainImage(homeIntro.heroImage)}" alt="Perfect adult wearing the full collection">
        <div class="intro-copy intro-copy-korean" lang="ko">
          <h2>${homeIntro.koreanTitle}</h2>
          ${koreanParagraphs}
        </div>
      </section>
      <section class="shop-section" id="product-list" aria-label="Product collection">
        <div class="shop-grid">${tiles}</div>
      </section>
      <section class="people-section" id="people-views" aria-label="Perfect adult model views">
        <img class="people-image" src="${versionMainImage(homeIntro.peopleImage)}" alt="Perfect adult model views">
      </section>
    </main>`);
  prepareProductHoverImages();
}


renderShop();
fitToMonitor();
bindMenuToggle();
window.addEventListener("resize", fitToMonitor);
