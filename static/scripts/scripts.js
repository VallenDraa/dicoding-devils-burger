import backToTopchecker from "./backToTopBtn.js";
import hideLoadingScreen from "./loading.js";
import loadMenu from "./loadMenu.js";
import navbarInit from "./navbar.js";
import orderInit from "./order.js";
import parallaxChecker from "./parallax.js";
import profileInit from "./profile.js";
import sliderInit from "./slider.js";

// inisialisasi data burger
export const burgersData = [];

const { burgers } = await fetch("static/burgers.json").then((res) =>
  res.json()
);
burgersData.push(...burgers);

navbarInit();
sliderInit();
profileInit();
loadMenu();
orderInit();

window.addEventListener("scroll", () => {
  backToTopchecker();
  parallaxChecker();
});

// sembunyikan loading screen jika semua sudah di load
hideLoadingScreen();
