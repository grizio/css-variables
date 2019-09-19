const themingDarkMode = document.getElementById("themingDarkMode")
const themingAccessibility = document.getElementById("themingAccessibility")

themingDarkMode.addEventListener("change", (event) => {
  if (event.target.checked) {
    document.body.classList.add("dark-mode")
  } else {
    document.body.classList.remove("dark-mode")
  }
})
themingAccessibility.addEventListener("change", (event) => {
  if (event.target.checked) {
    document.body.classList.add("a11y")
  } else {
    document.body.classList.remove("a11y")
  }
})





















