'use strict';

document.addEventListener("DOMContentLoaded", () => {

    const btn__search = document.querySelector(".navbar__button");
    const input__search = document.querySelector(".search__input");

    btn__search.addEventListener("click", () => {

        let visible = document.querySelector(".visible-search");

        if(visible) {
            input__search.style.width = "0";
            input__search.style.padding = "0";
            input__search.classList.remove("visible-search");   
        } else {
            input__search.style.width = "20rem";
            input__search.style.padding = "0.5rem 0 0.5rem 0.5rem";
            input__search.classList.add("visible-search");  
        }

    });
});