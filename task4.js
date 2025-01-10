document.getElementById("button2").addEventListener("click", function() {
    let time = parseInt(document.getElementById('timeInput').value, 10);
    if (time > 0) {
        setTimeout(() => {
            alert("Час вийшов!");
        }, time * 1000);
    } else {
        alert("Введіть правильне значення часу.");
    }
});
