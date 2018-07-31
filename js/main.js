var p1button = document.getElementById("p1button");
var p2button = document.getElementById("p2button");
var reset = document.getElementById("reset");
var preset = document.getElementById("preset");
var input = document.getElementById("input");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p1bord = document.getElementById("p1bord");
var p2bord = document.getElementById("p2bord");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;

function resetFunction () {
    p1score = 0;
    p2score = 0;
    p1.textContent = 0;
    p2.textContent = 0;
    gameOver = false;
    p1bord.classList.remove("shake");
    p2bord.classList.remove("shake");
}

p1button.addEventListener("click", function () {
    if (!gameOver) {
        p1score++
        if (p1score === winningScore) {
            p1bord.classList.add("shake");
            gameOver = true;
        }
        p1.textContent = p1score;
    }
})

p2button.addEventListener("click", function () {
    if (!gameOver) {
        p2score++
        if (p2score === winningScore) {
            p2bord.classList.add("shake");
            gameOver = true;
        }
        p2.textContent = p2score;
    }
})

reset.addEventListener("click", function () {
    resetFunction();
    input.focus();
    input.value = "";
    preset.textContent = 5;
    winningScore = 5;
})

input.addEventListener("change", function () {
    preset.textContent = input.value;
    winningScore = Number(input.value);
    resetFunction();
})








