console.log("hello world");

const toggle = document.querySelector("#themeToggle");
const root = document.documentElement;

toggle.addEventListener("click", function () {
  const isDark = root.getAttribute("data-theme") === "dark";

  if (isDark) {
    root.removeAttribute("data-theme");
    toggle.textContent = "Night mode";
    toggle.setAttribute("aria-pressed", "false");
  } else {
    root.setAttribute("data-theme", "dark");
    toggle.textContent = "Day mode";
    toggle.setAttribute("aria-pressed", "true");
  }
});