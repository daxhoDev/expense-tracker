import closeIcon from "url:../img/close-icon.png";

//DOM elements=============================================================================

export const nameInput = document.querySelector(".form__input-field--name");
const valueInput = document.querySelector(".form__input-field--value");
const form = document.querySelector(".main-section__form");
const addBtn = document.querySelector(".form__add");
const movementsList = document.querySelector(".main-section__movements");
const spanTotalValue = document.getElementById("value");
const spanCurrency = document.getElementById("currency");
const typeBtnsContainer = document.querySelector(".type-buttons");
const typeBtns = document.querySelectorAll(".type-button");

//============================================================================

function emptyFields() {
  movementsList.innerHTML = "";
  nameInput.value = "";
  valueInput.value = "";
}

function displayEmpty(movements) {
  if (movements.length === 0) {
    movementsList.insertAdjacentHTML(
      "afterbegin",
      `<li class="movement movement--empty">No movements recorded</li>`
    );
  }
}

function renderMovements(state) {
  state.movements.forEach((mov) => {
    //prettier-ignore
    const markup = `
    <li class="movement" data-id="${mov.id}">
        <p>
          <span>
            <span class="mobile-type mobile-type--${mov.type}"></span>
            <span class="type type--${mov.type}">${mov.type.toUpperCase()}</span>
            ${mov.name}
          </span>
          <span class="value">${mov.value} ${state.currency}</span>
        </p>
        <button class="delete">
            <img class="delete-img" src="${closeIcon} alt="closing x">
        </button>
    </li>
    `;

    movementsList.insertAdjacentHTML("afterbegin", markup);
  });

  spanTotalValue.textContent = state.total;
  spanCurrency.textContent = state.currency;
}

//TODO: Add country data displaying funcionality
export function switchSelectionByClick(e) {
  typeBtns.forEach((el) => {
    el.classList.remove("selected");
  });
  e.target.classList.add("selected");
}

export function switchSelectionByKeyboard(e) {
  if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;

  //Dont switch while typing
  if (
    document.activeElement.classList.contains("form__input-field") &&
    document.activeElement.value !== ""
  )
    return;

  typeBtns.forEach((el) => {
    el.classList.toggle("selected");
  });
}

export function changeForm() {
  const typeText = document
    .querySelector(".selected")
    .textContent.trim()
    .toLowerCase();
  nameInput.placeholder = `${typeText[0].toUpperCase()}${typeText.slice(
    1
  )} name`;
  form.dataset.type = typeText;

  addBtn.classList.remove("form__add--income", "form__add--expense");
  addBtn.classList.add(`form__add--${typeText}`);
}

export function updateUI(state) {
  emptyFields();
  renderMovements(state);
  displayEmpty(state.movements);
}

//EVENT LISTENERS=======================================================================

export function addHandlerEnter() {
  nameInput.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    valueInput.focus();
  });
}

export function addHandlerSubmit(handler) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value;
    const value = Number(valueInput.value);
    const type = form.dataset.type;
    if (!name || !value) return;

    handler(name, type, value);
  });
}

export function addHandlerDelete(handler) {
  movementsList.addEventListener("click", (e) => {
    const btn = e.target.closest(".delete");
    if (!btn) return;
    const id = Number(btn.closest(".movement").dataset.id);
    handler(id);
  });
}

export function addHandlerArrowNavigation(handler) {
  document.addEventListener("keydown", handler);
}

export function addHandlerBtnTypeClick(handler) {
  typeBtnsContainer.addEventListener("click", handler);
}
