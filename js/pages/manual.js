// 메뉴얼 페이지 출력
function renderManual() {
  document.body.classList.add("menus-hidden");

  renderShell(`
    <main class="manual-page">
      <section class="manual-intro" aria-labelledby="manual-intro-title">
        <h2 id="manual-intro-title">완벽한 어른을 사회적 기준에서 설계하다</h2>
        <div class="manual-intro-grid">
          <div class="manual-intro-column">
            <p>이 브랜드는 완벽한 어른이 된다는 것이 단순히 나이를 먹는 일이 아니라, 사회가 요구하는 수많은 기준을 충족하는 과정이라는 질문에서 출발했습니다.</p>
            <p>침착함, 책임감, 자립, 절제, 배려, 생산성을 모두 갖춘 태도를 유지해야 합니다. 사회는 어른이 갖추어야 할 수많은 조건을 제시하고, 우리는 그것을 자연스럽게 따라야 할 기준으로 받아들입니다.</p>
            <p><strong>聖人用品 指針</strong>은 이러한 사회적 기준을 하나의 제품 시스템으로 번역합니다.</p>
          </div>
          <div class="manual-intro-column">
            <p>사회가 이상적인 어른에게 요구하는 행동과 태도를 관찰하고, 이를 지침서와 제품의 형태로 구체화한 가상의 성인용품 브랜드입니다.</p>
            <p>각 제품은 자립, 책임, 절제, 경청, 감정 통제, 품위와 같은 사회적 덕목을 하나씩 수행하도록 설계되었습니다.</p>
            <p>완벽한 어른이 되는 일은 생각보다 간단합니다.<br>지침서를 따라 제품을 당신의 몸에 착용하면 됩니다.<br>그리고 모든 장치를 착용한 순간 당신은 완벽한 어른처럼 보이게 됩니다. 당신은 이제 완벽한 어른을 말하는 사회의 기준 그 자체입니다.</p>
          </div>
          <div class="manual-intro-column manual-intro-conclusion">
            <p>이 브랜드는 사용자를 완벽하게 만들어주지 않습니다.<br>다만, 완벽한 어른처럼 보이게는 만들어줍니다.</p>
          </div>
        </div>
        <div class="manual-intro-brand">
          <img src="assets/bottom_logo.png" alt="聖人用品 指針">
          <div class="manual-intro-brand-copy">
            <p>聖人用品: 완벽한어른</p>
            <p>The more you wear our products, the closer you become to the adult society expects. Wearing every piece, you look like a perfect adult, but you gradually lose yourself. [Become socially optimized]</p>
            <p>© 2026 Sangmyung University · Department of Communication Design. 2026 Graduation Project</p>
          </div>
        </div>
      </section>

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

  buildManualEditorialGrid();
}

// h3를 장 제목으로 사용해 왼쪽 제목 / 오른쪽 본문 구조를 자동 생성합니다.
function buildManualEditorialGrid() {
  document.querySelectorAll(".manual-section").forEach((section) => {
    const article = section.querySelector(".manual-document");
    const languageLabel = section.lang === "en" ? "EN" : "KR";
    const chapters = document.createDocumentFragment();
    let chapterNumber = 0;
    let chapterBody = null;

    Array.from(article.children).forEach((element) => {
      if (element.tagName === "HR") {
        chapterBody = null;
        return;
      }

      if (element.tagName === "H3") {
        chapterNumber += 1;

        const chapter = document.createElement("section");
        chapter.className = "manual-chapter manual-editorial-row";

        const rail = document.createElement("header");
        rail.className = "manual-rail";

        const kicker = document.createElement("p");
        kicker.className = "manual-kicker";
        kicker.textContent = `${languageLabel} / ${String(chapterNumber).padStart(2, "0")}`;

        const title = document.createElement("h2");
        title.innerHTML = element.innerHTML;
        rail.append(kicker, title);

        chapterBody = document.createElement("div");
        chapterBody.className = "manual-chapter-copy";
        chapter.append(rail, chapterBody);
        chapters.append(chapter);
        return;
      }

      if (chapterBody) chapterBody.append(element);
    });

    article.remove();
    section.querySelector(".manual-language")?.remove();
    section.append(chapters);

    section.querySelectorAll(".manual-chapter-copy").forEach((body) => {
      const groups = document.createDocumentFragment();
      let group = null;

      Array.from(body.children).forEach((element) => {
        if (!group || element.tagName === "H4") {
          group = document.createElement("div");
          group.className = "manual-subsection";
          groups.append(group);
        }
        group.append(element);
      });

      body.replaceChildren(groups);
      const count = body.children.length;
      body.dataset.columns = String(Math.min(count, 3));
      if (count === 1) body.firstElementChild?.classList.add("manual-subsection--flow");
    });
  });
}


renderManual();
fitToMonitor();
bindMenuToggle();
window.addEventListener("resize", fitToMonitor);
