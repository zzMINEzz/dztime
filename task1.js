let count = 0;
let interval = setInterval(() => {
    count++;
    console.log("Повідомлення №" + count);
    if (count === 5) {
        clearInterval(interval);
        console.log("Таймер зупинено.");
    }
}, 1000);