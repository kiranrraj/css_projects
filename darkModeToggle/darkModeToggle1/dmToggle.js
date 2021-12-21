const theme = localStorage.getItem('theme');
const toggle = document.querySelector('.toggle');
console.log(theme);

if (theme === "light") document.body.classList.add("lightMode");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("lightMode");
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
    } else window.localStorage.setItem("theme", "light");
 });
 