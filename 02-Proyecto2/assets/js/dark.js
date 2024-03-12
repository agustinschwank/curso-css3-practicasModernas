'use strict';

document.addEventListener('DOMContentLoaded', () => {
    let switch_btn = document.querySelector('.switch__btn');
    let head = document.head;
    let icon_light = document.querySelector('.switch__icon--light');
    let icon_dark = document.querySelector('.switch__icon--dark');
    let link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = './assets/css/styles_dark.css';
    link.id = 'dark_theme';

    switch_btn.addEventListener('click', ()=>{
        let dark = document.querySelector('#dark_theme');
        if(dark) {
            head.removeChild(dark);
            localStorage.setItem('dark_mode', 0);
            icon_dark.style.display = 'none';
            icon_light.style.display = 'block';
        } else {
            head.appendChild(link);
            localStorage.setItem('dark_mode', 1);
            icon_light.style.display = 'none';
            icon_dark.style.display = 'block';
        }
    });
    
    if(parseInt(localStorage.getItem('dark_mode')) === 1) {
        head.appendChild(link);
    }
});