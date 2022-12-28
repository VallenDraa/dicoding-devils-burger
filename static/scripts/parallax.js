const jumbotronWrapper = document.querySelector(".jumbotron-wrapper");

export default function parallaxInit() {
  window.addEventListener("scroll", () => {
    if (window.scrollY < 900) {
      jumbotronWrapper.style.backgroundPosition = `right ${
        window.scrollY / 2.5
      }px `;
    }
  });
}
