import { burgersData } from "./scripts.js";

const ordersList = document.querySelector(".orders-list");
const resetBtn = document.querySelector(".btn-reset");

let selectedMenuIds = [];

function newOrder(id) {
  const menuData = burgersData.find((burger) => burger.id === id);

  const orderItem = document.createElement("li");
  orderItem.classList.add("orders-item");
  orderItem.innerHTML = `
    <img
      src="${menuData.image}"
      alt="${menuData.name}"
      class="orders-img"
    />

    <div class="orders-detail">
      <span class="orders-name">${menuData.name}</span>
      <span class="orders-price">$${menuData.price}</span>
    </div>

    <button type="button" class="btn btn-cancel btn-unorder" data-menu-id="${id}">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `;

  return orderItem;
}

function emptyOrders() {
  ordersList.innerHTML = `
    <li class="orders-empty">
      <span class="orders-empty-title">
        Order List Is Empty      
      </span>
      <p class="orders-empty-desc">
        Add some burgers to the list by clicking <em>Add To Orders</em>
      </p>
    </li>
  `;
}

function loadSavedOrder() {
  const prevOrder = JSON.parse(localStorage.getItem("order"));

  if (prevOrder) {
    selectedMenuIds.push(...prevOrder);

    if (selectedMenuIds.length == 0) {
      emptyOrders();
    } else {
      selectedMenuIds.forEach((id) => ordersList.append(newOrder(id)));
    }
  }
}

export default function orderInit() {
  loadSavedOrder();

  window.addEventListener("click", (e) => {
    // untuk menambahkan burger ke order
    if (e.target.classList.contains("btn-order")) {
      document.querySelector(".orders-empty")?.remove();

      const id = parseInt(e.target.getAttribute("data-menu-id"));

      if (!selectedMenuIds.includes(id)) {
        selectedMenuIds.push(id);
        ordersList.append(newOrder(id));
      }

      localStorage.setItem("order", JSON.stringify(selectedMenuIds));
    }

    if (
      e.target.classList.contains("btn-unorder") ||
      e.target.parentElement.classList.contains("btn-unorder")
    ) {
      // menghapus orderan
      let removedOrder = e.target;
      let targetId;

      while (!removedOrder.classList.contains("orders-item")) {
        removedOrder = removedOrder.parentElement;
      }

      targetId = !e.target.getAttribute("data-menu-id")
        ? parseInt(e.target.parentElement.getAttribute("data-menu-id"))
        : parseInt(e.target.getAttribute("data-menu-id"));

      removedOrder.remove();
      selectedMenuIds = selectedMenuIds.filter((id) => id !== targetId);
      localStorage.setItem("order", JSON.stringify(selectedMenuIds));

      // cek jika orderan kosong
      if (selectedMenuIds.length == 0) emptyOrders();
    }
  });

  resetBtn.addEventListener("click", () => {
    if (selectedMenuIds.length == 0) return;

    emptyOrders();
    selectedMenuIds = [];
    localStorage.setItem("order", JSON.stringify(selectedMenuIds));
  });
}
