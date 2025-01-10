let score = 0;
let button = document.getElementById("button");
let timeLimit = 10; 
let timeLeft = timeLimit;

let countdown = setInterval(() => {
    if (timeLeft === 0) {
        clearInterval(countdown);
        alert("Гра завершена! Ваш результат: " + score + " очок.");
    } else {
        timeLeft--;
    }
}, 1000);

button.addEventListener("click", () => {
    score++;
    console.log("Очки: " + score);
});