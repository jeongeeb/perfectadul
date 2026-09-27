// 아카이브 페이지 출력과 썸네일 전환 기능
function archiveProjectMarkup(product, projectIndex) {
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
        <button class="archive-thumbnail${imageIndex === 0 ? " is-active" : ""}" type="button" data-archive-src="${image.src}" data-archive-alt="${image.alt}" aria-label="${image.alt} 크게 보기" aria-pressed="${imageIndex === 0 ? "true" : "false"}">
          <img src="${image.src}" alt="">
        </button>`,
    )
    .join("");

  return `
    <section class="archive-project" id="archive-project-${projectIndex + 1}">
      <a class="archive-project-main" href="product.html?id=${product.id}" aria-label="${product.name} detail page">
        <img class="archive-project-main-image" src="${mainImage.src}" alt="${mainImage.alt}">
      </a>
      <div class="archive-project-footer">
        <div class="archive-project-copy">
          <p class="archive-project-index">ARCHIVE ${String(projectIndex + 1).padStart(2, "0")}</p>
          <h2>${product.name}</h2>
          <p class="archive-project-meta">${formatProductTitle(product, products.indexOf(product))}<br>${product.price}</p>
          <p class="archive-project-summary">${product.summary}</p>
        </div>
        <div class="archive-thumbnails" aria-label="${product.name} 상세 이미지 선택">
          ${thumbnails}
        </div>
      </div>
    </section>`;
}

function bindArchiveThumbnails() {
  document.querySelectorAll(".archive-project").forEach((project) => {
    const mainImage = project.querySelector(".archive-project-main-image");
    const thumbnails = [...project.querySelectorAll(".archive-thumbnail")];
    if (!mainImage || !thumbnails.length) return;

    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", () => {
        if (thumbnail.classList.contains("is-active")) return;

        const nextImage = new Image();
        mainImage.classList.add("is-switching");

        nextImage.addEventListener("load", () => {
          mainImage.src = thumbnail.dataset.archiveSrc;
          mainImage.alt = thumbnail.dataset.archiveAlt;
          window.requestAnimationFrame(() => {
            mainImage.classList.remove("is-switching");
          });
        });
        nextImage.addEventListener("error", () => {
          mainImage.classList.remove("is-switching");
        });
        nextImage.src = thumbnail.dataset.archiveSrc;

        thumbnails.forEach((item) => {
          const isActive = item === thumbnail;
          item.classList.toggle("is-active", isActive);
          item.setAttribute("aria-pressed", isActive.toString());
        });
      });
    });
  });
}

function renderArchive() {
  document.body.classList.add("menus-hidden");

  const archiveProducts = products.filter((product) =>
    archiveLooks.some((look) => look.product.id === product.id),
  );
  const projects = archiveProducts
    .map((product, index) => archiveProjectMarkup(product, index))
    .join("");

  renderShell(`
    <main class="archive-page">
      <section class="archive-intro" aria-label="Archive introduction">
        <div class="archive-intro-lockup">
          <p>聖人用品指針</p>
          <img src="${versionMainImage("assets/product_mein/Menu bar.png")}" alt="Perfect Adult mouth">
          <p>PERFECT ADULT<br>WORN PRODUCT ARCHIVE</p>
          <p>01—${String(archiveProducts.length).padStart(2, "0")}</p>
        </div>
      </section>
      <div class="archive-project-list">${projects}</div>
    </main>`);
  bindArchiveThumbnails();
}


renderArchive();
fitToMonitor();
bindMenuToggle();
window.addEventListener("resize", fitToMonitor);
