import "./styles/main.scss";

let theme = localStorage.getItem("theme") ?? "light";
let design = localStorage.getItem("design") ?? "neu";

const updateTheme = (): void => {
  document.body.classList[theme === "light" ? "remove" : "add"]("dark");

  (document.getElementById(
    "theme-switch-current"
  ) as HTMLImageElement).src = `/static/${
    theme === "light" ? "sun" : "moon"
  }.svg`;

  (document.getElementById(
    "theme-switch-other"
  ) as HTMLImageElement).src = `/static/${
    theme === "light" ? "moon" : "sun"
  }.svg`;
};

const updateDesign = (): void => {
  [
    "switch",
    "second-panel",
    "main-image",
    "about",
    "social",
    "h4i-project",
    "side-project",
  ]
    .map((className) => Array.from(document.getElementsByClassName(className)))
    .forEach((neuClass) =>
      neuClass.forEach((neuElement) =>
        neuElement.classList[design === "neu" ? "remove" : "add"]("flat")
      )
    );

  (document.getElementById(
    "design-switch-current"
  ) as HTMLSpanElement).textContent = design === "neu" ? "neu" : "flat";

  (document.getElementById(
    "design-switch-other"
  ) as HTMLSpanElement).textContent = design === "neu" ? "flat" : "neu";
};

updateTheme();
updateDesign();

const themeSwitch = document.getElementById(
  "theme-switch"
) as HTMLButtonElement;

const designSwitch = document.getElementById(
  "design-switch"
) as HTMLButtonElement;

themeSwitch.addEventListener("click", function () {
  this.classList.add("no-hover");
  theme = theme === "light" ? "dark" : "light";
  localStorage.setItem("theme", theme === "light" ? "light" : "dark");
  updateTheme();
});

themeSwitch.addEventListener("mousedown", (e) => e.preventDefault());

themeSwitch.addEventListener("mouseleave", function () {
  this.classList.remove("no-hover");
});

designSwitch.addEventListener("click", function () {
  this.classList.add("no-hover");
  design = design === "neu" ? "flat" : "neu";
  localStorage.setItem("design", design === "neu" ? "neu" : "flat");

  updateDesign();
});

designSwitch.addEventListener("mousedown", (e) => e.preventDefault());

designSwitch.addEventListener("mouseleave", function () {
  this.classList.remove("no-hover");
});
