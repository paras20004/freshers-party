async function updateCounts() {
  try {
    const res = await fetch(https://script.google.com/macros/s/AKfycbzP8P83jnCzVy1rEkt8fQhp0qgPashtGXSVnP5TbZQ6Wa8HHb0_A6JxTGWUrSSjPLKZ/exec);
    const data = await res.json();

    document.getElementById("early-count").innerText = Math.max(data.early, 0);
    document.getElementById("couple-count").innerText = Math.max(data.couple, 0);
    document.getElementById("phase-count").innerText = Math.max(data.phase, 0);
  } catch (e) {
    console.error("Error fetching ticket data:", e);
  }
}

// Run once on load
updateCounts();

// Refresh every 10 seconds
setInterval(updateCounts, 10000);
