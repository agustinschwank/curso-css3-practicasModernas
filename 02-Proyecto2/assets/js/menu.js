'use strict';

document.addEventListener('DOMContentLoaded', (e)=>{
    
    const mobile__btn = document.querySelector('.navbar__movile-btn');
    const menu__mobile = document.querySelector('.menu-mobile');
    const btn_close = document.querySelector('.menu-mobile__close');

    const show__hidden = () => {
        let show = document.querySelector('.menu-mobile--show');
        if (show) {
            menu__mobile.classList.remove('menu-mobile--show');
        } else {
            menu__mobile.classList.add('menu-mobile--show');
        }
    }

    mobile__btn.addEventListener('click', ()=>{show__hidden()});
    btn_close.addEventListener('click', ()=> {show__hidden()});

    window.addEventListener('resize', () => {
        let width = parseInt(document.body.clientWidth);
        if(width >= 1000){
            menu__mobile.classList.remove('menu-mobile--show');
        }
    });

    /* Submenu */

    const menu_items = document.querySelectorAll('.menu-mobile__item');
    

    menu_items.forEach(menu_item => {
        menu_item.addEventListener('click', (event) => {
            let submenu = menu_item.lastElementChild;
            let preview_submenu = menu_item.previousElementSibling;

            if (submenu.className === 'menu-mobile__submenu-mobile') {
                if(submenu.style.display === 'block') {
                    submenu.style.display = 'none';
                } else {
                    submenu.style.display = 'block';
                }
                if (preview_submenu === 'block') {
                    preview_submenu.style.display = 'none';
                } 
                
            }
        });
    });



});