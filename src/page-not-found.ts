if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
if (localStorage.getItem("design") === "flat") {
  ["error-message", "return"]
    .map((className) => Array.from(document.getElementsByClassName(className)))
    .forEach((neuClass) =>
      neuClass.forEach((neuElement) => neuElement.classList.add("flat"))
    );
}
