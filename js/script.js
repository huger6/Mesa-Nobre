/*!
 * Copyright (c) 2025 Hugo Afonso (huger6)
 * Todos os direitos reservados | All rights reserved.
 *
 * É proibida a cópia, modificação ou redistribuição deste ficheiro
 * sem autorização expressa do autor.
 * Copying, modifying or redistributing this file without permission is prohibited.
 *
 * Contacto: hugoafonso333@gmail.com
*/

function adjustTitlesSmallScreens() {
    let width = window.innerWidth;
    const div = document.getElementById('callToAction');
    const titles = div.children;

    if (width <= 500) {
        titles[0].innerHTML = `Desfrute de uma experiência gastronómica única em Carregal do Sal`;
        titles[1].innerHTML = ``;
    }
    else {
        titles[0].innerHTML = `Desfrute de uma experiência gastronómica única `;
        titles[1].innerHTML = `em Carregal do Sal`;
    }
}

window.addEventListener('resize', adjustTitlesSmallScreens);
window.addEventListener('DOMContentLoaded', adjustTitlesSmallScreens);