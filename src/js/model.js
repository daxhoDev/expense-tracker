import { getJSON } from "./helpers";

class Movement {
  id = Date.now();
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}

class Income extends Movement {
  type = "income";
  constructor(name, value) {
    super(name, value);
  }
}

class Expense extends Movement {
  type = "expense";
  constructor(name, value) {
    super(name, value);
  }
}

//==============================================================================================

export let state = {
  movements: [],
  total: 0,
};

// export const country = {
//   code,
//   flagURL,
//   currency,
//   ip,

//   // TODO: Add country data fetching funcionality
// };

//Calculate total balance based on movements
function calcTotal() {
  state.total = state.movements.reduce((acc, mov) => acc + mov.value, 0);
}

//Creating a new movement
export function addNewMovement(name, type, value) {
  const newMovement =
    type === "income" ? new Income(name, value) : new Expense(name, -value);
  state.movements.push(newMovement);
  calcTotal();
}

//Deleting a movement
export function deleteMovement(id) {
  state.movements = state.movements.filter(mov => mov.id !== id);
  calcTotal();
}

export function loadLocalStorage() {
  if (localStorage.length === 0) return;
  state = JSON.parse(localStorage.getItem("state"));
  calcTotal();
}

export function saveLocalStorage() {
  localStorage.setItem("state", JSON.stringify(state));
}
