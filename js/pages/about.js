/*
  [About 페이지 구조]
  기존 아카이브의 큰 이미지/썸네일 탐색 화면을 보존한 페이지입니다.
*/
function aboutProjectMarkup(product, projectIndex) {
  const projectLooks = archiveLooks.filter(
    (look) => look.product.id === product.id,
  );
  const projectImages = [
    ...projectLooks.map((look) => ({
      src: versionMainImage(look.src),
      alt: `${product.name} worn look ${look.index}`,
    })),
    {
      src: versionMainImage(product.image),
      alt: `${product.name} product image`,
    },
  ];
  const mainImage = projectImages[0];
  const thumbnails = projectImages
    .map(
      (image, imageIndex) => `
        <button class="about-thumbnail${imageIndex === 0 ? " is-active" : ""}" type="button" data-about-src="${image.src}" data-about-alt="${image.alt}" aria-label="${image.alt} 크게 보기" aria-pressed="${imageIndex === 0 ? "true" : "false"}">
          <img src="${image.src}" alt="">
        </button>`,
    )
    .join("");

  return `
    <section class="about-project" id="about-project-${projectIndex + 1}">
      <a class="about-project-main" href="product.html?id=${product.id}" aria-label="${product.name} detail page">
        <img class="about-project-main-image" src="${mainImage.src}" alt="${mainImage.alt}">
      </a>
      <div class="about-project-footer">
        <div class="about-project-copy">
          <p class="about-project-index">ARCHIVE ${String(projectIndex + 1).padStart(2, "0")}</p>
          <h2>${product.name}</h2>
          <p class="about-project-meta">${formatProductTitle(product, products.indexOf(product))}<br>${product.price}</p>
          <p class="about-project-summary">${product.summary}</p>
        </div>
        <div class="about-thumbnails" aria-label="${product.name} 상세 이미지 선택">
          ${thumbnails}
        </div>
      </div>
    </section>`;
}

function bindAboutThumbnails() {
  document.querySelectorAll(".about-project").forEach((project) => {
    const mainImage = project.querySelector(".about-project-main-image");
    const thumbnails = [...project.querySelectorAll(".about-thumbnail")];
    if (!mainImage || !thumbnails.length) return;

    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", () => {
        if (thumbnail.classList.contains("is-active")) return;

        const nextImage = new Image();
        mainImage.classList.add("is-switching");

        nextImage.addEventListener("load", () => {
          mainImage.src = thumbnail.dataset.aboutSrc;
          mainImage.alt = thumbnail.dataset.aboutAlt;
          window.requestAnimationFrame(() => {
            mainImage.classList.remove("is-switching");
          });
        });
        nextImage.addEventListener("error", () => {
          mainImage.classList.remove("is-switching");
        });
        nextImage.src = thumbnail.dataset.aboutSrc;

        thumbnails.forEach((item) => {
          const isActive = item === thumbnail;
          item.classList.toggle("is-active", isActive);
          item.setAttribute("aria-pressed", isActive.toString());
        });
      });
    });
  });
}

function renderAbout() {
  document.body.classList.add("menus-hidden");

  const archiveProducts = products.filter((product) =>
    archiveLooks.some((look) => look.product.id === product.id),
  );
  const projects = archiveProducts
    .map((product, index) => aboutProjectMarkup(product, index))
    .join("");

  renderShell(`
    <main class="about-page">
      <section class="about-intro" aria-label="Archive introduction">
        <div class="about-intro-lockup">
          <p>聖人用品指針</p>
          <img src="${versionMainImage("assets/product_mein/Menu bar.png")}" alt="Perfect Adult mouth">
          <p>PERFECT ADULT<br>WORN PRODUCT ARCHIVE</p>
          <p>01—${String(archiveProducts.length).padStart(2, "0")}</p>
        </div>
      </section>
      <div class="about-project-list">${projects}</div>
    </main>`);
  bindAboutThumbnails();
}


renderAbout();
fitToMonitor();
bindMenuToggle();
window.addEventListener("resize", fitToMonitor);
