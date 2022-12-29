import { burgersData } from "./scripts.js";

const topPick = document.querySelector(".top-pick");
const runnerUpPickOne = document.querySelector(
  ".picks-runner-ups .picks-item:first-of-type"
);
const runnerUpPickTwo = document.querySelector(
  ".picks-runner-ups .picks-item:last-of-type"
);
const menuList = document.querySelector(".menu-list");

function updateTopPicks(pickHTML, burgerData) {
  pickHTML.style.background = `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.6)), url('${burgerData.image}')`;
  pickHTML.style.backgroundPosition = `center`;
  pickHTML.querySelector(".picks-item-title").textContent = burgerData.name;
  pickHTML.querySelector(".picks-item-desc").textContent =
    burgerData.description;
  pickHTML.querySelector(
    ".picks-item-price"
  ).textContent = `$${burgerData.price}`;
  pickHTML
    .querySelector(".btn-order")
    .setAttribute("data-menu-id", burgerData.id);
}

function cardMenuBgString(url) {
  return `background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('${url}')`;
}

export default async function loadMenu() {
  // update data ke pilihan menu teratas
  updateTopPicks(topPick, burgersData[0]);
  updateTopPicks(runnerUpPickOne, burgersData[1]);
  updateTopPicks(runnerUpPickTwo, burgersData[2]);

  // update data ke menu lainnya
  for (let i = 3; i < burgersData.length; i++) {
    const menuListItem = document.createElement("li");
    menuListItem.classList.add("menu-list-item");
    menuListItem.innerHTML = `
      <figure 
        class="menu-card" 
        style="${cardMenuBgString(burgersData[i].image)}"
      >
        <figcaption class="menu-card-detail">
          <h3 class="menu-card-title">${burgersData[i].name}</h3>
          <p class="menu-card-desc">
            ${burgersData[i].description}
          </p>
          <span class="menu-card-price">$${burgersData[i].price}</span>
        </figcaption>
        <button data-menu-id="${
          burgersData[i].id
        }" class="btn btn-submit btn-order">Add To Orders</button>
      </figure>
    `;

    menuList.append(menuListItem);
  }
}
