// 菜单数据集中放在这里，后续替换产品、说明和价格会更方便。
const menuData = {
  "milk-tea": {
    title: "奶茶 · Milk Tea",
    items: [
      {
        name: "黑糖珍珠奶茶",
        description: "黑糖珍珠、鲜奶和红茶底，默认七分糖。",
        price: "￥16"
      },
      {
        name: "芋泥波波奶茶",
        description: "绵密芋泥搭配小波波，口感更扎实。",
        price: "￥18"
      },
      {
        name: "茉莉奶绿",
        description: "茉莉绿茶香气清爽，适合少糖或三分糖。",
        price: "￥15"
      },
      {
        name: "奥利奥奶茶",
        description: "奶茶加入奥利奥碎，甜度建议五分糖。",
        price: "￥17"
      }
    ]
  },
  coffee: {
    title: "咖啡 · Coffee",
    items: [
      {
        name: "生椰拿铁",
        description: "椰乳搭配浓缩咖啡，冰饮口感更清爽。",
        price: "￥20"
      },
      {
        name: "美式咖啡",
        description: "双份浓缩加水，干净直接，冷热可选。",
        price: "￥14"
      },
      {
        name: "拿铁咖啡",
        description: "浓缩咖啡与鲜奶搭配，口感柔和。",
        price: "￥18"
      },
      {
        name: "焦糖玛奇朵",
        description: "焦糖、奶泡与咖啡层次分明，甜香顺口。",
        price: "￥22"
      }
    ]
  },
  dessert: {
    title: "甜点 · Dessert",
    items: [
      {
        name: "蜂蜜黄油吐司",
        description: "现烤吐司搭配蜂蜜黄油，外脆内软。",
        price: "￥22"
      },
      {
        name: "抹茶红豆蛋糕",
        description: "抹茶微苦，红豆带甜，适合搭配咖啡。",
        price: "￥19"
      },
      {
        name: "奶油可颂",
        description: "酥皮可颂搭配轻奶油，每日限量。",
        price: "￥16"
      },
      {
        name: "芝士蛋糕",
        description: "奶香浓郁但不厚重，冷藏口感更好。",
        price: "￥18"
      }
    ]
  }
};

const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const menuList = document.querySelector("#menu-list");
const menuCategoryTitle = document.querySelector("#menu-category-title");
const tabButtons = document.querySelectorAll(".tab-btn");
const choiceGroups = document.querySelectorAll(".choice-group");
const preferenceResult = document.querySelector("#preference-result");

function closeMobileMenu() {
  navToggle.classList.remove("is-active");
  navMenu.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "打开导航菜单");
  document.body.classList.remove("menu-open");
}

function renderMenu(category) {
  const categoryData = menuData[category];

  menuCategoryTitle.textContent = categoryData.title;
  menuList.innerHTML = categoryData.items
    .map((item) => `
      <article class="menu-item">
        <div class="menu-item-header">
          <h3>${item.name}</h3>
          <span class="menu-line" aria-hidden="true"></span>
          <span class="menu-price">${item.price}</span>
        </div>
        <p>${item.description}</p>
      </article>
    `)
    .join("");
}

function updatePreferenceSummary() {
  const selectedValues = [...choiceGroups].map((group) => {
    return group.querySelector(".is-selected")?.dataset.value || "未选择";
  });

  preferenceResult.textContent = selectedValues.join(" · ");
}

function animateCounter(counter) {
  const target = Number(counter.dataset.target);
  const decimals = Number(counter.dataset.decimals || 0);
  const suffix = counter.dataset.suffix || "";
  const duration = 1300;
  const startTime = performance.now();

  function tick(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    const currentValue = target * easedProgress;

    counter.textContent = `${currentValue.toFixed(decimals)}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");

  navToggle.classList.toggle("is-active", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "关闭导航菜单" : "打开导航菜单");
  document.body.classList.toggle("menu-open", isOpen);
});

document.addEventListener("click", (event) => {
  const clickedOutsideMenu = !navMenu.contains(event.target) && !navToggle.contains(event.target);

  if (clickedOutsideMenu && navMenu.classList.contains("is-open")) {
    closeMobileMenu();
  }
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();
    closeMobileMenu();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;

    tabButtons.forEach((tab) => {
      const isActive = tab === button;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });

    renderMenu(category);
  });
});

choiceGroups.forEach((group) => {
  group.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      group.querySelectorAll("button").forEach((option) => {
        option.classList.toggle("is-selected", option === button);
      });

      updatePreferenceSummary();
    });
  });
});

// Add depth to the fixed header and keep the current section highlighted.
const observedSections = [...document.querySelectorAll("main section[id]")];
const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visibleEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visibleEntry) return;

    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${visibleEntry.target.id}`);
    });
  },
  {
    rootMargin: "-25% 0px -60% 0px",
    threshold: [0.05, 0.2, 0.4]
  }
);

observedSections.forEach((section) => sectionObserver.observe(section));

window.addEventListener(
  "scroll",
  () => {
    header.classList.toggle("is-scrolled", window.scrollY > 18);
  },
  { passive: true }
);

// Count each number once when the about section becomes visible.
const statsSection = document.querySelector("#shop-stats");
const statsObserver = new IntersectionObserver(
  (entries, observer) => {
    if (!entries[0].isIntersecting) return;

    statsSection.querySelectorAll(".counter").forEach(animateCounter);
    observer.disconnect();
  },
  { threshold: 0.45 }
);

statsObserver.observe(statsSection);

// Third-party effects are initialized only when their CDN scripts are available.
if (window.AOS) {
  AOS.init({
    duration: 650,
    easing: "ease-out-cubic",
    once: true,
    offset: 60,
    disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches
  });
}

if (window.Swiper) {
  new Swiper(".signature-swiper", {
    slidesPerView: 1,
    spaceBetween: 18,
    watchOverflow: true,
    grabCursor: true,
    pagination: {
      el: ".signature-swiper .swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom"
    },
    breakpoints: {
      700: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1040: {
        slidesPerView: 3,
        spaceBetween: 22
      }
    }
  });
}

renderMenu("milk-tea");
updatePreferenceSummary();
