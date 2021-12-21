const toggle = document.querySelector('.toggle');
const root = document.documentElement;

toggleColorMode();

function getCurrentTheme() {
  let theme = root.hasAttribute("data-theme");
  if (theme) return root.getAttribute("data-theme");

  const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");
  if (colorScheme.matches === true) return "dark";
  return "light";
}

console.log(getCurrentTheme());

function toggleColorMode(){
  const currentTheme = getCurrentTheme();

  if (currentTheme === "dark") {
    root.setAttribute("data-theme", "light");
    toggle.textContent = "Dark";
  } else {
    root.setAttribute("data-theme", "dark");
    toggle.textContent = "Light";
  }
}



toggle.addEventListener("click", () => {
  toggleColorMode();
});
