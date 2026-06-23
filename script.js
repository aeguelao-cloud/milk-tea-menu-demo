// Menu content is centralized here so future client menu updates are simple.
const menuData = {
  "milk-tea": [
    {
      name: "Classic Milk Tea",
      description: "Black tea, fresh milk and mellow sweetness.",
      price: "$4.20"
    },
    {
      name: "Brown Sugar Pearl Latte",
      description: "Brown sugar pearls, fresh milk and creamy tea foam.",
      price: "$5.20"
    },
    {
      name: "Jasmine Milk Tea",
      description: "Light jasmine tea blended with milk and soft cream.",
      price: "$4.60"
    },
    {
      name: "Oat Milk Tea",
      description: "Plant-based oat milk, roasted tea and gentle sweetness.",
      price: "$4.90"
    }
  ],
  coffee: [
    {
      name: "Americano",
      description: "Clean espresso with hot water, simple and balanced.",
      price: "$3.60"
    },
    {
      name: "Caramel Cloud Coffee",
      description: "Espresso, milk foam and a light caramel drizzle.",
      price: "$4.80"
    },
    {
      name: "Vanilla Latte",
      description: "Smooth espresso with steamed milk and vanilla notes.",
      price: "$4.50"
    },
    {
      name: "Cold Brew Cream",
      description: "Slow-steeped coffee with sweet cream and ice.",
      price: "$4.90"
    }
  ],
  dessert: [
    {
      name: "Honey Butter Toast",
      description: "Crispy toast, honey butter and soft cream topping.",
      price: "$5.20"
    },
    {
      name: "Matcha Tiramisu",
      description: "Creamy mascarpone, matcha powder and cake layers.",
      price: "$5.60"
    },
    {
      name: "Cream Cheese Cake",
      description: "Light cheesecake slice with a mellow milk finish.",
      price: "$4.80"
    },
    {
      name: "Mango Pudding",
      description: "Fresh mango flavor with silky pudding texture.",
      price: "$3.90"
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

renderMenu("milk-tea");
