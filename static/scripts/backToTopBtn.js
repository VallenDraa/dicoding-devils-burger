const backToTopBtn = document.querySelector(".btn-to-top");
const totalHeight = document.querySelector("body").scrollHeight;
let isOn = false;

export default function backToTopchecker() {
  if ((window.scrollY / totalHeight) * 100 > 5) {
    if (!isOn) {
      isOn = true;

      backToTopBtn.classList.remove("btn-to-top-off");
    }
  } else {
    isOn = false;
    backToTopBtn.classList.add("btn-to-top-off");
  }
}
