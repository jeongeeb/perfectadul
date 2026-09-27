/*
  [메인페이지 구조]
  - home-intro: 첫 소개 화면
  - intro-hero-pair: 앞모습/뒷모습 전환 인물
  - shop-section: 제품 목록
  - people-section: 하단 인물 각도 이미지
  글과 이미지 경로는 js/shared/data.js의 homeIntro에서 바꿉니다.
*/
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
    <a class="home-scroll-logo" href="index.html" aria-label="Go to main page">
      <img src="assets/graphics/top-logo.png" alt="聖人用品指針">
    </a>
    <main class="shop-page">
      <section class="home-intro" id="brand-intro" aria-label="Brand introduction">
        <figure class="intro-hero-figure">
          <span class="intro-hero-image-pair intro-hero-image-pair-front">
            <img class="intro-hero-image intro-hero-image-gray" src="${versionMainImage(homeIntro.heroFrontImage)}" alt="Perfect adult collection front view">
            <img class="intro-hero-image intro-hero-image-color" src="${versionMainImage(homeIntro.heroFrontColorImage)}" alt="" aria-hidden="true">
          </span>
          <span class="intro-hero-image-pair intro-hero-image-pair-back">
            <img class="intro-hero-image intro-hero-image-gray" src="${versionMainImage(homeIntro.heroBackImage)}" alt="Perfect adult collection back view">
            <img class="intro-hero-image intro-hero-image-color" src="${versionMainImage(homeIntro.heroBackColorImage)}" alt="" aria-hidden="true">
          </span>
        </figure>
        <div class="intro-copy intro-copy-english" lang="en">
          <h2>${homeIntro.englishTitle}</h2>
          ${englishParagraphs}
        </div>
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
  bindHomeScrollLogo();
}

function bindHomeScrollLogo() {
  const logo = document.querySelector(".home-scroll-logo");
  if (!logo) return;

  const updateLogo = () => {
    logo.classList.toggle("is-small", window.scrollY > 36);
  };

  updateLogo();
  window.addEventListener("scroll", updateLogo, { passive: true });
}


renderShop();
fitToMonitor();
bindMenuToggle();
window.addEventListener("resize", fitToMonitor);
