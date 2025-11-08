// checklist.js
import { auth, logoutUser } from './authGuard.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

// --- Show logged-in user email ---
document.addEventListener('DOMContentLoaded', () => {
  const userEmailEl = document.getElementById('userEmail');
  const logoutBtn = document.getElementById('logoutBtn');

  // Handle user session info
  onAuthStateChanged(auth, (user) => {
    if (user) {
      userEmailEl.textContent = `Logged in as: ${user.email}`;
    } else {
      userEmailEl.textContent = 'No user logged in';
    }
  });

  // --- Logout functionality ---
  if (logoutBtn) {
    logoutBtn.addEventListener('click', logoutUser);
  }

  // --- Collapsible section logic ---
  const headers = document.querySelectorAll('h2');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const section = header.nextElementSibling;
      if (section && section.classList.contains('section')) {
        section.classList.toggle('active');
      }
    });
  });

  // --- Checkbox persistence ---
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox, index) => {
    const saved = localStorage.getItem(`checkbox-${index}`);
    if (saved === 'true') checkbox.checked = true;

    checkbox.addEventListener('change', () => {
      localStorage.setItem(`checkbox-${index}`, checkbox.checked);
    });
  });
});



