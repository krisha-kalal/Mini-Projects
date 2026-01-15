function addTask() {
    const input = document.getElementById("new-task");
    if (input.value === "") return;
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", viewProgress);
    const span = document.createElement("span");
    span.textContent = input.value;
    const delBtn = document.createElement("img");
    delBtn.src = "delete.svg";  
    delBtn.className = "delete-btn";
    delBtn.onclick = function () {
        li.remove();
        viewProgress();  
    };
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    document.getElementById("task-list").appendChild(li);
    input.value = "";
    viewProgress();
}


function viewProgress() {
    const tasks = document.querySelectorAll("#task-list li");
    const total = tasks.length;
    let completed = 0;
    tasks.forEach(task => {
        const checkbox = task.querySelector("input[type='checkbox']");
        if (checkbox.checked) {
            completed++;
        }
    });
    const pending = total - completed;
    let percent = 0;
    if (total !== 0) {
        percent = Math.round((completed / total) * 100);
    }
    document.getElementById("progress-text").textContent =
        `Your today's progress: ${percent}% completed`;
    document.getElementById("total-count").textContent = total;
    document.getElementById("completed-count").textContent = completed;
    document.getElementById("pending-count").textContent = pending;
}

function endDay() {
    viewProgress();
    document.getElementById("thank-you").style.display = "block";
}