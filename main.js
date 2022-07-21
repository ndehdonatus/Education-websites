const bars = document.querySelector("#open-menu-btn");
const menuBars = document.querySelector(".menu");
bars.addEventListener("click", () => {
  menuBars.classList.toggle("active");
});

const child = document.querySelectorAll(".child");

child.forEach((child) => {
  child.addEventListener("click", () => {
    child.classList.toggle("open");
  });
});
