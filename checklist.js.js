// checklist.js
import { auth, logoutUser } from './authGuard.js';

// Show logged-in user email
const userEmailEl = document.getElementById('userEmail');

auth.onAuthStateChanged((user) => {
  if (user) {
    userEmailEl.textContent = `Logged in as: ${user.email}`;
  } else {
    userEmailEl.textContent = 'No user logged in';
  }
});

// Logout button
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    logoutUser();
  });
}

// Collapsible sections
document.addEventListener('DOMContentLoaded', () => {
  const headers = document.querySelectorAll('h2');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const section = header.nextElementSibling;
      if (section && section.classList.contains('section')) {
        section.classList.toggle('active');
      }
    });
  });
});
