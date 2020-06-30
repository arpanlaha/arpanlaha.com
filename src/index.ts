import "./styles/main.scss";

let theme = localStorage.getItem("theme") ?? "light";
let design = localStorage.getItem("design") ?? "neu";

const setTheme = (): void =>
  document.body.classList[theme === "light" ? "remove" : "add"]("dark");

const setDesign = (): void =>
  ["switch", "second-panel", "main-image", "about", "social", "h4i-project"]
    .map((className) => Array.from(document.getElementsByClassName(className)))
    .forEach((neuClass) =>
      neuClass.forEach((neuElement) =>
        neuElement.classList[design === "neu" ? "remove" : "add"]("flat")
      )
    );

setTheme();
setDesign();

// if (design !== "nue") {
//   ["switch", "second-panel", "main-image", "about", "social", "h4i-project"]
//     .map((className) => Array.from(document.getElementsByClassName(className)))
//     .forEach((neuClass) =>
//       neuClass.forEach((neuElement) => neuElement.classList.add("flat"))
//     );
// }

const themeSwitch = document.getElementById(
  "theme-switch"
) as HTMLButtonElement;

const designSwitch = document.getElementById(
  "design-switch"
) as HTMLButtonElement;

themeSwitch.addEventListener("click", function () {
  this.classList.add("no-hover");
  theme = theme === "light" ? "dark" : "light";
  setTheme();
});

themeSwitch.addEventListener("mousedown", (e) => e.preventDefault());

themeSwitch.addEventListener("mouseleave", function () {
  this.classList.remove("no-hover");
});

designSwitch.addEventListener("click", function () {
  this.classList.add("no-hover");
  design = design === "neu" ? "flat" : "neu";
  setDesign();
});

designSwitch.addEventListener("mousedown", (e) => e.preventDefault());

designSwitch.addEventListener("mouseleave", function () {
  this.classList.remove("no-hover");
});
