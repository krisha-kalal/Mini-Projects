const display = document.getElementById("display");
const num = document.querySelectorAll(".num");
const op = document.querySelectorAll(".op");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");
const dot = document.getElementById("dot");
const brackets = document.getElementById("brackets");
const negative = document.getElementById("negativenum");
const delete1 = document.getElementById("deletesinglenum");
const history = document.getElementById("history");
const historyBox = document.getElementById("historyBox");
const historyContent = document.getElementById("historyContent");
const clearHistory = document.getElementById("clearHistory");

let input = "";
let lastResult = "";
let calcHistory = [];

num.forEach(button=>{
    button.addEventListener("click", ()=>{
        input += button.textContent;
        display.value = input;})
});

op.forEach(button=>{
    button.addEventListener("click", ()=>{
        input += button.textContent;
        display.value = input;})
});

dot.addEventListener("click", ()=>{
    if(input === "" || /[+\-*/%]$/.test(input))
        input += "0.";
    else
        input += ".";
        display.value = input;
});

clear.addEventListener("click", ()=>{
    input = "";
    display.value = input;
});

delete1.addEventListener("click", () => {
    input = input.slice(0, -1);
    display.value = input;
});

brackets.addEventListener("click", () => {
    if (input === "" || /[+\-*/%]$/.test(input)) {
        input += "(";
    } else {
        input += ")";
    }
    display.value = input;
});

negative.addEventListener("click", () => {
    if (input === "") return;
    let parts = input.split(/([+\-*/%])/);
    let last = parts.pop();
    if (last.startsWith("-")) {
        last = last.slice(1);
    } else {
        last = "(-" + last;
    }
    parts.push(last);
    input = parts.join("");
    display.value = input;
});

equals.addEventListener("click", () => {
    if (input === "") return;
    try {
        let result = eval(input);
        calcHistory.push(input + " = " + result);
        input = result.toString();
        display.value = input;
    } catch {
        display.value = "Error";
        input = "";
}});

history.addEventListener("click", () => {
    if (historyBox.style.display === "none") {
        historyBox.style.display = "block";
        historyContent.innerHTML = calcHistory
            .map(item => `<p>${item}</p>`).join("");
    } else {
        historyBox.style.display = "none";
}});

clearHistory.addEventListener("click", () => {
    calcHistory = [];
    historyContent.innerHTML = "";
});

const header = document.getElementById("historyHeader");
let isDragging = false, x, y;
header.addEventListener("mousedown", (e) => {
    isDragging = true;
    x = e.clientX - historyBox.offsetLeft;
    y = e.clientY - historyBox.offsetTop;
});
document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        historyBox.style.left = (e.clientX-x) + "px";
        historyBox.style.top = (e.clientY-y) + "px";
}});
document.addEventListener("mouseup", () => {
    isDragging = false;
});