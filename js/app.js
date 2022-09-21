/**
 * Define Global Variables
 * 
 */
const list = document.getElementById("navbar__list");
const allSec = Array.from(document.querySelectorAll("section"));
/**
 * End Global Variables
 * Begin Main Functions
 * 
 */

// build the nav
let createLi = function () {
    for (ele of allSec) {
        myLi = document.createElement("li");
        myLi.innerHTML = `<li><a href="#${ele.id}" data-nav="${ele.id}" class="menu__link">${ele.dataset.nav}</a></li>`
        list.appendChild(myLi);
    }
};
createLi();

/**
  * End main Functions
  * Start Helper Functions
  * 
  * 
 */
window.addEventListener("scroll", (e) =>{
    allSec.forEach((sec) => {
        // Add class 'active' to section when near top of viewport
        if (sec.getBoundingClientRect().top > 0 && sec.getBoundingClientRect().top < 200) {
            // Set sections as active
            sec.classList.add("your-active-class");
        } else {
            sec.classList.remove("your-active-class");
        }
    });
});

// Scroll to section on link click
list.addEventListener("click", function(e) {
    e.preventDefault();
    if(e.target.dataset.nav){
        document
        .getElementById(`${e.target.dataset.nav}`)
        .scrollIntoView({behavior : "smooth" });
        setTimeout(function() {
            location.hash = `${e.target.dataset.nav}`;
        }, 150);
    }
});
/*
* End Helper Functions
*/
