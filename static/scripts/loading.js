const loadingScreen = document.querySelector(".loading-screen");

export default function hideLoadingScreen() {
  setTimeout(() => {
    loadingScreen.style.animation =
      "hide-loading-screen 500ms var(--ini-baru-keren)";

    setTimeout(() => {
      loadingScreen.style.display = "none";
      document.body.style.overflowY = "auto";
    }, 480);
  }, 1000);
}
