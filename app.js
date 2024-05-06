var toggle_btn;
var big_wrapper;
var hamburger_menu;
var signinLink;
var signupLink;
var formContainer;
var videoContainers;
var videoTexts;

function declare() {
    toggle_btn = document.querySelector(".toggle-btn");
    big_wrapper = document.querySelector(".big-wrapper");
    hamburger_menu = document.querySelector(".hamburger-menu");
    signinLink = document.getElementById("signin-link");
    signupLink = document.getElementById("signup-link");
    formContainer = document.querySelector(".form-container");
    videoContainers = document.querySelectorAll(".video-container");
    videoTexts = document.querySelectorAll(".video-container h6");
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
    // Clone the wrapper
    dark = !dark;
    let clone = big_wrapper.cloneNode(true);
    if (dark) {
        clone.classList.remove("light");
        clone.classList.add("dark");
    } else {
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add("copy");
    main.appendChild(clone);

    document.body.classList.add("stop-scrolling");

    clone.addEventListener("animationend", () => {
        document.body.classList.remove("stop-scrolling");
        big_wrapper.remove();
        clone.classList.remove("copy");
        // Reset Variables
        declare();
        events();
    });
}

function toggleForm() {
    formContainer.classList.toggle("show");
}

function events() {
    toggle_btn.addEventListener("click", toggleAnimation);
    hamburger_menu.addEventListener("click", () => {
        big_wrapper.classList.toggle("active");
    });

    for (let i = 0; i < videoContainers.length; i++) {
        if (i % 2 === 0) {
            videoContainers[i].classList.add("left-video");
            videoTexts[i].classList.add("right-text");
        } else {
            videoContainers[i].classList.add("right-video");
            videoTexts[i].classList.add("left-text");
        }
    }

    signinLink.addEventListener("click", toggleForm);
    signupLink.addEventListener("click", toggleForm);
}

events();
