"use strict";

if (module.hot) module.hot.accept();

import * as model from "./model";
import * as view from "./view";

import "core-js/stable";

//CONTROLLERS=============================================================================

function controlTypeBtnClick(e) {
  view.switchSelectionByClick(e);
  view.changeForm();
}

function controlArrowNavigation(e) {
  view.switchSelectionByKeyboard(e);
  view.changeForm();
}

function controlSubmit(name, type, value) {
  model.addNewMovement(name, type, value);
  model.saveLocalStorage();
  view.updateUI(model.state);
  view.nameInput.focus();
}

function controlDelete(id) {
  model.deleteMovement(id);
  model.saveLocalStorage();
  view.updateUI(model.state);
}

//====================================================================================

//Start the App
function init() {
  model.loadLocalStorage();
  view.updateUI(model.state);
  view.nameInput.focus();

  //Bind to nameInput
  view.addHandlerEnter();

  //Bind to typeBtnsContainer
  view.addHandlerBtnTypeClick(controlTypeBtnClick);

  //Bind to document
  view.addHandlerArrowNavigation(controlArrowNavigation);

  //Bind to form
  view.addHandlerSubmit(controlSubmit);

  //Bind to movementsList
  view.addHandlerDelete(controlDelete);
}
init();
