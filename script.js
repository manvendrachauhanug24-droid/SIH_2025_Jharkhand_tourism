// ================= EMERGENCY ALERT =================
function sendAlert() {
  if (Notification.permission === "granted") {
    new Notification("🚨 Emergency Alert Sent!", {
      body: "This is a demo. Your emergency contacts would be notified here.",
      icon: "content/icons/alert.png" // optional custom icon
    });
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(perm => {
      if (perm === "granted") {
        new Notification("🚨 Emergency Alert Sent!", {
          body: "This is a demo. Your emergency contacts would be notified here.",
          icon: "content/icons/alert.png"
        });
      } else {
        alert("⚠️ Notifications are blocked. Please enable them in your browser settings.");
      }
    });
  } else {
    alert("⚠️ Notifications are blocked. Please enable them in your browser settings.");
  }
}
