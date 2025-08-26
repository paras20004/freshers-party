async function fetchTicketCount() {
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwsXRqOt40UQyHhao6rovewNmLzlx7B1OuJy1dEkc_Ekh0S2YvfkSs7pHQ_zmVZpUzO/exec");
    const data = await response.json();
    document.getElementById("early-count").innerText = data.remaining;
  } catch (error) {
    console.error("Error fetching ticket count:", error);
  }
}

setInterval(fetchTicketCount, 5000); // auto refresh every 5 seconds
fetchTicketCount();
