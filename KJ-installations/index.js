// menu dropdown

let menuIcon = document.getElementById("menu-icon");
let navMenu = document.getElementById("nav-menu");

menuIcon.addEventListener("click", menuDrop)
function menuDrop() {
    console.log('menu button clicked!')
    menuIcon.classList.toggle("active");
    navMenu.classList.toggle("active");
    // let dropdownMenu = document.getElementById("dropdown-menu")
    // dropdownMenu.classList.remove("hide-dropdown")
}

