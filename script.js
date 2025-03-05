function clickmenu() {
    if (menu2.style.display == "block") {
        menu2.style.display = "none";
        document.querySelector('#icone').src = 'imagens/menu_white_36dp.svg';
    } else {
        menu2.style.display = "block"; 
        document.querySelector('#icone').src = 'imagens/close_white_36dp.svg';
    }
}