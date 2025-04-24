function startTimer(timerEl) {
    const startTime = timerEl.getAttribute("data-start");
    const [startH, startM, startS] = startTime.split(":").map(Number);
    let totalSeconds = startH * 3600 + startM * 60 + startS;

    function update() {
      totalSeconds++;

      const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
      const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
      const seconds = String(totalSeconds % 60).padStart(2, '0');

      timerEl.textContent = `${hours}:${minutes}:${seconds}`;

      if (totalSeconds >= 1800) {
        timerEl.classList.add("late-order");
      }
    }

    setInterval(update, 1000);
  }

  // Start all timers on the page
  document.querySelectorAll('.timer').forEach(startTimer);