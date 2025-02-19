let player = document.getElementById("player");
let posX = 180;
let posY = 180;
let speed = 10;

document.getElementById("left").addEventListener("click", function() {
    if (posX > 0) posX -= speed;
    player.style.left = posX + "px";
});

document.getElementById("right").addEventListener("click", function() {
    if (posX < 360) posX += speed;
    player.style.left = posX + "px";
});

document.getElementById("up").addEventListener("click", function() {
    if (posY > 0) posY -= speed;
    player.style.top = posY + "px";
});

document.getElementById("down").addEventListener("click", function() {
    if (posY < 360) posY += speed;
    player.style.top = posY + "px";
});