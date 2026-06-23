// 菜单内容集中放在这里，后续给客户改产品和价格会比较方便。
const menuData = {
  recommend: [
    {
      name: "黑糖珍珠奶茶",
      description: "黑糖珍珠现煮，茶味和奶味都比较稳，默认七分糖。",
      price: "￥16"
    },
    {
      name: "生椰拿铁",
      description: "椰乳搭配咖啡，口感清爽，适合下午提神。",
      price: "￥20"
    },
    {
      name: "蜂蜜黄油吐司",
      description: "现烤吐司，外层微脆，适合堂食慢慢吃。",
      price: "￥22"
    }
  ],
  "milk-tea": [
    {
      name: "黑糖珍珠奶茶",
      description: "黑糖珍珠、鲜奶和红茶底，甜度可选。",
      price: "￥16"
    },
    {
      name: "芋泥波波奶茶",
      description: "芋泥口感绵密，搭配小波波，喝起来更有饱腹感。",
      price: "￥18"
    },
    {
      name: "茉莉奶绿",
      description: "茉莉绿茶香气清爽，适合少糖或三分糖。",
      price: "￥15"
    },
    {
      name: "抹茶红豆奶盖",
      description: "抹茶、红豆和轻奶盖组合，甜度建议五分糖。",
      price: "￥19"
    }
  ],
  "coffee-dessert": [
    {
      name: "生椰拿铁",
      description: "咖啡香和椰乳香都不会太重，冰饮更清爽。",
      price: "￥20"
    },
    {
      name: "抹茶红豆奶盖",
      description: "抹茶底带一点回甘，红豆和奶盖更适合堂食。",
      price: "￥19"
    },
    {
      name: "蜂蜜黄油吐司",
      description: "现烤约 6 分钟，适合搭配热饮或两个人分着吃。",
      price: "￥22"
    }
  ]
};

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const menuList = document.querySelector("#menu-list");
const tabButtons = document.querySelectorAll(".tab-btn");

function closeMobileMenu() {
  navToggle.classList.remove("is-active");
  navMenu.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

function renderMenu(category) {
  const items = menuData[category];

  menuList.innerHTML = items
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

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");

  navToggle.classList.toggle("is-active", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
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

renderMenu("recommend");
