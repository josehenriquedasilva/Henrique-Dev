function clickmenu() {
    if (menu2.style.display == "block") {
        menu2.style.display = "none";
    } else {
        menu2.style.display = "block";   
    }
}

const img1 = document.querySelector("div#p1");

img1.addEventListener('mouseenter', entrou)
img1.addEventListener('mouseout', saiu)

function entrou() {
    img1.style.transform = 'translate(-3px, -3px)';
}

function saiu() {
    img1.style.transform = 'translate(0px, 0px)';
}