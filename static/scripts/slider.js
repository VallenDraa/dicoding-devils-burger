const menuList = document.querySelector(".menu-list");
const prevBtn = document.querySelector(".menu-prev-btn");
const nextBtn = document.querySelector(".menu-next-btn");

const menuCardWidth = 320;

export default function sliderInit() {
  nextBtn.addEventListener(
    "click",
    () => (menuList.scrollLeft += menuCardWidth)
  );

  prevBtn.addEventListener(
    "click",
    () => (menuList.scrollLeft -= menuCardWidth)
  );
}
