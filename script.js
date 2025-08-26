document.getElementById("ticketForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const ticket = document.querySelector('input[name="ticket"]:checked');
  if(ticket) {
    alert(`You selected the ${ticket.value} ticket. After payment, you will receive confirmation!`);
  } else {
    alert("Please select a ticket type before booking.");
  }
});