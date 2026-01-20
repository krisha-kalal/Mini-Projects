let totalSeconds = 25 * 60;
let timer = null;
let isRunning = false;

const display = document.getElementById("display");
const customInput = document.getElementById("customMinutes");
const dateBox = document.getElementById("date");
const popup = document.getElementById("settings-popup");
const header = document.getElementById("settings-header");

function updateDateTime() {
    const now = new Date();
    dateBox.innerHTML = now.toDateString() + "<br>" + now.toLocaleTimeString();
}
setInterval(updateDateTime, 1000);
updateDateTime();

function updateDisplay() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    if (seconds < 10) seconds = "0" + seconds;
    if (minutes < 10) minutes = "0" + minutes;
    display.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        if (totalSeconds > 0) {
            totalSeconds--;
            updateDisplay();
        } else {
            clearInterval(timer);
            isRunning = false;
            alert("Time's up! Take a break 🌿");
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    totalSeconds = 25 * 60;
    updateDisplay();
}

function applySettings() {
    let minutes = parseInt(customInput.value);
    if (isNaN(minutes) || minutes <= 0) {
        alert("Please enter a valid number of minutes.");
        return;
    }
    clearInterval(timer);
    isRunning = false;
    totalSeconds = minutes * 60;
    updateDisplay();
}

function toggleSettings() {
    popup.style.display = popup.style.display === "block" ? "none" : "block";
}

const animation = lottie.loadAnimation({
    container: document.getElementById("lottie-box"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "Cat Movement.json" 
});

let offsetX = 0, offsetY = 0, isDragging = false;
header.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - popup.offsetLeft;
    offsetY = e.clientY - popup.offsetTop;
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    popup.style.left = e.clientX - offsetX + "px";
    popup.style.top = e.clientY - offsetY + "px";
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

updateDisplay();
