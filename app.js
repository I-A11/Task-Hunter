// navbar
const links = document.querySelector(".links");
const toggleBtn = document.querySelector(".toggle");

toggleBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
