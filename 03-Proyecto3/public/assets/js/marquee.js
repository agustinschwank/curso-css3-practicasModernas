'use strict';

document.addEventListener("DOMContentLoaded", () => {


    const marquee = (select, velocity) => {
        const list = document.querySelector(select);
        let movement = 0;

        
        setInterval(() => {

            list.style.marginLeft = `-${movement}px`;

            if(movement > list.clientWidth) {
                movement = 0;
            }

            movement = movement + velocity;

        }, 0);

    }

    marquee(".marquee__container", 0.2);

});