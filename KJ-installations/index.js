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


// carousel 
const carousel = document.getElementById('carousel');
const images = document.querySelectorAll('#carousel img');
const dots = document.getElementById('dots'); 
const desc = document.getElementById('desc');

let speed = 6000; // speed for the carousel (measured in milliseconds)
let index = 0; // starts at the first image (0/4 on the index)
let intervalID; // declaring a variable called intervalID

// creating a function that increases the value of the index by 1, every [?] seconds
    // also creating the 'dots'
images.forEach((image, i) => { //using the forEach() method to execute a function once for each array element (the image elements)
    const span = document.createElement("span"); //creates a new span element
    span.className = "dot"; //gives the span element a class of "dot", which is styled in CSS
    if (i === 0) span.classList.add('active');
    span.addEventListener('click', () => {
        index = i;
        startInterval();
        updateContent();
    });

    dots.appendChild(span);
}) //we want there to be one dot per image, so forEach is used to iterate that many times

//adding touch event listeners to the carousel element
let touchstartX = 0;
let touchendX = 0;
carousel.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
});

carousel.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    handleSwipe();
});

// handle touch swipe events
function handleSwipe() {
    if (touchendX < touchstartX) {
        index++;
        if (index === images.length) index = 0;
    } else if (touchendX > touchstartX) {
        index--;
        if (index < 0) index = images.length - 1;
    } else {
        return;
    }

    startInterval();
    updateContent();
}

startInterval();
function startInterval() {
    if (intervalID) clearInterval(intervalID);
    intervalID = setInterval(() => {
        index++;
        if (index === images.length) index = 0; //once the image array reach the end, it resets to 0
        updateContent();
    }, speed); //speed is set to 6000, L21
}

updateContent(); //call the updateContent function
function updateContent() {
    images.forEach(item => item.classList.remove('active')); //select all image elements and remove the "active" class
    images[index].classList.add('active'); //add the "active" class to the current 'index' in the images array

    const dots = document.querySelectorAll('.dot');
    dots.forEach(item => item.classList.remove('active'));
    dots[index].classList.add('active');

    desc.textContent = images[index].dataset.desc;
}

