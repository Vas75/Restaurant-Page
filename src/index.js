import makeAbout from "./about-module.js";
import makeMenu from "./menu-module.js";
import makeContact from "./contact-module.js";

(function () {
  makeAbout();

  const nav = document.querySelector("nav");
  const navBtns = document.querySelectorAll("button");
  const contentDiv = document.getElementById("content");

  //depending on which btn clicked, runs module, which populates contents div
  const runCorrectModule = (e) => {
    const btnID = e.target.id;
    clearContentsDiv();

    if (btnID === "about") {
      makeAbout();
    } else if (btnID === "menu") {
      makeMenu();
    } else if (btnID === "contact") {
      makeContact();
    }
  };

  //clear old stuff from contents div when new contents of a module are added to contents div
  const clearContentsDiv = () => {
    contentDiv.innerHTML = "";
  };

  //add 'selected' class to clicked btn, remove the class from other buttons
  const makeBtnSelected = (e) => {
    navBtns.forEach((btn) => {
      if (btn.id === e.target.id) {
        btn.classList.add("selected");
      } else {
        btn.classList.remove("selected");
      }
    });
  };

  //eventlisteners//
  nav.addEventListener("click", (e) => {
    if (e.target.type === "button") {
      runCorrectModule(e);
      makeBtnSelected(e);
    }
  });
})();
