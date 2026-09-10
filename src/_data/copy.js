// 홈페이지에 들어가는 모든 문구가 이 파일 하나에 모여 있습니다.
// 가격과 사진은 언어별로 나뉘지 않고 한 곳에만 적혀 있어서, 한 번만 고치면 양쪽에 반영됩니다.

export default {
  langs: ["en", "ko"],
  home: { en: "/", ko: "/ko/" },
  newsList: { en: "/news/", ko: "/ko/news/" },

  meta: {
    title: {
      en: "CheongDamChae | Naengsam & Korean BBQ in Telok Ayer, Singapore",
      ko: "청담채 CheongDamChae | Telok Ayer 한식 삼겹살 맛집 — 냉삼·쭈삼·파삼",
    },
    description: {
      en: "Naengsam in Singapore — Duroc pork belly sliced to 4.5mm and grilled on bare cast iron at CheongDamChae, Telok Ayer Street. Also jusam (spicy baby octopus) and pasam. Open daily 11:00–23:30.",
      ko: "싱가포르 텔록아이어 한식당 청담채. 듀록 품종 삼겹살을 4.5mm 두께로 구워내는 냉삼, 매콤한 쭈삼, 무쇠파절임삼겹살까지. 매일 11:00–23:30 영업, 8080 5181.",
    },
    ogTitle: {
      en: "Naengsam done right | CheongDamChae, Telok Ayer Singapore",
      ko: "청담채 CheongDamChae | Telok Ayer 한식 삼겹살 맛집",
    },
    ogDescription: {
      en: "Naengsam — Duroc pork belly grilled on cast iron, with banchan made fresh every day. Honest Korean BBQ on Telok Ayer Street.",
      ko: "듀록 품종 삼겹살 냉삼·쭈삼·파삼, 정성 가득한 밑반찬. 텔록아이어에서 만나는 정직한 한식 바베큐.",
    },
    ogImageAlt: {
      en: "CheongDamChae pasam — pork belly grilled on cast iron with pickled spring onion",
      ko: "청담채 파삼 — 무쇠 철판에 구운 삼겹살과 파절임",
    },
    locale: { en: "en_SG", ko: "ko_KR" },
    ldDescription: {
      en: "Korean BBQ restaurant on Telok Ayer Street, Singapore. Known for naengsam — Duroc pork belly sliced to 4.5mm and grilled on bare cast iron — plus jusam (spicy baby octopus and pork belly) and cast iron pasam.",
      ko: "싱가포르 텔록아이어의 한식 삼겹살 전문점. 듀록 품종 삼겹살을 4.5mm 두께로 구워내는 냉삼, 매콤한 쭈삼, 무쇠파절임삼겹살 파삼.",
    },
  },

  nav: {
    signature: { en: "Signature", ko: "대표메뉴" },
    menu: { en: "Menu", ko: "메뉴" },
    sotbap: { en: "Hot Pot Rice", ko: "솥밥" },
    space: { en: "The Space", ko: "매장" },
    why: { en: "Our Story", ko: "이야기" },
    news: { en: "News", ko: "소식" },
    visit: { en: "Visit", ko: "오시는 길" },
    callToBook: { en: "Call to book", ko: "예약 전화하기" },
    bookOnline: { en: "Book online", ko: "온라인 예약하기" },
    openMenu: { en: "Open menu", ko: "메뉴 열기" },
  },

  hero: {
    eyebrow: "Telok Ayer, Singapore",
    h1: { en: "Naengsam, done right", ko: "냉삼, 제대로 굽다" },
    h1sub: {
      en: "냉삼, 제대로 굽다 — since day one at Telok Ayer",
      ko: "Naengsam, done right — since day one at Telok Ayer",
    },
    lede: {
      en: "Duroc pork belly, sliced to 4.5mm and grilled on bare cast iron. Served with banchan we make fresh every morning — a lunchtime regular for the Telok Ayer crowd.",
      ko: "무쇠철판 위에서 듀록 삼겹살을 4.5mm로 슬라이스해 굽는 청담채의 시그니처 냉삼. 매일 새롭게 준비하는 밑반찬과 함께, 직장인들의 인기 점심 장소!",
    },
    ctaBook: { en: "Reserve a table", ko: "예약하기" },
    ctaMenu: { en: "See signature dishes", ko: "대표메뉴 보기" },
  },

  common: {
    address: "123 Telok Ayer St, Singapore 068592",
    addressFull: "123 Telok Ayer Street, Singapore 068592",
    hours: {
      en: "Daily 11:00 – 23:30 (last order 22:30)",
      ko: "매일 11:00 – 23:30 (라스트오더 22:30)",
    },
    phone: "8080 5181",
    imgNote: {
      en: "Some images are illustrations based on our actual dishes, so what arrives at your table may look a little different.",
      ko: "실제 제공하는 메뉴와 달라 보일 수 있지만, 실제 메뉴를 기초로 만든 이미지임을 말씀드립니다.",
    },
    ask: { en: "Ask us", ko: "문의" },
    switchTo: { en: "한국어로 보기", ko: "View in English" },
    switchShort: { en: "한국어", ko: "English" },
  },

  sections: {
    signature: {
      label: { en: "Signature", ko: "대표메뉴" },
      title: "Our Signature Dishes",
      intro: {
        en: "Three cuts of pork belly. Same pig — the preparation is what changes everything.",
        ko: "청담채를 대표하는 삼겹살 3종.<br>같은 고기지만 준비방식에서부터 맛의 차이가 달라집니다.",
      },
    },
    more: {
      label: { en: "More", ko: "메뉴 더보기" },
      title: "More From The Kitchen",
      intro: {
        en: "Soups, stews and rice bowls to round out the barbecue.",
        ko: "BBQ에서 반찬부터 찌개까지 든든하게 챙겨드려요.",
      },
    },
    sotbap: {
      label: { en: "Hot Pot Rice", ko: "솥밥" },
      title: "Hot Pot Rice",
      intro: {
        en: "Rice cooked to order in a stone pot — with the crisp nurungji at the bottom to finish.",
        ko: "갓 지은 밥과 누룽지를 동시에 즐길 수 있는 든든한 한 끼.",
      },
    },
    space: {
      label: { en: "The Space", ko: "매장" },
      title: "The Space",
      intro: {
        en: "A small Korean restaurant on a Telok Ayer side street. Come with the team, or come alone — both work here.",
        ko: "텔록아이어 골목의 작은 한식당. 회식도, 혼밥도 편하게 오세요.",
      },
    },
    why: {
      label: { en: "Our Story", ko: "청담채 이야기" },
      title: "Why CheongDamChae",
    },
    news: {
      label: { en: "News", ko: "소식" },
      title: "What's New",
      intro: {
        en: "New dishes, ingredient stories and what's happening at the restaurant.",
        ko: "새 메뉴, 재료 이야기, 매장 소식을 전해드립니다.",
      },
      more: { en: "All news →", ko: "소식 전체 보기 →" },
    },
    visit: {
      label: { en: "Visit", ko: "오시는 길" },
      title: "Visit Us",
      addressLabel: { en: "Address", ko: "주소" },
      hoursLabel: { en: "Opening hours", ko: "영업시간" },
      phoneLabel: { en: "Phone", ko: "전화" },
      instagramLabel: { en: "Instagram", ko: "인스타그램" },
      bookTitle: { en: "Reserve a table", ko: "테이블 예약하기" },
      bookBody: {
        en: "From a table for two to a room for the whole team — dinners, drinks, anything in between. Book online, or just give us a call.",
        ko: "단체석부터 2인 테이블까지, 회식이나 소소한 술 한잔 모두 환영이에요. 온라인으로 바로 예약하시거나, 전화로 편하게 문의 주세요.",
      },
      callBtn: { en: "Call us", ko: "전화 문의" },
    },
  },

  signature: [
    {
      num: "01",
      img: "/images/naengsam.webp",
      alt: {
        en: "CheongDamChae naengsam — 4.5mm Duroc pork belly laid out on a cast iron plate",
        ko: "청담채 냉삼 — 무쇠 철판 위에 펼쳐 놓은 4.5mm 두께의 듀록 삼겹살",
      },
      name: { en: "Naengsam", ko: "냉삼" },
      sub: { en: "냉삼 · Frozen Pork Belly", ko: "Naengsam · Frozen Pork Belly" },
      desc: {
        en: "Duroc pork belly — a breed prized worldwide — flash-frozen and sliced to a golden 4.5mm, then grilled on clean cast iron with no foil. Wrap it in lettuce with ssamjang, and finish with fried rice in the leftover fat.",
        ko: "세계적으로 인정받는 듀록 품종 삼겹살을 급속 냉동해 4.5mm 황금 두께로 슬라이스. 호일 없이 깨끗한 철판 위에서 구워, 쌈장과 상추에 싸 먹거나 남은 기름에 볶음밥으로 마무리해요.",
      },
      prices: [
        { label: { en: "1kg", ko: "1kg" }, amt: "SGD 68.80++" },
        { label: { en: "600g", ko: "600g" }, amt: "SGD 48.80++" },
      ],
    },
    {
      num: "02",
      reverse: true,
      img: "/images/jusam.webp",
      alt: {
        en: "CheongDamChae jusam — baby octopus stir-fried with sliced pork belly in chilli sauce",
        ko: "청담채 쭈삼 — 주꾸미와 슬라이스 삼겹살을 매콤한 소스에 볶아낸 요리",
      },
      name: { en: "Jusam", ko: "쭈삼" },
      sub: {
        en: "쭈삼 · Spicy Baby Octopus &amp; Pork Belly",
        ko: "Jusam · Spicy Baby Octopus &amp; Pork Belly",
      },
      desc: {
        en: "Springy baby octopus and sliced pork belly tossed in our own chilli sauce and stir-fried. The heat builds slowly as you chew, and keeps you reaching for more.",
        ko: "쫄깃한 주꾸미와 슬라이스 삼겹살을 매콤한 비법 소스에 버무려 볶아내는 메뉴예요. 씹을수록 은은하게 올라오는 매운맛이 계속 손이 가게 만들어요.",
      },
      prices: [{ label: { en: "Per serving", ko: "1인분" }, amt: "SGD 48.80++" }],
    },
    {
      num: "03",
      img: "/images/pasam.webp",
      alt: {
        en: "CheongDamChae pasam — pork belly grilled on cast iron with pickled spring onion and enoki",
        ko: "청담채 파삼 — 무쇠 철판에 둘러 구운 삼겹살과 파절임, 팽이버섯",
      },
      name: { en: "Pasam", ko: "파삼" },
      nameNote: {
        en: "(Cast Iron Pork Belly with Spring Onion)",
        ko: "(무쇠파절임삼겹살)",
      },
      sub: {
        en: "파삼 · Cast Iron Grilled Pork Belly with Green Onion Salad",
        ko: "Cast Iron Grilled Pork Belly with Green Onion Salad",
      },
      desc: {
        en: "Pork belly browned on a screaming-hot cast iron plate, then piled with crisp pickled spring onion, enoki mushrooms and garlic chives. Rich meat, sharp and fresh on top.",
        ko: "달군 무쇠판 위에서 노릇하게 구운 삼겹살에 아삭한 파절임과 팽이버섯, 부추를 곁들여 상큼하게 즐기는 메뉴예요.",
      },
      prices: [{ label: { en: "240g", ko: "240g" }, amt: "SGD 48.80++" }],
    },
  ],

  more: [
    {
      img: "/images/kkori-gomtang.webp",
      alt: {
        en: "CheongDamChae ox tail soup — clear broth in an earthenware pot",
        ko: "청담채 꼬리곰탕 — 뚝배기에 담긴 맑은 국물과 소꼬리",
      },
      name: { en: "Ox Tail Soup", ko: "꼬리곰탕" },
      sub: { en: "꼬리곰탕 · Kkori Gomtang", ko: "Ox Tail Soup" },
      desc: {
        en: "Oxtail soaked for 6 hours to draw out the blood, then simmered another 8. Deep, clean and rich.",
        ko: "소꼬리를 6시간 핏물 빼고 8시간 정성껏 끓여낸 진한 국물.",
      },
      price: "SGD 28.80++",
    },
    {
      img: "/images/udae-galbitang.webp",
      alt: {
        en: "CheongDamChae big bone beef soup — clear galbitang with egg garnish",
        ko: "청담채 우대갈비탕 — 우대갈비와 지단을 올린 맑은 갈비탕",
      },
      name: { en: "Big Bone Beef Soup", ko: "우대갈비탕" },
      sub: { en: "우대갈비탕 · Udae Galbitang", ko: "Big Bone Beef Soup" },
      desc: {
        en: "Premium long-bone short rib simmered into a clear, deeply flavoured broth.",
        ko: "프리미엄 우대갈비로 맑고 깊은 육수를 낸 갈비탕.",
      },
      price: "SGD 24.80++",
    },
    {
      img: "/images/kkomak-bibimbap.webp",
      alt: {
        en: "CheongDamChae cockle mixed rice — seasoned cockles with seaweed and sesame",
        ko: "청담채 꼬막비빔밥 — 양념 꼬막과 김, 참깨를 올린 비빔밥",
      },
      name: { en: "Cockle Mixed Rice", ko: "꼬막비빔밥" },
      sub: { en: "꼬막비빔밥 · Kkomak Bibimbap", ko: "Cockle Mixed Rice" },
      desc: {
        en: "Fresh cockles in our own seasoning — bibimbap the way they make it down south.",
        ko: "싱싱한 꼬막살과 비법 양념을 더한 남도식 비빔밥.",
      },
      price: "SGD 19.80++",
    },
    {
      img: "/images/kimchi-jjigae.webp",
      alt: {
        en: "CheongDamChae kimchi stew — aged kimchi and pork in an earthenware pot",
        ko: "청담채 김치찌개 — 뚝배기에 묵은지와 돼지고기를 넣고 끓인 찌개",
      },
      name: { en: "Kimchi Stew", ko: "김치찌개" },
      sub: { en: "김치찌개 · Kimchi Jjigae", ko: "Kimchi Stew" },
      desc: {
        en: "Well-aged kimchi simmered into a hearty, punchy stew.",
        ko: "잘 익은 김치로 얼큰하게 끓여낸 든든한 한 그릇.",
      },
      price: null,
    },
    {
      img: "/images/sundubu-jjigae.webp",
      alt: {
        en: "CheongDamChae sundubu stew — soft tofu with prawn, clams and egg yolk",
        ko: "청담채 순두부찌개 — 뚝배기에 순두부와 새우, 조개, 계란을 올린 찌개",
      },
      name: { en: "Sundubu Stew", ko: "순두부찌개" },
      sub: { en: "순두부찌개 · Sundubu Jjigae", ko: "Sundubu Stew" },
      desc: {
        en: "Silken tofu stew — choose seafood or beef.",
        ko: "부드러운 순두부와 해물, 소고기 중 선택 가능.",
      },
      price: null,
    },
    {
      img: "/images/doenjang-jjigae.webp",
      alt: {
        en: "CheongDamChae doenjang stew — tofu and courgette in soybean paste stew",
        ko: "청담채 된장찌개 — 뚝배기에 두부와 애호박을 넣고 끓인 된장찌개",
      },
      name: { en: "Doenjang Stew", ko: "된장찌개" },
      sub: { en: "된장찌개 · Doenjang Jjigae", ko: "Doenjang Stew" },
      desc: {
        en: "Soybean paste stew — savoury, homely, the everyday one.",
        ko: "구수한 된장으로 끓여낸 정겨운 한 그릇.",
      },
      price: null,
    },
    {
      img: "/images/gochujang-jjigae.webp",
      alt: {
        en: "CheongDamChae gochujang stew — pork and potato in spicy chilli paste stew",
        ko: "청담채 고추장찌개 — 뚝배기에 돼지고기와 감자를 넣고 얼큰하게 끓인 찌개",
      },
      name: { en: "Gochujang Stew", ko: "고추장찌개" },
      sub: { en: "고추장찌개 · Gochujang Jjigae", ko: "Gochujang Stew" },
      desc: {
        en: "Sharp, spicy chilli paste stew with a clean finish.",
        ko: "칼칼하고 매콤하게 즐기는 얼큰한 찌개.",
      },
      price: "SGD 17.80",
    },
    {
      img: "/images/korean-bakute.webp",
      alt: {
        en: "CheongDamChae Korean style bakute — pork ribs in clear broth with spring onion",
        ko: "청담채 한국식 바쿠테 — 뚝배기에 돼지갈비와 대파를 올린 맑은 국물 요리",
      },
      name: { en: "Korean Style Bakute", ko: "한국식 바쿠테" },
      sub: { en: "한국식 바쿠테 · Hanguksik Bakute", ko: "Korean Style Bakute" },
      desc: {
        en: "Our own take on bak kut teh — pork ribs in a clear Korean-style broth. You won't find this anywhere else.",
        ko: "청담채만의 시그니처 퓨전 메뉴, 한국식 바쿠테. 청담채에서만 만날 수 있는 특별한 메뉴예요.",
      },
      price: "SGD 21.80",
    },
    {
      img: "/images/bukeo-haejangguk.webp",
      alt: {
        en: "CheongDamChae dried pollock soup — dried fish, bean sprouts and tofu in clear broth",
        ko: "청담채 콩나물 북어 해장국 — 뚝배기에 북어와 콩나물, 두부를 넣고 끓인 맑은 해장국",
      },
      name: { en: "Dried Fish Clear Soup", ko: "콩나물 북어 해장국" },
      sub: { en: "콩나물 북어 해장국 · Kongnamul Bugeo Haejangguk", ko: "Dried Fish Clear Soup" },
      desc: {
        en: "Dried pollock and bean sprouts in a clean broth — the Korean cure for the morning after.",
        ko: "속을 편안하게 달래주는 건강한 북어 해장국. 담백하고 든든한 정통 한식을 만나보세요.",
      },
      price: null,
    },
  ],

  sotbap: [
    {
      img: "/images/sotbap-galbisal.webp",
      alt: {
        en: "Illustration of CheongDamChae short rib hot pot rice with egg yolk and spring onion",
        ko: "청담채 갈비살 솥밥 일러스트 — 솥밥 위에 구운 갈비살과 노른자, 쪽파",
      },
      name: { en: "Prime Rib Hot Pot Rice", ko: "갈비살 솥밥" },
      sub: { en: "갈비살 솥밥 · Galbisal Sotbap", ko: "Prime Rib Hot Pot Rice" },
      desc: {
        en: "Tender short rib over stone pot rice — our most generous bowl.",
        ko: "부드러운 갈비살을 올린 든든한 솥밥. 청담채에서 만나는 프리미엄 한식 경험이에요.",
      },
    },
    {
      img: "/images/sotbap-la-galbi.webp",
      alt: {
        en: "Illustration of CheongDamChae LA galbi hot pot rice",
        ko: "청담채 LA갈비 솥밥 일러스트 — 솥밥 위에 올린 양념 LA갈비",
      },
      name: { en: "LA Galbi Hot Pot Rice", ko: "LA갈비 솥밥" },
      sub: { en: "LA갈비 솥밥 · LA Galbi Sotbap", ko: "LA Galbi Hot Pot Rice" },
      desc: {
        en: "Sweet marinated LA galbi over hot pot rice — a quiet favourite here.",
        ko: "달콤한 LA갈비를 올린 솥밥. 텔록아이어에서 만나는 숨은 인기 메뉴예요.",
      },
    },
    {
      img: "/images/sotbap-jangeo.webp",
      alt: {
        en: "Illustration of CheongDamChae freshwater eel hot pot rice with spring onion and sesame",
        ko: "청담채 민물장어 솥밥 일러스트 — 솥밥 위에 올린 양념 민물장어와 쪽파, 참깨",
      },
      name: { en: "Freshwater Eel Hot Pot Rice", ko: "민물장어 솥밥" },
      sub: { en: "민물장어 솥밥 · Minmul Jangeo Sotbap", ko: "Freshwater Eel Hot Pot Rice" },
      desc: {
        en: "Glazed freshwater eel over rice — rich and restorative.",
        ko: "영양 가득한 민물장어 솥밥. 정통 한식을 찾는 분들을 위해 정성껏 준비했어요.",
      },
    },
    {
      img: "/images/sotbap-myeongran.webp",
      alt: {
        en: "Illustration of CheongDamChae cod roe hot pot rice with egg yolk and spring onion",
        ko: "청담채 명란 솥밥 일러스트 — 솥밥 위에 구운 명란과 노른자, 쪽파",
      },
      name: { en: "Cod Roe Hot Pot Rice", ko: "명란 솥밥" },
      sub: { en: "명란 솥밥 · Myeongran Sotbap", ko: "Cod Roe Hot Pot Rice" },
      desc: {
        en: "Grilled cod roe over rice — deeply savoury, quietly addictive.",
        ko: "감칠맛 가득한 명란을 올린 솥밥. 전통과 현대가 공존하는 청담채의 숨은 메뉴예요.",
      },
    },
    {
      img: "/images/sotbap-samgyeop.webp",
      alt: {
        en: "Illustration of CheongDamChae grilled pork belly hot pot rice with spring onion and sesame",
        ko: "청담채 삼겹구이 솥밥 일러스트 — 솥밥 위에 올린 구운 삼겹살과 쪽파, 참깨",
      },
      name: { en: "Duroc Pork Belly Hot Pot Rice", ko: "삼겹구이 솥밥" },
      sub: { en: "삼겹구이 솥밥 · Samgyeop Gui Sotbap", ko: "Duroc Pork Belly Hot Pot Rice" },
      desc: {
        en: "Grilled Duroc pork belly over stone pot rice.",
        ko: "듀록 품종 삼겹살을 올린 솥밥. 텔록아이어에서 만나는 진짜 한식의 맛이에요.",
      },
    },
    {
      img: "/images/sotbap-gaji-beef.webp",
      alt: {
        en: "Illustration of CheongDamChae eggplant and beef hot pot rice with sesame",
        ko: "청담채 가지 소고기 솥밥 일러스트 — 솥밥 위에 올린 소고기와 가지, 참깨",
      },
      name: { en: "Eggplant & Beef Hot Pot Rice", ko: "가지 소고기 솥밥" },
      sub: { en: "가지 소고기 솥밥 · Gaji Sogogi Sotbap", ko: "Eggplant &amp; Beef Hot Pot Rice" },
      desc: {
        en: "Braised eggplant and beef over rice — soft, savoury, and everything soaks in.",
        ko: "정성껏 손으로 만든 특별한 한 그릇. 청담채가 미식가들 사이에서 사랑받는 이유예요.",
      },
    },
  ],

  space: [
    {
      img: "/images/space-storefront.webp",
      wide: true,
      alt: {
        en: "CheongDamChae storefront — the sign and entrance at 123 Telok Ayer Street",
        ko: "청담채 가게 정면 — 텔록아이어 123번지 간판과 입구",
      },
    },
    {
      img: "/images/space-hall.webp",
      alt: {
        en: "CheongDamChae dining room — grills and extraction hoods over every table",
        ko: "청담채 홀 전경 — 테이블마다 구이판과 후드가 설치된 매장 내부",
      },
    },
    {
      img: "/images/space-table.webp",
      alt: {
        en: "A full CheongDamChae table — grill in the middle, banchan, stew and meat around it",
        ko: "청담채 테이블 한 상 — 구이판을 중심으로 반찬과 찌개, 고기가 차려진 상차림",
      },
    },
  ],

  why: [
    {
      icon: "broth",
      title: { en: "Broth simmered for 8 hours", ko: "8시간 정성껏 끓인 육수" },
      body: {
        en: "For our ox tail soup, the oxtail soaks for 6 hours to draw out the blood, then simmers for another 8. It takes as long as it takes — that's how we do it.",
        ko: "꼬리곰탕은 소꼬리를 6시간 핏물 빼고 8시간 동안 끓여내 진하고 깊은 맛을 내요. 시간이 걸려도 제대로 만드는 게 청담채의 방식이에요.",
      },
    },
    {
      icon: "banchan",
      title: { en: "Banchan made fresh daily", ko: "매일 준비하는 반찬" },
      body: {
        en: "Small restaurant, big effort. We season and pickle the side dishes fresh every day, so they reach you tasting the way they should.",
        ko: "작은 식당이지만 정성만큼은 크게. 밑반찬을 매일 새로 무치고 담가, 신선한 맛을 그대로 전해드려요.",
      },
    },
    {
      icon: "stew",
      title: { en: "Stews worth the pot", ko: "정성스런 찌개" },
      body: {
        en: "Gochujang, doenjang, sundubu — brought to the table still bubbling in the earthenware pot. A bite of meat and a spoon of hot broth, and the meal is complete.",
        ko: "고추장찌개, 된장찌개, 순두부찌개. 뚝배기에 팔팔 끓여 그대로 상에 올려드려요. 고기 한 점에 뜨거운 국물 한 술이면 한 끼가 완성돼요.",
      },
    },
  ],
};
