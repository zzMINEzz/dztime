let posX = 0;
let posY = 0;
let box = document.getElementById("box");

setInterval(() => {
    posX += 5;
    posY += 5;
    box.style.left = posX + "px";
    box.style.top = posY + "px";
    box.style.width = 50 + Math.sin(posX / 10) * 20 + "px";  
}, 100);
