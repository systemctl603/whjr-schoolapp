let documentRoot = document.documentElement;
let colorTheme = "dark";

function colorSwitch() {
  if (colorTheme == "dark") {
    documentRoot.style.setProperty("--text-color", "#171616");
    documentRoot.style.setProperty("--bg-color", "#fafafa");
    colorTheme = "light";
  } else {
    documentRoot.style.setProperty("--text-color", "#fafafa");
    documentRoot.style.setProperty("--bg-color", "#171616");
    colorTheme = "dark";
  }
}
