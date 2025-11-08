// checklist.js
import { auth, logoutUser } from './authGuard.js';

// --- Show logged-in user email ---
const userEmailEl = document.getElementById('userEmail');

auth.onAuthStateChanged((user) => {
  if (user) {
    userEmailEl.textContent = `Logged in as: ${user.email}`;
  } else {
    userEmailEl.textContent = 'No user logged in';
  }
});

// --- Logout functionality ---
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    logoutUser();
  });
}

// --- Collapsible section logic ---
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

  // --- Checkbox persistence (optional but useful) ---
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // Load saved state
  checkboxes.forEach((checkbox, index) => {
    const saved = localStorage.getItem(`checkbox-${index}`);
    if (saved === 'true') checkbox.checked = true;

    // Save state on change
    checkbox.addEventListener('change', () => {
      localStorage.setItem(`checkbox-${index}`, checkbox.checked);
    });
  });
});

