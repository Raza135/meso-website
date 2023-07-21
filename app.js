function windowScroll(section, offsetTop) {
  const yPos = section.offsetTop;
  console.log(yPos, offsetTop);
  window.scroll({
    top: yPos + offsetTop,
    left: 0,
    behavior: "smooth",
  });
}

function scrollToHome() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

function menuBarClose() {
  dropDownMenu.style.display = "none";
  body.style.overflowY = "auto";
}

function menuBarOpen() {
  body.style.overflowY = "hidden";
  dropDownMenu.style.display = "block";
}
const offsetTop = -150;
const navBtns = document.getElementsByClassName("nav-btn");
const donateBtn = document.getElementsByClassName("special-btn")[1];
const sections = document.getElementsByClassName("section");
const donateSection = document.querySelector(".donate-card");
const logo = document.querySelector(".logo-container");
const dropDownMenu = document.querySelector(".drop-down-menu-bg");
const body = document.getElementsByTagName("body")[0];

const navBtnsObj = {
  about: navBtns[0],
  projects: navBtns[1],
  media: navBtns[2],
  contact: navBtns[3],
  donate: donateBtn,
};

const sectionsObj = {
  about: sections[1],
  projects: sections[2],
  media: sections[3],
  contact: sections[4],
  donate: donateSection,
};

function windowScroll(section, offsetTop) {
  const yPos = section.offsetTop;
  console.log(yPos, offsetTop);
  window.scroll({
    top: yPos + offsetTop,
    left: 0,
    behavior: "smooth",
  });
}

navBtnsObj["about"].addEventListener("click", () => {
  windowScroll(sectionsObj["about"], offsetTop);
});

navBtnsObj["projects"].addEventListener("click", () => {
  windowScroll(sectionsObj["projects"], offsetTop);
});

navBtnsObj["media"].addEventListener("click", () => {
  windowScroll(sectionsObj["media"], offsetTop);
});

navBtnsObj["contact"].addEventListener("click", () => {
  windowScroll(sectionsObj["contact"], offsetTop);
});

navBtnsObj["donate"].addEventListener("click", () => {
  windowScroll(sectionsObj["donate"], offsetTop);
});

logo.addEventListener("click", () => {
  scrollToHome();
});

document.querySelector(".menu-btn").addEventListener("click", () => {
  menuBarOpen();
});

document.querySelector(".x-icon").addEventListener("click", () => {
  menuBarClose();
});

const dropDownMenuBtns = document.querySelector(".drop-down-menu");

// console.log(dropDownMenuBtns, dropDownMenuBtns.children);

const dropDownMenuBtnsObj = {
  donate: dropDownMenuBtns.children[0],
  home: dropDownMenuBtns.children[1],
  about: dropDownMenuBtns.children[2],
  projects: dropDownMenuBtns.children[3],
  media: dropDownMenuBtns.children[4],
  contact: dropDownMenuBtns.children[5],
};

dropDownMenuBtnsObj["donate"].addEventListener("click", () => {
  windowScroll(sectionsObj["donate"], offsetTop);
  menuBarClose();
});
dropDownMenuBtnsObj["about"].addEventListener("click", () => {
  windowScroll(sectionsObj["about"], offsetTop);
  menuBarClose();
});
dropDownMenuBtnsObj["projects"].addEventListener("click", () => {
  windowScroll(sectionsObj["projects"], offsetTop);
  menuBarClose();
});
dropDownMenuBtnsObj["media"].addEventListener("click", () => {
  windowScroll(sectionsObj["media"], offsetTop);
  menuBarClose();
});
dropDownMenuBtnsObj["contact"].addEventListener("click", () => {
  windowScroll(sectionsObj["contact"], offsetTop);
  menuBarClose();
});
dropDownMenuBtnsObj["home"].addEventListener("click", () => {
  scrollToHome();
  menuBarClose();
});

document.querySelector(".volunteer-btn").addEventListener("click", () => {
  window.open("https://forms.gle/eRgzeDvjGuRAatRu9");
});
