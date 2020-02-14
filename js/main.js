// #-1 The Environement = 2 HTML Elements : < class = menu-btn > and < class = main-menu >

const menuBtn = document.querySelector(".menu-btn");
const mainMenu = document.querySelector(".main-menu");

//#-2 The Function = Toggle ( add and remove ) The show class name to The Main Menu

function toggleShowClass() {
  mainMenu.classList.toggle("show");
}

// #-3 The Event

menuBtn.addEventListener("click", toggleShowClass);
