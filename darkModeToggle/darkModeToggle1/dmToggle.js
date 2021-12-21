let theme;
const toggle = document.querySelector('.toggle');

// Load the previous user selected colour mode
(() => {
  theme = localStorage.getItem('theme');
  if (theme === "light") document.body.classList.add("lightMode");
})();


function darkToLight() {
  document.body.classList.toggle("lightMode");
  window.localStorage.setItem("theme", "light");
  toggle.textContent = 'Dark';
}

function lightToDark() {
  document.body.classList.toggle("lightMode");
  window.localStorage.setItem("theme", "dark");
  toggle.textContent = 'Light';
}

toggle.addEventListener("click", () => {
  theme = localStorage.getItem('theme');
  // console.log(theme);
  if (theme === "light") {
    lightToDark();
  } else {
    darkToLight();
  }
});
