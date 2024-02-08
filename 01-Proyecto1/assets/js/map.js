'use strict'

document.addEventListener('DOMContentLoaded', (e)=>{
    e.preventDefault();
    const iframe = document.getElementById('load-map');
    setTimeout(() => {
        iframe.innerHTML = `
                        <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26784.511770010835!2d-60.66050163268705!3d-32.949320413975016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1707330180151!5m2!1ses-419!2sar"></iframe>
                        `;
    }, 500);
});