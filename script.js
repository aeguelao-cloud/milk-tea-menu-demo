// 菜单内容集中放在这里，后续可以直接修改产品、说明、价格和图片。
const menuData = {
  "milk-tea": {
    title: "奶茶 · Milk Tea",
    items: [
      {
        name: "黑糖珍珠奶茶",
        description: "黑糖珍珠、鲜奶和红茶底，默认七分糖。",
        price: "￥16",
        image: "https://images.pexels.com/photos/12666754/pexels-photo-12666754.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        name: "芋泥波波奶茶",
        description: "绵密芋泥搭配小波波，口感更扎实。",
        price: "￥18",
        image: "https://images.pexels.com/photos/27126830/pexels-photo-27126830.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        name: "茉莉奶绿",
        description: "茉莉茶香清爽，推荐三分糖或五分糖。",
        price: "￥15",
        image: "https://images.pexels.com/photos/8004574/pexels-photo-8004574.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        name: "奥利奥奶茶",
        description: "奶茶加入奥利奥碎，甜度建议五分糖。",
        price: "￥17",
        image: "https://images.pexels.com/photos/9271564/pexels-photo-9271564.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        name: "红豆奶茶",
        description: "软糯红豆搭配经典奶茶，冷热可选。",
        price: "￥16",
        image: "https://images.pexels.com/photos/12666754/pexels-photo-12666754.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        name: "抹茶奶盖",
        description: "抹茶茶底配轻奶盖，入口微苦回甘。",
        price: "￥19",
        image: "https://images.pexels.com/photos/8004574/pexels-photo-8004574.jpeg?auto=compress&cs=tinysrgb&w=400"
      }
    ]
  },
  coffee: {
    title: "咖啡 · Coffee",
    items: [
      {
        name: "生椰拿铁",
        description: "椰乳搭配浓缩咖啡，冰饮口感更清爽。",
        price: "￥20",
        image: "https://images.pexels.com/photos/27548784/pexels-photo-27548784.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        name: "美式咖啡",
        description: "双份浓缩加水，干净直接，冷热可选。",
        price: "￥14",
        image: "https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        name: "拿铁咖啡",
        description: "浓缩咖啡与鲜奶搭配，口感柔和。",
        price: "￥18",
        image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        name: "焦糖玛奇朵",
        description: "焦糖、奶泡与咖啡搭配，甜香顺口。",
        price: "￥22",
        image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        name: "燕麦拿铁",
        description: "燕麦奶搭配浓缩，谷物香气更明显。",
        price: "￥21",
        image: "https://images.pexels.com/photos/27548784/pexels-photo-27548784.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        name: "海盐奶盖咖啡",
        description: "冰咖啡配轻咸奶盖，层次更丰富。",
        price: "￥20",
        image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400"
      }
    ]
  },
  dessert: {
    title: "甜点 · Dessert",
    items: [
      {
        name: "蜂蜜黄油吐司",
        description: "现烤吐司配蜂蜜黄油，外脆内软。",
        price: "￥22",
        image: "https://images.pexels.com/photos/5199134/pexels-photo-5199134.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        name: "抹茶红豆蛋糕",
        description: "抹茶微苦，红豆带甜，适合配咖啡。",
        price: "￥19",
        image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        name: "奶油可颂",
        description: "酥皮可颂搭配轻奶油，每日限量。",
        price: "￥16",
        image: "https://images.pexels.com/photos/2693447/pexels-photo-2693447.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        name: "芝士蛋糕",
        description: "奶香柔和，冷藏后口感更细腻。",
        price: "￥18",
        image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        name: "巧克力蛋糕",
        description: "巧克力味浓郁，甜度不会太重。",
        price: "￥20",
        image: "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        name: "原味司康",
        description: "外层微酥，搭配咖啡或奶茶都合适。",
        price: "￥12",
        image: "https://images.pexels.com/photos/2693447/pexels-photo-2693447.jpeg?auto=compress&cs=tinysrgb&w=400"
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
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <div class="menu-item-copy">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
        </div>
        <strong class="menu-price">${item.price}</strong>
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
  const duration = 1100;
  const startTime = performance.now();

  function tick(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    counter.textContent = `${(target * easedProgress).toFixed(decimals)}${suffix}`;

    if (progress < 1) requestAnimationFrame(tick);
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
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    closeMobileMenu();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((tab) => {
      const isActive = tab === button;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });

    renderMenu(button.dataset.category);
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
  () => header.classList.toggle("is-scrolled", window.scrollY > 18),
  { passive: true }
);

const statsSection = document.querySelector("#shop-stats");
const statsObserver = new IntersectionObserver(
  (entries, observer) => {
    if (!entries[0].isIntersecting) return;
    statsSection.querySelectorAll(".counter").forEach(animateCounter);
    observer.disconnect();
  },
  { threshold: 0.4 }
);

statsObserver.observe(statsSection);

if (window.AOS) {
  AOS.init({
    duration: 480,
    easing: "ease-out",
    once: true,
    offset: 35,
    disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches
  });
}

if (window.Swiper) {
  new Swiper(".signature-swiper", {
    slidesPerView: 1,
    spaceBetween: 16,
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
        spaceBetween: 18
      },
      1040: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });
}

renderMenu("milk-tea");
updatePreferenceSummary();
