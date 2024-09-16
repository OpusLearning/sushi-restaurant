import "./styles.css";
import { addHome } from "./home";
import { addAbout } from "./about";
import { addMenu } from "./menu";
import { addContact } from "./contact";

function removeActiveClass() {
  const tabs = document.querySelectorAll("nav ul li");
  tabs.forEach((tab) => tab.classList.remove("active"));
}

function handleTabClick(tabId, contentFunction) {
  removeActiveClass();
  document.getElementById(tabId).classList.add("active");
  contentFunction();
}

document
  .getElementById("tabHome")
  .addEventListener("click", () => handleTabClick("tabHome", addHome));
document
  .getElementById("tabAbout")
  .addEventListener("click", () => handleTabClick("tabAbout", addAbout));
document
  .getElementById("tabMenu")
  .addEventListener("click", () => handleTabClick("tabMenu", addMenu));
document
  .getElementById("tabContact")
  .addEventListener("click", () => handleTabClick("tabContact", addContact));

handleTabClick("tabHome", addHome);
