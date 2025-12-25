const mainTime = document.getElementById("mainTime");
const lapPreview = document.getElementById("lapPreview");
const hand = document.getElementById("hand");
const subHand = document.getElementById("subHand");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const lapsEl = document.getElementById("laps");

let startTime = 0;
let elapsed = 0;
let lapBase = 0;
let timer = null;
let lapCount = 0;
let laps = [];

function format(ms) {
  const m = Math.floor(ms / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  const cs = Math.floor((ms % 1000) / 10);
  return `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}.${String(cs).padStart(2,"0")}`;
}

function update() {
  elapsed = Date.now() - startTime;
  mainTime.textContent = format(elapsed);
  lapPreview.textContent = format(elapsed - lapBase);

  hand.style.transform = `rotate(${(elapsed / 1000) * 6}deg)`;
  subHand.style.transform = `rotate(${(elapsed / 60000) * 360}deg)`;
}

startBtn.onclick = () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
    startBtn.textContent = "▶";
    lapBtn.disabled = true;
  } else {
    startTime = Date.now() - elapsed;
    timer = setInterval(update, 10);
    startBtn.textContent = "⏸";
    lapBtn.disabled = false;
  }
};

resetBtn.onclick = () => {
  clearInterval(timer);
  timer = null;
  elapsed = lapBase = lapCount = 0;
  laps = [];
  mainTime.textContent = "00:00.00";
  lapPreview.textContent = "00:00.00";
  lapsEl.innerHTML = "";
  hand.style.transform = subHand.style.transform = "rotate(0deg)";
  startBtn.textContent = "▶";
  lapBtn.disabled = true;
};

lapBtn.onclick = () => {
  lapCount++;
  const lapTime = elapsed - lapBase;
  lapBase = elapsed;

  laps.push({ lap: lapCount, lapTime, total: elapsed });
  updateLaps();
};

function updateLaps() {
  lapsEl.innerHTML = "";

  const times = laps.map(l => l.lapTime);
  const fastest = Math.min(...times);
  const slowest = Math.max(...times);

  [...laps].reverse().forEach(l => {
    const li = document.createElement("li");
    li.className =
      l.lapTime === fastest ? "fastest" :
      l.lapTime === slowest ? "slowest" : "";

    li.innerHTML = `
      <span>${String(l.lap).padStart(2,"0")}</span>
      <span>+${format(l.lapTime)}</span>
      <span>${format(l.total)}</span>
    `;
    lapsEl.appendChild(li);
  });
}
