import makeAbout from "./about-module.js";
// import makeMenu from "./menu-module.js"; //todo

makeAbout();

const myCode = (function () {
  const nav = document.querySelector("nav");
  const navBtns = document.querySelectorAll("button");
  const contentDiv = document.getElementById("content");

  const runCorrectModule = (e) => {
    const btnID = e.target.id;
    clearContentsDiv();

    if (btnID === "about") {
      makeAbout();
    } else if (btnID === "menu") {
      console.log("menu button pressed!");
    } else if (btnID === "contact") {
      console.log("contact btn pressed");
    }
  };

  const clearContentsDiv = () => {
    contentDiv.innerHTML = "";
  };

  const makeBtnSelected = (e) => {
    const activeBtn = e.target;

    navBtns.forEach((btn) => {
      if (btn === activeBtn) {
        btn.classList.add("selected");
      } else {
        btn.classList.remove("selected");
      }
    });
  };

  nav.addEventListener("click", (e) => {
    if (e.target.type === "button") {
      runCorrectModule(e);
      makeBtnSelected(e);
    }
  });
  return {};
})();
