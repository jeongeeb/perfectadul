// 모든 페이지에서 함께 사용하는 화면 크기, 이미지, 메뉴 기능
const DESIGN_WIDTH = 1920;
const PRODUCT_HOVER_DELAY = 300;
const DETAIL_OPENING_VISIBLE_TIME = 1200;
const DETAIL_OPENING_FADE_TIME = 500;

// 메인 이미지를 같은 파일명으로 교체했는데 이전 이미지가 보이면 이 숫자를 1씩 올리세요.
const MAIN_IMAGE_VERSION = "20260927-2";

function versionMainImage(src) {
  const separator = src.includes("?") ? "&" : "?";
  return `${src}${separator}v=${MAIN_IMAGE_VERSION}`;
}

function fitToMonitor() {
  const scale = window.innerWidth / DESIGN_WIDTH;
  document.documentElement.style.setProperty("--stage-scale", scale.toString());
}

// 제품 번호는 입력 형식과 관계없이 항상 #No.01 형태로 표시합니다.
function formatProductNumber(product, fallbackIndex = 0) {
  const matchedNumber = String(product?.number || "").match(/\d+/);
  const number = matchedNumber
    ? Number.parseInt(matchedNumber[0], 10)
    : fallbackIndex + 1;
  return `#No.${String(number).padStart(2, "0")}`;
}

function productTitleWithoutNumber(title = "") {
  return title.replace(/^#?No\.\s*\d+\s*/i, "").trim();
}

function formatProductTitle(product, fallbackIndex = 0) {
  return `${formatProductNumber(product, fallbackIndex)} ${productTitleWithoutNumber(product.title)}`;
}

function hoverImageCandidates(index) {
  const number = index + 1;
  return [
    `assets/product_model/${number}.png`,
    `assets/product_model/${number}.webp`,
    `assets/product_model/${number}-1.png`,
    `assets/product_model/${number}-2.png`,
    `assets/product_hover/product_${number}.png`,
    `assets/product_hover/wear_${number}.png`,
    `assets/product_mein/product_${number}_hover.png`,
    `assets/product_mein/wear_${number}.png`,
  ];
}

function detailOpeningImageCandidates(product, index) {
  const number = index + 1;
  return [
    `assets/product details/${number}-intro.png`,
    `assets/product details/${product.id}-intro.png`,
    `assets/product_mein/product_${number}_intro.png`,
    `assets/product_mein/${product.id}_intro.png`,
  ];
}

function detailPageImageCandidates(product, index) {
  const number = index + 1;
  return [
    `assets/Product Detail Page/${number}.png`,
    `assets/Product Detail Page/${number}.jpg`,
    `assets/Product Detail Page/${number}.jpeg`,
    `assets/Product Detail Page/${number}.webp`,
    `assets/Product Detail Page/${number}-detail.png`,
    `assets/Product Detail Page/${number}-detail.jpg`,
    `assets/Product Detail Page/${number}-detail.jpeg`,
    `assets/Product Detail Page/${number}-detail.webp`,
    `assets/Product Detail Page/${product.id}.png`,
    `assets/Product Detail Page/${product.id}.jpg`,
    `assets/Product Detail Page/${product.id}.jpeg`,
    `assets/Product Detail Page/${product.id}.webp`,
    `Product Detail Page/${number}.png`,
    `Product Detail Page/${number}.jpg`,
    `Product Detail Page/${number}.jpeg`,
    `Product Detail Page/${number}.webp`,
    `Product Detail Page/${number}-detail.png`,
    `Product Detail Page/${number}-detail.jpg`,
    `Product Detail Page/${number}-detail.jpeg`,
    `Product Detail Page/${number}-detail.webp`,
    `Product Detail Page/${product.id}.png`,
    `Product Detail Page/${product.id}.jpg`,
    `Product Detail Page/${product.id}.jpeg`,
    `Product Detail Page/${product.id}.webp`,
    `assets/product details/${number}-detail.png`,
    `assets/product details/${number}-detail.jpg`,
    `assets/product details/${number}-detail.jpeg`,
    `assets/product details/${number}-detail.webp`,
  ];
}

function findFirstImage(candidates, onFound, onMissing) {
  const [candidate, ...rest] = candidates;
  if (!candidate) {
    if (onMissing) onMissing();
    return;
  }

  const probe = new Image();
  probe.onload = () => onFound(candidate, probe);
  probe.onerror = () => findFirstImage(rest, onFound, onMissing);
  probe.src = candidate;
}

function productTilesMarkup(items = products) {
  return items
    .map(
      (product) => {
        const productIndex = products.indexOf(product);
        return `
    <article class="product-tile" data-slot="${productIndex + 1}">
      <a class="product-link" href="product.html?id=${product.id}" aria-label="${product.name} detail page">
        <img class="product-image" src="${versionMainImage(product.image)}" alt="${product.name}">
        <img class="product-hover-image" alt="" aria-hidden="true" data-hover-candidates="${hoverImageCandidates(productIndex).map(versionMainImage).join("|")}">
      </a>
      <p class="product-number">${formatProductNumber(product, productIndex)}</p>
      <h2 class="product-name">${product.name}</h2>
      <p class="product-price">${product.price}</p>
    </article>`;
      },
    )
    .join("");
}

function prepareProductHoverImages() {
  document.querySelectorAll(".product-tile").forEach((tile) => {
    const link = tile.querySelector(".product-link");
    const image = tile.querySelector(".product-image");
    const hoverImage = tile.querySelector(".product-hover-image");
    if (!link || !image || !hoverImage) return;

    const candidates = hoverImage.dataset.hoverCandidates.split("|");
    let hoverTimer;

    findFirstImage(candidates, (hoverSrc) => {
      hoverImage.src = hoverSrc;
      tile.classList.add("has-hover-image");
    });

    link.addEventListener("mouseenter", () => {
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(() => {
        if (tile.classList.contains("has-hover-image")) {
          tile.classList.add("is-model-visible");
        }
      }, PRODUCT_HOVER_DELAY);
    });

    link.addEventListener("mouseleave", () => {
      clearTimeout(hoverTimer);
      tile.classList.remove("is-model-visible");
    });
  });
}


function bindMenuToggle() {
  const toggle = document.querySelector(".brand-toggle");
  if (!toggle) return;

  toggle.setAttribute(
    "aria-expanded",
    (!document.body.classList.contains("menus-hidden")).toString(),
  );

  toggle.addEventListener("click", () => {
    const isHidden = document.body.classList.toggle("menus-hidden");
    toggle.setAttribute("aria-expanded", (!isHidden).toString());
  });
}

function navMarkup() {
  const isShop =
    document.body.dataset.page === "shop" ||
    document.body.dataset.page === "detail";
  const isManual = document.body.dataset.page === "manual";
  const isArchive = document.body.dataset.page === "archive";

  return `
    <div class="menu-panel">
      <nav class="side-nav" aria-label="Primary navigation">
        <span class="nav-primary-group">
          <a class="${isShop ? "active" : ""}" href="index.html"${isShop ? ' aria-current="page"' : ""}>Shop</a>
          <a class="${isManual ? "active" : ""}" href="manual.html"${isManual ? ' aria-current="page"' : ""}>Manual</a>
          <a class="${isArchive ? "active" : ""}" href="archive.html"${isArchive ? ' aria-current="page"' : ""}>Archive</a>
          <a href="index.html#brand-intro">About</a>
        </span>
      </nav>
    </div>`;
}

function headerMarkup() {
  return `
    <header class="top-bar">
      <h1 class="brand-title">
        <a class="brand-home" href="index.html" aria-label="Go to main page">
          <img class="brand-logo" src="assets/top-logo.png" alt="聖人用品指針">
        </a>
      </h1>
    </header>`;
}

function siteEndMarkup() {
  return `
    <footer class="site-end" id="project-footer" aria-label="Project information">
      <img class="site-end-logo" src="assets/bottom_logo.png" alt="聖人用品 指針">
      <div class="site-end-copy">
        <p>聖人用品: 완벽한어른</p>
        <p>The more you wear our products, the closer you become to the adult society expects. Wearing every piece, you look like a perfect adult, but you gradually lose yourself. [Become socially optimized]</p>
        <p>© 2026 Sangmyung University · Department of Communication Design. 2026 Graduation Project</p>
      </div>
    </footer>`;
}

function bindSiteEndVisibility() {
  const siteEnd = document.querySelector(".site-end");
  if (!siteEnd || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(([entry]) => {
    document.body.classList.toggle("site-end-visible", entry.isIntersecting);
  });

  observer.observe(siteEnd);
}

/* 마지막 bottom_logo 영역에 접근할 때만 자석처럼 맞춰집니다. */
function bindFooterMagneticScroll() {
  const desktopPointer = window.matchMedia(
    "(min-width: 761px) and (pointer: fine)",
  );
  const siteEnd = document.querySelector(".site-end");
  let isLocked = false;
  if (!siteEnd) return;

  const shouldKeepNativeScroll = (target) => {
    if (!(target instanceof Element)) return false;

    return Boolean(
      target.closest(
        ".detail-info-overlay, .purchase-dialog-body, input, select, textarea",
      ),
    );
  };

  window.addEventListener(
    "wheel",
    (event) => {
      if (
        !desktopPointer.matches ||
        event.deltaY <= 0 ||
        event.ctrlKey ||
        Math.abs(event.deltaX) > Math.abs(event.deltaY) ||
        shouldKeepNativeScroll(event.target)
      ) {
        return;
      }

      const siteEndRect = siteEnd.getBoundingClientRect();
      const captureDistance = window.innerHeight * 0.9;
      if (siteEndRect.top <= 18 || siteEndRect.top > captureDistance) return;

      event.preventDefault();
      if (isLocked) return;
      isLocked = true;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo({
        top: Math.min(siteEnd.offsetTop, maxScroll),
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
      window.setTimeout(() => {
        isLocked = false;
      }, 520);
    },
    { passive: false },
  );
}

function renderShell(content) {
  document.body.innerHTML = `
    <div class="site-frame">
      ${headerMarkup()}
      ${navMarkup()}
      ${content}
      ${siteEndMarkup()}
    </div>
    <p class="footer-handle">@from.perfect adult</p>`;

  bindSiteEndVisibility();
  bindFooterMagneticScroll();
}
