let earlyCount = 50;

function buyTicket(type) {
  if (type === "Early Bird") {
    if (earlyCount > 0) {
      earlyCount--;
      document.getElementById("early-count").innerText = earlyCount;
      alert("🎉 You selected " + type + " ticket! Fill the form to continue.");
      window.open("https://docs.google.com/forms/d/e/1FAIpQLSeczxlA-S_NQeZ8wRRNaJuphtgrFPA6X6MNK8n4PD-wkgxQDA/viewform?usp=header", "_blank");
    } else {
      alert("❌ Early Bird tickets are sold out. Try Phase 2!");
    }
  } else {
    alert("🎉 You selected " + type + " ticket! Fill the form to continue.");
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSeczxlA-S_NQeZ8wRRNaJuphtgrFPA6X6MNK8n4PD-wkgxQDA/viewform?usp=header", "_blank");
  }
}
