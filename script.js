const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
function dark() {
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
    } else {
        document.body.classList.toggle("dark-theme");
    }
}



