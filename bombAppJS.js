let timer = document.getElementById("timer");
let defuser = document.getElementById("defuser");

let countdown = 10;

let uniqueId = setInterval(function() {
    countdown = countdown - 1;
    timer.textContent = countdown;
    if (countdown === 0) {
        timer.textContent = "BHOOM!!!";
        clearInterval(uniqueId);
    }
}, 1000);

defuser.addEventListener("keydown", function(event) {
    let userValue = defuser.value;
    if (userValue === "defuse" && event.key === "Enter" && countdown !== 0) {
        timer.textContent = "You did it!";
        clearInterval(uniqueId);
    }
});