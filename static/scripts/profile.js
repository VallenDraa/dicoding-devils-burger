const showProfileBtn = document.querySelector(".btn-show-profile");
const profile = document.querySelector(".profile");

export default function profileInit() {
  showProfileBtn.addEventListener("click", () => {
    profile.classList.toggle("profile-showing");
    showProfileBtn.classList.toggle("btn-show-profile-open");
  });
}
