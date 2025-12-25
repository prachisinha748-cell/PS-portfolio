// Update the current date and time every second
function updateTime() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', 
                    hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
  const timeString = now.toLocaleString('en-US', options);
  
  const timezoneElement = document.getElementById('timezone');
  if (timezoneElement) {
    timezoneElement.textContent = timeString;
  }
}

// Initialize mailto and calendar links
function setupLinks() {
  const contactMail = document.getElementById('contactMail');
  const calendarLink = document.getElementById('calendarLink');
  
  if (contactMail) {
    contactMail.href = 'mailto:prachisinha748@gmail.com';
    contactMail.textContent = 'Email Me';
  }
  
  if (calendarLink) {
    calendarLink.href = 'https://cal.com/prince-raj';
    calendarLink.textContent = 'Schedule a Meeting';
  }
}

// Run the functions on page load
document.addEventListener('DOMContentLoaded', () => {
  setupLinks();
  updateTime();
  setInterval(updateTime, 1000);
});
