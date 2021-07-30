// navbar
const links = document.querySelector(".links");
const toggleBtn = document.querySelector(".toggle");

toggleBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// hero section
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const heroHeight = hero.getBoundingClientRect().height;
  if (scrollHeight > 100) {
    hero.style.height = "100%";
  } else {
    hero.style.height = "#100vh";
  }
});
