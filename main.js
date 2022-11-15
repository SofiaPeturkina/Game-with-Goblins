/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/movingGoblin.js
class MovingGoblin {
  moving() {
    setInterval(() => {
      this.goblin = document.querySelector(".hole_has-goblin");
      const randomIndex = Math.floor(1 + Math.random() * 16 - 1 + 1);
      const nextGoblin = document.getElementById(`hole${randomIndex}`);
      if (this.goblin) {
        this.goblin.classList.remove("hole_has-goblin");
      }
      nextGoblin.classList.add("hole_has-goblin");
    }, 1000);
  }
}
;// CONCATENATED MODULE: ./src/js/eventHandingGame.js

class EventHandingGame {
  constructor() {
    this.element = document.querySelector(".hole-field");
    this.element.addEventListener("click", EventHandingGame.onGoblinClick);
    this.Goblin = new MovingGoblin().moving();
  }
  static onGoblinClick(e) {
    if (e.target.classList.contains("hole_has-goblin")) {
      document.getElementById("got").textContent = Number(document.getElementById("got").textContent) + 1;
      e.target.classList.remove("hole_has-goblin");
    } else {
      document.getElementById("miss").textContent = Number(document.getElementById("miss").textContent) + 1;
      if (document.getElementById("miss").textContent > 4) {
        alert("Вы проиграли. Начните сначала");
        document.getElementById("miss").textContent = 0;
        document.getElementById("got").textContent = 0;
      }
    }
  }
}
const game = new EventHandingGame();
game.Goblin;
;// CONCATENATED MODULE: ./src/index.js




/******/ })()
;