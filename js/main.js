'use strict';

const addEventOnElement = function(element, type, listener) {
    if (element instanceof NodeList || Array.isArray(element)) {
        element.forEach(el => el.addEventListener(type, listener));
    } else {
        element.addEventListener(type, listener);
    }
}

// Navbar elements
const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

// Toggle function
const toggleNav = function() {
    navbar.classList.toggle("active");
}

addEventOnElement(navToggler, "click", toggleNav);

// Close nav when a link is clicked
const closeNav = function() {
    navbar.classList.remove("active");
}

addEventOnElement(navLinks, "click", closeNav);

// Header and back-to-top button active class
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function() {
    if (window.scrollY >= 50) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});

// Tab buttons
const tabBtns = document.querySelectorAll("[data-tab-btn]");

let lastClickedTabBtn = tabBtns[0];

const changeTab = function() {
    lastClickedTabBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedTabBtn = this;
}

addEventOnElement(tabBtns, "click", changeTab);
