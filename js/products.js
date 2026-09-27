const products = [
  {
    id: "stoic-monocle",
    number: "#No.01",
    name: "面安維持 | 면안유지",
    title: "No.1 평정심 유지용 안구 장치",
    price: "72,000 KRW",
    image: "assets/product_mein/product_1.png",
    summary:
      "수행 규약 : 평온한 얼굴을 유지하라. 불쾌함은 외부로 노출하지 않는다. 표정은 항상 안정적으로 유지한다. 사회적 공간에서 감정을 직접 보여주는 것은 타인에게 피로를 유발할 수 있다.",
    body: [
      "주의사항 : 실제 감정 상태는 고려되지 않는다.",
      "제품화 방향 : 눈꺼풀, 동공, 시선 떨림을 보정·고정하여 온화한 눈빛을 유지한다.",
    ],
  },
  {
    id: "gentle-jaw-clamp",
    number: "#No.02",
    name: "葛藤封合 | 갈등봉합",
    title: "No.2 사회적 미소 유지용 입 장치",
    price: "64,000 KRW",
    image: "assets/product_mein/product_2.png",
    summary:
      "수행 규약 : 충돌을 외부로 확장하지 말 것. 갈등 상황 발생 시 감정을 우선 정리한다. 논리적 승리보다 분위기 안정 유지가 우선된다. 관계 지속 가능성을 해치는 언행은 지양한다.",
    body: [
      "주의사항 : 지속적 마찰 발생 시 미성숙한 어른으로 취급받을 수 있다.",
      "제품화 방향 : 입꼬리를 고정해 미소를 유지하며 정색, 비웃음, 반박 표정을 차단한다.",
    ],
  },
  {
    id: "patience-ear-cuffs",
    number: "#No.03",
    name: "聽應遂行 | 청응수행",
    title: "No.3 경청반응 유지용 귀 장치",
    price: "132,000 KRW",
    image: "assets/product_mein/product_3.png",
    summary:
      "수행 규약 : 경청 반응을 수행하라. 타인의 말을 즉시 수정하거나 교정하지 않는다. 즉각적인 공감 반응을 제공한다. 충고보다 수용이 우선된다.",
    body: [
      "주의사항 : 공감의 진위 여부는 평가 대상이 아니다.",
      "제품화 방향 : 불쾌한 말, 반복되는 말, 틀린 말을 들었을 때 발생하는 청각적 피로와 즉각적인 반응을 완화한다.",
    ],
  },
  {
    id: "silent-helmet",
    number: "#No.04",
    name: "時律管理 | 시율관리",
    title: "No.4 시간 낭비 방지용 교정 신발",
    price: "196,000 KRW",
    image: "assets/product_mein/product_4.png",
    summary:
      "수행 규약 : 시간을 낭비하지 말 것. 모든 시간은 생산 가능 상태로 유지한다. 휴식 또한 신체 기능 회복 목적 아래 수행한다. 기록되지 않는 노력은 존재하지 않는 노력으로 간주된다.",
    body: [
      "주의사항 : 권장 루틴은 운동, 독서, 자기계발, 수면 최적화로 구성된다.",
      "제품화 방향 : 하루의 비생산 시간을 감지하고 사용자의 생활 리듬을 교정한다.",
    ],
  },
  {
    id: "balance-struts",
    number: "#No.05",
    name: "機能持續 | 기능지속",
    title: "No.5 기능 지속용 책임감 웨이트",
    price: "214,000 KRW",
    image: "assets/product_mein/product_5.png",
    summary:
      "수행 규약 : 체력 소진 상태에서도 움직여라. 피로는 기능 중단의 사유가 될 수 없다. 완벽한 어른은 최소 수준 이상의 사회적 수행 능력을 유지해야 한다.",
    body: [
      "주의사항 : 피로는 기능 중단의 사유가 될 수 없다.",
      "제품화 방향 : 신체 움직임에 무게와 저항을 부여하여 충동적인 이탈을 줄이고 지속적인 사회적 수행을 유도한다.",
    ],
  },
  {
    id: "calm-capsule",
    number: "#No.06",
    name: "苦痛隱匿 | 고통은닉",
    title: "No.6 번아웃 억제용 회복 패치",
    price: "108,000 KRW",
    image: "assets/product_mein/product_6.png",
    summary:
      "수행 규약 : 붕괴 상태를 외부에 노출하지 말 것. 불안, 무기력, 번아웃은 사적 공간에서 처리한다. 공적 공간에서는 안정적 상태를 유지한다.",
    body: [
      "주의사항 : 본 제품은 정서 회복 기능을 제공하지 않는다.",
      "제품화 방향 : 피로와 감정 붕괴의 외부 표시를 늦추어 정상 생활 중인 어른처럼 보이게 한다.",
    ],
  },
  {
    id: "clear-collar",
    number: "#No.07",
    name: "生存自立 | 생존자립",
    title: "No.7 자립 점수 스캐너",
    price: "124,000 KRW",
    image: "assets/product_mein/product_7.png",
    summary:
      "수행 규약 : 자신의 생계를 스스로 유지하라. 주거, 식사, 노동, 세금 처리를 독립적으로 수행한다. 경제적 의존 상태가 장기화될 경우 완벽한 어른 판정이 유예될 수 있다.",
    body: [
      "주의사항 : 독립은 권장 사항이 아닌 기본 사항이다.",
      "제품화 방향 : 생활 데이터를 분석하여 사용자의 자립 점수와 의존 지수를 산출한다.",
    ],
  },
  {
    id: "comfort-cartridge",
    number: "#No.08",
    name: "感情絶緣 | 감정절연",
    title: "No.8 감정 보관용 부착형 캡슐",
    price: "54,000 KRW",
    image: "assets/product_mein/product_8.png",
    summary:
      "수행 규약 : 타인에게 과도하게 기대지 말 것. 완벽한 어른은 불안과 슬픔을 스스로 처리한다. 지속적인 감정 의존은 관계 피로를 유발할 수 있다.",
    body: [
      "주의사항 : 눈물을 흘리는 행위는 개인 공간에서 수행한다.",
      "제품화 방향 : 울음, 불안, 무너짐과 같은 감정을 사회적 공간에서 임시 보관한다.",
    ],
  },
  {
    id: "adult-tool-09",
    number: "#No.09",
    name: "家族分離 | 가족분리",
    title: "No.9 자립 자세 유지용 척추 하네스",
    price: "248,000 KRW",
    image: "assets/product_mein/product_9.png",
    summary:
      "수행 규약 : 태어난 가족으로부터 독립하라. 완벽한 어른은 본인만의 독립적 생활 단위를 형성해야 한다. 혼인 및 가족 구성은 완전한 사회 통합의 기준으로 간주될 수 있다.",
    body: [
      "주의사항 : 미완성 독립 상태 지속 시 ‘성인 모색 단계’로 자동 분류될 수 있다.",
      "제품화 방향 : 기대고 싶은 몸의 방향을 곧게 세워 타인에게 의존하지 않는 자세를 출력한다.",
    ],
  },
  {
    id: "adult-tool-10",
    number: "#No.10",
    name: "先照顧 | 돌봄선행",
    title: "No.10 일정 우선순위 시한폭탄 타이머",
    price: "156,000 KRW",
    image: "assets/product_mein/product_10.png",
    summary:
      "수행 규약 : 하고 싶은 일보다 해야 하는 일을 먼저 하라. 사고 싶은 것보다 갚아야 할 것을 먼저 계산하라. 쉬고 싶은 마음보다 돌봐야 할 사람의 시간을 먼저 배치하라.",
    body: [
      "주의사항 : 지속적으로 돌봄 일정을 따르지 않을 경우 타이머 시간이 대폭 감소될 수 있다.",
      "제품화 방향 : 본인의 욕구보다 돌봄 대상과 사회적 의무의 시간을 우선 배치한다.",
    ],
  },
  {
    id: "adult-tool-11",
    number: "#No.11",
    name: "外形整頓 | 외형정돈",
    title: "No.11 THE ADULT FIT CORRECTOR™ / 품위 보정용 외형 교정기",
    price: "236,000 KRW",
    image: "assets/product_mein/product_11.png",
    summary:
      "수행 규약 : 너의 외형은 개인 취향이 아니라 사회적 신호다. 너무 어려 보여도 안 되고, 너무 늙어 보여도 안 된다. 너무 튀어도 안 되고, 너무 방치되어 보여도 안 된다.",
    body: [
      "주의사항 : 본 제품은 편안함보다 단정함을 우선한다. 개인의 개성에 따라 제품의 교정 범위를 임의로 변경하지 않는다.",
      "제품화 방향 : 사용자의 상체와 허리 형태를 사회적으로 무난한 실루엣에 맞춰 교정한다.",
    ],
  },
  {
    id: "adult-tool-12",
    number: "#No.12",
    name: "趣向中立 | 취향중립",
    title: "No.12 THE NEUTRAL TASTE FILTER™ / 취향 중립화 장치",
    price: "72,000 KRW",
    image: "assets/product_mein/product_12.png",
    summary:
      "수행 규약 : 취향은 설명 가능해야 한다. 너무 과한 애정, 너무 선명한 분노, 너무 뚜렷한 호불호는 사회적 피로를 만든다.",
    body: [
      "주의사항 : 본 제품은 강한 선호와 거부 반응을 자동으로 완화할 수 있다. 지나치게 좋아하거나 싫어하는 태도는 사회적 중립 범위를 벗어날 수 있다.",
      "제품화 방향 : 취향과 감정의 강도를 낮추어 어디서든 무난한 사람으로 보이게 한다.",
    ],
  },
  {
    id: "adult-tool-13",
    number: "#No.13",
    name: "發話檢閱 | 발화검열",
    title: "No.13 THE CIVIL TONGUE PLATE™ / 말실수 방지용 혀 보정 장치",
    price: "180,000 KRW",
    image: "assets/product_mein/product_13.png",
    summary:
      "수행 규약 : 말하기 전에 삼켜라. 네가 옳다는 사실보다 분위기가 깨지지 않는 것이 중요하다. 발화는 가능하지만, 발화 이후의 관계 비용은 본인이 감당해야 한다.",
    body: [
      "주의사항 : 제품 착용 중 급작스러운 발화는 제한될 수 있다. 혀의 불편함은 제품의 정상적인 작동 범위에 해당한다.",
      "제품화 방향 : 혀의 움직임을 제한해 즉흥적 반박과 과도한 솔직함을 지연시킨다.",
    ],
  },
  {
    id: "adult-tool-14",
    number: "#No.14",
    name: "首肯角度 | 수긍각도",
    title: "No.14 THE AGREEABLE NECK BRACE™ / 수긍 자세 유지용 목 장치",
    price: "179,000 KRW",
    image: "assets/product_mein/product_14.png",
    summary:
      "수행 규약 : 동의하지 않아도 동의 가능한 얼굴을 유지하라. 고개는 적정 각도로 기울이고, 반박 전 최소 3초간 정지한다.",
    body: [
      "주의사항 : 사용자의 실제 동의 여부는 판단하지 않는다. 장시간 착용 시 개인의 자연스러운 목 움직임이 제한될 수 있다.",
      "제품화 방향 : 목의 각도와 끄덕임 주기를 조절해 수용적인 어른의 자세를 출력한다.",
    ],
  },
  {
    id: "adult-tool-15",
    number: "#No.15",
    name: "謝過待機 | 사과대기",
    title: "No.15 THE APOLOGY GLOVES™ / 사과 자세 자동 보정 장갑",
    price: "84,000 KRW",
    image: "assets/product_mein/product_15.png",
    summary:
      "수행 규약 : 갈등이 발생하면 먼저 손을 펴라. 잘못의 크기와 관계없이 수습의 제스처는 성숙의 증거로 기록된다.",
    body: [
      "주의사항 : 본 제품은 갈등 상황에서 사용자의 손동작을 자동으로 제한한다. 잘못의 유무와 관계없이 화해 제스처가 우선 출력될 수 있다.",
      "제품화 방향 : 삿대질과 주먹 쥠을 방지하고 손바닥을 개방된 상태로 유지한다. 항상 먼저 손을 내밀 수 있도록 한다.",
    ],
  },
  {
    id: "adult-tool-16",
    number: "#No.16",
    name: "總綱統合 | 총강통합",
    title: "No.16 THE PERFECT ADULT ASSEMBLY™ / 완벽한 어른 풀 착장 시스템",
    price: "1,000,000 KRW",
    image: "assets/product_mein/product_16.png",
    summary:
      "수행 규약 : 모든 강령을 준수하고 각 교정 제품의 착용을 완료하라. 감정, 태도, 책임, 외형, 발화와 행동을 사회적 기준에 맞게 최종 정렬한다.",
    body: [
      "하나의 장치는 도움을 준다. 모든 장치는 당신을 완벽한 어른으로 완성한다.",
      "주의사항 : 착용자는 분노하지 않는다. 반박하지 않는다. 무너지지 않는다. 기대지 않는다. 튀지 않는다.",
      "제품화 방향 : 눈, 입, 귀, 머리, 목, 척추, 몸통, 손, 무릎, 발목 등 각 신체 부위의 교정 장치를 통합하여 착용자가 어느 자리에서도 흠잡을 데 없는 어른처럼 보이도록 설계한다.",
      "개별 제품은 도움처럼 보였지만, 모두 모이면 사용자는 완벽한 어른이 아니라 사회적 기준에 의해 조립된 인간이 된다.",
    ],
  },
];

const collectionGroups = {
  1: {
    name: "好感之綱",
    productIds: ["stoic-monocle", "gentle-jaw-clamp", "patience-ear-cuffs"],
  },
  2: {
    name: "誠實之綱",
    productIds: ["silent-helmet", "balance-struts", "calm-capsule"],
  },
  3: {
    name: "自立之綱",
    productIds: ["clear-collar", "comfort-cartridge", "adult-tool-09"],
  },
  4: {
    name: "責任之綱",
    productIds: ["adult-tool-10"],
  },
  5: {
    name: "品位之綱",
    productIds: ["adult-tool-11", "adult-tool-12"],
  },
  6: {
    name: "沈默之綱",
    productIds: ["adult-tool-13", "adult-tool-14", "adult-tool-15"],
  },
};

const archiveLooks = [
  ["stoic-monocle", "1.webp"],
  ["gentle-jaw-clamp", "2.png"],
  ["gentle-jaw-clamp", "2-1.png"],
  ["patience-ear-cuffs", "3.png"],
  ["silent-helmet", "4.png"],
  ["balance-struts", "5.png"],
  ["balance-struts", "5-2.png"],
  ["calm-capsule", "6.png"],
  ["clear-collar", "7.png"],
  ["comfort-cartridge", "8.png"],
  ["adult-tool-09", "9.png"],
  ["adult-tool-09", "9-1.png"],
  ["adult-tool-10", "10.png"],
  ["adult-tool-11", "11.png"],
  ["adult-tool-12", "12.png"],
  ["adult-tool-13", "13.png"],
  ["adult-tool-13", "13-1.png"],
  ["adult-tool-13", "13-2.png"],
  ["adult-tool-14", "14.png"],
  ["adult-tool-15", "15.png"],
  ["adult-tool-15", "15-1.png"],
  ["adult-tool-16", "16.png"],
].map(([productId, file], index) => {
  const product = products.find((item) => item.id === productId);
  return {
    index: index + 1,
    product,
    src: `assets/product_model/${file}`,
  };
});

// 메인 첫 화면 글/이미지 수정은 이 영역에서 하면 됩니다.
const homeIntro = {
  title: "당신은 지금, 완벽한 어른을 보고 있습니다.",
  paragraphs: [
    "환하게 드러나는 가지런한 미소, 흐트러짐 없는 깔끔한 아웃핏, 빈틈없이 빛나는 구두. 바른 자세와 정돈된 왁스 헤어까지.",
    "그는 언제 어디서나 침착하고, 단정하며, 신뢰받는 사람처럼 보입니다. 사회가 요구하는 모든 조건을 갖춘 ‘완벽한 어른’의 모습입니다.",
    "하지만 걱정하지 마세요. 완벽한 어른이 되는 방법은 생각보다 간단합니다.",
    "아래의 PERFECT ADULT COLLECTION을 착용하세요. 당신의 자세부터 표정, 말투, 감정, 행동까지 — 사회가 원하는 어른의 기준에 맞춰 하나씩 완성해 드립니다.",
    "당신도 이 남성처럼 완벽한 어른이 될 수 있습니다.",
    "<em>[Become socially optimized.]</em>",
  ],
  stampImage: "assets/graphics/stamp_gray.png",
  figures: [
    {
      className: "intro-figure intro-figure-16-front",
      src: "assets/basic person/16_full_front.png",
      alt: "Perfect adult front view",
    },
    {
      className: "intro-figure intro-figure-16-back",
      src: "assets/basic person/16_full_back.png",
      alt: "Perfect adult back view",
    },
    {
      className: "intro-figure intro-figure-16-close",
      src: "assets/basic person/16_front.png",
      alt: "Perfect adult portrait",
    },
  ],
};

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

function prepareDetailOpening() {
  const opening = document.querySelector(".detail-opening");
  if (!opening) return;

  const graphic = opening.querySelector(".detail-opening-graphic");
  const candidates = graphic.dataset.graphicCandidates.split("|");

  findFirstImage(candidates, (src) => {
    graphic.src = src;
    opening.classList.add("has-opening-graphic");
  });

  window.setTimeout(() => {
    opening.classList.add("is-hiding");
  }, DETAIL_OPENING_VISIBLE_TIME);

  window.setTimeout(() => {
    opening.remove();
  }, DETAIL_OPENING_VISIBLE_TIME + DETAIL_OPENING_FADE_TIME);
}

function bindDetailInfoToggle() {
  const toggle = document.querySelector(".detail-info-toggle");
  const panel = document.querySelector(".detail-info-overlay");
  if (!toggle || !panel) return;

  toggle.addEventListener("click", () => {
    const isOpen = toggle.classList.toggle("is-open");
    panel.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen.toString());
    panel.setAttribute("aria-hidden", (!isOpen).toString());
  });
}

function bindPurchaseModal(product) {
  const modal = document.querySelector(".purchase-modal");
  const dialog = modal?.querySelector(".purchase-dialog");
  const modeLabel = modal?.querySelector(".purchase-mode");
  const message = modal?.querySelector(".purchase-message");
  const quantityValue = modal?.querySelector(".purchase-quantity-value");
  const total = modal?.querySelector(".purchase-total-value");
  const confirm = modal?.querySelector(".purchase-confirm");
  const status = modal?.querySelector(".purchase-status");
  const actionButtons = document.querySelectorAll("[data-purchase-action]");
  if (
    !modal ||
    !dialog ||
    !modeLabel ||
    !message ||
    !quantityValue ||
    !total ||
    !confirm ||
    !status
  ) {
    return;
  }

  const unitPrice = Number(product.price.replace(/[^0-9]/g, ""));
  let quantity = 1;
  let mode = "cart";
  let returnFocus = null;

  const updateTotal = () => {
    quantityValue.textContent = quantity.toString();
    total.textContent = `${(unitPrice * quantity).toLocaleString("ko-KR")} KRW`;
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    returnFocus?.focus();
  };

  const openModal = (nextMode, trigger) => {
    mode = nextMode;
    quantity = 1;
    returnFocus = trigger;
    status.textContent = "";
    status.classList.remove("is-visible");
    modeLabel.textContent =
      mode === "buy" ? "PURCHASE INFORMATION" : "CART INFORMATION";
    message.textContent =
      mode === "buy"
        ? "주문 내용을 확인하세요. 현재 사이트는 전시용 프로토타입으로 실제 결제 시스템은 아직 연결되어 있지 않습니다."
        : "선택한 제품과 수량을 확인한 뒤 장바구니에 추가할 수 있습니다.";
    confirm.textContent = mode === "buy" ? "CONTINUE" : "ADD TO CART";
    confirm.dataset.state = "action";
    updateTotal();
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    window.setTimeout(() => dialog.focus(), 0);
  };

  actionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      openModal(button.dataset.purchaseAction, button);
    });
  });

  modal.querySelectorAll("[data-purchase-close]").forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  modal.querySelector("[data-quantity='minus']")?.addEventListener("click", () => {
    quantity = Math.max(1, quantity - 1);
    updateTotal();
  });

  modal.querySelector("[data-quantity='plus']")?.addEventListener("click", () => {
    quantity = Math.min(99, quantity + 1);
    updateTotal();
  });

  confirm.addEventListener("click", () => {
    if (confirm.dataset.state === "close") {
      closeModal();
      return;
    }

    status.textContent =
      mode === "buy"
        ? "CHECKOUT CONNECTION PENDING / 결제 시스템 연결 전입니다."
        : `${quantity}개 제품이 장바구니에 추가되었습니다. / ADDED TO CART`;
    status.classList.add("is-visible");
    confirm.textContent = "CLOSE";
    confirm.dataset.state = "close";
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
}

function prepareDetailPageImage() {
  const gallery = document.querySelector(".detail-page-gallery");
  const fallback = document.querySelector(".detail-fallback-gallery");
  const layout = document.querySelector(".detail-layout");
  const relatedProducts = document.querySelector(".detail-related-products");
  const image = gallery?.querySelector(".detail-scroll-image");
  if (!gallery || !image || !layout) return;

  const candidates = image.dataset.detailCandidates.split("|");

  const releaseDetailControlsAt = (relatedTop) => {
    const panel = document.querySelector(".detail-panel");
    const actions = document.querySelector(".detail-actions");
    const infoToggle = document.querySelector(".detail-info-toggle");
    const infoOverlay = document.querySelector(".detail-info-overlay");
    if (!actions) return;

    const updateControlPosition = () => {
      const scale = window.innerWidth / DESIGN_WIDTH;
      const releaseScrollY = Math.max(
        0,
        relatedTop * scale - window.innerHeight - 50 * scale,
      );
      const isReleased = window.scrollY >= releaseScrollY;

      panel?.classList.toggle("is-released", isReleased);
      actions.classList.toggle("is-released", isReleased);
      infoToggle?.classList.toggle("is-released", isReleased);
      infoOverlay?.classList.toggle("is-released", isReleased);

      if (isReleased) {
        if (panel) panel.style.top = `${releaseScrollY + 146 * scale}px`;
        actions.style.top = `${releaseScrollY + window.innerHeight / 2}px`;
      } else {
        panel?.style.removeProperty("top");
        actions.style.removeProperty("top");
      }
    };

    window.addEventListener("scroll", updateControlPosition, { passive: true });
    window.addEventListener("resize", updateControlPosition);
    updateControlPosition();
  };

  const showRelatedProducts = (detailHeight) => {
    const relatedTop = 145 + detailHeight + 140;
    const pageHeight = relatedTop + 2100;
    layout.style.setProperty("--detail-related-top", `${relatedTop}px`);
    layout.style.setProperty("--detail-page-height", `${pageHeight}px`);
    layout.classList.add("has-related-products");
    if (relatedProducts) relatedProducts.hidden = false;
    releaseDetailControlsAt(relatedTop);
  };

  findFirstImage(
    candidates,
    (src, loadedImage) => {
      const detailHeight =
        loadedImage.naturalWidth > 0
          ? (635 * loadedImage.naturalHeight) / loadedImage.naturalWidth
          : 880;
      image.src = src;
      gallery.hidden = false;
      fallback.hidden = true;
      layout.classList.add("has-scroll-gallery");
      showRelatedProducts(detailHeight);
    },
    () => showRelatedProducts(910),
  );
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
  const params = new URLSearchParams(window.location.search);
  const activeCollection = params.get("collection");
  const isManual = document.body.dataset.page === "manual";
  const isArchive = document.body.dataset.page === "archive";
  const collectionLinks = Object.entries(collectionGroups)
    .map(([number, group]) => {
      const isActive = activeCollection === number;
      return `<a class="${isActive ? "active" : ""}" href="index.html?collection=${number}#product-list"${isActive ? ' aria-current="page"' : ""}>#${number} ${group.name}</a>`;
    })
    .join("");

  return `
    <div class="menu-panel">
      <nav class="side-nav" aria-label="Primary navigation">
        <span class="nav-primary-group">
          <a href="index.html">Shop</a>
          <a href="index.html#product-list">Collection</a>
          <a class="${isManual ? "active" : ""}" href="manual.html"${isManual ? ' aria-current="page"' : ""}>Manual</a>
          <a class="${isArchive ? "active" : ""}" href="archive.html"${isArchive ? ' aria-current="page"' : ""}>Archive</a>
        </span>
        <span class="nav-utility-group">
          <a href="index.html">Search</a>
          <a href="index.html">Cart</a>
          <a href="index.html">Account</a>
          <a href="index.html">Login</a>
        </span>
      </nav>
      <nav class="collection-index" aria-label="Collection index">
        ${collectionLinks}
      </nav>
    </div>`;
}

function headerMarkup() {
  return `
    <header class="top-bar">
      <button class="brand-toggle" type="button" aria-label="Toggle menu" aria-expanded="true">
        <img class="brand-mark" src="assets/product_mein/Menu bar.png" alt="Perfect Adult mouth menu" onerror="this.src='assets/logo-mouth.png'">
      </button>
      <h1 class="brand-title">
        <a class="brand-home" href="index.html" aria-label="Go to main page">
          <img class="brand-logo" src="assets/graphics/top-logo.png" alt="聖人用品指針">
        </a>
      </h1>
    </header>`;
}

function renderShell(content) {
  document.body.innerHTML = `
    <div class="site-frame">
      ${headerMarkup()}
      ${navMarkup()}
      ${content}
    </div>
    <p class="footer-handle">@from.perfect adult</p>`;
}

function renderShop() {
  const params = new URLSearchParams(window.location.search);
  const activeCollection = params.get("collection");
  const selectedGroup = collectionGroups[activeCollection];
  const selectedProducts = selectedGroup
    ? products.filter((product) => selectedGroup.productIds.includes(product.id))
    : products;

  document.body.classList.add("menus-hidden");

  const introParagraphs = homeIntro.paragraphs
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
  const introFigures = homeIntro.figures
    .map(
      (figure) =>
        `<img class="${figure.className}" src="${versionMainImage(figure.src)}" alt="${figure.alt}">`,
    )
    .join("");
  const tiles = productTilesMarkup(selectedProducts);

  renderShell(`
    <main class="shop-page">
      <a class="home-intro-link" href="#product-list" aria-label="Go to perfect adult collection">
        <section class="home-intro" aria-label="Brand introduction">
          <div class="intro-copy">
            <h2>${homeIntro.title}</h2>
            ${introParagraphs}
          </div>
          <img class="intro-stamp" src="${versionMainImage(homeIntro.stampImage)}" alt="Perfect adult stamp">
          <div class="intro-figures" aria-label="Model images">
            ${introFigures}
          </div>
        </section>
      </a>
      <section class="shop-section" id="product-list" aria-label="Product collection">
        <div class="shop-grid">${tiles}</div>
      </section>
    </main>`);
  prepareProductHoverImages();
}

function renderManual() {
  document.body.classList.add("menus-hidden");

  renderShell(`
    <main class="manual-page">
      <header class="manual-heading">
        <p class="manual-eyebrow">MANUAL / BRAND STATEMENT</p>
        <h2>완벽한 어른 수행을 위한<br>표준 행동 지침서</h2>
      </header>

      <section class="manual-section" lang="ko">
        <p class="manual-language">KOREAN</p>
        <article class="manual-copy manual-document">
          <h3>완벽한 어른 수행을 위한 표준 행동 지침서</h3>
          <p>이 책은 완벽한 어른이 되는 법을 알려주는 자기계발서가 아니다. 이 책은 2030세대에게 “법적으로는 성인이나 사회적으로는 아직 부족한 사람”이라는 판정을 반복해서 부여하는 사회적 기준을 과장된 지침서 형식으로 드러내는 비판적 규범서다.</p>

          <h4>편집 방향</h4>
          <p>본문은 세 층위로 구성한다.</p>
          <ol>
            <li><strong>근거:</strong> 법, 조사, 연구, 전통 규범 등 실제로 확인 가능한 자료.</li>
            <li><strong>강령:</strong> 사회가 개인에게 요구하는 행동을 명령문으로 번역한 풍자적 문장.</li>
            <li><strong>제품:</strong> 강령을 수행하게 만드는 물리적 장치. 제품은 친절해 보이지만 실제로는 신체와 감정을 교정, 고정, 억제한다.</li>
          </ol>

          <h4>근거 사용 원칙</h4>
          <ul>
            <li>확인된 근거는 본문에 명시한다.</li>
            <li>확인이 필요한 수치는 “원문 확인 필요”로 표시한다.</li>
            <li>추가 항목은 반드시 기존 근거에서 도출된 해석임을 표시한다.</li>
            <li>제품 설명은 풍자적 창작물이지만, 제품이 겨냥하는 사회적 압력은 근거와 연결한다.</li>
            <li>시대 구분은 역사학의 엄밀한 시대 구분이라기보다 본 프로젝트의 분석을 위한 작업상 구분으로 사용한다.</li>
          </ul>

          <hr>
          <h3>핵심 명제</h3>
          <h4>완벽한 어른은 없다.</h4>
          <p>어른의 기준은 시대마다 변했다. 전통 사회의 어른은 질서와 가문을 지키는 사람이었고, 근대의 어른은 가족을 굶기지 않는 사람이었으며, 현대의 어른은 타인을 존중하고 감정을 조절하며 자기 삶을 관리하는 사람으로 요구된다.</p>
          <p>문제는 과거의 기준이 사라지지 않았다는 점이다. 현대 사회는 권위, 책임, 인내, 경제력, 희생, 성실을 제거한 뒤 공감과 자립을 요구하는 것이 아니다. 기존 요구 위에 감정관리, 자기계발, 사회성, 배려, SNS상의 자기 연출까지 계속 추가한다.</p>
          <p>즉 현대의 어른은 <strong>“삭제 없는 업데이트”를 반복하는 고사양 인간</strong>이다. 인간의 신체와 감정은 그대로인데, 사회가 요구하는 어른의 사양만 계속 높아진다.</p>
          <p>2030세대는 반드시 완벽한 어른이 되고 싶어서 이 기준을 따르기보다는 사회적 시선, 가족의 기대, 직장의 평가, 또래 비교, 경제적 불안 때문에 “어른처럼 보이는 수행”을 강요받는다. 이 지침서는 그 수행이 얼마나 불가능하고 기괴한지를 보여주기 위해 작성되었다.</p>

          <h4>구조적 모순: 왜 아무도 이 지침서를 달성할 수 없는가</h4>
          <p>대한민국 민법 제4조는 사람이 19세로 성년에 이른다고 규정한다. 그러나 법적 성년이 곧 사회적 어른을 의미하지는 않는다. 청소년기본법 제3조는 청소년을 9세 이상 24세 이하인 사람으로 정의한다. 한 제도에서는 이미 성년인 사람이 다른 제도에서는 청소년 범주에 포함될 수 있다.</p>
          <p>발달심리학에서도 전통적 성인기 구분은 흔들린다. Jeffrey J. Arnett은 2000년 논문에서 18세부터 20대 후반까지를 “성인 모색기”로 설명했다. 이 시기의 사람들은 스스로를 완전히 어른이라고도, 그렇지 않다고도 단정하기 어렵다.</p>
          <p>즉 문제는 개인이 미성숙해서가 아니다. 어른의 기준 자체가 법, 제도, 세대, 가족, 직장, 시장에 따라 서로 다르게 작동하기 때문이다. 사회는 이 상충하는 기준을 하나의 완성형 인간상으로 합쳐 개인에게 요구한다.</p>
          <p>본 지침서는 해결책을 제시하지 않는다. 다만 이 기준이 누구에 의해, 어떻게 설계되었는지를 직면하게 한다.</p>

          <hr>
          <h3>시대에 따라 변화한 어른의 기준</h3>
          <h4>전통시대</h4>
          <p>전통 사회의 어른은 공동체의 윤리적 기준이자 의사결정권자였다. 나이, 가문, 신분, 학식, 도덕성이 결합해 권위가 부여되었다. 어른은 개인으로 존재하기보다 가문과 공동체 질서의 대표자로 기능했다.</p>
          <p><strong>표준 어른의 기준</strong><br>사서삼경을 비롯한 유교적 교양, 엄격한 도덕성, 가문의 명예를 지키는 책임, 아랫세대를 가르칠 권위.</p>
          <p><strong>역할과 행동</strong><br>장유유서에 따라 아랫세대를 훈육한다. 희로애락을 함부로 드러내지 않는 진중함을 미덕으로 삼는다. 제사와 가문 유지, 공동체 질서 보존을 평생의 책임으로 여긴다.</p>
          <p><strong>현대 지침서로 번역하면</strong><br>“감정을 함부로 드러내지 말 것.”<br>“아랫세대에게 모범으로 보일 것.”<br>“가문의 체면을 손상시키지 말 것.”</p>

          <h4>근대</h4>
          <p>식민지, 전쟁, 산업화 시기를 거치며 어른의 기준은 도덕적 권위에서 생존 능력과 경제적 부양 능력으로 이동했다.</p>
          <p><strong>표준 어른의 기준</strong><br>가족을 부양할 경제력, 조직 안에서의 성과, 자신의 감정보다 생존과 결과를 우선하는 태도.</p>
          <p><strong>역할과 행동</strong><br>개인의 행복이나 감정적 요구보다 가족의 생계를 우선한다. 자녀에게 가난을 물려주지 않는 것을 사랑의 방식으로 여긴다. 말보다 행동과 결과로 책임감을 증명한다.</p>
          <p><strong>현대 지침서로 번역하면</strong><br>“피곤해도 기능할 것.”<br>“가족과 조직을 위해 감정을 미룰 것.”<br>“결과로 증명할 것.”</p>

          <h4>현대</h4>
          <p>현대 사회에서 어른은 더 이상 나이만으로 인정받지 않는다. 표준 어른은 타인을 존중하고, 강요보다 권유를 선택하며, 자신의 잘못을 인정하고 사과할 수 있는 사람으로 재정의된다.</p>
          <p><strong>표준 어른의 기준</strong><br>정서적 성숙, 소통 능력, 자기관리, 경제적 자립, 타인의 경계를 침범하지 않는 태도, 사회적 약자와 공동체 문제에 대한 시민의식.</p>
          <p><strong>현대 지침서로 번역하면</strong><br>“강요하지 말 것.”<br>“공감할 것.”<br>“사과할 것.”<br>“민폐가 되지 말 것.”<br>“계속 자기관리할 것.”</p>

          <hr>
          <h3>삼강행실도에서 「聖人用品 指針」로</h3>
          <p>삼강행실도는 충, 효, 열과 같은 유교적 덕목을 그림과 글로 교육한 조선시대의 생활 규범서다.</p>
          <p><strong>聖人用品 指針</strong>은 이 구조를 현대적으로 차용한다. 과거의 행실도가 충효열을 교육했다면, 이 지침서는 <strong>호감, 성실, 자립, 책임, 품위, 침묵</strong>을 교육한다.</p>
          <p><strong>강령:</strong> 사회가 개인에게 요구하는 표준을 행동 강령의 형태로 명문화한다.</p>
          <p><strong>제품:</strong> 그 강령을 일상에서 수행하기 위한 사회적 장비를 판매한다.</p>
          <p>인물은 항상 웃고 있는 마네킹에 가깝다. 표정은 친절하지만 감정은 비어 있다. 제품은 부드럽고 깨끗한 웰니스 상품처럼 보이지만 실제 기능은 사용자의 눈, 입, 목, 손, 자세, 감정 반응을 고정한다.</p>
          <p>각 강령의 한자명은 역사적 용어가 아니라 프로젝트의 세계관을 위해 만든 조어다.</p>
        </article>
      </section>

      <section class="manual-section" lang="en">
        <p class="manual-language">ENGLISH</p>
        <article class="manual-copy manual-document">
          <h3>A STANDARD CODE OF CONDUCT FOR PERFORMING THE PERFECT ADULT</h3>
          <p>This book is not a self-help guide that teaches readers how to become perfect adults. It is a critical book of norms that exposes, through the exaggerated form of a manual, the social standards that repeatedly judge people in their twenties and thirties as “legally adult, yet still socially inadequate.”</p>

          <h4>Editorial Direction</h4>
          <p>The text is organized into three layers.</p>
          <ol>
            <li><strong>Evidence:</strong> Verifiable materials such as laws, surveys, research, and traditional norms.</li>
            <li><strong>Codes:</strong> Satirical commands that translate the behavior society demands from individuals.</li>
            <li><strong>Products:</strong> Physical devices that make users perform the codes. The products appear friendly, but in practice they correct, fix, and suppress the body and emotions.</li>
          </ol>

          <h4>Principles for Using Evidence</h4>
          <ul>
            <li>Verified evidence is explicitly identified in the text.</li>
            <li>Figures requiring verification are marked “original source verification required.”</li>
            <li>Additional entries are identified as interpretations derived from existing evidence.</li>
            <li>Product descriptions are satirical creations, but the social pressures they target remain connected to evidence.</li>
            <li>Historical periods are working categories for this project’s analysis rather than strict historiographical divisions.</li>
          </ul>

          <hr>
          <h3>Core Proposition</h3>
          <h4>The perfect adult does not exist.</h4>
          <p>The standard of adulthood has changed across time. In traditional society, an adult protected order and family lineage. During modernization, an adult kept the family from going hungry. Today, an adult is expected to respect others, regulate emotions, and manage an independent life.</p>
          <p>The problem is that earlier standards never disappeared. Contemporary society did not remove authority, responsibility, endurance, financial capacity, sacrifice, and diligence before asking for empathy and independence. Emotional management, self-improvement, sociability, consideration, and self-presentation on social media have simply been added on top.</p>
          <p>The contemporary adult is therefore a <strong>high-specification human subjected to “updates without deletion.”</strong> The human body and emotions remain the same while society continuously raises the required specifications of adulthood.</p>
          <p>People in their twenties and thirties do not necessarily follow these standards because they wish to become perfect adults. Social scrutiny, family expectations, workplace evaluation, peer comparison, and economic insecurity compel them to perform the appearance of adulthood. This manual was written to reveal how impossible and strange that performance has become.</p>

          <h4>Structural Contradiction: Why No One Can Complete This Manual</h4>
          <p>Article 4 of the Civil Act of the Republic of Korea states that a person reaches adulthood at nineteen. Legal adulthood, however, does not automatically constitute social adulthood. Article 3 of the Framework Act on Juveniles defines a juvenile as a person between the ages of nine and twenty-four. A person may therefore be recognized as an adult in one system while remaining within the juvenile category in another.</p>
          <p>Developmental psychology also challenges conventional divisions of adulthood. In a 2000 paper, Jeffrey J. Arnett described the period from age eighteen through the late twenties as “emerging adulthood.” People in this period often find it difficult to define themselves as either fully adult or not adult.</p>
          <p>The problem is not simply individual immaturity. Standards of adulthood operate differently across law, public institutions, generations, families, workplaces, and markets. Society combines these conflicting standards into one completed human ideal and imposes it on individuals.</p>
          <p>This manual offers no solution. It asks the reader to confront who designed these standards and how they operate.</p>

          <hr>
          <h3>Changing Standards of Adulthood</h3>
          <h4>Traditional Era</h4>
          <p>In traditional society, an adult served as both the ethical standard and a decision-maker for the community. Authority arose from a combination of age, lineage, status, education, and morality. Adults functioned less as individuals than as representatives of family and communal order.</p>
          <p><strong>Standard of Adulthood</strong><br>Confucian learning, including the Four Books and Five Classics; strict morality; responsibility for family honor; and authority to instruct younger generations.</p>
          <p><strong>Roles and Behavior</strong><br>Discipline younger generations according to age hierarchy. Regard the restraint of joy, anger, sorrow, and pleasure as a virtue of seriousness. Treat ancestral rites, family continuity, and communal order as lifelong responsibilities.</p>
          <p><strong>Translated into a Contemporary Manual</strong><br>“Do not reveal emotion carelessly.”<br>“Appear exemplary to younger generations.”<br>“Do not damage the family’s dignity.”</p>

          <h4>Modernization Era</h4>
          <p>Through colonization, war, and industrialization, the standard of adulthood shifted from moral authority toward survival and the economic capacity to support a family.</p>
          <p><strong>Standard of Adulthood</strong><br>The financial ability to support a family, performance within an organization, and a willingness to prioritize survival and results over personal feelings.</p>
          <p><strong>Roles and Behavior</strong><br>Place the family’s livelihood before personal happiness or emotional needs. Understand the refusal to pass poverty to one’s children as a form of love. Prove responsibility through action and results rather than words.</p>
          <p><strong>Translated into a Contemporary Manual</strong><br>“Continue functioning while exhausted.”<br>“Postpone emotion for family and organization.”<br>“Prove yourself through results.”</p>

          <h4>Contemporary Era</h4>
          <p>In contemporary society, age alone no longer grants recognition as an adult. The standard adult is redefined as someone who respects others, chooses persuasion over coercion, acknowledges mistakes, and knows how to apologize.</p>
          <p><strong>Standard of Adulthood</strong><br>Emotional maturity, communication skills, self-management, financial independence, respect for others’ boundaries, and civic awareness of vulnerable groups and communal issues.</p>
          <p><strong>Translated into a Contemporary Manual</strong><br>“Do not coerce.”<br>“Empathize.”<br>“Apologize.”<br>“Do not inconvenience others.”<br>“Continue managing yourself.”</p>

          <hr>
          <h3>From Samgang Haengsildo to 「聖人用品 指針」</h3>
          <p><em>Samgang Haengsildo</em> was a Joseon-era manual that used images and text to teach Confucian virtues such as loyalty, filial piety, and fidelity.</p>
          <p><strong>聖人用品 指針</strong> reworks this structure for the present. Where the earlier conduct manual taught loyalty, filial piety, and fidelity, this manual teaches <strong>likability, diligence, independence, responsibility, dignity, and silence.</strong></p>
          <p><strong>Codes:</strong> The social standards demanded from individuals are formalized as behavioral directives.</p>
          <p><strong>Products:</strong> Social equipment is sold to help users perform those directives in everyday life.</p>
          <p>The figure resembles a mannequin that is always smiling. Its expression is friendly, yet emotionally empty. The products resemble soft, clean wellness goods, while their actual function is to fix the user’s eyes, mouth, neck, hands, posture, and emotional responses.</p>
          <p>The Chinese-character names of the codes are not historical terms. They are coined expressions created for the project’s fictional world.</p>
        </article>
      </section>
    </main>`);
}

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
          <p class="archive-project-meta">${product.title}<br>${product.price}</p>
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

function renderDetail() {
  document.body.classList.add("menus-hidden");

  const params = new URLSearchParams(window.location.search);
  const product =
    products.find((item) => item.id === params.get("id")) || products[0];
  const productIndex = Math.max(products.indexOf(product), 0);
  const body = product.body.map((paragraph) => `<p>${paragraph}</p>`).join("");
  const fallbackGallery = `<section class="detail-gallery detail-fallback-gallery" aria-label="Product images">
        <div class="detail-hero"><img src="${product.image}" alt="${product.name}"></div>
        <div class="detail-closeup"><img src="${product.image}" alt="${product.name} close view"></div>
      </section>`;
  const relatedTiles = productTilesMarkup();
  const openingTitleParts = product.name
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean);
  const longestOpeningTitle = Math.max(
    ...openingTitleParts.map((part) => part.length),
  );
  const openingTitleSizeClass =
    longestOpeningTitle > 11
      ? "is-long"
      : longestOpeningTitle > 7
        ? "is-medium"
        : "";
  const openingTitle = openingTitleParts
    .map((part) => `<span class="detail-opening-title-line">${part}</span>`)
    .join("");

  renderShell(`
    <main class="detail-layout">
      <section class="detail-opening" aria-hidden="true">
        <img class="detail-opening-graphic" alt="" data-graphic-candidates="${detailOpeningImageCandidates(product, productIndex).join("|")}">
        <p class="detail-opening-title ${openingTitleSizeClass}">${openingTitle}</p>
      </section>
      <section class="detail-gallery detail-gallery-scroll detail-page-gallery" aria-label="Product detail image" hidden>
        <img class="detail-scroll-image" alt="${product.name} scroll detail" data-detail-candidates="${detailPageImageCandidates(product, productIndex).join("|")}">
      </section>
      ${fallbackGallery}
      <button class="detail-info-toggle" type="button" aria-label="제품 상세 설명 보기" aria-controls="detail-info-overlay" aria-expanded="false">
        <img class="detail-info-stamp detail-info-stamp-red" src="assets/graphics/stamp_red.png" alt="">
        <img class="detail-info-stamp detail-info-stamp-gray" src="assets/graphics/stamp_gray.png" alt="">
      </button>
      <section class="detail-info-overlay" id="detail-info-overlay" aria-hidden="true">
        <h2>${product.name}</h2>
        <p class="detail-info-title">${product.title}</p>
        <p>${product.summary}</p>
        ${body}
      </section>
      <div class="detail-actions">
        <button class="buy" type="button" data-purchase-action="buy">BUY NOW</button>
        <button type="button" data-purchase-action="cart">ADD TO CART</button>
      </div>
      <div class="purchase-modal" aria-hidden="true">
        <button class="purchase-backdrop" type="button" data-purchase-close aria-label="Close purchase information"></button>
        <section class="purchase-dialog" role="dialog" aria-modal="true" aria-labelledby="purchase-product-name" tabindex="-1">
          <header class="purchase-dialog-header">
            <p class="purchase-mode">CART INFORMATION</p>
            <button type="button" data-purchase-close aria-label="Close">X</button>
          </header>
          <div class="purchase-dialog-body">
            <div class="purchase-product-image">
              <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="purchase-product-info">
              <p>${product.number}</p>
              <h2 id="purchase-product-name">${product.name}</h2>
              <p>${product.title}</p>
              <dl>
                <div><dt>PRICE</dt><dd>${product.price}</dd></div>
                <div class="purchase-quantity-row">
                  <dt>QUANTITY</dt>
                  <dd>
                    <button type="button" data-quantity="minus" aria-label="Decrease quantity">−</button>
                    <span class="purchase-quantity-value">1</span>
                    <button type="button" data-quantity="plus" aria-label="Increase quantity">+</button>
                  </dd>
                </div>
                <div><dt>TOTAL</dt><dd class="purchase-total-value">${product.price}</dd></div>
              </dl>
              <p class="purchase-message"></p>
            </div>
          </div>
          <p class="purchase-status" aria-live="polite"></p>
          <footer class="purchase-dialog-footer">
            <button type="button" data-purchase-close>CANCEL</button>
            <button class="purchase-confirm" type="button">ADD TO CART</button>
          </footer>
        </section>
      </div>
      <section class="detail-related-products" aria-label="Perfect Adult collection" hidden>
        <p class="detail-related-message" id="detail-related-message"><em>[Become socially optimized.]</em></p>
        <div class="detail-related-grid">${relatedTiles}</div>
      </section>
    </main>`);
  prepareDetailPageImage();
  prepareProductHoverImages();
  prepareDetailOpening();
  bindDetailInfoToggle();
  bindPurchaseModal(product);
}

if (document.body.dataset.page === "detail") {
  renderDetail();
} else if (document.body.dataset.page === "manual") {
  renderManual();
} else if (document.body.dataset.page === "archive") {
  renderArchive();
} else {
  renderShop();
}

fitToMonitor();
bindMenuToggle();
window.addEventListener("resize", fitToMonitor);
