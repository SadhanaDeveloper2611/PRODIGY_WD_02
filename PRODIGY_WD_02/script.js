let isRunning = false;
let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

function startStop() {
  const btn = document.getElementById("start-stop-btn");
  if (!isRunning) {
    btn.textContent = "Stop";
    isRunning = true;
    interval = setInterval(updateTime, 10); // Update every 10 milliseconds
  } else {
    btn.textContent = "Start";
    isRunning = false;
    clearInterval(interval);
  }
}

function updateTime() {
  milliseconds += 10;
  if (milliseconds >= 1000) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
  document.getElementById("milliseconds").textContent = String(Math.floor(milliseconds / 10)).padStart(2, '0');
}

function lap() {
  if (isRunning) {
    const lapTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(Math.floor(milliseconds / 10)).padStart(2, '0')}`;
    const lapList = document.getElementById("lap-list");
    const lapItem = document.createElement("li");
    lapItem.textContent = lapTime;
    lapList.appendChild(lapItem);
  }
}

function reset() {
  clearInterval(interval);
  isRunning = false;
  document.getElementById("start-stop-btn").textContent = "Start";
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  document.getElementById("minutes").textContent = "00";
  document.getElementById("seconds").textContent = "00";
  document.getElementById("milliseconds").textContent = "00";
  document.getElementById("lap-list").innerHTML = ""; // Clear laps
}

