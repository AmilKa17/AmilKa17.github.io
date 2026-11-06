const projects = {
  salon: {
    title: "Сайт с онлайн-записью",
    desc: "Демо для салонов и парикмахерских: услуги, мастера, запись в WhatsApp. Клиенты видят, как будет выглядеть их страница.",
    img: "assets/beta-site-preview.png",
    alt: "Скриншот демо-сайта салона красоты",
    primary: { href: "https://amilka17.github.io/beta-site/", label: "Открыть демо" },
    secondary: { href: "#cta", label: "Заказать сайт" },
  },
  fizmathub: {
    title: "ФизМатХаб ЛИ24",
    desc: "Портал достижений лицея: роли ученика и админа, заявки, рейтинг, учёт часов. React + Vite + Express + SQLite. Хакатон ЛИ24.",
    img: "assets/free-alphabet-chalkboard-books-image.webp",
    alt: "Школьная доска - атмосфера образовательного портала",
    primary: { href: "https://github.com/AmilKa17/fizmathub-li24", label: "Репозиторий" },
    secondary: { href: "#cta", label: "Спросить про проект" },
  },
  damirai: {
    title: "DamirAI",
    desc: "Голосовой ассистент для Windows с живыми обоями. Локальный продукт, собранный под реальный сценарий использования.",
    img: "assets/typewriter-ibm-corporation-selectric-1-model-71.jpg",
    alt: "Печатная машинка - метафора голосового ввода",
    primary: { href: "https://github.com/AmilKa17/damirai", label: "Репозиторий" },
    secondary: { href: "#cta", label: "Написать" },
  },
  learnai: {
    title: "LearnAI",
    desc: "Короткие AI-курсы: компактный продукт про обучение без лишнего интерфейса.",
    img: "assets/scissors.webp",
    alt: "Ножницы - точность и короткие форматы",
    primary: { href: "https://github.com/AmilKa17/learnai", label: "Репозиторий" },
    secondary: { href: "#cta", label: "Написать" },
  },
};

const img = document.getElementById("show-img");
const title = document.getElementById("show-title");
const desc = document.getElementById("show-desc");
const primary = document.getElementById("show-primary");
const secondary = document.getElementById("show-secondary");
const tabs = [...document.querySelectorAll(".tab")];

function showProject(key) {
  const p = projects[key];
  if (!p) return;
  img.src = p.img;
  img.alt = p.alt;
  title.textContent = p.title;
  desc.textContent = p.desc;
  primary.href = p.primary.href;
  primary.textContent = p.primary.label;
  secondary.href = p.secondary.href;
  secondary.textContent = p.secondary.label;
  tabs.forEach((tab) => {
    const on = tab.dataset.key === key;
    tab.classList.toggle("is-active", on);
    tab.setAttribute("aria-selected", on ? "true" : "false");
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => showProject(tab.dataset.key));
});

document.querySelectorAll("[data-show]").forEach((el) => {
  el.addEventListener("click", (e) => {
    const key = el.getAttribute("data-show");
    if (!projects[key]) return;
    e.preventDefault();
    showProject(key);
    document.getElementById("showcase").scrollIntoView({ behavior: "smooth" });
  });
});

const monument = document.querySelector(".monument");
const footerName = document.querySelector(".footer-name");

function onScroll() {
  if (!monument) return;
  const y = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);
  monument.style.transform = `scale(${1 - y * 0.06})`;
  if (footerName) {
    const rect = footerName.getBoundingClientRect();
    const visible = 1 - Math.min(Math.max(rect.top / window.innerHeight, 0), 1);
    footerName.style.transform = `scale(${0.94 + visible * 0.06})`;
  }
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

showProject("salon");
